import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { dirname, extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

// Resolve resources beside this file so background Windows launches still load .env correctly.
const root = dirname(fileURLToPath(import.meta.url));

async function loadEnv() {
  try {
    const raw = await readFile(join(root, '.env'), 'utf8');
    raw.split(/\r?\n/).forEach(line => {
      const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
      if (match && !process.env[match[1]]) process.env[match[1]] = match[2].replace(/^['"]|['"]$/g, '');
    });
  } catch { /* .env is optional; environment variables take priority. */ }
}

await loadEnv();
const port = Number(process.env.PORT || 4173);
const mime = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.mjs':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.json':'application/json; charset=utf-8', '.xlsx':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' };

function sendJson(response, status, payload) {
  response.writeHead(status, {'Content-Type':'application/json; charset=utf-8'});
  response.end(JSON.stringify(payload));
}

function extractJson(text) {
  const clean = String(text || '').replace(/^```json\s*|```$/g, '').trim();
  return JSON.parse(clean);
}

const planSchema = {
  type: 'object', additionalProperties: false,
  required: ['summary', 'tasks', 'assignments', 'ambiguities'],
  properties: {
    summary: {type:'string'},
    tasks: {type:'array', items:{type:'object', additionalProperties:false, required:['name','area','start','end','environment','intensity','requiredCert','requiredCertCode','people','experienceGoal'], properties:{name:{type:'string'},area:{type:'string'},start:{type:'string'},end:{type:'string'},environment:{type:'string'},intensity:{type:'string',enum:['低','中','高']},requiredCert:{type:'string'},requiredCertCode:{type:'string'},people:{type:'integer',minimum:1},experienceGoal:{type:'string'}}}},
    assignments: {type:'array', items:{type:'object', additionalProperties:false, required:['taskIndex','workerId','role'], properties:{taskIndex:{type:'integer',minimum:0},workerId:{type:'string'},role:{type:'string',enum:['执行','协作','经验指导','辅助巡检','设备操作']}}}},
    ambiguities: {type:'array', items:{type:'string'}}
  }
};

async function parsePlan(body) {
  const apiKey = process.env.AI_API_KEY;
  const provider = (process.env.AI_PROVIDER || '').trim().toLowerCase();
  const apiUrl = process.env.AI_API_URL || (provider === 'deepseek' ? 'https://api.deepseek.com/chat/completions' : 'https://api.openai.com/v1/responses');
  const model = process.env.AI_MODEL;
  if (!apiKey || !model) throw Object.assign(new Error('未配置 AI_API_KEY 或 AI_MODEL。请先参考 .env.example 创建本机 .env 文件。'), {status:503});
  const workers = Array.isArray(body.workers) ? body.workers.map(worker => ({id:worker.id,name:worker.name,trade:worker.trade,certCodes:worker.certCodes || []})) : [];
  const prompt = `你是施工计划整理助手。将用户提供的班前施工安排转换为JSON。只提取明确内容；不确定的信息写入 ambiguities，绝不猜测人员、证书、时间或安全结论。任务时间必须为 HH:MM；环境用简洁中文；劳动强度只能是低、中、高。experienceGoal 仅在原文明确出现样板指导、质量复核、工艺交底、新人带教等传承内容时填写，否则必须为空字符串。人员分配只能引用下方工友清单中的 workerId，无法匹配则不创建该分配并写入 ambiguities。\n\n必须只返回一个合法 JSON 对象，不要使用 Markdown 代码块。JSON 结构：${JSON.stringify(planSchema)}\n\n工友清单：${JSON.stringify(workers)}\n\n施工计划原文：\n${String(body.text || '').slice(0, 12000)}`;
  const isChatCompletions = provider === 'deepseek' || /\/chat\/completions(?:\?|$)/.test(apiUrl);
  const requestBody = isChatCompletions
    ? {model, messages:[{role:'system',content:'你是严谨的施工计划信息抽取助手。仅输出合法 JSON。'},{role:'user',content:prompt}], response_format:{type:'json_object'}, temperature:0.1}
    : {model, input:prompt, text:{format:{type:'json_schema', name:'construction_plan', strict:true, schema:planSchema}}};
  const upstream = await fetch(apiUrl, {method:'POST', headers:{'Content-Type':'application/json','Authorization':`Bearer ${apiKey}`}, body:JSON.stringify(requestBody)});
  const data = await upstream.json().catch(() => ({}));
  if (!upstream.ok) throw Object.assign(new Error(data?.error?.message || `模型服务返回 ${upstream.status}`), {status:502});
  const text = data.output_text || data?.choices?.[0]?.message?.content;
  const plan = typeof text === 'string' ? extractJson(text) : text;
  if (!plan?.tasks || !Array.isArray(plan.assignments)) throw Object.assign(new Error('模型返回格式不符合施工计划结构。'), {status:502});
  return plan;
}

async function createDispatchDraft(body) {
  const apiKey = process.env.AI_API_KEY;
  const provider = (process.env.AI_PROVIDER || '').trim().toLowerCase();
  const apiUrl = process.env.AI_API_URL || (provider === 'deepseek' ? 'https://api.deepseek.com/chat/completions' : 'https://api.openai.com/v1/responses');
  const model = process.env.AI_MODEL;
  if (!apiKey || !model) throw Object.assign(new Error('未配置 AI_API_KEY 或 AI_MODEL。'), {status:503});
  const schema = {type:'object',additionalProperties:false,required:['summary','missingInfo','recommendations'],properties:{summary:{type:'string'},missingInfo:{type:'array',items:{type:'string'}},recommendations:{type:'array',items:{type:'object',additionalProperties:false,required:['taskId','executionWorkerIds','mentorWorkerIds','executionSuggestion','mentorSuggestion','experienceGoal','reasons','confirmationPoints'],properties:{taskId:{type:'string'},executionWorkerIds:{type:'array',items:{type:'string'}},mentorWorkerIds:{type:'array',items:{type:'string'}},executionSuggestion:{type:'string'},mentorSuggestion:{type:'string'},experienceGoal:{type:'string'},reasons:{type:'array',items:{type:'string'}},confirmationPoints:{type:'array',items:{type:'string'}}}}}}};
  const workers=Array.isArray(body.workers)?body.workers.map(worker=>({id:worker.id,name:worker.name,trade:worker.trade,years:worker.years,cert:worker.cert,skills:worker.skills,preference:worker.preference})):[];
  const workerIds=new Set(workers.map(worker=>worker.id)),candidatePools=(Array.isArray(body.candidatePools)?body.candidatePools:[]).map(pool=>({taskId:String(pool.taskId||''),executionWorkerIds:(Array.isArray(pool.executionWorkerIds)?pool.executionWorkerIds:[]).map(String).filter(id=>workerIds.has(id)),mentorWorkerIds:(Array.isArray(pool.mentorWorkerIds)?pool.mentorWorkerIds:[]).map(String).filter(id=>workerIds.has(id))})).filter(pool=>pool.taskId),poolByTask=new Map(candidatePools.map(pool=>[pool.taskId,pool]));
  const matchProfiles=Array.isArray(body.matchProfiles)?body.matchProfiles.slice(0,200).map(item=>({taskId:String(item.taskId||''),workerId:String(item.workerId||''),workerName:String(item.workerName||''),totalScore:Number(item.totalScore||0),dimensions:Array.isArray(item.dimensions)?item.dimensions.slice(0,5):[]})):[];
  const context={tasks:Array.isArray(body.tasks)?body.tasks:[],workers,weather:body.weather||{},ruleFindings:Array.isArray(body.risks)?body.risks:[],candidatePools,matchProfiles};
  const prompt=`你是建筑班组的班前协同派工助手。根据任务、工友技能经验、天气、已有规则检查和五维候选画像，生成待班组长确认的建议。你的职责是解释和组织“现场执行 + 可选经验指导”，不是作出职业健康、安全许可或资格结论。不得使用年龄推断能力，不得推荐不在工友清单的人，不得推翻规则检查。\n\n五维候选画像按：资格合规、工种技能、适岗负荷、时间可用性、经验传承价值生成。优先选择总分高且五维没有短板的候选人；在 reasons 中明确说明至少三个相关维度，不能编造事实。\n\n最重要的输出规则：每条 recommendations 必须使用上下文 tasks 中真实存在的 taskId；executionWorkerIds 只能填写该 taskId 对应 candidatePools.executionWorkerIds 中真实存在的编号；mentorWorkerIds 只能填写该 taskId 对应 candidatePools.mentorWorkerIds 中真实存在的编号。绝不能使用“任务编号”“W001”“W002”“现场执行建议”“理由1”等示例或占位文本。若没有合适候选人，对应编号数组必须为空，并在 missingInfo 中说明原因。\n\n若信息不足，写入 missingInfo；若任务无明确传承价值，mentorSuggestion 和 experienceGoal 使用空字符串。只返回一个JSON对象，不要解释、不要Markdown。对象字段为 summary、missingInfo、recommendations；每条 recommendation 必须包含 taskId、executionWorkerIds、mentorWorkerIds、executionSuggestion、mentorSuggestion、experienceGoal、reasons、confirmationPoints。\n\n上下文：${JSON.stringify(context).slice(0,30000)}`;
  const isChatCompletions = provider === 'deepseek' || /\/chat\/completions(?:\?|$)/.test(apiUrl);
  const requestBody=isChatCompletions?{model,messages:[{role:'system',content:'仅输出合法 JSON。所有任务和工友编号必须从用户提供的上下文逐字复制；禁止输出示例、占位符或猜测编号。'},{role:'user',content:prompt}],response_format:{type:'json_object'},temperature:0.1}:{model,input:prompt,text:{format:{type:'json_schema',name:'dispatch_draft',strict:true,schema}}};
  const upstream=await fetch(apiUrl,{method:'POST',headers:{'Content-Type':'application/json','Authorization':`Bearer ${apiKey}`},body:JSON.stringify(requestBody)});
  const data=await upstream.json().catch(()=>({}));
  if(!upstream.ok)throw Object.assign(new Error(data?.error?.message||`模型服务返回 ${upstream.status}`),{status:502});
  const text=data.output_text||data?.choices?.[0]?.message?.content,draft=typeof text==='string'?extractJson(text):text;
  const rawRecommendations=draft?.recommendations||draft?.suggestions||draft?.dispatchSuggestions||draft?.派工建议||[],rawList=Array.isArray(rawRecommendations)?rawRecommendations:Object.values(rawRecommendations||{});
  const normalized={summary:String(draft?.summary||draft?.概述||draft?.总体建议||''),missingInfo:Array.isArray(draft?.missingInfo)?draft.missingInfo:Array.isArray(draft?.待补充信息)?draft.待补充信息:[],recommendations:rawList.map(item=>{const taskId=String(item?.taskId||item?.任务编号||item?.task_id||''),pool=poolByTask.get(taskId)||{executionWorkerIds:[],mentorWorkerIds:[]},ids=value=>Array.isArray(value)?value.map(String):[];return {taskId,executionWorkerIds:ids(item?.executionWorkerIds||item?.执行工友编号).filter(id=>pool.executionWorkerIds.includes(id)),mentorWorkerIds:ids(item?.mentorWorkerIds||item?.经验指导工友编号).filter(id=>pool.mentorWorkerIds.includes(id)),executionSuggestion:String(item?.executionSuggestion||item?.现场执行建议||item?.执行人员||''),mentorSuggestion:String(item?.mentorSuggestion||item?.经验指导建议||item?.经验指导人员||''),experienceGoal:String(item?.experienceGoal||item?.传承内容||item?.经验传承内容||''),reasons:Array.isArray(item?.reasons)?item.reasons:Array.isArray(item?.适配理由)?item.适配理由:[],confirmationPoints:Array.isArray(item?.confirmationPoints)?item.confirmationPoints:Array.isArray(item?.待确认事项)?item.待确认事项:[]};}).filter(item=>item.taskId)};
  const taskById=new Map(context.tasks.map(task=>[String(task.id||''),task]));
  normalized.recommendations.forEach(item=>{const pool=poolByTask.get(item.taskId),task=taskById.get(item.taskId);if(!pool)return;let fallback=false;if(!item.executionWorkerIds.length&&pool.executionWorkerIds.length){item.executionWorkerIds=pool.executionWorkerIds.slice(0,1);fallback=true;}if(!item.mentorWorkerIds.length&&task?.experienceGoal&&pool.mentorWorkerIds.length){item.mentorWorkerIds=pool.mentorWorkerIds.slice(0,1);fallback=true;}item.selectionSource=fallback?'rule_fallback':'model';});
  if(!normalized.recommendations.length||!Array.isArray(normalized.missingInfo))throw Object.assign(new Error('模型返回格式不符合协同派工结构。'),{status:502});
  return normalized;
}

const server = createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  if (request.method === 'POST' && url.pathname === '/api/ai/parse-plan') {
    let raw = '';
    request.on('data', chunk => { raw += chunk; if (raw.length > 1_000_000) request.destroy(); });
    request.on('end', async () => {
      try { sendJson(response, 200, {plan:await parsePlan(JSON.parse(raw || '{}'))}); }
      catch (error) { sendJson(response, error.status || 500, {error:error.message || 'AI 解析失败'}); }
    });
    return;
  }
  if (request.method === 'POST' && url.pathname === '/api/ai/dispatch-draft') {
    let raw = '';
    request.on('data', chunk => { raw += chunk; if (raw.length > 1_000_000) request.destroy(); });
    request.on('end', async () => {
      try { sendJson(response, 200, {draft:await createDispatchDraft(JSON.parse(raw || '{}'))}); }
      catch (error) { sendJson(response, error.status || 500, {error:error.message || 'AI 协同派工生成失败'}); }
    });
    return;
  }
  const filePath = normalize(join(root, url.pathname === '/' ? 'index.html' : decodeURIComponent(url.pathname)));
  if (!filePath.startsWith(root) || filePath.endsWith('.env')) return sendJson(response, 403, {error:'Forbidden'});
  try {
    const info = await stat(filePath);
    if (!info.isFile()) throw new Error('Not a file');
    response.writeHead(200, {'Content-Type':mime[extname(filePath)] || 'application/octet-stream'});
    response.end(await readFile(filePath));
  } catch { sendJson(response, 404, {error:'Not found'}); }
});

server.listen(port, () => console.log(`安龄工友本地服务：http://localhost:${port}`));

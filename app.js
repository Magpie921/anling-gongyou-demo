const legacySampleWorkers = [
  {id:'W001',name:'张建华',age:58,trade:'砌筑工',years:32,certCodes:['MASON-L3'],cert:'砌筑工高级',fit:['高处作业需复核','血压重点关注'],skills:'墙体质量、样板指导、新人带教',preference:'愿意承担质量指导工作',fitSource:'模拟适岗结论',fitValidUntil:'2026-12-31'},
  {id:'W002',name:'王德胜',age:60,trade:'混凝土工',years:35,certCodes:['CONCRETE-L3'],cert:'混凝土工高级',fit:['高温时段需调整','心血管重点关注'],skills:'浇筑组织、施工缝处理',preference:'希望减少午间户外作业',fitSource:'模拟适岗结论',fitValidUntil:'2026-12-31'},
  {id:'W003',name:'刘国平',age:55,trade:'材料工',years:24,certCodes:['MATERIAL-AUX'],cert:'材料员辅助',fit:['腰部负荷限制','避免连续重体力'],skills:'材料验收、仓储清点',preference:'可承担材料台账工作',fitSource:'模拟适岗结论',fitValidUntil:'2026-12-31'},
  {id:'W004',name:'李长青',age:52,trade:'钢筋工',years:28,certCodes:['REBAR-L3'],cert:'钢筋工高级',fit:['避免连续高强度'],skills:'钢筋下料、节点复核、新人带教',preference:'愿意参与工艺带教',fitSource:'模拟适岗结论',fitValidUntil:'2026-12-31'},
  {id:'W005',name:'陈海明',age:56,trade:'抹灰工',years:30,certCodes:['PLASTER-L3'],cert:'抹灰工高级',fit:['膝关节负荷限制'],skills:'样板施工、空鼓排查',preference:'可承担样板指导',fitSource:'模拟适岗结论',fitValidUntil:'2026-12-31'},
  {id:'W006',name:'赵振国',age:54,trade:'架子工',years:25,certCodes:['SCAFFOLD'],cert:'建筑架子工证',fit:['高处作业需复核'],skills:'脚手架隐患排查、实操带教',preference:'希望减少连续攀爬',fitSource:'模拟适岗结论',fitValidUntil:'2026-12-31'},
  {id:'W007',name:'周师傅',age:51,trade:'木工',years:26,certCodes:['CARPENTER-L3'],cert:'木工高级',fit:['一般关注'],skills:'模板节点、尺寸复核',preference:'正常安排',fitSource:'模拟适岗结论',fitValidUntil:'2026-12-31'},
  {id:'W008',name:'孙立军',age:59,trade:'电工',years:31,certCodes:['ELECTRIC'],cert:'建筑电工证',fit:['夜间作业需复核'],skills:'临电排查、故障诊断',preference:'避免连续夜班',fitSource:'模拟适岗结论',fitValidUntil:'2026-12-31'},
  {id:'W009',name:'李志强',age:43,trade:'架子工',years:17,certCodes:['SCAFFOLD'],cert:'建筑架子工证',fit:['正常适岗'],skills:'架体搭设、连墙件安装',preference:'正常安排',fitSource:'自主申报',fitValidUntil:'2026-12-31'},
  {id:'W010',name:'高明',age:39,trade:'材料工',years:12,certCodes:['FORKLIFT'],cert:'叉车证',fit:['正常适岗'],skills:'机械搬运、材料运输',preference:'正常安排',fitSource:'自主申报',fitValidUntil:'2026-12-31'},
  {id:'W011',name:'许东',age:46,trade:'钢筋工',years:20,certCodes:['REBAR-L2'],cert:'钢筋工中级',fit:['正常适岗'],skills:'绑扎、机械连接',preference:'正常安排',fitSource:'自主申报',fitValidUntil:'2026-12-31'},
  {id:'W012',name:'郑凯',age:35,trade:'混凝土工',years:10,certCodes:['CONCRETE-L2'],cert:'混凝土工中级',fit:['正常适岗'],skills:'振捣、养护',preference:'正常安排',fitSource:'自主申报',fitValidUntil:'2026-12-31'},
  {id:'W013',name:'马永强',age:48,trade:'木工',years:22,certCodes:['CARPENTER-L3'],cert:'木工高级',fit:['正常适岗'],skills:'模板支设、加固',preference:'正常安排',fitSource:'自主申报',fitValidUntil:'2026-12-31'},
  {id:'W014',name:'宋林',age:41,trade:'抹灰工',years:15,certCodes:['PLASTER-L2'],cert:'抹灰工中级',fit:['正常适岗'],skills:'墙面抹灰',preference:'正常安排',fitSource:'自主申报',fitValidUntil:'2026-12-31'},
  {id:'W015',name:'郭峰',age:37,trade:'电工',years:13,certCodes:['ELECTRIC'],cert:'建筑电工证',fit:['正常适岗'],skills:'临电安装',preference:'正常安排',fitSource:'自主申报',fitValidUntil:'2026-12-31'},
  {id:'W016',name:'蒋超',age:44,trade:'防水工',years:18,certCodes:['WATERPROOF-L2'],cert:'防水工中级',fit:['正常适岗'],skills:'节点防水',preference:'正常安排',fitSource:'自主申报',fitValidUntil:'2026-12-31'},
  {id:'W017',name:'何伟',age:33,trade:'砌筑工',years:8,certCodes:['MASON-L2'],cert:'砌筑工中级',fit:['正常适岗'],skills:'砌体施工、材料准备',preference:'正常安排',fitSource:'自主申报',fitValidUntil:'2026-12-31'},
  {id:'W018',name:'冯波',age:36,trade:'材料工',years:11,certCodes:['FORKLIFT'],cert:'叉车证',fit:['正常适岗'],skills:'机械搬运',preference:'正常安排',fitSource:'自主申报',fitValidUntil:'2026-12-31'},
  {id:'W019',name:'邓辉',age:45,trade:'测量工',years:19,certCodes:['SURVEY'],cert:'测量员证',fit:['正常适岗'],skills:'轴线与标高复测',preference:'正常安排',fitSource:'自主申报',fitValidUntil:'2026-12-31'},
  {id:'W020',name:'罗成',age:40,trade:'焊工',years:16,certCodes:['WELDER'],cert:'焊工证',fit:['正常适岗'],skills:'钢筋焊接',preference:'正常安排',fitSource:'自主申报',fitValidUntil:'2026-12-31'}
];

const legacySampleTasks = [
  {id:'T01',name:'外墙砌体作业',area:'6F 东立面',start:'08:00',end:'12:00',environment:'高处临边',intensity:'高',requiredCertCode:'MASON',requiredCert:'砌筑工',people:1,experienceGoal:'砌体样板、灰缝控制、节点检查'},
  {id:'T02',name:'室外混凝土养护',area:'基坑南侧',start:'11:00',end:'15:00',environment:'户外高温',intensity:'中',requiredCertCode:'CONCRETE',requiredCert:'混凝土工',people:1},
  {id:'T03',name:'袋装水泥搬运',area:'1#材料库',start:'09:00',end:'11:30',environment:'室内搬运',intensity:'高',requiredCertCode:'',requiredCert:'',people:2},
  {id:'T04',name:'钢筋绑扎',area:'B2 筏板区',start:'07:00',end:'16:00',environment:'一般作业',intensity:'高',requiredCertCode:'REBAR',requiredCert:'钢筋工',people:1},
  {id:'T05',name:'抹灰样板指导',area:'3F 样板间',start:'08:00',end:'11:00',environment:'室内',intensity:'低',requiredCertCode:'PLASTER',requiredCert:'抹灰工',people:1,experienceGoal:'样板验收、空鼓排查、收口工艺'},
  {id:'T06',name:'脚手架辅助巡检',area:'2#楼外架',start:'08:30',end:'10:30',environment:'地面巡检',intensity:'低',requiredCertCode:'SCAFFOLD',requiredCert:'建筑架子工',people:1},
  {id:'T07',name:'外架连墙件安装',area:'6F 东立面',start:'08:00',end:'12:00',environment:'高处临边',intensity:'高',requiredCertCode:'SCAFFOLD',requiredCert:'建筑架子工',people:1},
  {id:'T08',name:'叉车转运水泥',area:'1#材料库',start:'13:30',end:'15:30',environment:'机械作业',intensity:'低',requiredCertCode:'FORKLIFT',requiredCert:'叉车证',people:1}
];

const legacySampleAssignments = [
  {id:'A001',taskId:'T01',workerId:'W001',role:'执行',status:'原计划'},
  {id:'A002',taskId:'T02',workerId:'W002',role:'执行',status:'原计划'},
  {id:'A003',taskId:'T03',workerId:'W003',role:'执行',status:'原计划'},
  {id:'A004',taskId:'T03',workerId:'W018',role:'协作',status:'原计划'},
  {id:'A005',taskId:'T04',workerId:'W004',role:'执行',status:'原计划'},
  {id:'A006',taskId:'T05',workerId:'W005',role:'经验指导',experienceTopic:'样板验收、空鼓排查、收口工艺',status:'原计划'},
  {id:'A007',taskId:'T06',workerId:'W006',role:'辅助巡检',status:'原计划'},
  {id:'A008',taskId:'T07',workerId:'W009',role:'执行',status:'原计划'},
  {id:'A009',taskId:'T08',workerId:'W010',role:'设备操作',status:'原计划'},
  {id:'A010',taskId:'T05',workerId:'W014',role:'执行',status:'原计划'}
];

const sampleDataVersion='profile-empty-2026-08';
const workerProfileResetVersion='worker-profiles-demo-restored-2026-08';
const archivedSampleWorkers = [
  {id:'W001',name:'张建华',age:58,trade:'砌筑工',years:32,certCodes:['MASON-L3'],cert:'砌筑工高级',fit:['高处作业需复核','一般关注'],skills:'墙体质量、样板指导、新人带教',preference:'愿意承担质量指导工作',fitSource:'演示适岗结论',fitValidUntil:'2026-12-31'},
  {id:'W002',name:'何伟',age:33,trade:'砌筑工',years:8,certCodes:['MASON-L2'],cert:'砌筑工中级',fit:['正常适岗'],skills:'砌体施工、材料准备',preference:'正常安排',fitSource:'演示适岗结论',fitValidUntil:'2026-12-31'},
  {id:'W003',name:'王德胜',age:60,trade:'混凝土工',years:35,certCodes:['CONCRETE-L3'],cert:'混凝土工高级',fit:['高温时段需调整','一般关注'],skills:'浇筑组织、施工缝处理',preference:'希望减少午间户外作业',fitSource:'演示适岗结论',fitValidUntil:'2026-12-31'},
  {id:'W004',name:'郑凯',age:35,trade:'混凝土工',years:10,certCodes:['CONCRETE-L2'],cert:'混凝土工中级',fit:['正常适岗'],skills:'振捣、养护',preference:'正常安排',fitSource:'演示适岗结论',fitValidUntil:'2026-12-31'},
  {id:'W005',name:'刘国平',age:55,trade:'材料工',years:24,certCodes:['MATERIAL-AUX'],cert:'材料员辅助',fit:['腰部负荷限制','避免连续重体力'],skills:'材料验收、仓储清点',preference:'可承担材料台账工作',fitSource:'演示适岗结论',fitValidUntil:'2026-12-31'},
  {id:'W006',name:'高明',age:39,trade:'材料工',years:12,certCodes:['FORKLIFT'],cert:'叉车证',fit:['正常适岗'],skills:'机械搬运、材料运输',preference:'正常安排',fitSource:'演示适岗结论',fitValidUntil:'2026-12-31'},
  {id:'W007',name:'陈海明',age:56,trade:'抹灰工',years:30,certCodes:['PLASTER-L3'],cert:'抹灰工高级',fit:['膝关节负荷限制'],skills:'样板施工、空鼓排查、收口工艺',preference:'愿意承担样板指导工作',fitSource:'演示适岗结论',fitValidUntil:'2026-12-31'},
  {id:'W008',name:'宋林',age:41,trade:'抹灰工',years:15,certCodes:['PLASTER-L2'],cert:'抹灰工中级',fit:['正常适岗'],skills:'墙面抹灰',preference:'正常安排',fitSource:'演示适岗结论',fitValidUntil:'2026-12-31'},
  {id:'W009',name:'赵振国',age:54,trade:'架子工',years:25,certCodes:['SCAFFOLD'],cert:'建筑架子工证',fit:['高处作业需复核'],skills:'脚手架隐患排查、实操带教',preference:'希望减少连续攀爬',fitSource:'演示适岗结论',fitValidUntil:'2026-12-31'},
  {id:'W010',name:'李志强',age:43,trade:'架子工',years:17,certCodes:['SCAFFOLD'],cert:'建筑架子工证',fit:['正常适岗'],skills:'架体搭设、连墙件安装',preference:'正常安排',fitSource:'演示适岗结论',fitValidUntil:'2026-12-31'}
];
const sampleWorkers = structuredClone(archivedSampleWorkers);
const sampleTasks = [
  {id:'T01',name:'外墙砌体作业',area:'6F 东立面',start:'08:00',end:'12:00',environment:'高处临边',intensity:'高',requiredCertCode:'MASON',requiredCert:'砌筑工',people:1,experienceGoal:'砌体样板、灰缝控制、节点检查'},
  {id:'T02',name:'室外混凝土养护',area:'基坑南侧',start:'11:00',end:'15:00',environment:'户外高温',intensity:'中',requiredCertCode:'CONCRETE',requiredCert:'混凝土工',people:1,experienceGoal:'高温条件下的养护工序交底'},
  {id:'T03',name:'袋装水泥搬运',area:'1#材料库',start:'09:00',end:'11:30',environment:'室内搬运',intensity:'高',requiredCertCode:'',requiredCert:'',people:2},
  {id:'T04',name:'抹灰样板作业',area:'3F 样板间',start:'08:00',end:'11:00',environment:'室内',intensity:'低',requiredCertCode:'PLASTER',requiredCert:'抹灰工',people:1,experienceGoal:'样板验收、空鼓排查、收口工艺'},
  {id:'T05',name:'外架连墙件安装',area:'6F 东立面',start:'08:00',end:'12:00',environment:'高处临边',intensity:'高',requiredCertCode:'SCAFFOLD',requiredCert:'建筑架子工',people:1}
];
const archivedSampleAssignments = [
  {id:'A001',taskId:'T01',workerId:'W001',role:'执行',status:'原计划'},
  {id:'A002',taskId:'T02',workerId:'W003',role:'执行',status:'原计划'},
  {id:'A003',taskId:'T03',workerId:'W005',role:'执行',status:'原计划'},
  {id:'A004',taskId:'T04',workerId:'W008',role:'执行',status:'原计划'},
  {id:'A005',taskId:'T05',workerId:'W009',role:'执行',status:'原计划'}
];
const sampleAssignments = [];

const rules = [
  {id:'AG-01',icon:'shield-check',title:'适岗结论优先',type:'产品治理规则',trigger:'年龄不作为自动禁岗条件；适岗、资格、任务与环境共同判断',source:'项目原型治理原则（非国家统一年龄禁岗标准）',scope:'不得将年龄或健康标签作为自动派工/禁岗结论。',action:'仅输出“需人工复核”或“调整建议”，最终适岗判断由有权人员作出。',version:'1.1',review:'已明确边界'},
  {id:'QL-01',icon:'badge-check',title:'岗位资格校验',type:'法规支撑的硬约束',trigger:'特种作业执行角色须核对有效资格/操作资格信息',source:'《建筑施工特种作业人员管理规定》（建质〔2008〕75号）第3条',scope:'适用于建筑施工特种作业人员；普通工种资格目录须由项目补充。',action:'证书缺失、失效或无法匹配时，不生成“可直接派工”结论。',version:'1.1',review:'已填法规依据'},
  {id:'HT-01',icon:'sun',title:'高温作业组织',type:'法规支撑的环境规则',trigger:'午间最高气温≥35℃、露天作业且覆盖11:00-15:00',source:'《防暑降温措施管理办法》（安监总安健〔2012〕89号）第8条',scope:'35℃以上应采取轮换休息等措施；37℃以上、40℃以上另有更严格的作业时间要求。',action:'系统提示调整时段、轮休与饮水条件；不以35℃自动停工。',version:'1.1',review:'已填法规依据'},
  {id:'WT-02',icon:'wind',title:'大风环境复核',type:'法规支撑的环境规则',trigger:'最大阵风≥10.8m/s（约6级风）时，高处或临边任务进入人工复核',source:'《建筑施工高处作业安全技术规范》JGJ 80-2016（恶劣气候高处作业要求）',scope:'规范明确六级及以上强风时不得进行露天攀登与悬空高处作业；临边作业由项目安全员按工况判定。',action:'系统不自动判定停工，推送安全员确认作业类型、防护条件和恢复条件。',version:'1.1',review:'已填规范依据'},
  {id:'WT-03',icon:'cloud-rain',title:'降雨环境复核',type:'项目预警规则',trigger:'预测降雨量≥1mm时，露天、高处或临边作业进入人工复核',source:'JGJ 80-2016关于雨天高处作业须采取可靠防滑等措施；1mm为项目原型预警值',scope:'国家规范未给出统一“1mm停工线”；不得把该数值表述为法定阈值。',action:'提示检查防滑、排水、临电和作业面条件，由现场决定是否调整。',version:'1.1',review:'已标注项目阈值'},
  {id:'ER-03',icon:'package-open',title:'重体力作业适配',type:'项目提示规则',trigger:'高强度任务与已记录的负荷限制标签冲突',source:'项目适配策略（非医疗诊断、非统一法定负荷阈值）',scope:'仅使用经授权、最小必要的作业适配标签；不记录病历、用药等隐私。',action:'推荐机械辅助、协作轮换或经验型岗位，并要求班组人工确认。',version:'1.1',review:'待职业健康专家复核'},
  {id:'AG-05',icon:'graduation-cap',title:'经验型任务优化',type:'项目发展规则',trigger:'工龄≥25年且连续高强度作业≥8小时',source:'项目原型经验传承策略（非年龄或工龄禁岗规定）',scope:'工龄仅用于识别经验传承机会，不作为体能或安全能力的替代判断。',action:'推荐质量带教、工序核对等可选角色，不自动调整人员岗位。',version:'1.1',review:'待项目管理人员复核'},
  {id:'SC-01',icon:'calendar-x',title:'全局排班冲突',type:'系统一致性硬约束',trigger:'同一工友被安排到时间重叠的不同任务',source:'系统数据一致性规则',scope:'适用于本系统内已录入任务；不替代现场考勤和项目总进度计划。',action:'阻止输出“可直接派工”，要求调整时段或人员。',version:'1.1',review:'已验证'},
  {id:'ST-01',icon:'users',title:'任务人数完整性',type:'系统一致性硬约束',trigger:'有效分配人数小于任务需求人数',source:'系统数据一致性规则',scope:'人数需求由施工计划录入；系统不评估工序实际定额是否合理。',action:'标记为待补人，不输出完整派工结论。',version:'1.1',review:'已验证'},
  {id:'DG-01',icon:'file-check-2',title:'适岗信息有效性',type:'数据治理规则',trigger:'已派工人员须有明确来源且适岗信息在有效期内',source:'项目最小必要数据与可追溯治理规则',scope:'用于提示信息缺失或过期；不替代职业健康检查、适岗鉴定或医疗判断。',action:'信息缺失时进入人工复核，不将个人健康信息暴露给非必要角色。',version:'1.1',review:'待职业健康专家复核'}
];

const roleLabels = {safety:'安全员',leader:'班组长',worker:'工友',reviewer:'专业复核员'};
const flowLabels = {review_requested:'待例外专业复核',review_passed:'专业复核已通过',review_rejected:'专业复核已驳回',safety_approved:'待班组长确认派工',leader_approved:'班组长已确认派工',worker_accepted:'班前交底已完成',worker_rejected:'现场反馈待调整',executed:'已执行',closed:'已归档'};
const completedStatuses = new Set(['executed','closed']);
const safetyHandledStatuses = new Set(['safety_approved','leader_approved','executed','closed']);

const initialLogs = [
  {time:'2026-08-17 09:20',actor:'安全员 · 林海',action:'创建明日班前适配任务',status:'已完成'},
  {time:'2026-08-17 09:21',actor:'数据校验',action:'读取10名工友、5项任务和5条人员分配',status:'已完成'},
  {time:'2026-08-17 09:22',actor:'规则引擎',action:'完成原计划扫描，等待班组确认与标红项处置',status:'待确认'}
];

const defaultState = () => ({view:'dashboard',role:'leader',dataSource:'示例数据',sampleDataVersion,scanning:false,weatherSyncing:false,assistantMode:'start',assistantInput:'',assistantDraft:null,aiDispatchDraft:null,aiDispatchLoading:false,planSource:'notice',profileFilter:'all',search:'',selectedTaskId:'',dispatchConfirmed:{},experienceRecords:{},weather:{temp:38,heatTemp:38,condition:'高温橙色提醒',location:'浦东新区',latitude:31.2304,longitude:121.5444,windGust:0,precipitation:0,source:'模拟数据',updatedAt:''},workers:structuredClone(sampleWorkers),tasks:structuredClone(sampleTasks),assignments:structuredClone(sampleAssignments),decisions:{},logs:structuredClone(initialLogs)});
let state,persistedState;
try { persistedState=JSON.parse(localStorage.getItem('anlingStateV3')||'null')||null;state=Object.assign(defaultState(),persistedState||{}); } catch { state=defaultState();persistedState=null; }
state.aiDispatchLoading=false;
if(!['dashboard','final','workers','rules','logs'].includes(state.view)) state.view='dashboard';
if(!Array.isArray(state.workers)) state.workers=structuredClone(sampleWorkers);
if(!Array.isArray(state.tasks)) state.tasks=structuredClone(sampleTasks);
if(!Array.isArray(state.assignments)) state.assignments=structuredClone(sampleAssignments);
if(!Array.isArray(state.logs)) state.logs=structuredClone(initialLogs);
if(!state.dispatchConfirmed || typeof state.dispatchConfirmed!=='object') state.dispatchConfirmed={};
if(!state.experienceRecords || typeof state.experienceRecords!=='object') state.experienceRecords={};
state.weather=Object.assign(defaultState().weather,state.weather||{});
if(state.dataSource==='示例数据'&&persistedState?.sampleDataVersion!==sampleDataVersion)Object.assign(state,{sampleDataVersion,workers:structuredClone(sampleWorkers),tasks:structuredClone(sampleTasks),assignments:structuredClone(sampleAssignments),decisions:{},dispatchConfirmed:{},experienceRecords:{},assistantMode:'analyzed',assistantDraft:null,aiDispatchDraft:null,selectedTaskId:sampleTasks[0]?.id||'',logs:structuredClone(initialLogs)});
if(!state.selectedTaskId) state.selectedTaskId=state.tasks?.[0]?.id||'';

const $ = selector => document.querySelector(selector);
const esc = value => String(value??'').replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
const icon = name => `<i data-lucide="${name}" aria-hidden="true"></i>`;
const icons = () => { if(window.lucide) window.lucide.createIcons(); };
const workerById = (id,workers=state.workers) => workers.find(worker=>worker.id===id);
const taskById = (id,tasks=state.tasks) => tasks.find(task=>task.id===id);
const assignmentsForTask = (taskId,assignments=state.assignments) => assignments.filter(item=>item.taskId===taskId);
const isExecutionAssignment = assignment => !['经验指导','经验型任务'].includes(assignment.role);
const timeNumber = value => { const [h,m]=String(value||'0:0').split(':').map(Number); return h+(m||0)/60; };
const overlaps = (aStart,aEnd,bStart,bEnd) => timeNumber(aStart)<timeNumber(bEnd)&&timeNumber(bStart)<timeNumber(aEnd);
const duration = task => Math.max(0,timeNumber(task.end)-timeNumber(task.start));
const splitTags = value => Array.isArray(value)?value:String(value||'').split(/[、,，;；|]/).map(x=>x.trim()).filter(Boolean);
const nextId = (prefix,items) => `${prefix}${String(Math.max(0,...items.map(item=>Number(String(item.id).replace(/\D/g,''))||0))+1).padStart(prefix==='A'?3:2,'0')}`;
const certMatches = (worker,task) => !task.requiredCertCode || (worker?.certCodes||[]).some(code=>code===task.requiredCertCode||code.startsWith(`${task.requiredCertCode}-`));
const fitRecordValid = worker => !!worker?.fitSource&&worker.fitSource!=='未说明'&&/^\d{4}-\d{2}-\d{2}$/.test(worker.fitValidUntil||'')&&worker.fitValidUntil>=new Date().toISOString().slice(0,10);

function save(){ localStorage.setItem('anlingStateV3',JSON.stringify(state)); }
if(persistedState?.workerProfileResetVersion!==workerProfileResetVersion){
  Object.assign(state,{workerProfileResetVersion,workers:structuredClone(sampleWorkers),assignments:[],decisions:{},dispatchConfirmed:{},experienceRecords:{},aiDispatchDraft:null,dataSource:'演示工友画像'});
  save();
}
function invalidatePlanningState(taskIds=null){
  state.aiDispatchDraft=null;
  if(!taskIds){state.decisions={};state.dispatchConfirmed={};}
  else{
    const affected=new Set((Array.isArray(taskIds)?taskIds:[taskIds]).filter(Boolean));
    Object.keys(state.dispatchConfirmed).forEach(taskId=>{if(affected.has(taskId))delete state.dispatchConfirmed[taskId];});
    Object.entries(state.decisions).forEach(([riskId,decision])=>{if(affected.has(decision.taskId))delete state.decisions[riskId];});
  }
  scheduleAiRefresh();
}
function notify(message){ const toast=$('#toast');toast.textContent=message;toast.classList.add('show');clearTimeout(notify.timer);notify.timer=setTimeout(()=>toast.classList.remove('show'),2600); }
function log(actor,action,status='已完成'){ state.logs.unshift({time:new Date().toLocaleString('zh-CN',{hour12:false}),actor,action,status});save(); }
function closeModal(){ $('#modal').classList.remove('open');$('#modal').setAttribute('aria-hidden','true'); }
function openModal(content){ $('#modalContent').innerHTML=content;$('#modal').classList.add('open');$('#modal').setAttribute('aria-hidden','false');icons(); }
function bindModalClose(){ document.querySelectorAll('[data-close-modal]').forEach(button=>button.onclick=closeModal); }

function planIssues(plan){
  const issues=[];
  for(const task of plan.tasks){
    const assigned=assignmentsForTask(task.id,plan.assignments),executionAssigned=assigned.filter(isExecutionAssignment);
    if(executionAssigned.length<(Number(task.people)||1)) issues.push({id:`${task.id}-staffing`,type:'staffing',level:'high',taskId:task.id,title:'任务人数不足',summary:`${task.name} · 已分配${executionAssigned.length}/${task.people}人`,basis:`任务需求${task.people}人，当前现场执行分配${executionAssigned.length}人；经验指导不计入执行人数。`,source:'ST-01 · 系统一致性规则'});
    for(const assignment of assigned){
      const worker=workerById(assignment.workerId,plan.workers);
      if(!worker){issues.push({id:`${assignment.id}-missing`,type:'missing',level:'high',taskId:task.id,assignmentId:assignment.id,title:'分配人员不存在',summary:`${task.name} · ${assignment.workerId}`,basis:'人员分配引用了不存在的工友编号。',source:'系统数据完整性规则'});continue;}
      if(!fitRecordValid(worker)) issues.push({id:`${assignment.id}-fitness-data`,type:'data',level:'high',taskId:task.id,assignmentId:assignment.id,workerId:worker.id,title:'适岗信息缺失或已过期',summary:`${worker.name} · ${task.name}`,basis:`适岗信息来源为“${worker.fitSource||'未填写'}”，有效期为“${worker.fitValidUntil||'未填写'}”。`,source:'DG-01 · 原型数据治理规则'});
      if(['执行','替代执行'].includes(assignment.role)&&!certMatches(worker,task)) issues.push({id:`${assignment.id}-qualification`,type:'qualification',level:'high',taskId:task.id,assignmentId:assignment.id,workerId:worker.id,title:'岗位资格需要复核',summary:`${worker.name} · ${task.name}`,basis:`任务要求“${task.requiredCertCode||task.requiredCert}”，当前资格编码为“${worker.certCodes.join('、')||'未填写'}”。`,source:'QL-01 · 建质〔2008〕75号'});
      if(assignment.role==='设备操作'&&!worker.certCodes.some(code=>['FORKLIFT','EQUIPMENT'].includes(code))) issues.push({id:`${assignment.id}-equipment-qualification`,type:'qualification',level:'high',taskId:task.id,assignmentId:assignment.id,workerId:worker.id,title:'设备操作资格需要复核',summary:`${worker.name} · ${task.name}`,basis:`机械辅助安排要求设备操作资格，当前资格编码为“${worker.certCodes.join('、')||'未填写'}”。`,source:'QL-01 · 建质〔2008〕75号'});
    }
  }
  for(const worker of plan.workers){
    const workerAssignments=plan.assignments.filter(item=>item.workerId===worker.id);
    for(let i=0;i<workerAssignments.length;i++)for(let j=i+1;j<workerAssignments.length;j++){
      const a=workerAssignments[i],b=workerAssignments[j],ta=taskById(a.taskId,plan.tasks),tb=taskById(b.taskId,plan.tasks);
      if(ta&&tb&&ta.id!==tb.id&&overlaps(ta.start,ta.end,tb.start,tb.end)) issues.push({id:`${worker.id}-${ta.id}-${tb.id}-schedule`,type:'schedule',level:'high',taskId:ta.id,relatedTaskId:tb.id,assignmentId:a.id,workerId:worker.id,title:'同一工友存在时间冲突',summary:`${worker.name} · ${ta.name} / ${tb.name}`,basis:`${ta.start}-${ta.end} 与 ${tb.start}-${tb.end} 时间重叠。`,source:'SC-01 · 系统一致性规则'});
    }
  }
  return issues;
}

function workerRisks(plan){
  const risks=[];
  for(const assignment of plan.assignments){
    const task=taskById(assignment.taskId,plan.tasks),worker=workerById(assignment.workerId,plan.workers);if(!task||!worker)continue;
    const tags=worker.fit.join('|'),base={taskId:task.id,assignmentId:assignment.id,workerId:worker.id,level:'high'},exposureRole=['执行','替代执行','协作','协作轮换'].includes(assignment.role);
    if(exposureRole&&/高处|临边/.test(task.environment)&&/高处/.test(tags)) risks.push({...base,id:`${assignment.id}-height`,type:'height',title:'高处作业需要人工复核',summary:`${worker.name} · ${task.name}`,basis:`任务环境为“${task.environment}”，人员存在“高处作业需复核”标签。`,source:'AG-01 · 产品治理规则'});
    if(exposureRole&&Number(state.weather.heatTemp??state.weather.temp)>=35&&/户外|露天|高温/.test(task.environment)&&overlaps(task.start,task.end,'11:00','15:00')&&/高温|心血管/.test(tags)) risks.push({...base,id:`${assignment.id}-heat`,type:'heat',title:'高温时段与适岗标签冲突',summary:`${worker.name} · ${task.start}-${task.end}`,basis:`11:00-15:00最高气温${state.weather.heatTemp??state.weather.temp}℃，任务覆盖高温重点时段，人员存在高温相关适岗标签。`,source:'HT-01 · 安监总安健〔2012〕89号第8条'});
    if(exposureRole&&Number(state.weather.windGust)>=10.8&&/高处|临边/.test(task.environment)) risks.push({...base,id:`${assignment.id}-wind`,type:'wind',title:'大风条件下高处作业需复核',summary:`${worker.name} · ${task.name}`,basis:`同步环境数据显示最大阵风${state.weather.windGust}m/s，任务属于${task.environment}。`,source:'WT-02 · JGJ 80-2016'});
    if(exposureRole&&Number(state.weather.precipitation)>=1&&/户外|露天|高处|临边/.test(task.environment)) risks.push({...base,id:`${assignment.id}-rain`,type:'rain',title:'降雨条件下露天作业需复核',summary:`${worker.name} · ${task.name}`,basis:`同步环境数据显示预测降雨量${state.weather.precipitation}mm，任务属于${task.environment}。`,source:'WT-03 · 项目预警值（非统一法定阈值）'});
    if(exposureRole&&task.intensity==='高'&&/腰|膝|重体力/.test(tags)) risks.push({...base,id:`${assignment.id}-heavy`,type:'heavy',title:'重体力任务与负荷限制冲突',summary:`${worker.name} · ${task.name}`,basis:`任务强度为高，人员存在“${worker.fit.filter(x=>/腰|膝|重体力/.test(x)).join('、')}”标签。`,source:'ER-03 · 竞赛原型规则'});
    if(exposureRole&&task.intensity==='高'&&duration(task)>=8&&worker.years>=25) risks.push({...base,id:`${assignment.id}-duration`,type:'duration',level:'medium',title:'连续高强度作业可优化',summary:`${worker.name} · ${duration(task)}小时${task.name}`,basis:`作业时长${duration(task)}小时、强度为高，人员有${worker.years}年经验。`,source:'AG-05 · 竞赛原型规则'});
  }
  return risks;
}

function calculateRisks(plan=originalPlan()){ return [...workerRisks(plan),...planIssues(plan)]; }
function originalPlan(){ return {workers:state.workers,tasks:state.tasks,assignments:state.assignments}; }
function isSafetyHandled(risk){ return safetyHandledStatuses.has(state.decisions[risk.id]?.status); }
function requiresSafetyAction(risk){ const status=state.decisions[risk.id]?.status;return !status||['review_passed','review_rejected','worker_rejected'].includes(status); }

function optionsFor(risk){
  if(risk.type==='height') return [{id:'A',mode:'reorganize',title:'转为地面经验任务并补位',detail:'为原高处任务绑定替代人员，同时创建地面经验型任务。'},{id:'B',mode:'review',title:'发起专业复核',detail:'复核通过前不改变风险状态。'},{id:'C',mode:'replace',title:'由同工种适岗人员替换',detail:'必须选择具体人员并占用其时间。'}];
  if(risk.type==='heat') return [{id:'A',mode:'reschedule',title:'调整至早晚时段',detail:'默认建议06:30-10:00，需班组长确认工期。'},{id:'B',mode:'replace',title:'由同工种适岗人员替换',detail:'原工友调整为室内经验型任务。'},{id:'C',mode:'review',title:'暂停午间安排并复核条件',detail:'确认遮阳、轮休和饮水条件后再决定。'}];
  if(risk.type==='heavy') return [{id:'A',mode:'mechanical',title:'增加机械辅助人员',detail:'原工友负责清点核对，设备操作人员承担搬运。'},{id:'B',mode:'team',title:'由协作人员承担直接搬运',detail:'原工友改为清点核对与轮换协调；需绑定一名适岗人员承担直接搬运。'},{id:'C',mode:'reorganize',title:'转为材料台账并补位',detail:'为原搬运任务绑定替代人员，同时创建材料台账任务。'}];
  if(risk.type==='duration') return [{id:'A',mode:'reorganize',title:'转为工艺带教并补位',detail:'为原任务绑定替代人员，同时创建低强度工艺带教任务。'},{id:'B',mode:'team',title:'由轮换人员承担直接作业',detail:'原工友改为轮换协调，适岗人员承担直接作业并完成时间冲突校验。'},{id:'C',mode:'review',title:'保持原安排并记录意愿',detail:'需完成专业复核和工友确认。'}];
  if(risk.type==='staffing') return [{id:'A',mode:'team',title:'补充任务人员',detail:'选择具体人员补足任务人数。'}];
  if(risk.type==='schedule') return [{id:'A',mode:'replace',title:'更换当前任务人员',detail:'选择无时间冲突且资格匹配的人员。'},{id:'B',mode:'reschedule',title:'调整当前任务时间',detail:'修改时间后重新进行全局校验。'}];
  if(risk.type==='qualification') return [{id:'A',mode:'replace',title:'由资格匹配人员替换',detail:'必须选择具体持证人员。'},{id:'B',mode:'review',title:'核验并补充证书记录',detail:'资格核验完成前不能进入安全员审批。'}];
  return [{id:'A',mode:'review',title:'人工核验数据',detail:'补充完整信息后重新扫描。'}];
}

function reservedWorkerIds(excludeRiskId){ return new Set(Object.entries(state.decisions).filter(([id,d])=>id!==excludeRiskId&&!['review_rejected','worker_rejected'].includes(d.status)&&d.candidateWorkerId).map(([,d])=>d.candidateWorkerId)); }
function candidatePool(risk,mode,plan=originalPlan()){
  const task=taskById(risk.taskId,plan.tasks),reserved=reservedWorkerIds(risk.id),currentId=risk.workerId;
  return plan.workers.filter(worker=>{
    if(worker.id===currentId||reserved.has(worker.id))return false;
    if(!fitRecordValid(worker)||plan.assignments.some(a=>a.workerId===worker.id&&a.taskId===task.id))return false;
    if(mode==='mechanical'&&!worker.certCodes.some(code=>['FORKLIFT','EQUIPMENT'].includes(code)))return false;
    if(['replace','reorganize','team'].includes(mode)&&(!certMatches(worker,task)||!taskFitAllowed(task,worker)))return false;
    const conflicts=plan.assignments.some(a=>a.workerId===worker.id&&a.taskId!==task.id&&(()=>{const other=taskById(a.taskId,plan.tasks);return other&&overlaps(task.start,task.end,other.start,other.end);})());
    return !conflicts;
  });
}

function completedExperienceCount(task,worker){
  return Object.entries(state.experienceRecords||{}).filter(([taskId,record])=>{
    if(record?.result!=='已完成带教')return false;
    const sourceTask=taskById(taskId),sameCertificate=!!task.requiredCertCode&&sourceTask?.requiredCertCode===task.requiredCertCode,tradeKeyword=String(worker.trade||'').replace('工',''),sameTrade=!!tradeKeyword&&sourceTask?.name.includes(tradeKeyword)&&task.name.includes(tradeKeyword);
    const participants=splitTags(record.participants),wasParticipant=participants.includes(worker.name),wasMentor=assignmentsForTask(taskId).some(item=>item.workerId===worker.id&&['经验指导','经验型任务'].includes(item.role));
    return (sameCertificate||sameTrade)&&(wasParticipant||wasMentor);
  }).length;
}
function taskFitAllowed(task,worker){
  const tags=(worker.fit||[]).join('|');
  if(task.intensity==='高'&&/腰|膝|重体力/.test(tags))return false;
  if(/高处|临边/.test(task.environment)&&/高处/.test(tags))return false;
  if(Number(state.weather.heatTemp??state.weather.temp)>=35&&/户外|露天|高温/.test(task.environment)&&/高温|心血管/.test(tags))return false;
  return true;
}
function fiveDimensionalMatch(task,worker){
  const taskText=`${task.name} ${task.area} ${task.environment}`.toLowerCase(),trade=String(worker.trade||'').toLowerCase();
  const signals=[['砌|砖|墙','砌'],['钢筋|绑扎','钢筋'],['混凝土|浇筑|养护','混凝土'],['模板','模板'],['电|临电','电'],['焊|切割','焊'],['吊|起重','起重'],['架|高处','架'],['搬运|材料','普工']];
  const tradeHit=signals.some(([pattern,keyword])=>new RegExp(pattern).test(taskText)&&trade.includes(keyword));
  const skills=String(worker.skills||'').split(/[、，,；;\s]+/).filter(Boolean),matchedSkills=skills.filter(skill=>taskText.includes(skill.toLowerCase())).slice(0,2);
  const conflicts=state.assignments.some(a=>a.workerId===worker.id&&a.taskId!==task.id&&(()=>{const other=taskById(a.taskId);return other&&overlaps(task.start,task.end,other.start,other.end);})());
  const completed=completedExperienceCount(task,worker),dimensions=[
    {label:'资格合规',score:certMatches(worker,task)?20:0,max:20,detail:task.requiredCertCode?`证书匹配 ${worker.cert||task.requiredCertCode}`:'任务无特殊证书要求'},
    {label:'工种技能',score:tradeHit?30:matchedSkills.length?22:10,max:30,detail:tradeHit?`工种匹配：${worker.trade}`:matchedSkills.length?`技能匹配：${matchedSkills.join('、')}`:'工种关联度一般'},
    {label:'适岗负荷',score:taskFitAllowed(task,worker)?20:0,max:20,detail:taskFitAllowed(task,worker)?'适岗标签与当前任务一致':'适岗标签与任务条件存在冲突'},
    {label:'时间可用',score:conflicts?0:20,max:20,detail:conflicts?'与既有任务时间冲突':'当前无时间冲突'},
    {label:'经验传承',score:Math.min(10,Math.floor(Number(worker.years||0)/3)+completed*2),max:10,detail:completed?`已完成 ${completed} 次相关带教复盘`:`${worker.years||0} 年现场经验`}
  ];
  return {score:dimensions.reduce((sum,item)=>sum+item.score,0),dimensions};
}
function taskMatchScore(task,worker){
  const text=`${task.name} ${task.area} ${task.environment}`.toLowerCase();
  const trade=String(worker.trade||'').toLowerCase();
  const signals=[['砌|砖|墙', '砌'],['钢筋|绑扎', '钢筋'],['混凝土|浇筑|养护', '混凝土'],['模板', '模板'],['电|临电', '电'],['焊|切割', '焊'],['吊|起重', '起重'],['架|高处', '架'],['搬运|材料', '普工']];
  const tradeHit=signals.some(([pattern,keyword])=>new RegExp(pattern).test(text)&&trade.includes(keyword));
  const skillHit=String(worker.skills||'').split(/[、，,；;\s]+/).filter(Boolean).some(skill=>text.includes(skill.toLowerCase()));
  const experienceBonus=Math.min(9,completedExperienceCount(task,worker)*3);
  return (task.requiredCertCode&&certMatches(worker,task)?40:0)+(tradeHit?30:0)+(skillHit?15:0)+Math.min(15,Math.floor(Number(worker.years||0)/3))+experienceBonus;
}

function candidateReasonsForTask(task,worker){
  const text=`${task.name} ${task.area} ${task.environment}`.toLowerCase(),skills=String(worker.skills||'').split(/[、，,；;\s]+/).filter(Boolean),matchedSkills=skills.filter(skill=>text.includes(skill.toLowerCase())).slice(0,2),reasons=[];
  reasons.push(task.requiredCertCode?`资格匹配：${worker.cert||task.requiredCertCode}`:'任务无特殊证书要求');
  reasons.push('当前无时间冲突');
  if(matchedSkills.length)reasons.push(`相关经验：${matchedSkills.join('、')}`);
  else if(worker.trade&&task.name.includes(worker.trade.replace('工','')))reasons.push(`工种匹配：${worker.trade}`);
  if(worker.years>=20)reasons.push(`${worker.years}年相关经验`);
  const completedCount=completedExperienceCount(task,worker);if(completedCount)reasons.push(`已完成${completedCount}次相关带教/复盘`);
  return reasons;
}

function recommendedMentorsForTask(task){
  if(!task.experienceGoal)return [];
  const assigned=new Set(assignmentsForTask(task.id).map(item=>item.workerId));
  return state.workers.filter(worker=>{
    if(assigned.has(worker.id)||!fitRecordValid(worker)||Number(worker.years)<15)return false;
    return !state.assignments.some(assignment=>{if(assignment.workerId!==worker.id||assignment.taskId===task.id)return false;const other=taskById(assignment.taskId);return other&&overlaps(task.start,task.end,other.start,other.end);});
  }).map(worker=>({worker,score:taskMatchScore(task,worker)+Math.min(20,Math.floor(worker.years/2)),reasons:[`具备${worker.years}年现场经验`,worker.skills?`可传承：${worker.skills.split(/[、，,；;]/).slice(0,2).join('、')}`:'已登记技能经验',worker.preference||'待确认带教意愿']})).sort((a,b)=>b.score-a.score||a.worker.name.localeCompare(b.worker.name,'zh-CN'));
}

function recommendedCandidatesForTask(task){
  const assigned=new Set(assignmentsForTask(task.id).map(item=>item.workerId));
  return state.workers.filter(worker=>{
    if(assigned.has(worker.id)||!fitRecordValid(worker)||!certMatches(worker,task)||!taskFitAllowed(task,worker))return false;
    return !state.assignments.some(assignment=>{
      if(assignment.workerId!==worker.id||assignment.taskId===task.id)return false;
      const other=taskById(assignment.taskId);return other&&overlaps(task.start,task.end,other.start,other.end);
    });
  }).map(worker=>{const match=fiveDimensionalMatch(task,worker);return {worker,score:match.score,reasons:candidateReasonsForTask(task,worker),dimensions:match.dimensions};}).sort((a,b)=>b.score-a.score||b.worker.years-a.worker.years||a.worker.name.localeCompare(b.worker.name,'zh-CN'));
}

function proposalFrom(risk,option,form={}){
  const proposal={riskId:risk.id,riskType:risk.type,taskId:risk.taskId,assignmentId:risk.assignmentId||'',workerId:risk.workerId||'',optionId:option.id,mode:option.mode,title:option.title,candidateWorkerId:form.candidateWorkerId||'',newStart:form.newStart||'',newEnd:form.newEnd||'',createdAt:new Date().toISOString()};
  if(option.mode==='reorganize') proposal.newRole='经验型任务';
  return proposal;
}

function applyDecision(plan,decision){
  const tasks=plan.tasks,assignments=plan.assignments,task=taskById(decision.taskId,tasks),assignment=assignments.find(a=>a.id===decision.assignmentId);
  if(decision.mode==='replace'&&assignment){
    const originalWorkerId=assignment.workerId;assignment.workerId=decision.candidateWorkerId;assignment.role='替代执行';assignment.status='调整后';
    if(decision.riskType==='heat'&&task){const derivedId=`F-${decision.riskId}`;tasks.push({id:derivedId,name:'室内工艺准备与经验指导',area:'室内准备区',start:task.start,end:task.end,environment:'室内经验任务',intensity:'低',requiredCertCode:'',requiredCert:'',people:1});assignments.push({id:`FA-${decision.riskId}`,taskId:derivedId,workerId:originalWorkerId,role:'经验型任务',status:'调整后'});}
  }
  if(decision.mode==='mechanical'){
    if(assignment){assignment.role='清点核对';assignment.status='调整后';}
    assignments.push({id:`F-${decision.riskId}`,taskId:decision.taskId,workerId:decision.candidateWorkerId,role:'设备操作',status:'调整后'});
    if(task&&!task.name.includes('机械辅助'))task.name=`${task.name}（机械辅助）`;
  }
  if(decision.mode==='team'){
    // 对负荷或连续作业限制，协作人员必须实际接替直接作业，否则风险不会消除。
    if(assignment&&['heavy','duration'].includes(decision.riskType)){
      assignment.role=decision.riskType==='heavy'?'清点核对':'轮换协调';
      assignment.status='调整后';
      assignments.push({id:`F-${decision.riskId}`,taskId:decision.taskId,workerId:decision.candidateWorkerId,role:'执行',status:'调整后'});
    }else assignments.push({id:`F-${decision.riskId}`,taskId:decision.taskId,workerId:decision.candidateWorkerId,role:'协作轮换',status:'调整后'});
  }
  if(decision.mode==='reschedule'&&task){task.start=decision.newStart||'06:30';task.end=decision.newEnd||'10:00';}
  if(decision.mode==='reorganize'&&assignment&&task){const originalWorkerId=assignment.workerId;assignment.workerId=decision.candidateWorkerId;assignment.role='替代执行';assignment.status='调整后';const derivedId=`F-${decision.riskId}`;tasks.push({id:derivedId,name:`${workerById(originalWorkerId)?.trade||'工艺'}经验指导`,area:'地面经验任务区',start:task.start,end:task.end,environment:'地面经验任务',intensity:'低',requiredCertCode:'',requiredCert:'',people:1});assignments.push({id:`FA-${decision.riskId}`,taskId:derivedId,workerId:originalWorkerId,role:decision.newRole||'经验型任务',status:'调整后'});}
  return plan;
}

function finalPlan(){
  const plan={workers:structuredClone(state.workers),tasks:structuredClone(state.tasks),assignments:structuredClone(state.assignments)},reviewOverrides=new Set();
  Object.values(state.decisions).filter(d=>completedStatuses.has(d.status)).forEach(decision=>{applyDecision(plan,decision);if(decision.mode==='review'&&decision.reviewResult==='passed')reviewOverrides.add(decision.riskId);});
  plan.reviewOverrides=reviewOverrides;return plan;
}
function finalRisks(){ const plan=finalPlan();return calculateRisks(plan).filter(risk=>!plan.reviewOverrides.has(risk.id)); }

function proposalChecks(risk,proposal){
  const option=optionsFor(risk).find(item=>item.id===proposal.optionId),checks=[];
  if(['replace','mechanical','team','reorganize'].includes(proposal.mode)){
    const candidates=candidatePool(risk,proposal.mode),candidate=workerById(proposal.candidateWorkerId);
    checks.push({label:'已绑定具体人员',pass:!!candidate,detail:candidate?.name||'尚未选择'});
    checks.push({label:'候选人当前无时间冲突',pass:candidates.some(x=>x.id===proposal.candidateWorkerId),detail:candidates.some(x=>x.id===proposal.candidateWorkerId)?'通过全局占用检查':'候选人不可用或已被其他方案占用'});
    if(['replace','reorganize','team'].includes(proposal.mode))checks.push({label:'直接作业人员资格与适岗匹配',pass:!!candidate&&certMatches(candidate,taskById(risk.taskId))&&taskFitAllowed(taskById(risk.taskId),candidate),detail:candidate?.cert||'未选择'});
    if(proposal.mode==='mechanical')checks.push({label:'设备操作资格匹配',pass:!!candidate&&candidate.certCodes.some(code=>['FORKLIFT','EQUIPMENT'].includes(code)),detail:candidate?.cert||'未选择'});
  }
  if(proposal.mode==='reschedule')checks.push({label:'新时间有效',pass:timeNumber(proposal.newEnd)>timeNumber(proposal.newStart),detail:`${proposal.newStart||'-'}-${proposal.newEnd||'-'}`});
  if(proposal.mode==='review')checks.push({label:'专业复核尚未完成',pass:false,warning:true,detail:'保存后进入“待专业复核”，不会关闭风险'});
  if(!checks.length)checks.push({label:'方案不直接改变人员资格',pass:true,detail:option?.detail||'通过'});
  const baselineIssueIds=new Set(planIssues(originalPlan()).map(issue=>issue.id));
  const simulated=applyDecision({workers:structuredClone(state.workers),tasks:structuredClone(state.tasks),assignments:structuredClone(state.assignments)},proposal);
  const simulatedIssues=planIssues(simulated);
  const newBlocking=simulatedIssues.filter(issue=>issue.id!==risk.id&&!baselineIssueIds.has(issue.id)&&!(issue.type==='staffing'&&proposal.mode==='team'&&issue.taskId===risk.taskId));
  const remainingIssues=simulatedIssues.filter(issue=>issue.id!==risk.id&&baselineIssueIds.has(issue.id));
  checks.push({label:'调整后无新增硬性冲突',pass:newBlocking.length===0,detail:newBlocking.length?newBlocking.slice(0,2).map(x=>x.title).join('、'):'本次调整未引入新的硬性冲突'});
  if(remainingIssues.length)checks.push({label:'仍有独立风险待处理',pass:true,warning:true,detail:`另有${remainingIssues.length}项原有问题不受本次调整影响，请在后续队列中继续处理`});
  return checks;
}

function shell(content){
  const nav=[['dashboard','list-checks','班前处置'],['final','clipboard-check','最终计划'],['workers','users','工友档案'],['rules','book-open-check','规则依据'],['logs','history','执行记录']];
  return `<div class="app-shell"><aside class="sidebar"><div class="brand"><span class="brand-mark">${icon('hard-hat')}</span><div><strong>安龄工友</strong><small>安全适配与经验传承</small></div></div><div class="nav-label">班前工作流</div><nav class="nav-list">${nav.map(([id,ic,label])=>`<button class="nav-button ${state.view===id?'active':''}" data-view="${id}">${icon(ic)}<span>${label}</span></button>`).join('')}</nav><div class="sidebar-note"><strong>班前处置原则</strong>班组长确认派工；仅标红事项由安全员处理，重大或特种作业再升级专业复核。<div class="privacy-line">${icon('lock-keyhole')}<span>模拟数据 · 人工最终决策</span></div></div></aside><main class="workspace"><header class="topbar"><div class="project-switch"><span class="project-icon">${icon('building-2')}</span><div><strong>滨江人才公寓项目</strong><small>明日计划 · 2026年8月18日</small></div></div><div class="top-actions"><span class="simulation-badge">${esc(state.dataSource)}</span><span class="workbench-badge">${icon('clipboard-check')} 班前派工工作台</span><button class="icon-button" id="importButton" title="导入Excel、CSV或JSON">${icon('upload')}</button><button class="icon-button" id="resetButton" title="重置示例数据">${icon('rotate-ccw')}</button></div></header>${content}<nav class="mobile-nav">${nav.slice(0,4).map(([id,ic,label])=>`<button class="${state.view===id?'active':''}" data-view="${id}">${icon(ic)}${label}</button>`).join('')}</nav></main></div>`;
}
function heading(title,desc,actions=''){return `<div class="page-heading"><div><h1>${title}</h1><p>${desc}</p></div>${actions?`<div class="heading-actions">${actions}</div>`:''}</div>`;}
function metric(label,value,note,ic,noteClass=''){return `<div class="metric"><div class="metric-label"><span>${label}</span>${icon(ic)}</div><div class="metric-value">${value}</div><div class="metric-note ${noteClass}">${note}</div></div>`;}
function statusPill(status){const done=completedStatuses.has(status),label=flowLabels[status]||'待安全员处理';return `<span class="status-pill ${done?'done':status==='review_rejected'||status==='worker_rejected'?'high':status?'medium':'neutral'}">${label}</span>`;}

function operationPipeline(){return `<section class="operation-pipeline" aria-label="班前派工处理流程"><div class="pipeline-title"><span>${icon('route')}</span><div><strong>今天怎么处理</strong><small>常规任务走班组确认；只有标红任务进入安全员处置。</small></div></div><div class="pipeline-steps"><div><span>1</span><strong>录入计划</strong><small>施工员 / 班组长</small></div><i>${icon('arrow-right')}</i><div><span>2</span><strong>系统分析</strong><small>任务、人员、天气</small></div><i>${icon('arrow-right')}</i><div><span>3</span><strong>确认派工</strong><small>班组长</small></div><i>${icon('arrow-right')}</i><div><span>4</span><strong>执行记录</strong><small>班前交底与反馈</small></div></div><div class="pipeline-exception">${icon('shield-alert')} 标红事项：安全员确认措施；重大或特种作业才发起专业复核。</div></section>`;}

function dashboard(){
  const risks=calculateRisks(),actions=`<button class="button secondary" id="templateButton">${icon('file-spreadsheet')}下载 Excel 模板</button>`;
  const weatherMeta=state.weather.updatedAt?`${state.weather.source} · ${state.weather.updatedAt}`:`${state.weather.source} · 未同步`;
  const context=`<section class="operation-context"><div class="context-main"><span class="context-icon">${icon('cloud-sun')}</span><div><strong>明日环境</strong><small>${esc(state.weather.location)} · ${esc(state.weather.condition)} · 午间最高 ${state.weather.heatTemp??state.weather.temp}°C</small><em>${esc(weatherMeta)}</em></div></div><button class="context-weather" id="weatherButton" title="手动修改环境参数"><strong>${state.weather.temp}°C</strong><span>环境参数 ${icon('pencil')}</span></button><button class="context-sync" id="weatherSyncButton" ${state.weatherSyncing?'disabled':''}>${icon(state.weatherSyncing?'loader-circle':'cloud-download')}<span>${state.weatherSyncing?'同步中…':'同步天气'}</span></button><div class="context-note">${state.tasks.length}项任务 · ${state.assignments.length}条分配</div></section>`;
  if(state.assistantMode==='analyzed')return `<div class="content assistant-page">${heading('班前处置','按任务完成调整、确认与交接；系统不会替代现场开工许可。',actions)}${context}${dispatchWorkbench(risks)}</div>`;
  const draftPanel=state.assistantMode==='draft'&&state.assistantDraft?assistantDraftPanel(state.assistantDraft):assistantSourcePanel();
  return `<div class="content assistant-page planning-page">${heading('录入今日施工计划','先整理任务、人员和时间；确认草稿后再进入班前处置。',actions)}${context}${draftPanel}</div>`;
}

function assistantDraftPanel(draft){return `<section class="assistant-draft panel"><div class="panel-head"><div><span class="eyebrow">AI 已整理</span><h2>${esc(draft.summary||'待确认施工计划')}</h2><p>逐项核对任务；AI 未能确定的内容必须由现场人员补充。</p></div><span class="status-pill medium">待确认草稿</span></div><div class="draft-task-list">${draft.tasks.map((task,index)=>{const people=draft.assignments.filter(item=>item.taskIndex===index).map(item=>workerById(item.workerId)?.name||item.workerId).join('、');return `<div class="draft-task"><div class="draft-task-head"><strong>${esc(task.name)}</strong><div><button class="draft-task-action" data-edit-draft-task="${index}" title="编辑任务">${icon('pencil')}</button><button class="draft-task-action danger" data-delete-draft-task="${index}" title="删除任务">${icon('trash-2')}</button></div></div><small>${esc(task.start)}-${esc(task.end)} · ${esc(task.area)} · ${people||'待分配人员'}</small></div>`;}).join('')}</div>${draft.ambiguities?.length?`<div class="draft-ambiguities">${icon('circle-alert')} ${draft.ambiguities.map(item=>esc(item)).join('；')}</div>`:''}<div class="assistant-footer"><button class="button secondary" id="discardDraftButton">返回修改</button><button class="button secondary" id="addDraftTaskButton">${icon('plus')}新增任务</button><button class="button primary" id="applyDraftButton">${icon('sparkles')}确认并生成建议</button></div></section>`;}
function assistantSourcePanel(){
  const source=state.planSource||'notice',sources=[['notice','message-square-text','粘贴施工通知'],['excel','file-spreadsheet','上传计划 Excel'],['manual','list-plus','逐项手动录入']];
  const sourceContent=source==='notice'?`<div class="source-body"><label class="source-label" for="dailyPlanInput">施工通知或班组派工内容</label><textarea id="dailyPlanInput" placeholder="例如：明天上午 8 点，张建华在 6 楼东立面砌墙；王德胜中午在基坑南侧做混凝土养护。">${esc(state.assistantInput)}</textarea><div class="source-hint">${icon('scan-text')} 系统会提取作业内容、地点、时间和已提到的工友；不确定的信息会标记为待补充。</div><div class="assistant-console-actions"><button class="button secondary" id="demoAssistantButton">${icon('play')}填入示例</button><button class="button primary" id="assistantAnalyzeButton">${icon('sparkles')}整理为任务草稿</button></div></div>`:source==='excel'?`<div class="source-body source-upload"><span class="source-upload-icon">${icon('file-up')}</span><div><strong>导入已填写的施工计划</strong><p>支持本系统模板中的“施工计划”和“人员分配”工作表。</p></div><button class="button primary" id="sourceImportButton">${icon('upload')}选择 Excel 文件</button></div>`:`<div class="source-body source-manual"><div><strong>按任务逐项录入</strong><p>适合任务较少或需要现场补充的班前安排。</p></div><div class="source-manual-stats"><span><strong>${state.tasks.length}</strong>项任务</span><span><strong>${state.assignments.length}</strong>条分配</span></div><div class="assistant-console-actions"><button class="button secondary" id="sourceManualAdd">${icon('plus')}新增一项作业</button><button class="button primary" id="sourceAnalyzeCurrent">${icon('sparkles')}生成当前计划建议</button></div></div>`;
  return `<section class="assistant-console"><div class="assistant-console-head"><span class="assistant-mark">${icon('sparkles')}</span><div><h2>先告诉我，计划从哪里来？</h2><p>选择一种输入方式，确认任务草稿后再生成适配派工建议。</p></div></div><div class="source-tabs">${sources.map(([id,ic,label])=>`<button class="source-tab ${source===id?'active':''}" data-plan-source="${id}">${icon(ic)}<span>${label}</span></button>`).join('')}</div>${sourceContent}</section>`;
}
function recommendationFor(risk){const worker=workerById(risk.workerId),task=taskById(risk.taskId);if(risk.type==='height'||risk.type==='duration'){const candidate=candidatePool(risk,'reorganize')[0];return {title:candidate?`${candidate.name}接替${task?.name||'原任务'}`:'为原任务补位',detail:worker?`${worker.name}转为地面经验指导或质量带教。`:'需重新匹配人员',tone:'teal'};}if(risk.type==='heat')return {title:'调整至早晚时段作业',detail:'避开午间高温窗口，并确认轮休与饮水条件。',tone:'amber'};if(risk.type==='heavy')return {title:'增加机械辅助或协作轮换',detail:worker?`${worker.name}转为清点核对，降低直接搬运负荷。`:'绑定协作人员后复检',tone:'teal'};if(risk.type==='wind'||risk.type==='rain')return {title:'暂停露天高处作业并复核',detail:'等待环境条件满足后，再由安全员确认恢复安排。',tone:'red'};return {title:'补充信息后人工复核',detail:'当前信息不足以生成安全派工建议。',tone:'amber'};}
function taskOutput(task,risks){
  const assigned=assignmentsForTask(task.id),executionAssigned=assigned.filter(isExecutionAssignment),people=assigned.map(a=>`${workerById(a.workerId)?.name||a.workerId}${a.role==='经验指导'?'（指导）':''}`).join('、')||'待分配人员',pending=risks.filter(r=>!isSafetyHandled(r)),actions=[...new Set(pending.map(r=>recommendationFor(r).title))],vacancies=Math.max(0,Number(task.people||1)-executionAssigned.length),candidates=vacancies?recommendedCandidatesForTask(task):[];
  if(!pending.length&&state.dispatchConfirmed[task.id])return {tone:'ready',label:'班组已确认派工',icon:'circle-check',people,action:'已完成班前交底记录，等待执行反馈。',detail:`${task.start}-${task.end} · ${task.area} · ${executionAssigned.length}/${task.people}名执行人员到位`};
  if(!pending.length)return {tone:'ready',label:'可进入班组确认',icon:'circle-check',people,action:'班前交底后，由班组长确认资源并派工。',detail:`${task.start}-${task.end} · ${task.area} · ${executionAssigned.length}/${task.people}名执行人员到位`};
  const red=pending.some(r=>r.level==='high'||['wind','rain','qualification','staffing','schedule','data','missing'].includes(r.type));
  const candidateText=candidates.length?`优先候选：${candidates.slice(0,3).map(item=>item.worker.name).join('、')}`:'暂无可直接推荐人员';
  return {tone:red?'red':'amber',label:red?'暂不建议直接派工':'建议优化后确认',icon:red?'triangle-alert':'git-compare-arrows',people,action:vacancies?`待补${vacancies}人；${candidateText}`:actions.join('；'),detail:`${pending.length}项待处理：${pending.map(r=>r.title).join('、')}`,candidates,vacancies};
}
function safetyTodoPanel(pending){
  const red=pending.filter(risk=>risk.level==='high');
  if(!red.length)return '';
  const first=red[0],task=taskById(first.taskId);
  return `<section class="safety-todo"><div class="safety-todo-head"><span class="safety-todo-icon">${icon('shield-alert')}</span><div><span class="eyebrow">安全员待办</span><h2>先连续处理 ${red.length} 项标红事项</h2><p>每项提交后自动进入下一项；全部处理后，再由班组长按任务一次确认派工。</p></div><button class="button primary" data-quick-risk="${first.id}">处理第 1 项 ${icon('arrow-right')}</button></div><div class="safety-todo-list">${red.slice(0,3).map((risk,index)=>`<button class="safety-todo-row" data-quick-risk="${risk.id}"><span>${String(index+1).padStart(2,'0')}</span><div><strong>${esc(risk.title)}</strong><small>${esc(risk.summary)}</small></div><em>${esc(recommendationFor(risk).title)} ${icon('chevron-right')}</em></button>`).join('')}${red.length>3?`<div class="safety-todo-more">另有 ${red.length-3} 项，按优先级继续处理</div>`:''}</div></section>`;
}
function aiDispatchPanel(){const draft=state.aiDispatchDraft;if(!draft)return `<section class="ai-dispatch-panel"><div><span class="eyebrow">AI 协同草案</span><h2>生成“执行 + 经验指导”建议</h2><p>AI 基于五维候选画像生成建议；资格、适岗、排班与风险仍由系统规则兜底。</p></div><button class="button secondary" id="aiDispatchButton" ${state.aiDispatchLoading?'disabled':''}>${icon(state.aiDispatchLoading?'loader-circle':'sparkles')}${state.aiDispatchLoading?'正在研判…':'生成协同草案'}</button></section>`;const rows=draft.recommendations.map(item=>{const task=taskById(item.taskId),candidate=task&&recommendedCandidatesForTask(task).find(x=>item.executionWorkerIds?.includes(x.worker.id));return `<article class="ai-dispatch-card"><div><span class="status-pill neutral">${esc(task?.name||item.taskId)}</span><h3>${esc(item.executionSuggestion||'待班组确认现场执行人员')}</h3><p>${item.mentorSuggestion?`经验指导：${esc(item.mentorSuggestion)}${item.experienceGoal?` · ${esc(item.experienceGoal)}`:''}`:'当前不建议额外设置经验指导'}</p></div><div class="ai-dispatch-reasons"><strong>适配理由</strong>${item.reasons.map(reason=>`<span>${icon('check')} ${esc(reason)}</span>`).join('')}${candidate?fiveDimensionPanel(candidate.dimensions):''}</div><div class="ai-dispatch-points"><strong>仍需确认</strong>${item.confirmationPoints.length?item.confirmationPoints.map(point=>`<span>${esc(point)}</span>`).join(''):'<span>班组长确认班前条件</span>'}</div></article>`;}).join('');return `<section class="ai-dispatch-panel expanded"><div class="ai-dispatch-header"><div><span class="eyebrow">AI 五维协同草案</span><h2>${esc(draft.summary||'待班组确认的协同派工建议')}</h2></div><button class="icon-button" id="aiDispatchButton" title="重新生成协同草案" ${state.aiDispatchLoading?'disabled':''}>${icon(state.aiDispatchLoading?'loader-circle':'refresh-cw')}</button></div>${draft.missingInfo.length?`<div class="ai-missing-info">${icon('circle-alert')} <strong>仍需补充：</strong>${draft.missingInfo.map(item=>esc(item)).join('；')}</div>`:''}<div class="ai-dispatch-list">${rows||'<div class="empty">当前任务未形成额外协同建议</div>'}</div></section>`;}
function taskStage(task,risks){
  const taskRisks=risks.filter(risk=>risk.taskId===task.id),unhandled=taskRisks.filter(risk=>!isSafetyHandled(risk));
  if(state.dispatchConfirmed[task.id])return {id:'confirmed',label:'已确认派工',detail:'已完成班前交底记录'};
  if(!unhandled.length)return {id:'ready',label:'可直接确认',detail:'可完成班前交底后派工'};
  const hasHandoff=unhandled.some(risk=>['review_requested','safety_approved','leader_approved'].includes(state.decisions[risk.id]?.status));
  if(hasHandoff)return {id:'handoff',label:'等待安全确认',detail:'安全措施或专业复核完成后自动回到队列'};
  return {id:'action',label:'需要调整',detail:`${unhandled.length}项问题待处理`};
}
function taskQueueRow(task,risks){
  const stage=taskStage(task,risks),assigned=assignmentsForTask(task.id),execution=assigned.filter(isExecutionAssignment).length;
  return `<button class="workbench-task ${state.selectedTaskId===task.id?'active':''} ${stage.id}" data-select-task="${task.id}"><span class="workbench-task-dot"></span><span class="workbench-task-body"><strong>${esc(task.name)}</strong><small>${esc(task.start)}-${esc(task.end)} · ${execution}/${task.people}名执行人员</small></span><span class="status-pill ${stage.id==='action'?'high':stage.id==='handoff'?'medium':'done'}">${stage.label}</span></button>`;
}
function aiCandidatePools(){return state.tasks.map(task=>{const assigned=assignmentsForTask(task.id),execution=assigned.filter(isExecutionAssignment).map(item=>item.workerId),mentors=assigned.filter(item=>['经验指导','经验型任务'].includes(item.role)).map(item=>item.workerId),vacancies=Math.max(0,Number(task.people||1)-execution.length);return {taskId:task.id,executionWorkerIds:[...new Set([...execution,...(vacancies?recommendedCandidatesForTask(task).map(item=>item.worker.id):[])])],mentorWorkerIds:[...new Set([...mentors,...recommendedMentorsForTask(task).map(item=>item.worker.id)])]};});}
function aiMatchProfiles(){return state.tasks.flatMap(task=>recommendedCandidatesForTask(task).map(item=>({taskId:task.id,workerId:item.worker.id,workerName:item.worker.name,totalScore:item.score,dimensions:item.dimensions.map(({label,score,max,detail})=>({label,score,max,detail}))})));}
function aiAdoptableWorkers(task,recommendation,type){const assigned=new Set(assignmentsForTask(task.id).map(item=>item.workerId)),allowed=(type==='execution'?recommendedCandidatesForTask(task):recommendedMentorsForTask(task)).map(item=>item.worker),rawIds=type==='execution'?recommendation.executionWorkerIds:recommendation.mentorWorkerIds,suggested=Array.isArray(rawIds)?rawIds:[];if(!Array.isArray(rawIds))return allowed.filter(worker=>!assigned.has(worker.id)).slice(0,1);return suggested.filter(id=>!assigned.has(id)).map(id=>allowed.find(worker=>worker.id===id)).filter(Boolean);}
function fiveDimensionPanel(dimensions=[]){
  if(!Array.isArray(dimensions)||!dimensions.length)return '';
  return `<div class="five-dimension-panel"><strong>${icon('sparkles')} AI 五维适配</strong><div>${dimensions.map(item=>`<span><b>${esc(item.label)}</b><em>${item.score}/${item.max}</em><small>${esc(item.detail)}</small></span>`).join('')}</div></div>`;
}
function candidateRationale(item){
  const reasons=Array.isArray(item?.reasons)?item.reasons:[];
  return `${fiveDimensionPanel(item?.dimensions)}<div class="candidate-rationale"><strong>${icon('sparkles')} 智能适配理由</strong><ul>${reasons.map(reason=>`<li>${esc(reason)}</li>`).join('')}</ul></div>`;
}
function assignmentMatchReasons(task,assignment){
  if(Array.isArray(assignment?.matchReasons)&&assignment.matchReasons.length)return assignment.matchReasons;
  const worker=workerById(assignment?.workerId);
  return worker?candidateReasonsForTask(task,worker):[];
}
function assignedReasonPanel(task,assignments){
  const execution=assignments.filter(isExecutionAssignment);
  if(!execution.length)return '';
  return `<section class="detail-section assigned-reasons"><div class="detail-section-head"><strong>已安排执行人员的适配理由</strong><small>随派工记录保存，并在最终派工单中保留</small></div><div class="candidate-list">${execution.map(assignment=>{const worker=workerById(assignment.workerId),reasons=assignmentMatchReasons(task,assignment);return `<div class="candidate-row assigned"><span class="candidate-rank">${icon('user-check')}</span><div><strong>${esc(worker?.name||assignment.workerId)} <small>${esc(worker?.trade||'待核对')} · ${esc(assignment.role)}</small></strong>${candidateRationale({reasons})}</div></div>`;}).join('')}</div></section>`;
}
function aiTaskInsight(task){
  const modelRecommendation=state.aiDispatchDraft?.recommendations?.find(item=>item.taskId===task.id);
  const recommendation=modelRecommendation||localDispatchDraft().recommendations.find(item=>item.taskId===task.id);
  if(!recommendation)return '';
  const preview=!modelRecommendation;
  const execution=aiAdoptableWorkers(task,recommendation,'execution'),mentors=aiAdoptableWorkers(task,recommendation,'mentor');
  const fallback=recommendation.selectionSource==='rule_fallback'||!Array.isArray(recommendation.executionWorkerIds)||!Array.isArray(recommendation.mentorWorkerIds);
  const executionText=fallback?recommendation.executionSuggestion||`系统已校验候选：${execution.map(worker=>worker.name).join('、')||'暂无可新增人选'}`:recommendation.executionSuggestion||execution.map(worker=>worker.name).join('、')||'请由班组长确认现场执行人员';
  const mentorText=fallback?recommendation.mentorSuggestion||mentors.map(worker=>worker.name).join('、'):recommendation.mentorSuggestion||mentors.map(worker=>worker.name).join('、');
  const actions=`${execution.map(worker=>`<button class="button secondary" data-add-recommended-task="${task.id}" data-recommended-worker="${worker.id}">${icon('user-plus')}采用 ${esc(worker.name)} 为执行</button>`).join('')}${mentors.map(worker=>`<button class="button secondary" data-add-mentor-task="${task.id}" data-mentor-worker="${worker.id}">${icon('graduation-cap')}采用 ${esc(worker.name)} 为指导</button>`).join('')}`;
  const reasons=(recommendation.reasons||[]).filter(Boolean);
  const reasonBlock=reasons.length?`<div class="ai-reason-list"><strong>${preview?'智能判断依据':'AI 判断理由'}</strong>${reasons.map(reason=>`<span>${icon('check')} ${esc(reason)}</span>`).join('')}</div>`:'<small>请结合现场条件确认。</small>';
  const sourceNote=preview?'智能适配预判基于任务、工友档案、适岗、资格与排班规则。可生成模型补充判断。':fallback?'模型未给出具体编号，采用动作来自系统已校验候选池。':'模型建议已通过系统候选池二次校验。';
  return `<section class="task-ai-insight has-draft"><div><span class="eyebrow">${preview?'智能适配预判':'AI 协同建议'}</span><strong>${esc(executionText)}</strong><small>${mentorText?`经验指导：${esc(mentorText)}。`:''}</small>${reasonBlock}<small class="ai-verified-note">${esc(sourceNote)}</small>${actions?`<div class="ai-adopt-actions">${actions}</div>`:'<small class="ai-verified-note">当前没有可新增采用的人员。</small>'}</div><button class="button secondary ai-explain-button" data-build-ai-dispatch ${state.aiDispatchLoading?'disabled':''}>${icon(state.aiDispatchLoading?'loader-circle':'sparkles')}${state.aiDispatchLoading?'生成中…':preview?'生成模型解释':'更新 AI 判断'}</button></section>`;
}
function aiDailyBrief(){const draft=state.aiDispatchDraft;if(!draft)return `<section class="ai-daily-brief"><span>${icon(state.aiDispatchLoading?'loader-circle':'sparkles')}</span><div><strong>AI 班前研判</strong><small>${state.aiDispatchLoading?'正在根据任务、天气和五维候选画像研判…':'计划变化后将自动生成研判结论。'}</small></div></section>`;return `<section class="ai-daily-brief ready"><span>${icon('sparkles')}</span><div><strong>AI 班前研判</strong><small>${esc(draft.summary||'已生成协同派工建议，请逐项确认。')}${draft.missingInfo?.length?` · 待补：${esc(draft.missingInfo.join('；'))}`:''}</small></div><button class="icon-button" data-build-ai-dispatch title="现场信息变化后重新研判" ${state.aiDispatchLoading?'disabled':''}>${icon(state.aiDispatchLoading?'loader-circle':'refresh-cw')}</button></section>`;}
function taskWorkbenchDetail(task,risks){
  const stage=taskStage(task,risks),taskRisks=risks.filter(risk=>risk.taskId===task.id),unhandled=taskRisks.filter(risk=>!isSafetyHandled(risk)),assigned=assignmentsForTask(task.id),execution=assigned.filter(isExecutionAssignment),mentors=assigned.filter(item=>['经验指导','经验型任务'].includes(item.role)),vacancies=Math.max(0,Number(task.people||1)-execution.length),candidates=vacancies?recommendedCandidatesForTask(task):[],mentorCandidates=!mentors.length?recommendedMentorsForTask(task):[];
  const people=assigned.length?assigned.map(item=>`${workerById(item.workerId)?.name||item.workerId}（${item.role}）`).join('、'):'尚未安排人员';
  const nextAction=stage.id==='ready'?`<button class="button primary" id="confirmDispatchButton">${icon('clipboard-check')}确认派工</button>`:stage.id==='confirmed'?`<span class="detail-done">${icon('circle-check')} 已完成班前确认</span>`:stage.id==='handoff'?`<div class="detail-handoff">${icon('shield-check')} 已自动交给安全员处理；班组长无需切换角色。</div>`:`<button class="button primary" data-risk="${unhandled[0]?.id}">${icon('shield-alert')}处理当前问题</button>`;
  const candidatePanel=vacancies?`<section class="detail-section"><div class="detail-section-head"><strong>补人建议</strong><small>仅显示已通过资格、适岗和时间校验的人员</small></div>${candidates.length?`<div class="candidate-list">${candidates.slice(0,3).map((item,index)=>`<div class="candidate-row"><span class="candidate-rank">${index+1}</span><div><strong>${esc(item.worker.name)} <small>${esc(item.worker.trade)} · ${item.worker.years}年经验</small></strong>${candidateRationale(item)}</div><button class="button secondary" data-add-recommended-task="${task.id}" data-recommended-worker="${item.worker.id}">采用</button></div>`).join('')}</div>`:'<p class="detail-empty">暂无可直接采用的候选人，请补充人员档案或调整任务。</p>'}</section>`:'';
  const mentorPanel=task.experienceGoal?`<section class="detail-section"><div class="detail-section-head"><strong>经验协同</strong><small>${esc(task.experienceGoal)}</small></div>${mentors.length?`<p class="detail-note">已安排：${esc(mentors.map(item=>workerById(item.workerId)?.name||item.workerId).join('、'))}。经验指导不占执行人数。</p>`:mentorCandidates.length?`<div class="candidate-list">${mentorCandidates.slice(0,2).map((item,index)=>`<div class="candidate-row mentor"><span class="candidate-rank">${index+1}</span><div><strong>${esc(item.worker.name)} <small>${item.worker.years}年经验</small></strong>${candidateRationale(item)}</div><button class="button secondary" data-add-mentor-task="${task.id}" data-mentor-worker="${item.worker.id}">设为指导</button></div>`).join('')}</div>`:'<p class="detail-empty">暂无满足条件的经验指导候选人。</p>'}</section>`:'';
  return `<section class="workbench-detail"><div class="workbench-detail-head"><div><span class="eyebrow">当前处理任务</span><h2>${esc(task.name)}</h2><p>${esc(task.start)}-${esc(task.end)} · ${esc(task.area)} · ${esc(task.environment)}</p></div><span class="status-pill ${stage.id==='action'?'high':stage.id==='handoff'?'medium':'done'}">${stage.label}</span></div><div class="detail-facts"><div><span>现场执行</span><strong>${execution.length}/${task.people}人</strong></div><div><span>当前安排</span><strong>${esc(people)}</strong></div><div><span>下一步</span>${nextAction}</div></div>${assignedReasonPanel(task,assigned)}${unhandled.length?`<section class="detail-section"><div class="detail-section-head"><strong>本任务待处理</strong><small>先处理首项，完成后系统自动复检。</small></div><div class="detail-risk-list">${unhandled.map(risk=>`<button class="detail-risk" data-risk="${risk.id}"><span class="status-pill ${risk.level==='high'?'high':'medium'}">${risk.level==='high'?'需处理':'待优化'}</span><span><strong>${esc(risk.title)}</strong><small>${esc(risk.basis)}</small></span>${icon('chevron-right')}</button>`).join('')}</div></section>`:''}${aiTaskInsight(task)}${candidatePanel}${mentorPanel}</section>`;
}
function dispatchWorkbench(risks){
  if(!state.tasks.some(task=>task.id===state.selectedTaskId))state.selectedTaskId=state.tasks[0]?.id||'';
  const groups={action:[],handoff:[],ready:[],confirmed:[]};state.tasks.forEach(task=>groups[taskStage(task,risks).id].push(task));
  const selected=taskById(state.selectedTaskId)||state.tasks[0],queueGroup=(title,tasks,id)=>tasks.length?`<div class="workbench-group"><div class="workbench-group-head"><strong>${title}</strong><span>${tasks.length}</span></div>${tasks.map(task=>taskQueueRow(task,risks)).join('')}</div>`:'';
  return `<section class="workbench-summary"><div><span class="eyebrow">今日班前派工</span><h2>${groups.action.length?`优先处理 ${groups.action.length} 项任务`:'可以开始确认常规派工'}</h2><p>安全例外会自动进入安全员队列；班组长只需处理回到自己队列的任务。</p></div><div class="workbench-summary-stats"><span><strong>${groups.ready.length}</strong>可确认</span><span><strong>${groups.action.length}</strong>需调整</span><span><strong>${groups.handoff.length}</strong>等待安全确认</span><span><strong>${groups.confirmed.length}</strong>已确认</span></div><button class="button secondary" id="returnToInputButton">${icon('file-pen-line')}录入 / 更新计划</button></section>${aiDailyBrief()}<div class="dispatch-workbench"><aside class="workbench-queue"><div class="workbench-queue-title"><strong>任务队列</strong><small>按下一步动作分组</small></div>${queueGroup('需要你处理',groups.action,'action')}${queueGroup('等待安全确认',groups.handoff,'handoff')}${queueGroup('可直接确认',groups.ready,'ready')}${queueGroup('已完成确认',groups.confirmed,'confirmed')}</aside><main>${selected?taskWorkbenchDetail(selected,risks):'<div class="empty">请先录入至少一项施工任务。</div>'}</main></div><details class="original-plan-details"><summary>查看原始计划与人员分配</summary><div class="schedule-wrap">${scheduleTable(originalPlan(),risks,false)}</div></details>`;
}
function assistantResultPanel(risks,pending,safeTasks){return dispatchWorkbench(risks);}

function scheduleTable(plan,risks,isFinal){
  return `<table class="schedule-table"><thead><tr><th>施工任务</th><th>人员分配</th><th>时间 / 区域</th><th>${isFinal?'二次扫描':'复核状态'}</th><th></th></tr></thead><tbody>${plan.tasks.map(task=>{
    const assigned=assignmentsForTask(task.id,plan.assignments),taskRisks=risks.filter(r=>r.taskId===task.id),pending=taskRisks.filter(r=>!completedStatuses.has(state.decisions[r.id]?.status));
    const people=assigned.map(a=>{const w=workerById(a.workerId,plan.workers);return `<div class="assignment-chip"><span>${esc(w?.name||a.workerId)}</span><small>${esc(a.role)}</small></div>`;}).join('');
    const status=isFinal?(taskRisks.length?'<span class="status-pill high">仍需处理</span>':'<span class="status-pill done">复检通过</span>'):(pending.some(r=>r.level==='high')?'<span class="status-pill high">高风险</span>':pending.length?'<span class="status-pill medium">建议优化</span>':taskRisks.length?'<span class="status-pill done">已执行</span>':'<span class="status-pill done">适配</span>');
    return `<tr><td><div class="task-name">${esc(task.name)}</div><div class="task-meta">需求${task.people}人 · ${esc(task.intensity)}强度 · ${esc(task.requiredCert||'无特殊证书')}</div></td><td><div class="assignment-list">${people||'<span class="status-pill high">未分配</span>'}</div></td><td>${esc(task.start)}-${esc(task.end)}<div class="task-meta">${esc(task.area)}</div></td><td>${status}</td><td><div class="row-actions">${!isFinal&&taskRisks[0]?`<button class="row-action" data-risk="${taskRisks[0].id}">复核</button>`:''}${!isFinal?`<button class="row-action" data-assign-task="${task.id}">人员</button><button class="row-action" data-edit-task="${task.id}">编辑</button>`:''}</div></td></tr>`;
  }).join('')||'<tr><td colspan="5"><div class="empty">尚无施工任务</div></td></tr>'}</tbody></table>`;
}

function scanPanel(risks){return `<div class="scan-state"><div class="scan-title"><span class="scan-icon">${icon(state.scanning?'loader-circle':'badge-check')}</span><div><strong>${state.scanning?'正在执行全局扫描…':'原计划扫描已完成'}</strong><small>规则库版本1.0-prototype</small></div></div><div class="progress-track"><div class="progress-fill ${state.scanning?'scanning':''}"></div></div><div class="scan-foot"><span>${state.tasks.length}项任务 · ${state.assignments.length}条分配</span><span>${risks.length}项需关注</span></div></div>`;}
function riskItem(risk){const decision=state.decisions[risk.id];return `<button class="risk-item" data-risk="${risk.id}"><span class="risk-bar ${risk.level==='medium'?'medium':''}"></span><span><strong>${esc(risk.title)}</strong><small>${esc(risk.summary)}${decision?` · ${flowLabels[decision.status]}`:''}</small></span>${icon(completedStatuses.has(decision?.status)?'circle-check-big':'chevron-right')}</button>`;}
function riskQueueItem(risk,index){const decision=state.decisions[risk.id],status=decision?.status,next=!status?'由安全员制定方案':status==='review_requested'?'等待专业复核':status==='review_passed'?'等待安全员确认':status==='safety_approved'?'等待班组长确认资源':status==='leader_approved'?'等待工友确认':status==='worker_accepted'?'等待执行登记':'等待重新制定方案';return `<button class="queue-item ${risk.level==='high'?'urgent':''}" data-risk="${risk.id}"><span class="queue-order">${String(index+1).padStart(2,'0')}</span><span class="queue-body"><span class="queue-title"><strong>${esc(risk.title)}</strong>${statusPill(status)}</span><small>${esc(risk.summary)} · ${esc(risk.basis)}</small><span class="queue-next">${icon('arrow-right')} ${esc(next)}</span></span><span class="queue-go">${icon('chevron-right')}</span></button>`;}

function experienceRecordPanel(){const tasks=state.tasks.filter(task=>task.experienceGoal);if(!tasks.length)return '';return `<section class="panel experience-record-panel"><div class="panel-head"><div><span class="eyebrow">班后经验闭环</span><h2>记录经验传承结果</h2><p>由班组长登记一次，不要求工友逐项线上确认。</p></div></div><div class="experience-record-list">${tasks.map(task=>{const record=state.experienceRecords[task.id],mentors=assignmentsForTask(task.id).filter(item=>item.role==='经验指导'||item.role==='经验型任务').map(item=>workerById(item.workerId)?.name||item.workerId).join('、')||'未安排经验指导';return `<div class="experience-record-row"><span class="experience-icon">${icon('graduation-cap')}</span><div><strong>${esc(task.name)} · ${esc(task.experienceGoal)}</strong><small>经验指导：${esc(mentors)}${record?` · 已记录：${esc(record.result)}`:' · 尚未登记班后结果'}</small></div><button class="button secondary" data-experience-record="${task.id}">${record?'查看 / 修改':'登记结果'}</button></div>`;}).join('')}</div></section>`;}

function finalDispatchTable(rows){
  if(!rows.length)return '<div class="empty">当前没有可展示的派工记录。</div>';
  return `<div class="schedule-wrap"><table class="final-dispatch-table"><thead><tr><th>状态</th><th>工友 / 角色</th><th>施工任务</th><th>时间 / 区域</th><th>班前要求</th></tr></thead><tbody>${rows.map(row=>`<tr class="${row['派工状态']==='班组已确认派工'?'ready':''}"><td><span class="status-pill ${row['派工状态']==='班组已确认派工'?'done':'medium'}">${esc(row['派工状态'])}</span></td><td><strong>${esc(row['工友'])}</strong><small>${esc(row['工种'])} · ${esc(row['任务角色'])}${row['经验指导人员']&&row['经验指导人员']!=='未安排'?`<br>经验指导：${esc(row['经验指导人员'])}`:''}</small></td><td><strong>${esc(row['施工任务'])}</strong><small>${esc(row['传承内容'])==='—'?'':`传承：${esc(row['传承内容'])}`}</small></td><td>${esc(row['作业时间'])}<small>${esc(row['作业区域'])}</small></td><td>${esc(row['班前要求'])}<small>${row['确认时间']?`确认：${esc(row['确认时间'])}`:'未完成班前确认'}</small></td></tr>`).join('')}</tbody></table></div>`;
}
function adjustmentSummary(plan){
  const completed=Object.values(state.decisions).filter(decision=>completedStatuses.has(decision.status));
  if(!completed.length)return '<div class="empty">尚无已落地的例外调整。</div>';
  return `<div class="adjustment-list">${completed.map(decision=>{const originalTask=taskById(decision.taskId),finalTask=taskById(decision.taskId,plan.tasks)||originalTask,originalWorker=workerById(decision.workerId),candidate=workerById(decision.candidateWorkerId);return `<div class="adjustment-row"><span class="change-icon">${icon('git-compare-arrows')}</span><div><strong>${esc(originalTask?.name||'任务调整')} · ${esc(decision.title)}</strong><small>原安排：${esc(originalWorker?.name||'任务级调整')} · ${esc(originalTask?.start||'—')}-${esc(originalTask?.end||'—')}<br>最终安排：${candidate?esc(candidate.name):'按措施执行'} · ${esc(finalTask?.start||'—')}-${esc(finalTask?.end||'—')} · ${flowLabels[decision.status]}</small></div><span class="status-pill done">已纳入派工单</span></div>`;}).join('')}</div>`;
}
function finalRiskTodo(risks){
  if(!risks.length)return '';
  return `<section class="final-risk-todo"><div class="final-risk-todo-head"><div><span class="eyebrow">必须完成的待办</span><h2>还有 ${risks.length} 项风险阻止派工</h2><p>每项已标明任务、原因和处理入口，处理后系统会自动复检。</p></div><span class="status-pill high">不可开工</span></div><div class="final-risk-list">${risks.map((risk,index)=>{const task=taskById(risk.taskId);return `<article class="final-risk-row"><span class="final-risk-order">${index+1}</span><div><strong>${esc(risk.title)}</strong><p>${esc(task?.name||'关联任务待确认')} · ${esc(risk.basis)}</p></div><button class="button primary" data-final-risk="${risk.id}" data-final-task="${risk.taskId}">定位并处理 ${icon('arrow-right')}</button></article>`;}).join('')}</div></section>`;
}
function finalPage(){
  const plan=finalPlan(),risks=finalRisks(),baseConfirmed=state.tasks.filter(task=>state.dispatchConfirmed[task.id]).length,taskConfirmations=plan.tasks.map(task=>taskConfirmation(task.id)),confirmedTasks=taskConfirmations.filter(item=>item.status==='班组已确认派工').length,pendingTasks=taskConfirmations.filter(item=>item.status!=='班组已确认派工').length,dispatchRows=finalDispatchRows(plan),unfilledRows=dispatchRows.filter(row=>row['工友']==='待补人员').length,ready=state.tasks.length>0&&baseConfirmed===state.tasks.length&&risks.length===0;
  const actions=ready?`<button class="button primary" id="reportButton">${icon('file-spreadsheet')}导出可执行派工单</button>`:`<button class="button secondary" id="previewReportButton">${icon('file-text')}导出调整预览</button><button class="button primary" id="returnToDispatchButton">${icon('arrow-left')}返回班前处置</button>`;
  const title=ready?'已确认派工单':'调整方案预览',description=ready?'全部任务已完成系统复检和班前确认，可作为本次班前交底辅助记录。':'当前方案尚未满足开工条件；请根据下方待办返回班前处置继续完成。';
  const next=ready?`<div class="final-ready-note">${icon('circle-check')} 本次派工已完成系统内确认，可导出班前交底使用。</div>`:`<div class="final-blocked-note">${icon('triangle-alert')} 仍有${pendingTasks}项待确认、${risks.length}项规则风险${unfilledRows?`、${unfilledRows}名人员待补`:''}。此页仅为调整预览，不可作为开工派工单。</div>`;
  return `<div class="content final-page">${heading(title,description,actions)}<section class="metrics">${metric('调整后任务',String(plan.tasks.length),plan.tasks.length===state.tasks.length?'未新增派生任务':`含${plan.tasks.length-state.tasks.length}项调整派生任务`,'list-checks')}${metric('已确认派工',`${confirmedTasks}/${plan.tasks.length}`,'按调整后任务口径统计','clipboard-check',pendingTasks?'warn':'good')}${metric('待处理风险',String(risks.length),risks.length?'未完成复检，不可开工':'最终复检通过','shield-alert',risks.length?'warn':'good')}${metric('派工状态',ready?'可执行':'不可执行',ready?'已具备系统内班前确认条件':'返回班前处置完成待办','flag',ready?'good':'warn')}</section>${next}${finalRiskTodo(risks)}<section class="panel final-dispatch-panel"><div class="panel-head"><div><span class="eyebrow">班前交底清单</span><h2>${ready?'最终逐人派工单':'当前调整后的逐人安排'}</h2><p>明确展示谁做什么、承担什么角色、何时何地作业及班前要求。</p></div><span class="status-pill ${ready?'done':'medium'}">${ready?'可执行':'仅预览'}</span></div>${finalDispatchTable(dispatchRows)}</section><section class="panel"><div class="panel-head"><div><h2>调整依据与落地结果</h2><p>保留原安排、最终安排和已经完成的处置状态，便于复核。</p></div></div>${adjustmentSummary(plan)}</section></div>`;
}

function experienceRecordModal(taskId){
  const task=taskById(taskId),current=state.experienceRecords[taskId]||{result:'已完成带教',participants:'',notes:''};if(!task)return;
  const mentors=assignmentsForTask(taskId).filter(item=>item.role==='经验指导'||item.role==='经验型任务').map(item=>workerById(item.workerId)?.name||item.workerId).join('、')||'未安排经验指导';
  openModal(`<form class="modal-body" id="experienceRecordForm"><div class="modal-header"><span class="status-pill neutral">班后经验记录</span><h2 id="modalTitle">${esc(task.name)}</h2><p>传承内容：${esc(task.experienceGoal)}。由班组长记录结果，作为后续推荐的参考。</p><button type="button" class="icon-button close-modal" data-close-modal>${icon('x')}</button></div><div class="experience-record-meta">${icon('users')} 经验指导：${esc(mentors)}</div><div class="form-grid">${formField('记录结果','result',current.result,'text',true,[['已完成带教','已完成带教'],['部分完成','部分完成'],['未完成','未完成']])}<label class="form-field"><span>参与工友</span><input name="participants" value="${esc(current.participants)}" placeholder="例如：何伟"></label><label class="form-field wide"><span>经验要点 / 质量问题</span><textarea name="notes" rows="4" placeholder="例如：完成砌体样板灰缝控制交底，无新增质量问题。">${esc(current.notes)}</textarea></label></div><div class="modal-actions"><button type="button" class="button secondary" data-close-modal>取消</button><button class="button primary" type="submit">保存班后记录</button></div></form>`);bindModalClose();
  $('#experienceRecordForm').onsubmit=event=>{event.preventDefault();const data=Object.fromEntries(new FormData(event.currentTarget));state.experienceRecords[taskId]={result:data.result,participants:data.participants.trim(),notes:data.notes.trim(),recordedAt:new Date().toISOString(),recordedBy:'班组长'};log('班组长 · 陈师傅',`登记经验传承结果：${task.name} · ${data.result}`,'已完成');save();closeModal();render();notify('班后经验记录已保存');};
}

function workersPage(){
  const buttons=[['all',`全部${state.workers.length}人`],['older','50岁及以上'],['attention','需要关注'],['experience','经验型']],list=state.workers.filter(worker=>{const q=state.search.toLowerCase(),match=!q||`${worker.name}${worker.trade}${worker.skills}`.toLowerCase().includes(q),f=state.profileFilter==='all'||state.profileFilter==='older'&&worker.age>=50||state.profileFilter==='attention'&&worker.fit.some(x=>!['正常适岗','一般关注'].includes(x))||state.profileFilter==='experience'&&worker.years>=25;return match&&f;}),actions=`<button class="button secondary" id="templateButton">${icon('file-spreadsheet')}数据模板</button><button class="button primary" id="addWorkerButton">${icon('user-plus')}新增工友</button>`;
  return `<div class="content">${heading('工友适配档案','50岁仅作为原型统计分组，不单独触发禁岗；适岗标签需记录来源和有效期。',actions)}<div class="toolbar"><div class="filter-group">${buttons.map(([id,label])=>`<button class="filter-button ${state.profileFilter===id?'active':''}" data-profile-filter="${id}">${label}</button>`).join('')}</div><input class="search-box" id="workerSearch" value="${esc(state.search)}" placeholder="搜索姓名、工种或技能"></div><div class="profiles">${list.map(profileCard).join('')||'<div class="empty">没有符合条件的工友</div>'}</div></div>`;
}
function profileCard(worker){const attention=worker.fit.some(x=>!['正常适岗','一般关注'].includes(x));return `<article class="profile"><div class="profile-top"><div class="profile-person"><span class="worker-avatar">${esc(worker.name[0])}</span><div><h3>${esc(worker.name)}</h3><p>${worker.age}岁 · ${esc(worker.trade)} · ${worker.years}年</p></div></div><span class="status-pill ${attention?'medium':'done'}">${attention?'需条件适配':'正常适岗'}</span></div><div class="profile-tags">${worker.fit.map(tag=>`<span class="mini-tag">${esc(tag)}</span>`).join('')}<span class="mini-tag">${esc(worker.cert)}</span></div><div class="profile-skill"><span>资格编码</span>${esc(worker.certCodes.join('、')||'未填写')}<br><span>适岗信息来源 / 有效期</span>${esc(worker.fitSource)} · ${esc(worker.fitValidUntil)}<br><span>经验与意愿</span>${esc(worker.skills)}<br>${esc(worker.preference)}</div><div class="profile-actions"><button class="row-action" data-edit-worker="${worker.id}">编辑档案</button></div></article>`;}

function rulesPage(){return `<div class="content">${heading('规则与证据状态','法规、项目阈值和系统校验分开呈现；所有非统一法定阈值均明确标注为人工复核提示。')}<section class="rule-disclaimer"><span>${icon('scale')}</span><div><strong>使用边界</strong><p>本系统提供班前风险提示与派工建议，不替代开工许可、法定安全检查、职业健康检查或专业鉴定。</p></div></section><div class="rule-groups">${rules.map(rule=>`<article class="rule-card"><div class="rule-head"><span class="rule-icon">${icon(rule.icon)}</span><div><h3>${rule.id} · ${rule.title}</h3><p>${rule.trigger}</p></div><span class="status-pill ${['已验证','已填法规依据','已填规范依据','已明确边界','已标注项目阈值'].includes(rule.review)?'done':'medium'}">${rule.review}</span></div><div class="rule-detail"><strong>${rule.type} · ${rule.version}</strong><dl class="rule-evidence"><div><dt>依据</dt><dd>${esc(rule.source)}</dd></div><div><dt>适用边界</dt><dd>${esc(rule.scope)}</dd></div><div><dt>系统动作</dt><dd>${esc(rule.action)}</dd></div></dl></div></article>`).join('')}</div></div>`;}
function logsPage(){const actions=`<button class="button secondary" id="jsonButton">${icon('braces')}导出JSON</button><button class="button primary" id="reportButton">${icon('file-spreadsheet')}导出Excel报告</button>`;return `<div class="content">${heading('执行与审计记录','先登记班后经验传承，再查看完整操作留痕。',actions)}${experienceRecordPanel()}<section class="audit-log-section"><div class="section-band-head"><div><span class="eyebrow">操作留痕</span><h2>班前与执行记录</h2></div><small>按时间倒序排列</small></div><div class="log-list">${state.logs.map(item=>`<div class="log-row"><time>${esc(item.time)}</time><span class="log-dot">${icon('check')}</span><div><strong>${esc(item.actor)}</strong><small>${esc(item.action)}</small></div><span class="status-pill ${item.status==='待确认'?'medium':'done'}">${esc(item.status)}</span></div>`).join('')}</div></section></div>`;}

function formField(label,name,value,type='text',required=false,options=null){const control=options?`<select name="${name}" ${required?'required':''}>${options.map(([v,t])=>`<option value="${esc(v)}" ${String(v)===String(value)?'selected':''}>${esc(t)}</option>`).join('')}</select>`:`<input name="${name}" type="${type}" value="${esc(value)}" ${required?'required':''}>`;return `<label class="form-field"><span>${label}${required?' *':''}</span>${control}</label>`;}

function draftTaskModal(index=null){
  const draft=state.assistantDraft;if(!draft)return;
  const isNew=index===null,task=isNew?{name:'',area:'',start:'08:00',end:'12:00',environment:'一般作业',intensity:'中',requiredCert:'',requiredCertCode:'',people:1,experienceGoal:''}:draft.tasks[index];
  openModal(`<form class="modal-body" id="draftTaskForm"><div class="modal-header"><span class="status-pill neutral">任务草稿</span><h2 id="modalTitle">${isNew?'补充一项作业':`编辑：${esc(task.name)}`}</h2><p>修改只作用于本次 AI 草稿。确认后才会进入适配分析。</p><button type="button" class="icon-button close-modal" data-close-modal>${icon('x')}</button></div><div class="form-grid">${formField('作业任务','name',task.name,'text',true)}${formField('作业区域','area',task.area,'text',true)}${formField('开始时间','start',task.start,'time',true)}${formField('结束时间','end',task.end,'time',true)}${formField('作业环境','environment',task.environment,'text',true)}${formField('劳动强度','intensity',task.intensity,'text',true,[['低','低'],['中','中'],['高','高']])}${formField('需求人数','people',task.people,'number',true)}${formField('所需证书','requiredCert',task.requiredCert)}${formField('证书编码','requiredCertCode',task.requiredCertCode)}<label class="form-field wide"><span>经验传承内容（可选）</span><input name="experienceGoal" value="${esc(task.experienceGoal||'')}"></label></div><div class="modal-actions"><button type="button" class="button secondary" data-close-modal>取消</button><button class="button primary" type="submit">保存到草稿</button></div></form>`);
  bindModalClose();
  $('#draftTaskForm').onsubmit=event=>{event.preventDefault();const data=Object.fromEntries(new FormData(event.currentTarget));const next={name:data.name.trim(),area:data.area.trim(),start:data.start,end:data.end,environment:data.environment.trim(),intensity:data.intensity,requiredCert:data.requiredCert.trim(),requiredCertCode:data.requiredCertCode.trim().toUpperCase(),people:Math.max(1,Number(data.people)||1),experienceGoal:data.experienceGoal.trim()};if(!next.name||!next.area)return notify('请填写作业任务和作业区域');if(timeNumber(next.end)<=timeNumber(next.start))return notify('结束时间必须晚于开始时间');if(isNew)draft.tasks.push(next);else draft.tasks[index]=next;save();closeModal();render();notify(isNew?'已补充任务草稿':'任务草稿已更新');};
}

function deleteDraftTask(index){
  const draft=state.assistantDraft,task=draft?.tasks[index];if(!task)return;
  if(!confirm(`确认从草稿中删除“${task.name}”吗？`))return;
  draft.tasks.splice(index,1);
  draft.assignments=draft.assignments.filter(item=>item.taskIndex!==index).map(item=>item.taskIndex>index?{...item,taskIndex:item.taskIndex-1}:item);
  draft.ambiguities=[...(draft.ambiguities||[]),`已人工删除任务：${task.name}`];
  save();render();notify('已删除任务草稿及其人员匹配');
}

function taskModal(id=null){
  const task=id?taskById(id):{id:nextId('T',state.tasks),name:'',area:'',start:'08:00',end:'12:00',environment:'一般作业',intensity:'中',requiredCertCode:'',requiredCert:'',people:1,experienceGoal:''};
  openModal(`<form class="modal-body" id="taskForm"><div class="modal-header"><span class="status-pill neutral">${id?'编辑任务':'新增任务'}</span><h2 id="modalTitle">${id?esc(task.name):'建立施工任务'}</h2><p>任务描述作业需求；有经验传承价值时可补充传承内容。</p><button type="button" class="icon-button close-modal" data-close-modal>${icon('x')}</button></div><div class="form-grid">${formField('任务编号','id',task.id,'text',true)}${formField('作业任务','name',task.name,'text',true)}${formField('作业区域','area',task.area,'text',true)}${formField('作业环境','environment',task.environment,'text',true)}${formField('开始时间','start',task.start,'time',true)}${formField('结束时间','end',task.end,'time',true)}${formField('劳动强度','intensity',task.intensity,'text',true,[['低','低'],['中','中'],['高','高']])}${formField('需求人数','people',task.people,'number',true)}${formField('证书名称','requiredCert',task.requiredCert)}${formField('证书标准编码','requiredCertCode',task.requiredCertCode)}<label class="form-field wide"><span>经验传承内容（可选）</span><input name="experienceGoal" value="${esc(task.experienceGoal||'')}" placeholder="例如：砌体样板、灰缝控制、节点检查"></label></div><div class="modal-actions">${id?'<button type="button" class="button danger" id="deleteTask">删除</button>':''}<button type="button" class="button secondary" data-close-modal>取消</button><button class="button primary" type="submit">保存任务</button></div></form>`);bindModalClose();
  $('#taskForm').onsubmit=event=>{event.preventDefault();const data=Object.fromEntries(new FormData(event.currentTarget)),next={id:data.id.trim(),name:data.name.trim(),area:data.area.trim(),start:data.start,end:data.end,environment:data.environment.trim(),intensity:data.intensity,requiredCertCode:data.requiredCertCode.trim().toUpperCase(),requiredCert:data.requiredCert.trim(),people:Number(data.people)||1,experienceGoal:data.experienceGoal.trim()};if(!next.id||!next.name)return notify('请填写任务编号和名称');if(timeNumber(next.end)<=timeNumber(next.start))return notify('结束时间必须晚于开始时间');if(state.tasks.some(x=>x.id===next.id&&x.id!==id))return notify('任务编号不能重复');if(id){state.tasks[state.tasks.findIndex(x=>x.id===id)]=next;state.assignments.forEach(a=>{if(a.taskId===id)a.taskId=next.id;});}else state.tasks.push(next);invalidatePlanningState(id?[id,next.id]:[next.id]);state.dataSource='已编辑数据';log(roleLabels[state.role],`${id?'更新':'新增'}任务：${next.name}`,'待确认');closeModal();render();if(!id)setTimeout(()=>assignmentModal(next.id),0);};
  if(id)$('#deleteTask').onclick=()=>{if(confirm(`确认删除任务“${task.name}”及其人员分配？`)){state.tasks=state.tasks.filter(x=>x.id!==id);state.assignments=state.assignments.filter(a=>a.taskId!==id);invalidatePlanningState([id]);log(roleLabels[state.role],`删除任务：${task.name}`);closeModal();render();}};
}

function assignmentModal(taskId){
  const task=taskById(taskId),assigned=assignmentsForTask(taskId),executionAssigned=assigned.filter(isExecutionAssignment);
  openModal(`<div class="modal-body"><div class="modal-header"><span class="status-pill neutral">人员分配</span><h2 id="modalTitle">${esc(task.name)}</h2><p>需求${task.people}名执行人员，当前${executionAssigned.length}名执行人员、${assigned.length-executionAssigned.length}名经验指导。经验指导不计入现场执行人数。</p><button class="icon-button close-modal" data-close-modal>${icon('x')}</button></div>${task.experienceGoal?`<div class="experience-assignment-note">${icon('graduation-cap')} 本任务传承内容：${esc(task.experienceGoal)}</div>`:''}<div class="assignment-editor">${assigned.map(a=>{const w=workerById(a.workerId);return `<div class="assignment-edit-row"><span class="worker-avatar">${esc(w?.name?.[0]||'?')}</span><div><strong>${esc(w?.name||a.workerId)}</strong><small>${esc(a.role)} · ${esc(w?.cert||'无证书记录')}${a.experienceTopic?` · ${esc(a.experienceTopic)}`:''}</small></div><button class="icon-button" data-remove-assignment="${a.id}" title="移除">${icon('trash-2')}</button></div>`;}).join('')||'<div class="empty">尚未分配人员</div>'}</div><div class="section-label">新增分配</div><div class="form-grid"><label class="form-field"><span>工友</span><select id="assignmentWorker">${state.workers.filter(w=>!assigned.some(a=>a.workerId===w.id)).map(w=>`<option value="${w.id}">${esc(w.name)} · ${esc(w.trade)} · ${esc(w.cert)}</option>`).join('')}</select></label><label class="form-field"><span>任务角色</span><select id="assignmentRole"><option>执行</option><option>协作</option><option>经验指导</option><option>辅助巡检</option><option>设备操作</option></select></label><label class="form-field wide"><span>经验指导内容（仅经验指导时填写）</span><input id="assignmentExperienceTopic" value="${esc(task.experienceGoal||'')}" placeholder="例如：样板质量、工序要点"></label></div><div class="modal-actions"><button class="button secondary" data-close-modal>完成</button><button class="button primary" id="addAssignment">${icon('user-plus')}添加人员</button></div></div>`);bindModalClose();
  document.querySelectorAll('[data-remove-assignment]').forEach(button=>button.onclick=()=>{state.assignments=state.assignments.filter(a=>a.id!==button.dataset.removeAssignment);invalidatePlanningState([taskId]);log(roleLabels[state.role],`移除${task.name}的一条人员分配`,'待确认');closeModal();render();setTimeout(()=>assignmentModal(taskId),0);});
  $('#addAssignment').onclick=()=>{const workerId=$('#assignmentWorker').value,role=$('#assignmentRole').value;if(!workerId)return notify('没有可添加的工友');state.assignments.push({id:nextId('A',state.assignments),taskId,workerId,role,experienceTopic:role==='经验指导'?$('#assignmentExperienceTopic').value.trim():'',status:'原计划'});invalidatePlanningState([taskId]);log(roleLabels[state.role],`为${task.name}分配${workerById(workerId).name}${role==='经验指导'?'承担经验指导':''}`,'待确认');closeModal();render();setTimeout(()=>assignmentModal(taskId),0);};
}

function workerModal(id=null){
  const worker=id?workerById(id):{id:nextId('W',state.workers),name:'',age:50,trade:'',years:20,certCodes:[],cert:'',fit:['正常适岗'],skills:'',preference:'正常安排',fitSource:'自主申报',fitValidUntil:'2026-12-31'};
  openModal(`<form class="modal-body" id="workerForm"><div class="modal-header"><span class="status-pill neutral">${id?'编辑档案':'新增工友'}</span><h2 id="modalTitle">${id?esc(worker.name):'建立工友适配档案'}</h2><p>仅填写作业复核需要的信息，不记录病历或用药。</p><button type="button" class="icon-button close-modal" data-close-modal>${icon('x')}</button></div><div class="form-grid">${formField('工友编号','id',worker.id,'text',true)}${formField('姓名','name',worker.name,'text',true)}${formField('年龄','age',worker.age,'number',true)}${formField('工种','trade',worker.trade,'text',true)}${formField('工龄','years',worker.years,'number',true)}${formField('证书名称','cert',worker.cert)}<label class="form-field wide"><span>证书标准编码（顿号分隔）</span><input name="certCodes" value="${esc(worker.certCodes.join('、'))}"></label><label class="form-field wide"><span>适岗标签（顿号分隔）</span><input name="fit" value="${esc(worker.fit.join('、'))}"></label>${formField('适岗信息来源','fitSource',worker.fitSource)}${formField('有效期','fitValidUntil',worker.fitValidUntil,'date')}<label class="form-field wide"><span>技能经验</span><input name="skills" value="${esc(worker.skills)}"></label><label class="form-field wide"><span>工作意愿</span><input name="preference" value="${esc(worker.preference)}"></label></div><div class="modal-actions">${id?'<button type="button" class="button danger" id="deleteWorker">删除</button>':''}<button type="button" class="button secondary" data-close-modal>取消</button><button class="button primary" type="submit">保存档案</button></div></form>`);bindModalClose();
  $('#workerForm').onsubmit=event=>{event.preventDefault();const data=Object.fromEntries(new FormData(event.currentTarget)),next={id:data.id.trim(),name:data.name.trim(),age:Number(data.age),trade:data.trade.trim(),years:Number(data.years),cert:data.cert.trim(),certCodes:splitTags(data.certCodes).map(x=>x.toUpperCase()),fit:splitTags(data.fit),skills:data.skills.trim(),preference:data.preference.trim(),fitSource:data.fitSource.trim(),fitValidUntil:data.fitValidUntil};if(!next.id||!next.name||!next.trade)return notify('请填写编号、姓名和工种');if(state.workers.some(x=>x.id===next.id&&x.id!==id))return notify('工友编号不能重复');if(id){state.workers[state.workers.findIndex(x=>x.id===id)]=next;state.assignments.forEach(a=>{if(a.workerId===id)a.workerId=next.id;});}else state.workers.push(next);invalidatePlanningState();state.dataSource='已编辑数据';log(roleLabels[state.role],`${id?'更新':'新增'}工友档案：${next.name}`,'待确认');closeModal();render();};
  if(id)$('#deleteWorker').onclick=()=>{if(state.assignments.some(a=>a.workerId===id))return notify('该工友仍有关联分配，请先移除分配');if(confirm(`确认删除${worker.name}？`)){state.workers=state.workers.filter(x=>x.id!==id);state.decisions={};log(roleLabels[state.role],`删除工友档案：${worker.name}`);closeModal();render();}};
}

function weatherCodeLabel(code){return ({0:'晴',1:'大部晴朗',2:'多云',3:'阴',45:'雾',48:'雾凇',51:'毛毛雨',53:'毛毛雨',55:'毛毛雨',61:'小雨',63:'中雨',65:'大雨',71:'小雪',73:'中雪',75:'大雪',80:'阵雨',81:'阵雨',82:'强阵雨',95:'雷暴',96:'雷暴伴冰雹',99:'强雷暴伴冰雹'})[Number(code)]||'天气待确认';}
function weatherDateKey(offset=1){const date=new Date();date.setDate(date.getDate()+offset);const parts=Object.fromEntries(new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Shanghai',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(date).filter(part=>part.type!=='literal').map(part=>[part.type,part.value]));return `${parts.year}-${parts.month}-${parts.day}`;}
function numberOrZero(value){return Number.isFinite(Number(value))?Number(value):0;}
async function syncWeather(){
  if(state.weatherSyncing)return;
  state.weatherSyncing=true;render();
  try{
    const targetDate=weatherDateKey(1),params=new URLSearchParams({latitude:String(state.weather.latitude),longitude:String(state.weather.longitude),hourly:'temperature_2m,apparent_temperature,precipitation_probability,precipitation,wind_speed_10m,wind_gusts_10m,weather_code',timezone:'Asia/Shanghai',forecast_days:'2'});
    const response=await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
    if(!response.ok)throw new Error(`天气服务返回 ${response.status}`);
    const data=await response.json(),hourly=data.hourly;
    if(!hourly?.time?.length)throw new Error('天气服务未返回逐小时预报');
    const all=hourly.time.map((time,index)=>({time,temp:numberOrZero(hourly.temperature_2m?.[index]),apparent:numberOrZero(hourly.apparent_temperature?.[index]),precipitation:numberOrZero(hourly.precipitation?.[index]),wind:numberOrZero(hourly.wind_speed_10m?.[index]),gust:numberOrZero(hourly.wind_gusts_10m?.[index]),code:hourly.weather_code?.[index]})),samples=all.filter(item=>item.time.startsWith(targetDate));
    if(!samples.length)throw new Error(`未找到${targetDate}的预报数据`);
    const maxTemp=Math.max(...samples.map(item=>item.temp)),heatSamples=samples.filter(item=>{const hour=Number(item.time.slice(11,13));return hour>=11&&hour<15;}),heatTemp=Math.max(...(heatSamples.length?heatSamples:samples).map(item=>item.temp)),maxGust=Math.max(...samples.map(item=>item.gust)),precipitation=samples.reduce((sum,item)=>sum+item.precipitation,0),dayCodes=samples.map(item=>item.code),conditionParts=[];
    if(heatTemp>=35)conditionParts.push('高温提醒');
    if(maxGust>=10.8)conditionParts.push('大风提醒');
    if(precipitation>=1)conditionParts.push('降雨提醒');
    if(!conditionParts.length)conditionParts.push(weatherCodeLabel(dayCodes.find(code=>Number(code)!==0)??dayCodes[0]));
    state.weather={...state.weather,temp:Math.round(maxTemp*10)/10,heatTemp:Math.round(heatTemp*10)/10,condition:conditionParts.join(' · '),windGust:Math.round(maxGust*10)/10,precipitation:Math.round(precipitation*10)/10,source:'Open-Meteo逐小时预报',updatedAt:new Date().toLocaleString('zh-CN',{hour12:false}),forecastDate:targetDate};
    state.decisions={};log('天气数据同步',`同步${targetDate}预报：最高${state.weather.temp}℃、午间最高${state.weather.heatTemp}℃、最大阵风${state.weather.windGust}m/s、降雨${state.weather.precipitation}mm；已重置待执行决策`,'待确认');notify('天气已同步，风险已按最新环境数据重算');
  }catch(error){notify(`天气同步失败：${error.message||'请检查网络后重试'}`);}
  finally{state.weatherSyncing=false;save();render();}
}
function weatherModal(){openModal(`<form class="modal-body" id="weatherForm"><div class="modal-header"><span class="status-pill medium">环境参数</span><h2 id="modalTitle">明日天气</h2><p>可手动补录；同步天气会从 Open-Meteo 获取逐小时预报。当前来源：${esc(state.weather.source)}。</p><button type="button" class="icon-button close-modal" data-close-modal>${icon('x')}</button></div><div class="form-grid">${formField('全天最高气温','temp',state.weather.temp,'number',true)}${formField('午间最高气温','heatTemp',state.weather.heatTemp??state.weather.temp,'number',true)}${formField('最大阵风（m/s）','windGust',state.weather.windGust,'number',true)}${formField('预测降雨量（mm）','precipitation',state.weather.precipitation,'number',true)}${formField('天气提醒','condition',state.weather.condition,'text',true)}${formField('项目地点','location',state.weather.location,'text',true)}${formField('纬度','latitude',state.weather.latitude,'number',true)}${formField('经度','longitude',state.weather.longitude,'number',true)}</div><div class="modal-actions"><button type="button" class="button secondary" data-close-modal>取消</button><button class="button primary" type="submit">保存并重算</button></div></form>`);bindModalClose();$('#weatherForm').onsubmit=event=>{event.preventDefault();const data=Object.fromEntries(new FormData(event.currentTarget));state.weather={...state.weather,temp:Number(data.temp),heatTemp:Number(data.heatTemp),windGust:Number(data.windGust),precipitation:Number(data.precipitation),condition:data.condition.trim(),location:data.location.trim(),latitude:Number(data.latitude),longitude:Number(data.longitude),source:'手动录入',updatedAt:new Date().toLocaleString('zh-CN',{hour12:false})};state.decisions={};log(roleLabels[state.role],`手动更新环境参数：全天${state.weather.temp}℃、午间${state.weather.heatTemp}℃、阵风${state.weather.windGust}m/s、降雨${state.weather.precipitation}mm`,'待确认');closeModal();render();};}

let aiPlanDraft=null;
async function analyzeDailyPlan(){
  const text=(state.assistantInput||'').trim();
  if(!text)return notify('请先输入今天的施工安排，或点击“查看示例建议”');
  const button=$('#assistantAnalyzeButton');if(button){button.disabled=true;button.innerHTML=`${icon('loader-circle')}正在整理…`;icons();}
  try{
    const response=await fetch('/api/ai/parse-plan',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text,workers:state.workers})}),payload=await response.json();
    if(!response.ok)throw new Error(payload.error||'计划解析失败');
    state.assistantDraft=payload.plan;state.assistantMode='draft';save();render();
  }catch(error){notify(`暂时无法解析：${error.message||'请检查 AI 服务配置'}`);if(button){button.disabled=false;button.innerHTML=`${icon('sparkles')}生成适配建议`;icons();}}
}
async function fetchWithTimeout(url,options,timeoutMs=12000){
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),timeoutMs);
  try{return await fetch(url,{...options,signal:controller.signal});}
  catch(error){if(error?.name==='AbortError')throw new Error('AI 服务响应超时，已切换为本地协同草案');throw error;}
  finally{clearTimeout(timer);}
}
function localDispatchDraft(){
  const recommendations=state.tasks.map(task=>{
    const assigned=assignmentsForTask(task.id),assignedExecution=assigned.filter(isExecutionAssignment),candidates=recommendedCandidatesForTask(task),mentors=recommendedMentorsForTask(task),execution=candidates.slice(0,1),mentor=mentors.slice(0,1),hasVacancy=Math.max(0,Number(task.people||1)-assignedExecution.length)>0;
    const executionNames=execution.map(item=>item.worker.name),currentNames=assignedExecution.map(item=>workerById(item.workerId)?.name||item.workerId),mentorNames=mentor.map(item=>item.worker.name),taskRisks=calculateRisks().filter(risk=>risk.taskId===task.id&&!isSafetyHandled(risk));
    const reasons=hasVacancy?(execution[0]?.reasons||['暂无满足资格、适岗和时间条件的候选人']):(assignedExecution.length?assignmentMatchReasons(task,assignedExecution[0]):['当前任务尚未安排执行人员']);
    if(taskRisks.length)reasons.push(`已识别“${taskRisks[0].title}”，需先完成处置再确认派工`);
    return {taskId:task.id,executionWorkerIds:hasVacancy?execution.map(item=>item.worker.id):[],mentorWorkerIds:task.experienceGoal?mentor.map(item=>item.worker.id):[],executionSuggestion:hasVacancy?(executionNames.length?`建议由${executionNames.join('、')}补充执行`:'暂无满足资格、适岗和时间条件的候选人'):`建议保留${currentNames.join('、')||'当前安排'}执行，并完成班前确认`,mentorSuggestion:mentorNames.length?`建议由${mentorNames.join('、')}承担经验指导`:'',experienceGoal:task.experienceGoal||'',reasons,confirmationPoints:taskRisks.length?['先完成标红事项的安全处置，再由班组长确认派工']:['班组长确认班前交底、机具检查和现场作业条件'],selectionSource:'rule_fallback'};
  });
  return {summary:'已基于任务、工友档案、适岗信息、时间冲突和环境规则生成协同草案。',missingInfo:recommendations.filter(item=>item.executionSuggestion.startsWith('暂无')).map(item=>`${taskById(item.taskId)?.name||item.taskId}缺少可直接采用的执行候选人`),recommendations};
}
let aiRefreshTimer;
function scheduleAiRefresh(){
  clearTimeout(aiRefreshTimer);
  if(state.assistantMode!=='analyzed'||!state.tasks.length)return;
  aiRefreshTimer=setTimeout(()=>buildAiDispatchDraft({silent:true}),180);
}
async function buildAiDispatchDraft(options={}){
  const silent=options?.silent===true;
  if(state.aiDispatchLoading||!state.tasks.length)return notify('请先录入并确认至少一项施工任务');
  state.aiDispatchLoading=true;render();
  try{
    const risks=calculateRisks().map(risk=>({taskId:risk.taskId,level:risk.level,title:risk.title,basis:risk.basis,source:risk.source})),candidatePools=aiCandidatePools(),matchProfiles=aiMatchProfiles();
    const response=await fetchWithTimeout('/api/ai/dispatch-draft',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({tasks:state.tasks,workers:state.workers,weather:state.weather,risks,candidatePools,matchProfiles})}),payload=await response.json();
    if(!response.ok)throw new Error(payload.error||'协同派工草案生成失败');
    state.aiDispatchDraft=payload.draft;log('AI协同派工',`生成${payload.draft.recommendations.length}项协同建议，${payload.draft.missingInfo.length}项待补信息`,'待确认');if(!silent)notify('AI 协同草案已生成，请由班组长确认');
  }catch(error){state.aiDispatchDraft=localDispatchDraft();log('智能适配引擎',`AI 服务未返回，已生成${state.aiDispatchDraft.recommendations.length}项规则协同草案`,'待确认');if(!silent)notify('AI 服务未返回，已生成可继续使用的本地协同草案');}
  finally{state.aiDispatchLoading=false;save();render();}
}
function showAssistantExample(){
  state.assistantInput=`明日班前施工通知（预计午间最高气温 38℃）：
1. 08:00-12:00，张建华在 6F 东立面进行外墙砌体样板作业，作业环境为高处临边，强度高，需求 1 人；需完成灰缝控制、节点检查的样板交底。
2. 11:00-15:00，王德胜在基坑南侧进行室外混凝土养护，作业环境为户外高温，强度中，需求 1 人；需交底高温条件下的养护工序。
3. 09:00-11:30，刘国平在 1# 材料库负责袋装水泥搬运，作业环境为室内搬运，强度高，需求 1 人；同时负责材料清点。
4. 08:00-11:00，3F 样板间进行墙面抹灰样板作业，作业环境为室内，强度低，需求 1 人；需完成空鼓排查、收口工艺的样板带教。`;
  state.assistantDraft=null;state.assistantMode='start';save();render();notify('已填入四项演示施工通知，请点击“整理为任务草稿”开始 AI 解析');
}
function applyAssistantDraft(){
  const draft=state.assistantDraft;if(!draft)return;
  const tasks=[],assignments=[];
  draft.tasks.forEach(task=>{const id=nextId('T',tasks);tasks.push({id,name:String(task.name||'未命名任务').trim(),area:String(task.area||'待确认').trim(),start:String(task.start||'08:00'),end:String(task.end||'12:00'),environment:String(task.environment||'一般作业').trim(),intensity:['低','中','高'].includes(task.intensity)?task.intensity:'中',requiredCert:String(task.requiredCert||'').trim(),requiredCertCode:String(task.requiredCertCode||'').trim().toUpperCase(),people:Math.max(1,Number(task.people)||1),experienceGoal:String(task.experienceGoal||'').trim()});});
  draft.assignments.forEach(item=>{const task=tasks[item.taskIndex],worker=workerById(item.workerId),role=['执行','协作','经验指导','辅助巡检','设备操作'].includes(item.role)?item.role:'执行';if(!task||!worker||assignments.some(assignment=>assignment.taskId===task.id&&assignment.workerId===worker.id))return;assignments.push({id:nextId('A',assignments),taskId:task.id,workerId:worker.id,role,experienceTopic:role==='经验指导'?task.experienceGoal:'',status:'AI解析原计划'});});
  state.tasks=tasks;state.assignments=assignments;state.decisions={};state.assistantDraft=null;state.assistantMode='analyzed';state.dataSource='AI解析计划';log('AI计划解析',`确认${tasks.length}项任务、${assignments.length}条人员分配，已进入自动研判`,'待确认');save();render();scheduleAiRefresh();notify('计划已确认，AI 正在自动研判，请直接查看任务队列');
}
function aiPlanModal(){
  openModal(`<div class="modal-body"><div class="modal-header"><span class="status-pill neutral">AI 计划解析</span><h2 id="modalTitle">把施工安排整理成任务草稿</h2><p>粘贴施工员通知、班组派工文字或会议纪要。AI 只生成待确认草稿，不会直接派工或批准作业。</p><button class="icon-button close-modal" data-close-modal>${icon('x')}</button></div><label class="ai-input"><span>施工计划原文</span><textarea id="aiPlanInput" rows="10" placeholder="示例：明天上午 8 点到 12 点，张建华在 6 楼东立面进行外墙砌体作业；下午王德胜在基坑南侧做混凝土养护。"></textarea></label><div class="ai-guard">${icon('shield-check')} 系统只会匹配已有工友编号；无法确认的时间、人员或资格将标记为待补充。</div><div id="aiResult" class="ai-result"></div><div class="modal-actions"><button class="button secondary" data-close-modal>取消</button><button class="button primary" id="aiParseSubmit">${icon('sparkles')}解析为任务草稿</button></div></div>`);
  bindModalClose();
  $('#aiParseSubmit').onclick=async()=>{
    const text=$('#aiPlanInput').value.trim();
    if(!text)return notify('请先粘贴施工计划内容');
    const button=$('#aiParseSubmit');button.disabled=true;button.innerHTML=`${icon('loader-circle')}正在解析…`;icons();
    try{
      const response=await fetch('/api/ai/parse-plan',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text,workers:state.workers})}),payload=await response.json();
      if(!response.ok)throw new Error(payload.error||'AI 解析失败');
      aiPlanDraft=payload.plan;renderAiPlanPreview(payload.plan);
    }catch(error){$('#aiResult').innerHTML=`<div class="ai-error">${icon('circle-x')} ${esc(error.message||'AI 解析失败。请确认本地服务与密钥配置。')}</div>`;icons();}
    finally{button.disabled=false;button.innerHTML=`${icon('sparkles')}重新解析`;icons();}
  };
}
function renderAiPlanPreview(plan){
  const workersById=new Map(state.workers.map(worker=>[worker.id,worker]));
  $('#aiResult').innerHTML=`<div class="ai-summary"><strong>${esc(plan.summary||'已生成施工任务草稿')}</strong><small>${plan.tasks.length}项任务 · ${plan.assignments.length}条人员分配</small></div><div class="ai-preview-list">${plan.tasks.map((task,index)=>{const assigned=plan.assignments.filter(item=>item.taskIndex===index).map(item=>workersById.get(item.workerId)?.name||item.workerId).join('、');return `<div><strong>${esc(task.name)}</strong><small>${esc(task.start)}-${esc(task.end)} · ${esc(task.area)} · ${esc(task.environment)}${assigned?` · ${esc(assigned)}`:' · 待分配人员'}</small></div>`;}).join('')}</div>${plan.ambiguities?.length?`<div class="ai-ambiguities"><strong>待人工补充</strong>${plan.ambiguities.map(item=>`<span>${esc(item)}</span>`).join('')}</div>`:''}<button class="button primary full" id="applyAiPlan">${icon('list-plus')}追加到当前施工计划</button>`;
  $('#applyAiPlan').onclick=()=>applyAiPlan(plan);icons();
}
function applyAiPlan(plan){
  const taskIds=plan.tasks.map(task=>{const id=nextId('T',state.tasks);state.tasks.push({id,name:String(task.name||'未命名任务').trim(),area:String(task.area||'待确认').trim(),start:String(task.start||'08:00'),end:String(task.end||'12:00'),environment:String(task.environment||'一般作业').trim(),intensity:['低','中','高'].includes(task.intensity)?task.intensity:'中',requiredCert:String(task.requiredCert||'').trim(),requiredCertCode:String(task.requiredCertCode||'').trim().toUpperCase(),people:Math.max(1,Number(task.people)||1),experienceGoal:String(task.experienceGoal||'').trim()});return id;});
  let appliedAssignments=0;
  plan.assignments.forEach(item=>{const taskId=taskIds[item.taskIndex],task=state.tasks.find(candidate=>candidate.id===taskId),worker=workerById(item.workerId),role=['执行','协作','经验指导','辅助巡检','设备操作'].includes(item.role)?item.role:'执行';if(!taskId||!worker||state.assignments.some(assignment=>assignment.taskId===taskId&&assignment.workerId===worker.id))return;state.assignments.push({id:nextId('A',state.assignments),taskId,workerId:worker.id,role,experienceTopic:role==='经验指导'?task?.experienceGoal||'':'',status:'AI草稿'});appliedAssignments++;});
  state.decisions={};state.dataSource='AI解析草稿';log('AI计划解析',`追加${taskIds.length}项任务、${appliedAssignments}条人员分配，待人工核对后扫描`,'待确认');aiPlanDraft=null;closeModal();render();notify('AI 草稿已追加，请核对任务与人员后重新扫描');
}

function workflowSteps(decision){
  const steps=[['safety_approved','安全员处置标红项'],['leader_approved','班组长确认派工'],['executed','执行与班前交底'],['closed','记录归档']],order=['safety_approved','leader_approved','executed','closed'],current=decision?.status;
  return `<div class="workflow"><div class="workflow-caption">${current==='review_requested'?'当前为例外专业复核，不属于常规流程。':'常规处置流水线'}</div>${steps.map(([key,label],index)=>{const active=decision&&order.indexOf(current)>=index||current==='review_passed'&&index===0,done=decision&&order.indexOf(current)>index||current===key;return `<div class="workflow-step ${done?'done':active?'current':''}"><span>${done?icon('check'):(index+1)}</span><small>${label}</small></div>`;}).join('')}</div>`;
}

function taskOutputModal(taskId){
  const task=taskById(taskId),risks=calculateRisks().filter(risk=>risk.taskId===taskId),output=taskOutput(task,risks),assigned=assignmentsForTask(taskId).map(a=>workerById(a.workerId)?.name||a.workerId).join('、')||'待分配人员',mentorCandidates=recommendedMentorsForTask(task),existingMentors=assignmentsForTask(taskId).filter(item=>item.role==='经验指导'||item.role==='经验型任务').map(item=>workerById(item.workerId)?.name||item.workerId),candidatePanel=output.vacancies?`<div class="section-label">补人候选推荐</div><div class="candidate-rule-note">系统已核验资格、适岗信息和时间冲突；推荐理由列出每位候选人的匹配依据。</div><div class="candidate-list">${output.candidates.length?output.candidates.slice(0,5).map((item,index)=>`<div class="candidate-row"><span class="candidate-rank">${index+1}</span><div><strong>${esc(item.worker.name)} <small>${esc(item.worker.trade)} · ${item.worker.years}年经验</small></strong><span>${esc(item.reasons.join('；'))}</span></div><button class="button secondary candidate-select" data-add-recommended-task="${task.id}" data-recommended-worker="${item.worker.id}">加入待确认</button></div>`).join(''):`<div class="decision-note">当前没有同时满足资格、适岗信息与时间条件的候选人，请人工补充人员档案或调整任务。</div>`}</div>`:'',experiencePanel=task.experienceGoal?`<div class="experience-collaboration"><div class="section-label">经验协同安排</div><div class="experience-goal"><span>${icon('graduation-cap')}</span><div><strong>传承内容：${esc(task.experienceGoal)}</strong><small>${existingMentors.length?`已安排经验指导：${esc(existingMentors.join('、'))}`:'经验指导不计入现场执行人数，可由班组长按需确认。'}</small></div></div>${!existingMentors.length&&mentorCandidates.length?`<div class="candidate-list">${mentorCandidates.slice(0,3).map((item,index)=>`<div class="candidate-row mentor"><span class="candidate-rank">${index+1}</span><div><strong>${esc(item.worker.name)} <small>${esc(item.worker.trade)} · ${item.worker.years}年经验</small></strong><span>${esc(item.reasons.join('；'))}</span></div><button class="button secondary candidate-select" data-add-mentor-task="${task.id}" data-mentor-worker="${item.worker.id}">设为经验指导</button></div>`).join('')}</div>`:''}</div>`:'';
  const openRisk=risks.find(r=>!isSafetyHandled(r)),confirmButton=!openRisk&&!state.dispatchConfirmed[task.id]?`<button class="button primary" id="confirmDispatchButton">${icon('clipboard-check')}确认派工并记录交底</button>`:'';
  openModal(`<div class="modal-body"><div class="modal-header"><span class="status-pill ${output.tone==='ready'?'done':output.tone==='red'?'high':'medium'}">${esc(output.label)}</span><h2 id="modalTitle">${esc(task.name)}</h2><p>${esc(task.start)}-${esc(task.end)} · ${esc(task.area)} · ${esc(task.environment)}</p><button class="icon-button close-modal" data-close-modal>${icon('x')}</button></div><div class="dispatch-modal-summary"><div><span>当前人员</span><strong>${esc(assigned)}</strong></div><div><span>任务要求</span><strong>${task.people}人 · ${esc(task.intensity)}强度 · ${esc(task.requiredCert||'无特殊证书')}</strong></div><div><span>建议动作</span><strong>${esc(output.action)}</strong></div></div>${candidatePanel}${experiencePanel}${risks.length?`<div class="section-label">需要处理的事项</div><div class="task-risk-list">${risks.map(risk=>{const status=state.decisions[risk.id]?.status,done=completedStatuses.has(status),safetyDone=isSafetyHandled(risk),label=done?'已闭环':safetyDone?'措施已确认':status==='review_requested'?'待专业复核':risk.level==='high'?'待处理':'待优化';return `<button class="task-risk-row" data-risk="${risk.id}"><span class="status-pill ${done||safetyDone?'done':risk.level==='high'?'high':'medium'}">${label}</span><div><strong>${esc(risk.title)}</strong><small>${esc(risk.basis)}</small></div><em>${done?'查看记录':safetyDone?'等待班组确认':`${esc(recommendationFor(risk).title)} ${icon('arrow-right')}`}</em></button>`;}).join('')}</div>`:`<div class="dispatch-ready-note">${icon('circle-check')} 未发现系统规则冲突。完成班前交底、机具检查和现场条件确认后，由班组长确认派工。</div>`}<div class="modal-actions"><button class="button secondary" data-close-modal>返回派工单</button>${openRisk?`<button class="button primary" data-risk="${openRisk.id}">处理首项问题</button>`:confirmButton}</div></div>`);
  bindModalClose();document.querySelectorAll('[data-risk]').forEach(button=>button.onclick=()=>{const id=button.dataset.risk;closeModal();setTimeout(()=>riskModal(id),0);});document.querySelectorAll('[data-add-recommended-task]').forEach(button=>button.onclick=()=>addRecommendedCandidate(button.dataset.addRecommendedTask,button.dataset.recommendedWorker));document.querySelectorAll('[data-add-mentor-task]').forEach(button=>button.onclick=()=>addExperienceMentor(button.dataset.addMentorTask,button.dataset.mentorWorker));const confirmButtonEl=$('#confirmDispatchButton');if(confirmButtonEl)confirmButtonEl.onclick=()=>confirmTaskDispatch(taskId);
}

function confirmTaskDispatch(taskId){
  const task=taskById(taskId),risks=calculateRisks().filter(risk=>risk.taskId===taskId&&!isSafetyHandled(risk));
  if(!task||risks.length)return notify('请先处理该任务的标红事项');
  if(!confirm(`确认“${task.name}”已完成班前交底、机具检查和现场条件确认，可以派工吗？`))return;
  state.dispatchConfirmed[taskId]={confirmedAt:new Date().toISOString(),confirmedBy:'班组长'};
  const transitioned=calculateRisks().filter(risk=>risk.taskId===taskId&&state.decisions[risk.id]?.status==='safety_approved').map(risk=>state.decisions[risk.id]);
  transitioned.forEach(decision=>{decision.status='executed';decision.executedAt=new Date().toISOString();decision.workerNote='班组长已确认派工并完成班前交底记录。';});
  const residual=finalRisks().filter(risk=>dispatchBaseTaskId(risk.taskId)===taskId);
  if(residual.length){delete state.dispatchConfirmed[taskId];transitioned.forEach(decision=>{decision.status='safety_approved';delete decision.executedAt;delete decision.workerNote;});save();render();return notify(`最终复检仍有“${residual[0].title}”，未确认派工，请重新调整方案`);}
  log('班组长 · 陈师傅',`确认派工并完成班前交底：${task.name}`,'已完成');save();closeModal();render();notify('已确认派工，任务进入执行记录');
}

function addRecommendedCandidate(taskId,workerId){
  const task=taskById(taskId),recommendation=recommendedCandidatesForTask(task).find(item=>item.worker.id===workerId),candidate=recommendation?.worker;
  if(!task||!candidate)return notify('候选人条件已变化，请重新查看推荐');
  if(!confirm(`确认将“${candidate.name}”加入“${task.name}”的待确认人员吗？`))return;
  state.assignments.push({id:nextId('A',state.assignments),taskId,workerId,role:'执行',status:'系统推荐待确认',matchReasons:recommendation.reasons,matchSource:'智能适配推荐'});
  invalidatePlanningState([taskId]);state.dataSource='系统推荐待确认';log('班组长',`确认候选推荐：${candidate.name}加入${task.name}，待重新扫描`,'待确认');save();closeModal();render();notify('候选人已加入待确认计划，系统已重新计算风险');
}

function addExperienceMentor(taskId,workerId){
  const task=taskById(taskId),candidate=recommendedMentorsForTask(task).find(item=>item.worker.id===workerId)?.worker;
  if(!task||!candidate)return notify('经验指导候选条件已变化，请重新查看建议');
  if(!confirm(`确认由“${candidate.name}”承担“${task.name}”的经验指导吗？`))return;
  state.assignments.push({id:nextId('A',state.assignments),taskId,workerId,role:'经验指导',experienceTopic:task.experienceGoal||'现场工艺要点与质量检查',status:'系统推荐待确认'});
  invalidatePlanningState([taskId]);state.dataSource='系统推荐待确认';log('班组长',`确认经验协同：${candidate.name}指导${task.name}，内容为${task.experienceGoal||'现场工艺要点与质量检查'}`,'待确认');save();closeModal();render();notify('已加入经验指导，不计入现场执行人数；系统已重新计算风险');
}

function riskModal(id){
  const risk=calculateRisks().find(item=>item.id===id);if(!risk)return notify('该风险已因数据变化消失');const task=taskById(risk.taskId),worker=workerById(risk.workerId),decision=state.decisions[id],options=optionsFor(risk);
  const rule=rules.find(item=>risk.source.startsWith(item.id));
  openModal(`<div class="modal-body"><div class="modal-header"><span class="status-pill ${risk.level==='high'?'high':'medium'}">${risk.level==='high'?'高风险':'优化建议'}</span><h2 id="modalTitle">${esc(risk.title)}</h2><p>${esc(risk.summary)}</p><button class="icon-button close-modal" data-close-modal>${icon('x')}</button></div>${workflowSteps(decision)}<div class="section-label">依据与边界</div><div class="evidence-box"><div class="evidence-line"><span>任务条件</span><strong>${esc(task?.start)}-${esc(task?.end)} · ${esc(task?.environment)} · ${esc(task?.intensity)}强度</strong></div><div class="evidence-line"><span>冲突说明</span><strong>${esc(risk.basis)}</strong></div><div class="evidence-line"><span>规则来源</span><strong>${esc(risk.source)}</strong></div><div class="evidence-line"><span>适用边界</span><strong>${esc(rule?.scope||'系统数据一致性检查，不替代现场专业判断。')}</strong></div></div>${decision?decisionView(risk,decision):proposalEditor(risk,options)}<div class="modal-actions" id="riskActions">${decision?actionButtons(risk,decision):`<button class="button secondary" data-close-modal>取消</button><button class="button primary" id="saveProposal">${icon('send')}提交方案</button>`}</div></div>`);bindModalClose();
  if(!decision)bindProposalEditor(risk,options);else bindDecisionActions(risk,decision);
}

function quickRiskModal(id){
  const risk=calculateRisks().find(item=>item.id===id);if(!risk||!requiresSafetyAction(risk))return notify('该事项正在等待专业复核或已处理');
  const task=taskById(risk.taskId),queue=calculateRisks().filter(item=>item.level==='high'&&requiresSafetyAction(item)).sort((a,b)=>a.id.localeCompare(b.id)),position=Math.max(0,queue.findIndex(item=>item.id===id))+1,options=optionsFor(risk),rule=rules.find(item=>risk.source.startsWith(item.id));
  const suggested=suggestedSafetyProposal(risk,options);
  openModal(`<div class="modal-body quick-risk-modal"><div class="modal-header"><span class="status-pill high">安全员待办 ${position}/${queue.length}</span><h2 id="modalTitle">${esc(risk.title)}</h2><p>${esc(risk.summary)} · 选定措施后自动进入下一项。</p><button class="icon-button close-modal" data-close-modal>${icon('x')}</button></div><div class="quick-risk-context"><div><span>任务</span><strong>${esc(task?.name||'未找到任务')} · ${esc(task?.start||'')}-${esc(task?.end||'')}</strong></div><div><span>触发原因</span><strong>${esc(risk.basis)}</strong></div><div><span>规则依据</span><strong>${esc(rule?.source||risk.source)}</strong></div></div>${suggested?`<div class="decision-note"><strong>系统已校验建议：</strong>${esc(suggested.description)}。安全员确认后即可提交，不需再逐项填写。</div>`:`<div class="decision-note">当前没有可直接采用的已校验方案，请在下方选择措施并补充人员或时间。</div>`}${proposalEditor(risk,options)}<div class="modal-actions"><button class="button secondary" data-close-modal>稍后处理</button>${suggested?`<button class="button secondary" id="applySuggestedSafety">${icon('wand-sparkles')}采用已校验建议</button>`:''}<button class="button primary" id="saveProposal">${icon('check')}确认安全措施并继续</button></div></div>`);bindModalClose();bindProposalEditor(risk,options,()=>continueSafetyQueue(id));
  const applySuggested=$('#applySuggestedSafety');if(applySuggested)applySuggested.onclick=()=>applySuggestedSafetyProposal(risk,suggested,()=>continueSafetyQueue(id));
}

function suggestedSafetyProposal(risk,options=optionsFor(risk)){
  const option=options.find(item=>item.mode==='reschedule')||options.find(item=>['replace','reorganize','mechanical','team'].includes(item.mode));
  if(!option)return null;
  const form={};
  if(option.mode==='reschedule'){form.newStart='06:30';form.newEnd='10:00';}
  else {const candidate=candidatePool(risk,option.mode)[0];if(!candidate)return null;form.candidateWorkerId=candidate.id;}
  const proposal=proposalFrom(risk,option,form),checks=proposalChecks(risk,proposal);
  if(checks.some(check=>!check.pass&&!check.warning))return null;
  const candidate=workerById(form.candidateWorkerId);
  const description=option.mode==='reschedule'?`${option.title}（${form.newStart}-${form.newEnd}）`:`${option.title}（${candidate?.name||'已校验候选人'}）`;
  return {proposal,checks,description};
}

function applySuggestedSafetyProposal(risk,suggested,onSaved){
  if(!suggested)return notify('当前没有可直接采用的已校验方案，请手动补充处置措施');
  if(!confirm(`确认采用系统已校验的措施：${suggested.description}？`))return;
  const proposal={...suggested.proposal,status:'safety_approved',checks:suggested.checks,confirmedBy:'安全员 · 林海',confirmedAt:new Date().toISOString()};
  state.decisions[risk.id]=proposal;
  log('安全员 · 林海',`采用已校验安全措施：${risk.title} · ${proposal.title}`,'待班组确认');
  save();
  onSaved();
}

function continueSafetyQueue(processedId){
  closeModal();render();
  const remaining=calculateRisks().filter(risk=>risk.level==='high'&&requiresSafetyAction(risk)),next=remaining.filter(risk=>risk.id!==processedId).sort((a,b)=>a.id.localeCompare(b.id))[0];
  if(next){setTimeout(()=>quickRiskModal(next.id),90);return;}
  if(remaining.length)return notify('该事项已转入专业复核，等待复核结果后继续');
  notify('标红事项已完成安全处置，请按任务确认派工');
}

function proposalEditor(risk,options){return `<div class="section-label">安全员选择调整方案</div><div class="option-list">${options.map(option=>`<label class="option-card"><input type="radio" name="option" value="${option.id}"><span><strong>${esc(option.title)}</strong><small>${esc(option.detail)}</small></span><span class="option-impact">${esc(option.mode)}</span></label>`).join('')}</div><div id="proposalConfig"></div><div id="constraintArea"><div class="constraint-placeholder">选择方案后绑定具体人员或时间，并执行全局约束校验</div></div>`;}

function proposalConfig(risk,option){
  if(['replace','mechanical','team','reorganize'].includes(option.mode)){const candidates=candidatePool(risk,option.mode);return `<div class="section-label">绑定具体人员</div><label class="form-field"><span>${option.mode==='reorganize'?'原任务补位人员':'候选人员'}</span><select id="candidateWorker"><option value="">请选择</option>${candidates.map(worker=>`<option value="${worker.id}">${esc(worker.name)} · ${esc(worker.trade)} · ${esc(worker.cert)}</option>`).join('')}</select></label>${candidates.length?'':'<div class="decision-note">当前没有满足资格和时间约束的候选人员。</div>'}`;}
  if(option.mode==='reschedule')return `<div class="section-label">设置调整后时间</div><div class="form-grid">${formField('新开始时间','newStart','06:30','time',true)}${formField('新结束时间','newEnd','10:00','time',true)}</div>`;
  if(option.mode==='review')return `<div class="decision-note">提交后状态变为“待专业复核”，不会直接关闭风险。需要专业复核员给出通过或驳回结果。</div>`;
  return `<div class="decision-note">该方案会改变任务角色或劳动强度，执行后进入最终计划并再次扫描。</div>`;
}

function bindProposalEditor(risk,options,onSaved){
  let selectedOption=null;
  const refresh=()=>{if(!selectedOption)return;const form={candidateWorkerId:$('#candidateWorker')?.value||'',newStart:document.querySelector('[name="newStart"]')?.value||'',newEnd:document.querySelector('[name="newEnd"]')?.value||''},proposal=proposalFrom(risk,selectedOption,form),checks=proposalChecks(risk,proposal);$('#constraintArea').innerHTML=`<div class="section-label">提交前约束校验</div><div class="constraint-list">${checks.map(check=>`<div class="constraint ${check.pass?'pass':check.warning?'warn':'fail'}">${icon(check.pass?'circle-check':check.warning?'clock-3':'circle-x')}<span><strong>${esc(check.label)}</strong><small>${esc(check.detail)}</small></span></div>`).join('')}</div>`;icons();};
  document.querySelectorAll('input[name="option"]').forEach(input=>input.onchange=()=>{selectedOption=options.find(x=>x.id===input.value);document.querySelectorAll('.option-card').forEach(card=>card.classList.toggle('selected',card.contains(input)));$('#proposalConfig').innerHTML=proposalConfig(risk,selectedOption);document.querySelectorAll('#proposalConfig input,#proposalConfig select').forEach(el=>el.onchange=refresh);refresh();});
  $('#saveProposal').onclick=()=>{if(!selectedOption)return notify('请先选择方案');const form={candidateWorkerId:$('#candidateWorker')?.value||'',newStart:document.querySelector('[name="newStart"]')?.value||'',newEnd:document.querySelector('[name="newEnd"]')?.value||''},proposal=proposalFrom(risk,selectedOption,form),checks=proposalChecks(risk,proposal),blocking=checks.filter(x=>!x.pass&&!x.warning);if(blocking.length)return notify('方案未通过硬性约束，不能提交');proposal.status=selectedOption.mode==='review'?'review_requested':'safety_approved';proposal.checks=checks;state.decisions[risk.id]=proposal;log('安全员 · 林海',`${selectedOption.mode==='review'?'发起例外专业复核':'确认标红项安全措施'}：${risk.title} · ${selectedOption.title}`,'待确认');if(onSaved){save();onSaved();return;}closeModal();render();notify(selectedOption.mode==='review'?'已进入例外专业复核，不会关闭风险':'安全措施已确认，等待班组长确认派工');};
}

function decisionView(risk,decision){const candidate=workerById(decision.candidateWorkerId);return `<div class="section-label">当前方案</div><div class="decision-summary"><strong>${esc(decision.title)}</strong><p>${candidate?`具体人员：${esc(candidate.name)} · ${esc(candidate.cert)}<br>`:''}${decision.newStart?`调整时间：${decision.newStart}-${decision.newEnd}<br>`:''}当前状态：${flowLabels[decision.status]}</p></div>${decision.reviewResult?`<div class="review-result ${decision.reviewResult==='passed'?'pass':'fail'}"><strong>专业复核：${decision.reviewResult==='passed'?'通过':'驳回'}</strong><span>${esc(decision.reviewNote||'未填写说明')}</span></div>`:''}${decision.workerNote?`<div class="decision-note">工友反馈：${esc(decision.workerNote)}</div>`:''}${decision.outcome?`<div class="decision-note">执行反馈：${esc(decision.outcome)}</div>`:''}<div class="section-label">已保存的约束检查</div><div class="constraint-list">${(decision.checks||[]).filter(x=>!x.warning).map(check=>`<div class="constraint ${check.pass?'pass':'fail'}">${icon(check.pass?'circle-check':'circle-x')}<span><strong>${esc(check.label)}</strong><small>${esc(check.detail)}</small></span></div>`).join('')}</div>`;}

function actionButtons(risk,decision){
  const cancel='<button class="button secondary" data-close-modal>关闭</button>';
  if(decision.status==='review_requested')return `${cancel}<button class="button danger" id="reviewReject">复核驳回</button><button class="button primary" id="reviewPass">复核通过</button>`;
  if(decision.status==='review_rejected'||decision.status==='worker_rejected')return `${cancel}<button class="button primary" id="reviseDecision">重新制定安全措施</button>`;
  if(decision.status==='review_passed')return `${cancel}<button class="button primary" id="safetyApprove">安全员确认方案</button>`;
  if(decision.status==='safety_approved')return `${cancel}<button class="button primary" id="leaderApprove">班组长确认派工</button>`;
  if(decision.status==='leader_approved'||decision.status==='worker_accepted')return `${cancel}<button class="button primary" id="markExecuted">完成班前交底并登记执行</button>`;
  if(decision.status==='executed'){const stillOpen=finalRisks().some(item=>item.id===risk.id);return stillOpen?`${cancel}<button class="button primary" id="reviseDecision">调整后仍有风险，重新调整方案</button>`:`${cancel}<button class="button primary" id="closeDecision">记录执行反馈并归档</button>`;}
  if(decision.status==='closed'){const stillOpen=finalRisks().some(item=>item.id===risk.id);return stillOpen?`${cancel}<button class="button primary" id="reviseDecision">归档后复检仍有风险，重新调整方案</button>`:cancel;}
  return cancel;
}

function bindDecisionActions(risk,decision){
  const act=(id,fn)=>{const button=$(`#${id}`);if(button)button.onclick=()=>{fn();save();closeModal();render();};};
  act('reviewPass',()=>{decision.status='review_passed';decision.reviewResult='passed';decision.reviewNote='例外专业复核通过；正式应用需记录复核人资质和依据。';log('专业复核员',`完成例外复核：${risk.title}`,'待确认');});
  act('reviewReject',()=>{decision.status='review_rejected';decision.reviewResult='rejected';decision.reviewNote='当前证据不足，需要重新调整安全措施。';log('专业复核员',`例外复核驳回：${risk.title}`,'待确认');});
  act('safetyApprove',()=>{decision.status='safety_approved';log('安全员 · 林海',`确认例外复核结果：${risk.title}`,'待确认');});
  act('leaderApprove',()=>{const checks=proposalChecks(risk,decision);if(checks.some(x=>!x.pass&&!x.warning))return notify('人员或时间条件已变化，请重新制定安全措施');decision.status='leader_approved';decision.checks=checks;log('班组长 · 陈师傅',`确认派工资源与班前措施：${risk.title}`,'待确认');});
  act('markExecuted',()=>{decision.status='executed';decision.executedAt=new Date().toISOString();decision.workerNote='已完成班前交底并记录现场反馈入口。';log('班组长 · 陈师傅',`完成班前交底并登记执行：${risk.title}`);});
  act('closeDecision',()=>{decision.status='closed';decision.outcome='已完成执行记录，未发现新增异常；该结果为原型模拟记录。';decision.closedAt=new Date().toISOString();log('安全员 · 林海',`记录执行反馈并归档：${risk.title}`);});
  const revise=$('#reviseDecision');if(revise)revise.onclick=()=>{invalidatePlanningState([decision.taskId]);log('安全员 · 林海',`撤回并重新制定安全措施：${risk.title}`,'待确认');save();closeModal();render();setTimeout(()=>riskModal(risk.id),0);};
}

function runScan(){if(state.scanning)return;state.scanning=true;render();setTimeout(()=>{state.scanning=false;const risks=calculateRisks();log('规则引擎',`重新扫描：${risks.length}项风险；最终计划${finalRisks().length}项剩余风险`,'待确认');render();notify('原计划与最终计划均已重新扫描');},800);}

function normalizeWorker(row,index){return {id:String(row['工友编号']??row['编号']??`W${index+1}`).trim(),name:String(row['姓名']??'').trim(),age:Number(row['年龄']||0),trade:String(row['工种']??'').trim(),years:Number(row['工龄']||0),cert:String(row['证书/资格']??row['证书']??'').trim(),certCodes:splitTags(row['证书编码']??row['证书标准编码']).map(x=>x.toUpperCase()),fit:splitTags(row['适岗标签']??'正常适岗'),skills:String(row['技能经验']??'').trim(),preference:String(row['工作意愿']??'正常安排').trim(),fitSource:String(row['适岗信息来源']??'未说明').trim(),fitValidUntil:excelDate(row['适岗有效期']??'')};}
function normalizeTask(row,index){return {id:String(row['任务编号']??row['编号']??`T${index+1}`).trim(),name:String(row['作业任务']??row['任务名称']??'').trim(),area:String(row['作业区域']??'').trim(),start:excelTime(row['开始时间']??'08:00'),end:excelTime(row['结束时间']??'12:00'),environment:String(row['作业环境']??'一般作业').trim(),intensity:String(row['劳动强度']??'中').trim(),requiredCert:String(row['所需证书']??'').trim(),requiredCertCode:String(row['证书要求编码']??'').trim().toUpperCase(),people:Number(row['需求人数']||1),experienceGoal:String(row['经验传承内容']??'').trim()};}
function normalizeAssignment(row,index){return {id:String(row['分配编号']??`A${index+1}`).trim(),taskId:String(row['任务编号']??'').trim(),workerId:String(row['工友编号']??'').trim(),role:String(row['任务角色']??'执行').trim(),experienceTopic:String(row['经验指导内容']??'').trim(),status:String(row['状态']??'原计划').trim()};}
function excelTime(value){if(typeof value==='number'){const minutes=Math.round(value*24*60);return `${String(Math.floor(minutes/60)%24).padStart(2,'0')}:${String(minutes%60).padStart(2,'0')}`;}const match=String(value).match(/(\d{1,2}):(\d{2})/);return match?`${match[1].padStart(2,'0')}:${match[2]}`:String(value||'08:00');}
function excelDate(value){if(value instanceof Date)return value.toISOString().slice(0,10);if(typeof value==='number'&&window.XLSX){const d=XLSX.SSF.parse_date_code(value);return `${d.y}-${String(d.m).padStart(2,'0')}-${String(d.d).padStart(2,'0')}`;}return String(value||'');}
function sheetRows(sheet,header){const grid=XLSX.utils.sheet_to_json(sheet,{header:1,defval:''}),index=grid.findIndex(row=>row.some(cell=>String(cell).trim()===header));if(index<0)throw new Error(`未找到“${header}”表头`);return XLSX.utils.sheet_to_json(sheet,{range:index,defval:''});}

function validateData(workers,tasks,assignments){
  const errors=[],workerIds=new Set(),taskIds=new Set(),assignmentIds=new Set();
  workers.forEach((w,i)=>{if(!w.id||!w.name||!w.trade)errors.push(`工友档案第${i+2}行缺少编号、姓名或工种`);if(workerIds.has(w.id))errors.push(`工友编号重复：${w.id}`);workerIds.add(w.id);if(!Number.isFinite(w.age)||w.age<16||w.age>80)errors.push(`${w.name||w.id}年龄无效`);});
  tasks.forEach((t,i)=>{if(!t.id||!t.name)errors.push(`施工计划第${i+2}行缺少任务编号或名称`);if(taskIds.has(t.id))errors.push(`任务编号重复：${t.id}`);taskIds.add(t.id);if(timeNumber(t.end)<=timeNumber(t.start))errors.push(`任务${t.id}结束时间无效`);});
  assignments.forEach((a,i)=>{if(!a.id||!a.taskId||!a.workerId)errors.push(`人员分配第${i+2}行缺少编号引用`);if(assignmentIds.has(a.id))errors.push(`分配编号重复：${a.id}`);assignmentIds.add(a.id);if(!taskIds.has(a.taskId))errors.push(`分配${a.id}引用不存在的任务${a.taskId}`);if(!workerIds.has(a.workerId))errors.push(`分配${a.id}引用不存在的工友${a.workerId}`);});
  return errors;
}

async function importFile(file){
  if(!file)return;try{
    if(file.name.toLowerCase().endsWith('.json')){const data=JSON.parse(await file.text()),assignments=data.assignments||legacyAssignments(data.tasks||[]);const tasks=(data.tasks||[]).map(({workerId,...task})=>task),errors=validateData(data.workers||[],tasks,assignments);if(errors.length)return importErrors(errors);Object.assign(state,{workers:data.workers,tasks,assignments,weather:data.weather||state.weather,decisions:data.decisions||{},dispatchConfirmed:data.dispatchConfirmed||{},experienceRecords:data.experienceRecords||{},aiDispatchDraft:null,assistantMode:'analyzed',assistantDraft:null,dataSource:'导入数据'});log('数据导入',`导入JSON：${state.workers.length}人、${state.tasks.length}任务、${state.assignments.length}分配`,'待确认');save();render();return notify('JSON导入成功，已恢复派工与经验记录');}
    if(!window.XLSX)throw new Error('Excel解析组件未加载');const workbook=XLSX.read(await file.arrayBuffer(),{type:'array',cellDates:true}),workerSheet=workbook.Sheets['工友档案'],taskSheet=workbook.Sheets['施工计划'],assignmentSheet=workbook.Sheets['人员分配'];if(!workerSheet||!taskSheet)throw new Error('Excel必须包含“工友档案”和“施工计划”');const workers=sheetRows(workerSheet,'工友编号').map(normalizeWorker),taskRows=sheetRows(taskSheet,'任务编号'),tasks=taskRows.map(normalizeTask),assignments=assignmentSheet?sheetRows(assignmentSheet,'分配编号').map(normalizeAssignment):taskRows.filter(row=>row['工友编号']).map((row,index)=>({id:`A${index+1}`,taskId:String(row['任务编号']),workerId:String(row['工友编号']),role:'执行',status:'原计划'})),errors=validateData(workers,tasks,assignments);if(errors.length)return importErrors(errors);Object.assign(state,{workers,tasks,assignments,decisions:{},assistantMode:'analyzed',assistantDraft:null,dataSource:'导入数据'});log('数据导入',`导入${file.name}：${workers.length}人、${tasks.length}任务、${assignments.length}分配`,'待确认');save();render();notify('数据导入成功，已生成适配建议');
  }catch(error){notify(error.message||'文件解析失败');}
}
function legacyAssignments(tasks){return tasks.filter(t=>t.workerId).map((task,index)=>({id:`A${index+1}`,taskId:task.id,workerId:task.workerId,role:'执行',status:'原计划'}));}
function importErrors(errors){openModal(`<div class="modal-body"><div class="modal-header"><span class="status-pill high">导入失败</span><h2 id="modalTitle">发现${errors.length}个结构问题</h2><p>人数不足或时间冲突允许导入，并会作为业务风险显示；结构引用错误必须先修正。</p><button class="icon-button close-modal" data-close-modal>${icon('x')}</button></div><div class="import-errors">${errors.slice(0,20).map(error=>`<div>${icon('circle-x')}<span>${esc(error)}</span></div>`).join('')}</div><div class="modal-actions"><button class="button primary" data-close-modal>返回修改</button></div></div>`);bindModalClose();}

function workbookRows(plan=originalPlan()){
  return {workers:plan.workers.map(w=>({'工友编号':w.id,'姓名':w.name,'年龄':w.age,'工种':w.trade,'工龄':w.years,'证书/资格':w.cert,'证书编码':w.certCodes.join('、'),'适岗标签':w.fit.join('、'),'适岗信息来源':w.fitSource,'适岗有效期':w.fitValidUntil,'技能经验':w.skills,'工作意愿':w.preference})),tasks:plan.tasks.map(t=>({'任务编号':t.id,'作业任务':t.name,'作业区域':t.area,'开始时间':t.start,'结束时间':t.end,'作业环境':t.environment,'劳动强度':t.intensity,'所需证书':t.requiredCert,'证书要求编码':t.requiredCertCode,'需求人数':t.people,'经验传承内容':t.experienceGoal||''})),assignments:plan.assignments.map(a=>({'分配编号':a.id,'任务编号':a.taskId,'工友编号':a.workerId,'任务角色':a.role,'适配理由':assignmentMatchReasons(taskById(a.taskId,plan.tasks),a).join('；'),'经验指导内容':a.experienceTopic||'','状态':a.status}))};
}
function downloadWorkbook(filename,sheets){if(!window.XLSX)return notify('Excel组件未加载');const wb=XLSX.utils.book_new();Object.entries(sheets).forEach(([name,rows])=>{const ws=XLSX.utils.json_to_sheet(rows.length?rows:[{'说明':'暂无数据'}]);ws['!cols']=Object.keys(rows[0]||{'说明':''}).map(key=>({wch:Math.min(34,Math.max(12,key.length+8))}));XLSX.utils.book_append_sheet(wb,ws,name);});XLSX.writeFile(wb,filename);}
function downloadTemplate(){const rows=workbookRows();downloadWorkbook('安龄工友-数据模板.xlsx',{'填写说明':[{'说明':'保留工作表和表头；任务与人员分配分开；资格使用标准编码；适岗信息必须填写来源和有效期。'}],'工友档案':rows.workers,'施工计划':rows.tasks,'人员分配':rows.assignments});notify('已生成四表数据模板');}
function taskConfirmation(taskId){const derived=Object.values(state.decisions).find(item=>`F-${item.riskId}`===taskId);if(derived)return taskConfirmation(derived.taskId);const confirmed=state.dispatchConfirmed[taskId],decisions=Object.values(state.decisions).filter(item=>item.taskId===taskId);if(confirmed)return {status:'班组已确认派工',time:new Date(confirmed.confirmedAt).toLocaleString('zh-CN',{hour12:false}),note:'已完成班前交底记录'};if(decisions.some(item=>item.status==='review_requested'))return {status:'待专业复核',time:'',note:'不得作为可执行派工单'};if(decisions.some(item=>isSafetyHandled({id:item.riskId})))return {status:'待班组确认',time:'',note:'安全措施已确认，待班组长确认派工'};if(decisions.length)return {status:'待安全措施确认',time:'',note:'存在尚未完成的标红事项'};return {status:'待班组确认',time:'',note:'常规任务待完成班前交底'};}
function exportReport(){const original=workbookRows(),finalPlanData=finalPlan(),final=workbookRows(finalPlanData),confirmRows=state.tasks.map(task=>{const confirmation=taskConfirmation(task.id);return {'任务编号':task.id,'施工任务':task.name,'派工状态':confirmation.status,'确认时间':confirmation.time,'说明':confirmation.note};}),riskRows=calculateRisks().map(r=>{const d=state.decisions[r.id];return {'风险编号':r.id,'风险等级':r.level==='high'?'高':'优化建议','工友':workerById(r.workerId)?.name||'任务级','任务':taskById(r.taskId)?.name,'冲突说明':r.basis,'规则来源':r.source,'流程状态':d?flowLabels[d.status]:'待安全员处理','调整方案':d?.title||'','具体候选人':workerById(d?.candidateWorkerId)?.name||'','执行反馈':d?.outcome||''}}),decisionRows=Object.values(state.decisions).map(d=>({'风险编号':d.riskId,'方案':d.title,'模式':d.mode,'具体人员':workerById(d.candidateWorkerId)?.name||'','状态':flowLabels[d.status],'新开始':d.newStart||'','新结束':d.newEnd||'','专业复核':d.reviewResult||'','工友反馈':d.workerNote||'','执行结果':d.outcome||''})),logRows=state.logs.map(x=>({'时间':x.time,'操作人/模块':x.actor,'操作内容':x.action,'状态':x.status}));final.tasks=final.tasks.map((row,index)=>{const task=finalPlanData.tasks[index],confirmation=taskConfirmation(task.id);return {...row,'派工状态':confirmation.status,'确认时间':confirmation.time,'班前说明':confirmation.note};});final.assignments=final.assignments.map(row=>{const confirmation=taskConfirmation(row['任务编号']);return {...row,'派工状态':confirmation.status};});const readyCount=confirmRows.filter(row=>row['派工状态']==='班组已确认派工').length;downloadWorkbook('安龄工友-闭环决策报告.xlsx',{'导出说明':[{'生成时间':new Date().toLocaleString('zh-CN',{hour12:false}),'计划任务数':state.tasks.length,'班组已确认':readyCount,'剩余规则风险':finalRisks().length,'使用说明':'“最终任务”仅作为班前辅助记录；待专业复核或待确认的任务不可视为可执行派工单。'}],'任务确认状态':confirmRows,'风险与状态':riskRows,'决策记录':decisionRows,'原任务':original.tasks,'原人员分配':original.assignments,'最终任务':final.tasks,'最终人员分配':final.assignments,'操作记录':logRows});notify('闭环报告已导出，已附任务确认状态');}
function dispatchBaseTaskId(taskId){return Object.values(state.decisions).find(item=>`F-${item.riskId}`===taskId)?.taskId||taskId;}
function dispatchRequirements(taskId){const baseTaskId=dispatchBaseTaskId(taskId),decisions=Object.values(state.decisions).filter(item=>item.taskId===baseTaskId&&completedStatuses.has(item.status));return decisions.length?decisions.map(item=>item.title).join('；'):'常规班前交底、机具检查和现场条件确认';}
function finalDispatchRows(plan){
  const rows=[],assignedByTask=new Map();
  plan.assignments.forEach(assignment=>{const list=assignedByTask.get(assignment.taskId)||[];list.push(assignment);assignedByTask.set(assignment.taskId,list);});
  plan.tasks.forEach(task=>{
    const assigned=assignedByTask.get(task.id)||[],confirmation=taskConfirmation(task.id);
    const mentors=assigned.filter(item=>item.role==='经验指导'||item.role==='经验型任务').map(item=>workerById(item.workerId,plan.workers)?.name||item.workerId),experienceTopic=assigned.map(item=>item.experienceTopic).find(Boolean)||task.experienceGoal||'';
    assigned.forEach(assignment=>{const worker=workerById(assignment.workerId,plan.workers);rows.push({'派工序号':rows.length+1,'派工状态':confirmation.status,'工友':worker?.name||assignment.workerId,'工种':worker?.trade||'待核对','施工任务':task.name,'任务角色':assignment.role,'适配理由':assignmentMatchReasons(task,assignment).join('；'),'经验指导人员':assignment.role==='经验指导'||assignment.role==='经验型任务'?'本人':mentors.join('、')||'未安排','传承内容':experienceTopic||'—','作业时间':`${task.start}-${task.end}`,'作业区域':task.area,'作业环境':task.environment,'劳动强度':task.intensity,'班前要求':dispatchRequirements(task.id),'确认时间':confirmation.time});});
    const missing=Math.max(0,Number(task.people||1)-assigned.filter(isExecutionAssignment).length);
    for(let index=0;index<missing;index++)rows.push({'派工序号':rows.length+1,'派工状态':'人员未到位','工友':'待补人员','工种':'待匹配','施工任务':task.name,'任务角色':'待补人员','经验指导人员':mentors.join('、')||'未安排','传承内容':experienceTopic||'—','作业时间':`${task.start}-${task.end}`,'作业区域':task.area,'作业环境':task.environment,'劳动强度':task.intensity,'班前要求':'先补足人员并重新扫描','确认时间':''});
  });
  return rows;
}
function experienceRecordRows(plan){return plan.tasks.filter(task=>task.experienceGoal).map(task=>{const baseTaskId=dispatchBaseTaskId(task.id),record=state.experienceRecords[baseTaskId]||{},mentors=assignmentsForTask(baseTaskId).filter(item=>item.role==='经验指导'||item.role==='经验型任务').map(item=>workerById(item.workerId)?.name||item.workerId).join('、')||'未安排';return {'任务编号':task.id,'施工任务':task.name,'传承内容':task.experienceGoal,'经验指导人员':mentors,'记录结果':record.result||'尚未登记','参与工友':record.participants||'','经验要点 / 质量问题':record.notes||'','记录时间':record.recordedAt?new Date(record.recordedAt).toLocaleString('zh-CN',{hour12:false}):''};});}
function exportFinalDispatchReport(){
  const finalPlanData=finalPlan(),isReady=state.tasks.length>0&&state.tasks.every(task=>state.dispatchConfirmed[task.id])&&finalRisks().length===0;
  if(!isReady)return notify('当前仍有待确认任务或规则风险，请先完成班前处置；可导出“调整预览”供复核。');
  const original=workbookRows(),final=workbookRows(finalPlanData),dispatchRows=finalDispatchRows(finalPlanData),confirmRows=state.tasks.map(task=>{const confirmation=taskConfirmation(task.id);return {'任务编号':task.id,'施工任务':task.name,'派工状态':confirmation.status,'确认时间':confirmation.time,'说明':confirmation.note};}),riskRows=calculateRisks().map(risk=>{const decision=state.decisions[risk.id];return {'风险编号':risk.id,'风险等级':risk.level==='high'?'高':'优化建议','工友':workerById(risk.workerId)?.name||'任务级','任务':taskById(risk.taskId)?.name,'冲突说明':risk.basis,'规则来源':risk.source,'流程状态':decision?flowLabels[decision.status]:'待安全员处理','调整方案':decision?.title||''};}),decisionRows=Object.values(state.decisions).map(decision=>({'风险编号':decision.riskId,'方案':decision.title,'具体人员':workerById(decision.candidateWorkerId)?.name||'','状态':flowLabels[decision.status],'新开始':decision.newStart||'','新结束':decision.newEnd||''})),logRows=state.logs.map(item=>({'时间':item.time,'操作人/模块':item.actor,'操作内容':item.action,'状态':item.status})),readyCount=confirmRows.filter(row=>row['派工状态']==='班组已确认派工').length;
  downloadWorkbook('安龄工友-最终派工单.xlsx',{'最终派工单':dispatchRows,'任务确认状态':confirmRows,'经验传承记录':experienceRecordRows(finalPlanData),'导出说明':[{'生成时间':new Date().toLocaleString('zh-CN',{hour12:false}),'计划任务数':state.tasks.length,'班组已确认':readyCount,'剩余规则风险':finalRisks().length,'使用说明':'第一张表为班组班前交底使用。待专业复核、待安全措施确认、待班组确认或人员未到位的行，不可作为可执行派工安排。'}],'风险与状态':riskRows,'决策记录':decisionRows,'最终任务':final.tasks,'最终人员分配':final.assignments,'原任务':original.tasks,'原人员分配':original.assignments,'操作记录':logRows});
  notify('最终派工单已导出，第一张表可直接用于班前交底');
}
function exportJson(){const payload={schemaVersion:4,exportedAt:new Date().toISOString(),workers:state.workers,tasks:state.tasks,assignments:state.assignments,weather:state.weather,decisions:state.decisions,dispatchConfirmed:state.dispatchConfirmed,experienceRecords:state.experienceRecords,logs:state.logs};const link=document.createElement('a');link.href=URL.createObjectURL(new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}));link.download='安龄工友-完整闭环数据.json';link.click();URL.revokeObjectURL(link.href);notify('完整数据已导出');}

function bind(){
  document.querySelectorAll('[data-view]').forEach(button=>button.onclick=()=>{state.view=button.dataset.view;state.aiDispatchLoading=false;save();try{render();}catch(error){renderFatalError(error);}});
  document.querySelectorAll('[data-risk]').forEach(button=>button.onclick=()=>riskModal(button.dataset.risk));
  document.querySelectorAll('[data-quick-risk]').forEach(button=>button.onclick=()=>quickRiskModal(button.dataset.quickRisk));
  document.querySelectorAll('[data-select-task]').forEach(button=>button.onclick=()=>{state.selectedTaskId=button.dataset.selectTask;save();render();});
  document.querySelectorAll('[data-add-recommended-task]').forEach(button=>button.onclick=()=>addRecommendedCandidate(button.dataset.addRecommendedTask,button.dataset.recommendedWorker));
  document.querySelectorAll('[data-add-mentor-task]').forEach(button=>button.onclick=()=>addExperienceMentor(button.dataset.addMentorTask,button.dataset.mentorWorker));
  document.querySelectorAll('[data-build-ai-dispatch]').forEach(button=>button.onclick=buildAiDispatchDraft);
  document.querySelectorAll('[data-final-risk]').forEach(button=>button.onclick=()=>{const taskId=button.dataset.finalTask,riskId=button.dataset.finalRisk;state.view='dashboard';state.assistantMode='analyzed';state.selectedTaskId=dispatchBaseTaskId(taskId);save();render();const sourceRisk=calculateRisks().find(risk=>risk.id===riskId);if(sourceRisk)setTimeout(()=>riskModal(riskId),80);else notify('已定位到关联任务，请在“本任务待处理”中继续处置');});
  document.querySelectorAll('[data-task-output]').forEach(button=>button.onclick=()=>taskOutputModal(button.dataset.taskOutput));
  document.querySelectorAll('[data-experience-record]').forEach(button=>button.onclick=()=>experienceRecordModal(button.dataset.experienceRecord));
  document.querySelectorAll('[data-edit-task]').forEach(button=>button.onclick=()=>taskModal(button.dataset.editTask));
  document.querySelectorAll('[data-assign-task]').forEach(button=>button.onclick=()=>assignmentModal(button.dataset.assignTask));
  document.querySelectorAll('[data-edit-worker]').forEach(button=>button.onclick=()=>workerModal(button.dataset.editWorker));
  document.querySelectorAll('[data-profile-filter]').forEach(button=>button.onclick=()=>{state.profileFilter=button.dataset.profileFilter;save();render();});
  const search=$('#workerSearch');if(search)search.oninput=()=>{state.search=search.value;save();clearTimeout(search.timer);search.timer=setTimeout(render,180);};
  const actions={scanButton:runScan,addTaskButton:()=>taskModal(),addWorkerButton:()=>workerModal(),weatherButton:weatherModal,weatherSyncButton:syncWeather,aiParseButton:aiPlanModal,assistantAnalyzeButton:analyzeDailyPlan,aiDispatchButton:buildAiDispatchDraft,demoAssistantButton:showAssistantExample,applyDraftButton:applyAssistantDraft,discardDraftButton:()=>{state.assistantMode='start';state.assistantDraft=null;save();render();},templateButton:downloadTemplate,reportButton:()=>state.view==='final'?exportFinalDispatchReport():exportReport(),jsonButton:exportJson,importButton:()=>$('#fileInput').click()};Object.entries(actions).forEach(([id,fn])=>{const element=$(`#${id}`);if(element)element.onclick=fn;});
  const sourceImport=$('#sourceImportButton');if(sourceImport)sourceImport.onclick=()=>$('#fileInput').click();
  const returnToInput=$('#returnToInputButton');if(returnToInput)returnToInput.onclick=()=>{state.assistantMode='start';state.assistantDraft=null;save();render();};
  const returnToDispatch=$('#returnToDispatchButton');if(returnToDispatch)returnToDispatch.onclick=()=>{const plan=finalPlan(),next=plan.tasks.find(task=>taskConfirmation(task.id).status!=='班组已确认派工');state.selectedTaskId=dispatchBaseTaskId(next?.id||state.tasks[0]?.id||'');state.view='dashboard';state.assistantMode='analyzed';save();render();};
  const previewReport=$('#previewReportButton');if(previewReport)previewReport.onclick=exportReport;
  const sourceManualAdd=$('#sourceManualAdd');if(sourceManualAdd)sourceManualAdd.onclick=()=>taskModal();
  const sourceAnalyzeCurrent=$('#sourceAnalyzeCurrent');if(sourceAnalyzeCurrent)sourceAnalyzeCurrent.onclick=()=>{state.assistantMode='analyzed';save();render();};
  const addDraftTask=$('#addDraftTaskButton');if(addDraftTask)addDraftTask.onclick=()=>draftTaskModal();
  document.querySelectorAll('[data-edit-draft-task]').forEach(button=>button.onclick=()=>draftTaskModal(Number(button.dataset.editDraftTask)));
  document.querySelectorAll('[data-delete-draft-task]').forEach(button=>button.onclick=()=>deleteDraftTask(Number(button.dataset.deleteDraftTask)));
  document.querySelectorAll('[data-plan-source]').forEach(button=>button.onclick=()=>{state.planSource=button.dataset.planSource;state.assistantMode='start';state.assistantDraft=null;save();render();});
  const dailyInput=$('#dailyPlanInput');if(dailyInput)dailyInput.oninput=()=>{state.assistantInput=dailyInput.value;save();};
  const role=$('#roleSelect');if(role)role.onchange=()=>{state.role=role.value;save();render();notify(`当前原型角色：${roleLabels[state.role]}`);};
  const confirmDispatch=$('#confirmDispatchButton');if(confirmDispatch)confirmDispatch.onclick=()=>confirmTaskDispatch(state.selectedTaskId);
  const reset=$('#resetButton');if(reset)reset.onclick=()=>{if(confirm('确认恢复新的多人分配示例数据？')){state=defaultState();save();render();notify('示例数据已恢复');}};
}
function render(){const pages={dashboard,final:finalPage,workers:workersPage,rules:rulesPage,logs:logsPage};$('#app').innerHTML=shell(pages[state.view]());bind();icons();}
function renderFatalError(error){
  console.error(error);
  $('#app').innerHTML=`<main style="min-height:100vh;display:grid;place-items:center;padding:24px;background:#f4f6f8;font-family:Arial,'Microsoft YaHei',sans-serif"><section style="width:min(520px,100%);padding:28px;background:#fff;border:1px solid #d9e1e8;border-radius:8px;box-shadow:0 10px 24px rgba(19,48,71,.08)"><p style="margin:0 0 8px;color:#147d75;font-weight:700">安龄工友</p><h1 style="margin:0;color:#17324a;font-size:22px">页面数据需要恢复</h1><p style="margin:12px 0 20px;color:#526779;line-height:1.65">浏览器保存的旧页面状态与当前版本不兼容。恢复不会删除施工任务和工友档案，只会重置页面的临时操作状态。</p><button id="recoverApp" style="padding:10px 16px;border:0;border-radius:5px;background:#087f78;color:#fff;font-size:14px;font-weight:700;cursor:pointer">恢复并打开工作台</button></section></main>`;
  $('#recoverApp').onclick=()=>{const recovered={...state,view:'dashboard',assistantMode:'analyzed',aiDispatchDraft:null,aiDispatchLoading:false,decisions:{},dispatchConfirmed:{}};localStorage.setItem('anlingStateV3',JSON.stringify(recovered));location.reload();};
}

$('#fileInput').addEventListener('change',event=>{importFile(event.target.files[0]);event.target.value='';});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeModal();});
try { render(); scheduleAiRefresh(); } catch(error) { renderFatalError(error); }
window.addEventListener('load',icons,{once:true});

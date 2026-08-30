# 安龄工友 Demo 公网部署

## 1. 上传到 GitHub

在 GitHub 新建一个仓库，将 `angongban` 文件夹中的全部文件上传。不要上传 `.env`；API 密钥只在 Render 的环境变量中填写。

## 2. 在 Render 创建服务

登录 <https://render.com>，选择 **New → Web Service**，连接刚才的 GitHub 仓库。

- Runtime：Node
- Build Command：留空
- Start Command：`npm start`
- Plan：Free

也可以直接使用仓库中的 `render.yaml` 创建服务。

## 3. 配置 AI 环境变量

在 Render 的 Environment 中填写：

- `AI_PROVIDER`：`deepseek`
- `AI_API_URL`：`https://api.deepseek.com/chat/completions`
- `AI_MODEL`：`deepseek-chat`
- `AI_API_KEY`：你的 DeepSeek 密钥

保存后等待部署完成。Render 会生成类似下面的公网地址：

`https://anling-gongyou-demo.onrender.com`

这个地址就是提交给评委的 Demo 链接。首次打开免费服务可能需要等待几十秒唤醒。

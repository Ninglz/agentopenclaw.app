# AgentOpenClaw 上线前必做清单

这份清单梳理了你需要手动完成的所有第三方服务配置和上线准备工作。完成这些后，网站就可以正式对外发布了。

## 1. 认证服务配置 (Google 一键登录)
*为了让右上角的 Google 快捷登录生效。*

- [ ] 进入 [Google Cloud Console](https://console.cloud.google.com/)
- [ ] 创建一个新项目 (或选择现有项目)
- [ ] 导航到 `API & Services` -> `Credentials`
- [ ] 点击 `Create Credentials` -> `OAuth client ID` (Application type 选 Web application)
- [ ] 在 `Authorized JavaScript origins` 添加本地和线上域名：
  - `http://localhost:3000`
  - `https://agentopenclaw.app` (或其他正式域名)
- [ ] 在 `Authorized redirect URIs` 添加：
  - `http://localhost:3000/api/auth/callback/google`
  - `https://agentopenclaw.app/api/auth/callback/google`
- [ ] 获取生成的 `Client ID` 和 `Client Secret`
- [ ] 将其填入本地的 `.env.local` 以及 Vercel 的环境变量中：
  ```env
  GOOGLE_CLIENT_ID="你的_client_id"
  GOOGLE_CLIENT_SECRET="你的_client_secret"
  NEXT_PUBLIC_GOOGLE_CLIENT_ID="你的_client_id"
  ```

## 2. 邮件服务配置 (Resend)
*用于账号注册验证码、密码找回以及自动发送免费 Agent 配置文件。*

- [ ] 注册并登录 [Resend](https://resend.com/)
- [ ] 在 `API Keys` 页面创建一个新 Key
- [ ] 在 `Domains` 页面验证你的发件域名 (如 `agentopenclaw.app`，需要在域名注册商处配置 DNS 记录)
- [ ] 获取 `API Key`，填入 `.env.local`：
  ```env
  RESEND_API_KEY="你的_resend_api_key"
  ```
- [ ] **完成此步后**：你可以进入 `src/lib/auth.ts`，把第 37 行临时禁用的 `requireEmailVerification: false,` 改回 `true`。

## 3. 支付服务配置 (Stripe)
*用于收取 "$29 / $19" 的付费 Agent 配置费用。*

- [ ] 登录 [Stripe Dashboard](https://dashboard.stripe.com/)
- [ ] 创建对应的产品 (Product) 和价格 (Price)
- [ ] 获取各项 API 密钥及 Price ID，并在 `.env.local` 中配置：
  ```env
  STRIPE_SECRET_KEY="sk_test_..."
  STRIPE_WEBHOOK_SECRET="whsec_..."
  # 填入你创建的 $29 Pro 购买项的 Price ID
  NEXT_PUBLIC_STRIPE_PRICE_LIFETIME="price_..."
  ```
- [ ] 在 Stripe 后台配置 Webhook 接收地址：`https://agentopenclaw.app/api/webhooks/stripe`

## 4. 社交化分发
*流量启动。*

- [ ] 查看项目根目录下的 `reddit_posts.md`
- [ ] 根据你当地时间周一至周四的早晨时刻 (8-10 AM EST 效果最佳)
- [ ] 在对应的 4 个 Subreddit (r/openclaw, r/SEO, r/microsaas, r/SideProject) 发布内容
- [ ] 及时回复前两小时内的所有评论

## 5. 部署与 SEO 收录
*正式上线。*

- [ ] **Vercel 部署**：在 Vercel 中导入 GitHub 仓库进行部署，**务必将本地 `.env.local` 里的所有环境变量同步到 Vercel 的 Environment Variables 中**。
- [ ] **Google 站长工具**：验证域名所有权 ([Google Search Console](https://search.google.com/search-console))。
- [ ] **提交 Sitemap**：向 Google GSC 提交 `https://agentopenclaw.app/sitemap.xml` 加快收录。
- [ ] **Lighthouse 测试**：在 Chrome DevTools 中运行一次线上版 Lighthouse Audit，确保分数健康。

---
*你可以直接在 VS Code 里用 Markdown Preview 插件打勾勾，或者复制到 Notion 里去跟踪进度。*

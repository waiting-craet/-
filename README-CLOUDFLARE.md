# 圣诞树项目 - Cloudflare Pages 部署指南

## 项目简介

这是一个使用React、Three.js和MediaPipe创建的交互式3D圣诞树项目，支持手势识别控制。

## 本地运行

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 在浏览器中访问 http://localhost:5173

## 部署到 Cloudflare Pages

### 前提条件

1. 安装 Wrangler CLI：
```bash
npm install -g wrangler
```

2. 登录 Cloudflare：
```bash
wrangler login
```

### 部署步骤

1. 构建项目：
```bash
npm run build
```

2. 部署到 Cloudflare Pages：
```bash
npm run deploy
```

或者直接使用 wrangler 命令：
```bash
npx wrangler pages deploy dist --project-name=christmas-tree
```

### 配置说明

- Cloudflare Pages 会自动处理静态资源
- 所有文件从 `dist` 目录部署
- 照片资源会自动上传并托管在 Cloudflare 的全球 CDN 上
- 支持自定义域名（在 Cloudflare Pages 控制台配置）

### 注意事项

1. 首次部署时，Wrangler 会询问是否创建新项目，选择 "Yes"
2. 确保项目名称与 `--project-name` 参数一致
3. 部署完成后，Pages 会提供一个 `.pages.dev` 域名
4. 可以在 Cloudflare Pages 控制台查看部署日志和配置自定义域名

## 项目结构

```
christmas-tree-main/
├── public/           # 静态资源，包括照片
├── src/              # React源代码
├── dist/             # 构建输出目录（自动生成）
└── vite.config.ts    # Vite构建配置
```

## 功能特性

- 3D圣诞树渲染
- 照片装饰
- 手势识别控制（张开手掌/握拳）
- 自动旋转
- 粒子效果
- 响应式设计

## 技术栈

- React 18
- Three.js
- React Three Fiber
- MediaPipe
- Vite
- TypeScript
- Cloudflare Pages
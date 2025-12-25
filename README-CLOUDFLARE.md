# 圣诞树项目 - Cloudflare Workers 部署指南

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

## 部署到 Cloudflare Workers

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

1. 构建项目并部署到开发环境：
```bash
npm run build:worker
```

2. 部署到预发布环境：
```bash
npm run deploy:staging
```

3. 部署到生产环境：
```bash
npm run deploy:production
```

### 配置说明

- `wrangler.toml`: Cloudflare Workers配置文件
- `worker.js`: Cloudflare Workers入口文件
- `vite.config.ts`: Vite构建配置，已优化用于Workers部署

### 注意事项

1. 确保在`wrangler.toml`中正确配置了您的账户ID和路由
2. 照片资源会自动通过Cloudflare的KV存储服务提供
3. 首次部署可能需要几分钟时间才能在全球CDN上生效

## 项目结构

```
christmas-tree-main/
├── public/           # 静态资源，包括照片
├── src/              # React源代码
├── worker.js         # Cloudflare Workers入口文件
├── wrangler.toml     # Cloudflare Workers配置
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
- Cloudflare Workers
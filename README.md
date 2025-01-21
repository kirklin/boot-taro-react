<div align='center'>
<h1>Boot Taro React</h1>
<img src='README.assets/introduce.png' alt='introduce' width='390'/>
</div>

[![Author](https://img.shields.io/badge/Author-Kirk%20Lin-blue.svg?style=flat&colorA=080f12&colorB=3491fa)](https://github.com/kirklin)
[![License](https://img.shields.io/github/license/kirklin/boot-taro-react?style=flat&colorA=080f12&colorB=3491fa)](https://github.com/kirklin/boot-taro-react/blob/main/LICENSE)
[![Stars](https://img.shields.io/github/stars/kirklin/boot-taro-react?style=flat&colorA=080f12&colorB=3491fa)](https://github.com/kirklin/boot-taro-react/stargazers)
[![Forks](https://img.shields.io/github/forks/kirklin/boot-taro-react?style=flat&colorA=080f12&colorB=3491fa)](https://github.com/kirklin/boot-taro-react/network/members)
[![Issues](https://img.shields.io/github/issues/kirklin/boot-taro-react?style=flat&colorA=080f12&colorB=3491fa)](https://github.com/kirklin/boot-taro-react/issues)

一个基于 Taro + React 的开箱即用的小程序模板，采用最新的 Taro 4.0 + React 18 + TypeScript + UnoCSS 等主流技术栈。

## ✨ 特性

- 🎯 **最新技术栈**：使用 Taro 4.0 + React 18 + TypeScript + UnoCSS 等前沿技术开发
- 📱 **多端适配**：支持微信、支付宝、百度、字节跳动、QQ、京东等小程序平台和 H5
- 🎨 **Taroify**：集成了 Taroify UI 组件库，提供丰富的组件和优秀的开发体验
- 🚀 **原子化 CSS**：采用 UnoCSS，享受高效的样式开发体验
- 🔍 **TypeScript**：应用程序级 JavaScript 的语言
- 📦 **状态管理**：集成了 React Query，轻松管理服务端状态
- 🔧 **最佳实践**：良好的工程化实践，包括 eslint、stylelint、commitlint、husky 等

## 🚀 开发工具链

- ⚡️ [React 18](https://beta.reactjs.org/)
- 🛠️ [TypeScript](https://www.typescriptlang.org/)
- 📱 [Taro 4](https://taro.zone/)
- 🎨 [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎
- 🌼 [Taroify](https://taroify.gitee.io/taroify.com/introduce/) - 基于 Taro 的多端 UI 组件库
- 🔍 [ESLint](https://eslint.org/) - 代码检查
- 🎯 [Commitlint](https://commitlint.js.org/) - Git 提交规范

## 📦 使用

### 环境准备

- Node.js 18+
- pnpm 9.15.0+

### 安装依赖

```bash
pnpm install
```

### 运行

```bash
# 微信小程序
pnpm dev:weapp

# H5
pnpm dev:h5
```

### 构建

```bash
# 微信小程序
pnpm build:weapp

# H5
pnpm build:h5
```

## 🎨 项目结构

```bash
├── src
│   ├── api                   # API 接口
│   ├── components           # 公共组件
│   ├── constants           # 常量定义
│   ├── hooks              # 自定义 Hooks
│   ├── pages              # 页面
│   ├── types              # 类型定义
│   ├── utils              # 工具函数
│   ├── app.config.ts      # Taro 应用配置
│   ├── app.scss          # 全局样式
│   └── app.tsx           # 应用入口
├── config                 # 项目配置
├── types                 # 全局类型定义
├── .eslintrc.js         # ESLint 配置
├── .prettierrc          # Prettier 配置
├── tsconfig.json        # TypeScript 配置
└── package.json         # 项目依赖
```

## 📄 开源协议

[MIT](./LICENSE) License &copy; 2024 [Kirk Lin](https://github.com/kirklin)

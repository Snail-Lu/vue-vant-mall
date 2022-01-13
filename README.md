### 项目简介

> 基于 Vue2.0 + Vant UI 实现的移动端商城项目。[预览地址](https://snail-lu.github.io/vue-vant-mall/)

### 项目技术点

- 移动端适配 ---- postcss-px-to-viewport
- 移动端组件 ---- vant
- 路由 ---- vue-router
- 全局状态管理 ---- vuex
- 代码格式化 ---- prettier
- 图标 ---- iconfont
- 长列表滚动 ---- vue-infinite-scroll

### 基本操作

```bash
# 克隆
git clone https://github.com/Snail-Lu/vue-vant-mall

# 进入项目根目录
cd vue-vant-mall

# 安装依赖
npm install

# 本地运行
npm run serve

# 打包
npm run build


# 部署到github pages
npm run deploy
```

### `Vant`组件按需引入

本项目中 `Vant` 组件为按需引入，需要使用到的组件在`src/components/Vant/index.js`中引入即可。

### `VS Code` 中 `Prettier` 自动格式化配置

1. 安装插件 `Prettier - Code fromatter` 并启用。
2. `VS Code` --> `File` --> `Preference` --> `Settings` ---> `Text Editors` --> `Formatting` 勾选 `Formate on Save|Paste|Type`。
3. `VS Code` --> `File` --> `Preference` --> `Settings` ---> `Extensions` --> `Prettier` --> `Use Editor Config` 移除勾选。
4. 如果上述配置结束，仍然无法在保存时自动进行代码格式化，在任一`vue`或`js`文件中右键选择`Format Document With...`，选择`Prettier`即可。

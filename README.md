# web-lib-starter

[English Documentation](./README.en.md)

一个用于快速创建 Web 组件库的模板脚手架.

## 快速开始

```
git clone https://github.com/senntyou/web-lib-starter.git --depth=1

cd web-lib-starter

npm install             # 安装依赖

npm run build           # 构建发布文件
```

## 特性

- [less](http://lesscss.org/), [scss](https://sass-lang.com/) 样式语言支持.
- [Flow](https://flow.org/) 语法, [jest](https://jestjs.io/en/) 测试支持.
- 使用 [lila](https://github.com/senntyou/lila) 预览调试页面.

## 项目

```
- src
  - index.js                 # js 入口文件
  - styles
    - index.{less,scss}      # 样式入口文件
```

样式默认使用 `less` 语言, 如果你想使用 `scss` 语言, 可以修改 `package.json`:

```
"scripts": {
  - "build:styles": "npm run build:less",
  + "build:styles": "npm run build:scss",
}
```

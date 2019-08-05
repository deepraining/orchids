# orchids

[English Documentation](./README.en.md)

当前版本是 `1.x`, [v0.x 在这里](https://github.com/senntyou/orchids/tree/0.x).

让 Web App 有像 Native App 一样的体验.

[Demo](http://senntyou.github.io/orchids/).

[Demo Code](./view/demo).

## 快速开始

```
npm install orchids --save

import 'orchids/lib/styles.css';
import { registerPage, startPage, ... } from 'orchids';
```

## api

### registerPage: 注册一个页面

```
registerPage(name, attributes, options);
```

- `name`: `string` 页面名字.
- `attributes`: `{}` 页面属性.
  - `beforeCreate`: 页面根元素创建之前.
  - `created`: 页面根元素创建之后.
  - `beforeDestroy`: 页面根元素销毁之前.
  - `destroyed`: 页面根元素销毁之后.
- `options`: `{}` 页面配置.
  - `options.route`: `bool` `默认: true` 是否向浏览器历史注入一个新的 hash.
  - `options.animate`: `bool` `默认: true` 是否使用动画.
  - `options.direction`: `string` `默认: r2l` 动画方向: r2l(右到左), l2r(左到右), b2t(底到顶), t2b(顶到底).
  - `options.backgroundColor`: `string` `默认: #ffffff` 背景颜色.
  - `options.style`: `{}` 额外的 Css 样式.

### startPage: 开始一个页面

```
startPage(name, data, options);
```

- `name`: `string` 页面名字.
- `data`: `*` 传递给 `created` 钩子的页面数据.
- `options`: `{}` 配置.
  - `options.beforeAppInitialized`: `bool` `默认: false` 当应用未初始化时，可否运行一个没有路由的页面.

### back: 回退一个页面

```
back();
```

### init: 初始化应用

```
init({ root });
```

- `root`: `DOM` `默认: document.body` 根容器.

### getPage: 通过索引获取页面实例

```
const page = getPage(index);
```

- `index`: `int` `默认: 0` 索引（如果是负数，则倒数取值，如 `-1` 为倒数第一个，`-2` 为倒数第二个）.

### getRoutePage: 通过索引获取有路由的页面实例

```
const page = getRoutePage(index);
```

- `index`: `int` `默认: 0` 索引（如果是负数，则倒数取值，如 `-1` 为倒数第一个，`-2` 为倒数第二个）.

### getPagesLength: 获取页面个数

```
const length = getPagesLength();
```

### getRoutePagesLength: 获取有路由的页面个数

```
const length = getRoutePagesLength();
```

### getCurrentPage: 获取当前页面

```
const page = getCurrentPage();
```

### getCurrentRoutePage: 获取当前有路由的页面

```
const page = getCurrentRoutePage();
```

### getPages: 根据名字获取页面

```
const pages = getPages(name);
```

- `name`: `string` 页面名字，如果为空，则获取所有的页面

### getRoutePages: 根据名字获取路由页面

```
const pages = getRoutePages(name);
```

- `name`: `string` 页面名字，如果为空，则获取所有的路由页面

## Page: 页面实例与钩子

- `Page.id`: 页面 Id.
- `Page.name`: 页面名字.
- `Page.options`: 页面配置.
- `Page.el`: 页面跟元素(`beforeCreate` 中不能访问).

### beforeCreate: 页面根元素创建之前

```
registerPage('name', {
  beforeCreate() {
    this.id // ok
    this.name // ok
    this.options // ok
    this.el // not ok
  },
});
```

### created: 页面根元素创建之后

```
registerPage('name', {
  created() {
    this.id // ok
    this.name // ok
    this.options // ok
    this.el // ok
  },
});
```

### beforeDestroy: 页面根元素销毁之前

```
registerPage('name', {
  beforeDestroy() {
    this // ok
  },
});
```

### destroyed: 页面根元素销毁之后

```
registerPage('name', {
  destroyed() {
    this // ok
  },
});
```

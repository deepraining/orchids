# orchids

[中文文档](./README.md)

Current version is `1.x`, [v0.x is here](https://github.com/senntyou/orchids/tree/0.x).

Make Web App be felt as Native App.

[Demo](http://senntyou.github.io/orchids/).

[Demo Code](./view/demo).

## Getting started

```
npm install orchids --save

import { registerPage, startPage, ... } from 'orchids';
```

## api

### registerPage: Register a Page

```
registerPage(name, attributes, options);
```

- `name`: `string` Page name.
- `attributes`: `{}` Page attributes.
  - `beforeCreate`: Before page root element being created.
  - `created`: After page root element being created.
  - `beforeDestroy`: Before page root element being destroyed.
  - `destroyed`: After page root element being destroyed.
- `options`: `{}` Page options.
  - `options.route`: `bool` `default: true` Whether to push a new hash to browser.
  - `options.animate`: `bool` `default: true` Whether to use animation.
  - `options.direction`: `string` `default: r2l` Animation direction: r2l(right to left), l2r(left to right), b2t(bottom to top), t2b(top to bottom).
  - `options.backgroundColor`: `string` `default: #ffffff` Background color.
  - `options.style`: `{}` Extra Css style.

### startPage: Start a Page

```
startPage(name, data);
```

- `name`: `string` Page name.
- `data`: `*` Page data pass to `created` hook.

### back: Back a Page

```
back();
```

### init: Init application

```
init({ root });
```

- `root`: `DOM` `default: document.body` Root container.

### getPage: Get Page by index

```
const page = getPage(index);
```

- `index`: `int` `default: 0` Index.

### getPagesLength: Get pages' length

```
const length = getPagesLength();
```

### getCurrentPage: Get current Page

```
const page = getCurrentPage();
```

### getLastRoutePage: Get last Page which has route

```
const page = getLastRoutePage();
```

## Page: Page instance and hooks

- `Page.id`: Page id.
- `Page.name`: Page name.
- `Page.options`: Page options.
- `Page.el`: Page root element(`beforeCreate` cant access to it).

### beforeCreate: Before page root element being created

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

### created: After page root element being created

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

### beforeDestroy: Before page root element being destroyed

```
registerPage('name', {
  beforeDestroy() {
    this // ok
  },
});
```

### destroyed: After page root element being destroyed

```
registerPage('name', {
  destroyed() {
    this // ok
  },
});
```

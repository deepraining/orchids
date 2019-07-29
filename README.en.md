# web-lib-starter

[中文文档](./README.md)

A boilerplate for creating a Web library.

## Getting started

```
git clone https://github.com/senntyou/web-lib-starter.git --depth=1

cd web-lib-starter

npm install             # install dependencies

npm run build           # build distribution files
```

## Features

- [less](http://lesscss.org/), [scss](https://sass-lang.com/) style languages support.
- [Flow](https://flow.org/) syntax, [jest](https://jestjs.io/en/) test support.
- Use [lila](https://github.com/senntyou/lila) to preview and debug pages.

## Project

```
- src
  - index.js                 # js entry file
  - styles
    - index.{less,scss}      # style entry file
```

By default, styles use `less` language, if you want to use `scss` language, you should modify `package.json` by:

```
"scripts": {
  - "build:styles": "npm run build:less",
  + "build:styles": "npm run build:scss",
}
```

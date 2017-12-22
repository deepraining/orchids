
## orchids.init

register application option

```
orchids.init({
    route: !1,
    onFirstPageInitialized: void 0,
    onRouteChange: void 0,
    rootContainer: void 0
});
```

### route

* `desc`: whether start a page with route or not. if set to true, the url will be changed when a page is started, like: url?orchidsPage=pageName&orchidsData=serializedData
* `type`: `true/false`
* `default`: `false`

### onFirstPageInitialized

* `desc`: called when first page is initialized
* `type`: `function`

### onRouteChange

* `desc`: called when route changed
* `type`: `function`

### rootContainer

* `desc`: custom root container for pages and dialogs
* `type`: `id selector / dom`
* `default`: `document.body`
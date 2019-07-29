
## orchids.init

Register application option.

```
orchids.init({
    route: !1,
    onFirstPageInitialized: void 0,
    onRouteChange: void 0,
    container: void 0
});
```

### route

* `desc`: Whether start a page with route or not. If set to true, the url will be changed when a page is started, like: `url?orchidsPage=pageName&orchidsId=pageId`.
* `type`: `true/false`
* `default`: `false`

### onFirstPageInitialized

* `desc`: Called when first page is initialized.
* `type`: `function`

### onRouteChange

* `desc`: Called when route changed.
* `type`: `function`

### container

* `desc`: Custom root container for pages and dialogs.
* `type`: `id selector / dom`
* `default`: `document.body`

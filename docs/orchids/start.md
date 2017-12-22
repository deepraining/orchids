
## orchids.start

start application
if current url has orchidsPage parameter, it'will start the "orchidsPage" specified page, not the page "pageName"

```
orchids.start(pageName, data)
```

### pageName

* `desc`: The name defined before
* `type`: `string`
* `more`: see [orchids.start](./start_page.md)

### data

* `desc`: Parameter to be used by next Page's `onCreate` method
* `more`: see [orchids.start](./start_page.md)
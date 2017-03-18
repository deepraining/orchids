# doc for Page object

## option for init

* backgroundColor

```
backgroundColor: '#ffffff'
```

* animate

```
animate: !0
```

* animateDirection

```
animateDirection: 'horizontal'
```

* fragments

```
// sub fragments
// note that, current page element should have a child node
// which has 'data-orchids-fragments' attribute,
// and it must has position-relative or position-absolute width specified width and height
// or fragments will not be rendered correctly
fragments: [
    'name1',
    'name2'
]
```

* fragmentAnimate

```
fragmentAnimate: !0
```

* fragmentAnimateDirection

```
fragmentAnimateDirection: 'horizontal'
```

## attributes

* id: current page id
* el: current page root element
* option: current page option

## methods

### methods to override

* onCreate

```
// render a page after a page is initialized
onCreate: function(){}
```

* onDestroy

```
// pre handle before destroy a page
onDestroy: function() {}
```

* onShow

```
// called when back page from other page
onShow: function () {}
```

* onHide

```
// called when start another page
onHide: function () {}
```

* onPageResult

```
// called when the child page destroyed and return the value by setResult method.
onPageResult: function(data) {}
```

* prepareForResult

```
// receive data from the previous page, startPageForResult method's second parameter
prepareForResult: function(data) {}
```

### methods to call

* setResult

```
// set the result if this page is called by startPageForResult method,
// and the returned value will be used as the param of the onPageResult method of last page
setResult: function(data) {}
```

* showFragment

```
// show fragment specified by id
showFragment: function(id) {}
```

* getFragment

```
// get fragment specified by id, default return the first fragment
getFragment: function(id) {}
```
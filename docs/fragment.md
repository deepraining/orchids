# doc for Fragment object

## option for init

* backgroundColor

```
backgroundColor: '#ffffff'
```

* style

```
style: void 0 // {key: value}
```

key: origin dom css key, like marginLeft
value: origin dom css value, like 1px

* subFragments

```
// sub fragments
// note that, current fragment element should have a child node
// which has 'data-orchids-sub-fragments' attribute,
// and it must has position-relative or position-absolute width specified width and height
// or fragments will not be rendered correctly
subFragments: [
    'name1',
    'name2'
]
```

* subFragmentAnimate

```
subFragmentAnimate: !0
```

* subFragmentAnimateDirection

```
subFragmentAnimateDirection: 'horizontal'
```

## attributes

* id: current fragment id
* el: current fragment root element
* option: current fragment option

## methods

### methods to override

* onCreate

```
// render a fragment after a fragment is initialized
onCreate: function(){}
```

* onDestroy

```
// pre handle before destroy a fragment
onDestroy: function() {}
```

* onShow

```
// called when back fragment from other fragment
onShow: function () {}
```

* onHide

```
// called when start another fragment
onHide: function () {}
```

### methods to call

* showSubFragment

```
// show sub fragment specified by id
showSubFragment: function(id) {}
```

* getSubFragment

```
// get sub fragment specified by id, default return the first fragment
getSubFragment: function(id) {}
```
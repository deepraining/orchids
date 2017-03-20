# doc for Dialog object

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
animateDirection: 'vertical'
```

* singleton

```
singleton: !1 // whether current dialog is singleton or not, if true,
              //it will be only created once, and will not be destroyed
```


## attributes

* id: current dialog id
* el: current dialog root element
* option: current dialog option

## methods

### methods to override

* onCreate

```
// render a dialog after a dialog is initialized
onCreate: function(){}
```

* onDestroy

```
// pre handle before destroy a dialog
onDestroy: function() {}
```

* onShow

```
// called when back dialog from other dialog
onShow: function () {}
```

* onHide

```
// called when start another dialog
onHide: function () {}
```

* onDialogResult

```
// called when the child dialog destroyed and return the value by setResult method.
onDialogResult: function(data) {}
```

* prepareForResult

```
// receive data from the previous dialog, startDialogForResult method's second parameter
prepareForResult: function(data) {}
```

### methods to call

* setResult

```
// set the result if this dialog is called by startDialogForResult method,
// and the returned value will be used as the param of the onDialogResult method of last dialog
setResult: function(data) {}
```
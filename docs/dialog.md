# Dialog

## base attributes

* `id`: dialog id

* `el`: dialog root element

* `option`: dialog option
    - `option.name`: current dialog name

## methods to override

* `beforeCreate`: before a dialog is initialized

* `onCreate`: render a dialog after a dialog is initialized
    - `@param data`: from `orchids.startDialog` second parameter

* `afterCreate`: after a dialog is initialized

* `onDestroy`: pre handle before destroy a dialog

* `afterDestroy`: after destroy a dialog

* `onShow`: called when back dialog from other dialog

* `onHide`: called when start another dialog

* `onResult`: called when the next dialog destroyed
    - `@param data`: returned the value by next dialog's `setResult` method.

* `prepareForResult`: receive data from the previous dialog
    - `@param data`: from `orchids.startDialogForResult` third parameter
    
## methods to call

* `setResult`: set the result if this dialog is called by `startDialogForResult` method, and the returned value will be used as the param of the `onResult` method of prev dialog or the `onResult` method of prev page
    - `@param data`: return the value to prev dialog's `onResult` method or prev page's `onResult` method.
    
## option to init

* `backgroundColor`: background color
    - `default`: `#ffffff`

* `style`: css style to render root element
    - `type`: `{*}`
    - `key`: origin dom css key, like `marginLeft`
    - `value`: origin dom css value, like `1px`

* `animate`: whether to use animation when switch between dialogs
    - `default`: `true`
    - `type`: `true/false`

* `fadeInOut`: whether to fade dialog when switch between dialogs
    - `default`: `false`
    - `type`: `true/false`

* `animateDirection`: animation direction of switching dialog
    - `detail`: `l2r/r2l/t2b/b2t(left-right, top-bottom)`
    - `default`: `b2t`

* `singleton`: whether current dialog is singleton or not, if true, it will be only created once, and will not be destroyed
    - `default`: `false`
    - `type`: `true/false`
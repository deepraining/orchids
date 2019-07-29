# Dialog

## Base attributes

* `id`: Dialog id

* `el`: Dialog root element

* `option`: Dialog option
    - `option.name`: Dialog name

## Methods to override

* `beforeCreate`: Called before dialog being initialized.

* `onCreate`: Render dialog after a dialog being initialized.
    - `@param data`: From `orchids.startDialog` second parameter.

* `afterCreate`: Called after dialog being rendered.

* `onDestroy`: Called before destroying dialog, for more pre handling.

* `afterDestroy`: Called after dialog being destroyed.

* `onShow`: Called when back dialog from another dialog.

* `afterShow`: Called when dialog is completely shown.

* `onHide`: Called when start another dialog.

* `afterHide`: Called when dialog is completely hidden.

* `onResult`: Called when the next dialog destroyed.
    - `@param data`: Returned the value by next dialog's `setResult` method.

* `prepareForResult`: Receive data from the previous dialog.
    - `@param data`: From `orchids.startDialogForResult` third parameter.
    
## Methods to call

* `setResult`: Set the result if dialog is called by `startDialogForResult` method, and the returned value will be used as the param of the `onResult` method of prev dialog or the `onResult` method of prev page.
    - `@param data`: Return the value to prev dialog's `onResult` method or prev page's `onResult` method.
    
## Options to init

* `backgroundColor`: Background color
    - `default`: `#ffffff`

* `style`: Styles to render root element.
    - `type`: `{*}`
    - `key`: Style key, like `marginLeft`
    - `value`: Style value, like `1px`

* `animate`: Whether to use animation when switching between dialogs.
    - `default`: `true`
    - `type`: `true/false`

* `fadeInOut`: Whether to fade dialog's opacity when switching between dialogs
    - `default`: `false`
    - `type`: `true/false`

* `animateDirection`: Animation direction when switching dialogs.
    - `detail`: `l2r/r2l/t2b/b2t(left-right, top-bottom)`
    - `default`: `b2t`

* `singleton`: Whether dialog is singleton or not. If true, it will be only created once, and will not be destroyed forever.
    - `default`: `false`
    - `type`: `true/false`

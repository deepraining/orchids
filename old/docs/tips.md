# Tips for using

## Callbacks

* `beforeCreate`: 
    - Called before the `page/dialog/fragment` being created.
    - The `el` attribute has not being created.
    - Singleton will only be called once.

* `onCreate`: Called when the `page/dialog/fragment` created, and singleton will only be called once.

* `afterCreate`: 
    - Called after the `page/dialog/fragment` created.
    - Called after animation finished, and you can get current `page/dialog` through `getCurrentPage/getCurrentDialog`
    - Singleton will only be called once.

* `onDestroy`: Called when the `page/dialog/fragment` back to prev, but singleton will never be called.

* `afterDestroy`: 
    - Called after the `page/dialog/fragment` destroyed.
    - Called after animation finished, if animating.
    - Singleton will never be called.

* `onShow`:
    - `normal`: Called while showing `page/dialog/fragment` again by called orchids.back(), or touch back button of a phone, and at the same time, another will be destroyed.
    - `singleton`: Called when current `page/dialog` started for another times.
    
* `afterShow`: Called when `page/dialog` is completely shown.

* `onHide`:
    - `normal`: Called when start another.
    - `singleton`: Called when back to prev.

* `afterHide`: Called when `page/dialog` is completely hidden.

* `onResult`: Called when back from forward page.

* `prepareForResult`: Called when created or show again by prev `page/dialog` call `startPageForResult/startDialogForResult` method`.

## misc

* Could not start a new page from dialog.
* Could not start another `page/dialog` when current `page/dialog` is singleton.

# tips for using

## callback

* `beforeCreate`: 
    - called before the `page/dialog/fragment` is created
    - thus the `el` attribute is not defined
    - singleton will only be called once.

* `onCreate`: called when the `page/dialog/fragment` is created, and singleton will only be called once.

* `afterCreate`: 
    - called after the `page/dialog/fragment` is created
    - also called after animation is finished, and you can get current `page/dialog` through `getCurrentPage/getCurrentDialog`
    - singleton will only be called once.

* `onDestroy`: called when the `page/dialog/fragment` back to prev, but singleton will never be called.

* `afterDestroy`: 
    - called after the `page/dialog/fragment` is destroyed.
    - also called after animation is finished, if animate
    - singleton will never be called.

* `onShow`:
    - `normal`: called while showing `page/dialog/fragment` again by called orchids.back(), or touch back button of a phone, and in the same time, another will be destroyed
    - `singleton`: called when current `page/dialog` started for another time.
    
* `afterShow`: called when `page/dialog` is completely shown

* `onHide`:
    - `normal`: called when start another
    - `singleton`: called when back to prev

* `afterHide`: called when `page/dialog` is completely hidden

* `onResult`: called when back from forward page

* `prepareForResult`: called when created or show again by prev `page/dialog` call `startPageForResult/startDialogForResult` method`.

## misc

* Could not start a new page from dialog
* You'd better not use `position: fixed` in a page
* Could not start another `page/dialog` when current `page/dialog` is singleton

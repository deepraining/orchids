# tips for using

## callback

* `onCreate`: called when the `page/dialog/fragment` is created, and singleton will only be called once.

* `onDestroy`: called when the `page/dialog/fragment` back to prev, but singleton will never be called.

* `onShow`:
    - `normal`: called while showing `page/dialog/fragment` again by called orchids.back(), or touch back button of a phone, and in the same time, another will be destroyed
    - `singleton`: called when current `page/dialog` started for another time.

* `onHide`:
    - `normal`: called when start another
    - `singleton`: called when back to prev

* `onResult`: called when back from forward page

* `prepareForResult`: called when created or show again by prev `page/dialog` call `startPageForResult/startDialogForResult` method`.

## misc

* Could not start a new page from dialog
* You'd better not use `position: fixed` in a page
* Could not start another `page/dialog` when current `page/dialog` is singleton

# tips for using

## callback

* onCreate: called when the page/dialog/fragment is created, and singleton will only be called once.

* onDestroy: called when the page/dialog/fragment back to prev, but singleton will not be called in any time.

* onShow:
    1. non singleton: called while showing page/dialog/fragment again by called orchids.back(), or touch back button of a phone, and in the same time, another will be destroyed
    2. singleton: called when current page/dialog started for the multi time.

* onHide:
    1. non singleton: called while starting another
    2. singleton: called when back to prev

* onPageResult: called when back from forward page

* prepareForResult: called when created or show again by prev page/dialog call startPageForResult/startDialogForResult.

## misc

* Could not start a new page from dialog
* You'd better not use "position: fixed" in a page
* Could not start another page/dialog when current page/dialog is singleton

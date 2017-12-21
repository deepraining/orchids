
'use strict';

/**
 * back to prev dialog
 */
module.exports = () => {
    var instance,
        prevInstance = app.getPrevDialog(),
        prevPageInstance = app.getCurrentPage(),
        prevInstanceIsDialog = !1;

    // if current dialogs remain 0, back action is invalid.
    if (Object.keys(app.dialogModels).length <= 0) return;

    instance = app.getCurrentDialog();
    // for result
    instance.forResult && (
        !!prevInstance ? (
            !!prevInstance.dialog.onDialogResult && prevInstance.dialog.onDialogResult(instance.dialog.__orchids__result || {}),
                prevInstanceIsDialog = !0
        ) : (
            !!prevPageInstance && !!prevPageInstance.page.onPageResult && prevPageInstance.page.onPageResult(instance.dialog.__orchids__result || {}),
                prevInstanceIsDialog = !1
        )
    );
    // destroy or hide
    instance.singleton ? instance.dialog.__orchids__hide() : instance.dialog.__orchids__destroy();
    prevInstanceIsDialog ? prevInstance.dialog.onShow() : !!prevPageInstance && prevPageInstance.page.onShow();
    app.deleteCurrentDialog();
};

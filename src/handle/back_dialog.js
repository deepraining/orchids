
'use strict';

var container = require('../data/container');
var getCurrentPageModel = require('../get/current_page_model');
var getCurrentDialogModel = require('../get/current_dialog_model');
var getPrevDialogModel = require('../get/prev_dialog_model');
var deleteCurrentDialogModel = require('../delete/current_dialog_model');

/**
 * back to prev dialog
 */
module.exports = () => {

    // if current dialogs is empty, back action is invalid.
    if (!Object.keys(container.dialogModels).length) return;

    var currentModel = getCurrentDialogModel();
    var prevModel = getPrevDialogModel();
    var currentPageModel = getCurrentPageModel();
    var hasPrevDialog = !1;

    // for result
    if (currentModel.forResult) {
        // has prev dialog model
        if (prevModel) {
            prevModel.dialog.onResult && prevModel.dialog.onResult(currentModel.dialog.__orchids__result || {});
            hasPrevDialog = !0;
        }
        else if (currentPageModel) {
            currentPageModel.page.onResult && currentPageModel.page.onResult(currentModel.dialog.__orchids__result || {});
        }
    }

    // destroy or hide
    currentModel.singleton ? currentModel.dialog.__orchids__hide() : currentModel.dialog.__orchids__destroy();
    hasPrevDialog ? prevModel.dialog.onShow() : currentPageModel && currentPageModel.page.onShow();

    deleteCurrentDialogModel();
};

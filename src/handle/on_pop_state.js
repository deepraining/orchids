
'use strict';

var container = require('../data/container');
var backPage = require('./back_page');
var getCurrentPageModel = require('../get/current_page_model');
var deleteCurrentDialogModel = require('../delete/current_dialog_model');

/**
 * window.onpopstate
 *
 * @param e
 */
module.exports = (e) => {

    // if user back page by press back button of phone, close all dialogs first
    var dialogModelsKeys = Object.keys(container.dialogModels);

    if (dialogModelsKeys.length) {
        var dialogModel;
        var prevDialogModel;
        var currentPageModel = getCurrentPageModel();

        for (var il = dialogModelsKeys.length, i = il - 1; i >= 0; i--) {
            // first dialog
            if (i <= 0) {
                dialogModel = container.dialogModels[dialogModelsKeys[i]];
                if (dialogModel.forResult && currentPageModel && currentPageModel.page.onPageResult) {
                    currentPageModel.page.onPageResult(dialogModel.dialog.__orchids__result || null);
                }
            }
            else {
                // at least two dialogs
                prevDialogModel = container.dialogModels[dialogModelsKeys[i - 1]];
                dialogModel = container.dialogModels[dialogModelsKeys[i]];
                if (dialogModel.forResult && prevDialogModel.dialog.onDialogResult) {
                    prevDialogModel.dialog.onDialogResult(dialogModel.dialog.__orchids__result || null);
                }
            }
            // destroy
            dialogModel.dialog.__orchids__destroy();
            deleteCurrentDialogModel();
        }
    }


    backPage();
};

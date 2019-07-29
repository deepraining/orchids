
'use strict';

var container = require('../data/container');
var vars = require('../data/vars');
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

    // for result
    if (currentModel.forResult) {
        // has prev dialog model
        if (prevModel) {
            prevModel.dialog.onResult && prevModel.dialog.onResult(currentModel.dialog.__orchids__result || null);
        }
        else if (currentPageModel) {
            currentPageModel.page.onResult && currentPageModel.page.onResult(currentModel.dialog.__orchids__result || null);
        }
    }

    // destroy or hide
    currentModel.singleton ? currentModel.dialog.__orchids__hide(!0) : currentModel.dialog.__orchids__destroy();
    prevModel ? prevModel.dialog.__orchids__show() : currentPageModel && currentPageModel.page.__orchids__show();

    deleteCurrentDialogModel();


    // dialog.afterDestroy
    if (!currentModel.singleton) {
        currentModel.dialog.el.classList.remove('orchids-active');

        if (currentModel.dialog.option.animate)
            // has animation
            setTimeout(() => {
                currentModel.dialog.el.remove();
                currentModel.dialog.afterDestroy();
                prevModel ? prevModel.dialog.afterShow() : currentPageModel && currentPageModel.page.afterShow();
            }, vars.animateTime);
        else {
            // no animation
            currentModel.dialog.el.remove();
            currentModel.dialog.afterDestroy();
            prevModel ? prevModel.dialog.afterShow() : currentPageModel && currentPageModel.page.afterShow();
        }
    }
    else {
        if (currentModel.dialog.option.animate) {
            // has animation
            setTimeout(() => {
                currentModel.dialog.afterHide();
                prevModel ? prevModel.dialog.afterShow() : currentPageModel && currentPageModel.page.afterShow();
            }, vars.animateTime)
        }
        else {
            // no animation
            currentModel.dialog.afterHide();
            prevModel ? prevModel.dialog.afterShow() : currentPageModel && currentPageModel.page.afterShow();
        }
    }
};

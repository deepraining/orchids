
'use strict';

var container = require('../data/container');
var vars = require('../data/vars');
var backPage = require('./back_page');
var getReverseKeys = require('../util/get_reverse_keys');
var deleteCurrentDialogModel = require('../delete/current_dialog_model');

/**
 * window.onpopstate
 *
 * @param e
 */
module.exports = (e) => {
    if (vars.pushHash) {
        // reset
        vars.pushHash = !1;
        return;
    }

    // if user back page by press back button of phone, close all dialogs first
    var dialogModelsKeys = getReverseKeys(container.dialogModels);

    dialogModelsKeys.length && dialogModelsKeys.forEach((key) => {
        var dialogModel = container.dialogModels[key];

        // destroy or hide
        dialogModel.singleton ? dialogModel.dialog.__orchids__hide() : dialogModel.dialog.__orchids__destroy();
        deleteCurrentDialogModel();

        dialogModel.dialog.el.classList.remove('orchids-active');

        // dialog.afterDestroy
        if (!dialogModel.singleton) {
            if (dialogModel.dialog.option.animate)
                // has animation
                setTimeout(() => {
                    dialogModel.dialog.el.remove();
                    dialogModel.dialog.afterDestroy();
                }, vars.animateTime);
            else {
                // no animation
                dialogModel.dialog.el.remove();
                dialogModel.dialog.afterDestroy();
            }
        }
        else {
            if (dialogModel.dialog.option.animate) {
                // has animation
                setTimeout(() => {
                    dialogModel.dialog.afterHide();
                }, vars.animateTime)
            }
            else {
                // no animation
                dialogModel.dialog.afterHide();
            }
        }
    });

    backPage();
};

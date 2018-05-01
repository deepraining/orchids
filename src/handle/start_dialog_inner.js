
'use strict';

var container = require('../data/container');
var vars = require('../data/vars');
var logger = require('../util/logger');
var extend = require('extend');
var makeDialogModel = require('../make/dialog_model');
var makeSingletonDialogModel = require('../make/singleton_dialog_model');
var getCurrentPageModel = require('../get/current_page_model');
var getCurrentDialogModel = require('../get/current_dialog_model');

/**
 * initialize a Dialog and show it
 * @param name Name of the Dialog Object
 * @param data Data to initialize a Dialog, and will be use by onCreate method
 * @param forResult Whether current dialog is initialized by startDialogForResult
 * @param prepareResultData Parameter to be used by the next dialog's prepareForResult method
 */
module.exports = (name, data, forResult, prepareResultData) => {

    var dialog = container.dialogDefinitions[name]; // the Dialog Object

    if (!dialog) {
        logger.error('The Dialog "' + name + '" you called is not registered.');
        return;
    }

    // current dialog model
    var currentDialogModel = getCurrentDialogModel();

    if (currentDialogModel && currentDialogModel.singleton) {
        logger.error('The Dialog "' + currentDialogModel.name + '" is singleton, and is active currently, can not start another dialog.');
        return;
    }

    // current page model
    var currentPageModel = getCurrentPageModel();

    // call current dialog's __orchids__hide method
    if (currentDialogModel) currentDialogModel.dialog.__orchids__hide();
    // call current page's __orchids__hide method
    else if (currentPageModel) currentPageModel.page.__orchids__hide();

    // singleton
    if (dialog.option.singleton) {
        // singleton model of the dialog
        var singletonModel = container.singletonDialogModels[name];

        // has initialized before
        if (singletonModel) {
            forResult ? singletonModel.dialog.__orchids__show(!0, !0, prepareResultData) : singletonModel.dialog.__orchids__show(!0);

            container.dialogModels[vars.idPrefix + singletonModel.id] = makeDialogModel(name, forResult, singletonModel.dialog, !0);

            // call dialog's afterShow
            if (!singletonModel.dialog.option.animate) {
                if (currentDialogModel) currentDialogModel.dialog.afterHide();
                else if (currentPageModel) currentPageModel.page.afterHide();

                singletonModel.dialog.afterShow();
            }
            else {
                setTimeout(() => {
                    if (currentDialogModel) currentDialogModel.dialog.afterHide();
                    else if (currentPageModel) currentPageModel.page.afterHide();

                    singletonModel.dialog.afterShow();
                }, vars.animateTime);
            }
            return;
        }
    }

    // Dialog option
    var dialogOption = extend(true, {}, dialog.option);
    // dialogId
    dialogOption.dialogId = ++vars.dialogCount;

    // initialize dialog
    var instance = new dialog.dialog(dialogOption, data);


    forResult && instance.prepareForResult(prepareResultData);

    if (dialog.option.singleton)
        container.singletonDialogModels[name] = makeSingletonDialogModel(dialogOption.dialogId, instance);


    container.dialogModels[vars.idPrefix + dialogOption.dialogId] = makeDialogModel(name, forResult, instance, dialogOption.singleton);

    // call dialog's afterCreate
    if (!instance.option.animate) {
        if (currentDialogModel) currentDialogModel.dialog.afterHide();
        else if (currentPageModel) currentPageModel.page.afterHide();

        instance.afterCreate();
    }
    else {
        // show dialog, delay 100 ms to guarantee the animation  is ok, and 0 is not ok
        setTimeout(() => {
            instance.el.classList.add('orchids-active');

            setTimeout(() => {
                if (currentDialogModel) currentDialogModel.dialog.afterHide();
                else if (currentPageModel) currentPageModel.page.afterHide();

                instance.afterCreate();
            }, vars.animateTime);
        }, vars.animateDelayTime);
    }
};

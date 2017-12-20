
'use strict';

var container = require('../data/container');
var vars = require('../data/vars');
var logger = require('../util/logger');
var extend = require('../util/extend');
var getCurrentPage = require('./get_current_page');
var getCurrentDialog = require('./get_current_dialog');

/**
 * initialize a Dialog and show it
 * @param name Name of the Dialog Object
 * @param data Data to initialize a Dialog, and will be use by onCreate method
 * @param forResult Whether current dialog is initialized by startDialogForResult
 * @param prepareResultData Parameter to be used by the next dialog's prepareForResult method
 */
module.exports = (name, data, forResult, prepareResultData) => {

    var dialog = container.dialogs[name]; // the Dialog Object

    if (!dialog) {
        logger.error('The Dialog "' + name + '" you called is not registered.');
        return;
    }

    // current dialog instance
    var currentDialogInstance = getCurrentDialog();

    if (currentDialogInstance && currentDialogInstance.singleton) {
        logger.error('The Dialog "' + currentDialogInstance.name + '" is singleton, and is active currently, can not start another dialog.');
        return;
    }

    // current page instance
    var currentPageInstance = getCurrentPage();

    // call current dialog's __orchids__hide method
    if (currentDialogInstance) currentDialogInstance.dialog.onHide();
    // call current page's __orchids__hide method
    else if (currentPageInstance) currentPageInstance.page.onHide();

    // singleton
    if (dialog.option.singleton) {
        // singleton instance of the dialog
        var singletonInstance = container.singletonDialogsInstances[name];

        // has initialized before
        if (singletonInstance) {
            container.dialogsInstances[vars.idPrefix + singletonInstance.id] = {
                name: name,
                forResult: !!forResult,
                dialog: singletonInstance.dialog,
                singleton: !0
            };

            forResult ? singletonInstance.dialog.__orchids__show(!0, !0, prepareResultData) : singletonInstance.dialog.__orchids__show(!0);

            return;
        }
    }

    // Dialog option
    var dialogOption = extend(true, {}, dialog.option);
    // dialogId
    dialogOption.dialogId = ++vars.dialogCount;

    // initialize dialog
    var instance = new dialog.dialog(dialogOption, data || {});


    forResult && instance.prepareForResult(prepareResultData);

    if (dialog.option.singleton)
        container.singletonDialogsInstances[name] = {
            id: dialogOption.dialogId,
            dialog: instance
        };


    container.dialogsInstances[vars.idPrefix + dialogOption.dialogId] = {
        name: name,
        forResult: !!forResult,
        dialog: instance,
        singleton: !!dialogOption.singleton
    };
};

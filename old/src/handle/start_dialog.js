
'use strict';

var startDialogInner = require('./start_dialog_inner');

/**
 * start a dialog
 * @param name Name of dialog
 * @param data Parameter to used by new dialog's onCreate method
 */
module.exports = (name, data) => {
    startDialogInner(name, data, !1);
};

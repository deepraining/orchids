
'use strict';

var startDialogInner = require('./start_dialog_inner');

/**
 * start a dialog for a result
 * @param name Name of dialog
 * @param data Parameter to used by new dialog's onCreate method
 * @param prepareResultData Parameter to be used by the next dialog's prepareForResult method
 */
module.exports = (name, data, prepareResultData) => {
    startDialogInner(name, data, !0, prepareResultData);
};

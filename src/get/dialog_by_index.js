
'use strict';

var getDialogModelByIndex = require('./dialog_model_by_index');

/**
 * get dialog object
 * @param index Dialog index, if not set, return current dialog
 * @returns {*}
 */
module.exports = (index) => {
    var model = getDialogModelByIndex(index);

    return model ? model.dialog: null;
};

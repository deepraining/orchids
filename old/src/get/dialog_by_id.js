
'use strict';

var getDialogModelById = require('./dialog_model_by_id');

/**
 * get dialog object
 * @param id Dialog id, if not set, return current dialog
 * @returns {*}
 */
module.exports = (id) => {
    var model = getDialogModelById(id);

    return model ? model.dialog: null;
};

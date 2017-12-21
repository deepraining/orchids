
'use strict';

var getPageModelById = require('./page_model_by_id');

/**
 * get page object
 * @param id Page id, if not set, return current page
 * @returns {*}
 */
module.exports = (id) => {
    var model = getPageModelById(id);

    return model ? model.page: null;
};

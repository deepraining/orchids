
'use strict';

var getPageModelByIndex = require('./page_model_by_index');

/**
 * get page object
 * @param index Page index, if not set, return current page
 * @returns {*}
 */
module.exports = (index) => {
    var model = getPageModelByIndex(index);

    return model ? model.page: null;
};


'use strict';

var getPageInstanceByIndex = require('./get_page_instance_by_index');

/**
 * get page object
 * @param index Page index
 * @returns {*}
 */
module.exports = (index) => {
    var instance = getPageInstanceByIndex(index);

    return instance ? instance.page: null;
};

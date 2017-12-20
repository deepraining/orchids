
'use strict';

var getPageInstanceById = require('./get_page_instance_by_id');

/**
 * get page object
 * @param id Page id, if not set, return current page
 * @returns {*}
 */
module.exports = (id) => {
    var instance = getPageInstanceById(id);

    return instance ? instance.page: null;
};

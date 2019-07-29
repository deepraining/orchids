
'use strict';

var startPageInner = require('./start_page_inner');

/**
 * start a page
 * @param name Name of page
 * @param data Parameter to used by new page's onCreate method
 */
module.exports = (name, data) => {
    startPageInner(name, data, !1);
};

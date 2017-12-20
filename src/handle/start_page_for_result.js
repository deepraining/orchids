
'use strict';

var startPageInner = require('./start_page_inner');

/**
 * start a page for a result
 * @param name Name of page
 * @param data Parameter to used by new page's onCreate method
 * @param prepareResultData Parameter to be used by the next page's prepareForResult method
 */
module.exports = (name, data, prepareResultData) => {
    startPageInner(name, data, !0, prepareResultData);
};


'use strict';

var container = require('../data/container');
var vars = require('../data/vars');

/**
 * get page model
 * @param index Page index, if not set, return current page
 * @returns {*}
 */
module.exports = (index) => {
    typeof index == 'undefined' && (index = -1);

    var keys = Object.keys(container.pageModels);
    var keysLength = keys.length;

    index < 0 && (index += keysLength);

    if (index < 0 || index > keysLength - 1) return null;

    return container.pageModels[keys[index]];
};

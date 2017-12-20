
'use strict';

var container = require('../data/container');
var vars = require('../data/vars');

/**
 * get page instance
 * @param index Page index
 * @returns {*}
 */
module.exports = (index) => {
    typeof index == 'undefined' && (index = -1);

    var keys = Object.keys(container.pagesInstances);
    var keysLength = keys.length;

    if (keysLength + index < 0 || index > keysLength - 1) return null;

    return container.pagesInstances[keys[(keysLength + index) % keysLength]];
};

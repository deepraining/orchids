
'use strict';

var container = require('../data/container');

/**
 * delete page model by index
 *
 * @param index
 */
module.exports = (index) => {
    typeof index == 'undefined' && (index = -1);

    var keys = Object.keys(container.pageModels);
    var keysLength = keys.length;

    delete container.pageModels[keys[(keysLength + index) % keysLength]];
};

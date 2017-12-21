
'use strict';

var container = require('../data/container');

/**
 * delete dialog model by index
 *
 * @param index
 */
module.exports = (index) => {
    typeof index == 'undefined' && (index = -1);

    var keys = Object.keys(container.dialogModels);
    var keysLength = keys.length;

    delete container.dialogModels[keys[(keysLength + index) % keysLength]];
};

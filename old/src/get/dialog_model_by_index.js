
'use strict';

var container = require('../data/container');
var vars = require('../data/vars');

/**
 * get dialog model
 * @param index Dialog index, if not set, return current dialog
 * @returns {*}
 */
module.exports = (index) => {
    typeof index == 'undefined' && (index = -1);

    var keys = Object.keys(container.dialogModels);
    var keysLength = keys.length;

    index < 0 && (index += keysLength);

    if (index < 0 || index > keysLength - 1) return null;

    return container.dialogModels[keys[index]];
};

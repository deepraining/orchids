
'use strict';

var container = require('../data/container');
var vars = require('../data/vars');

/**
 * get dialog model
 * @param id Dialog id, if not set, return current dialog
 * @returns {*}
 */
module.exports = (id) => {
    if (!id) {
        var keys = Object.keys(container.dialogModels);
        if (!keys.length) return null;
        return container.dialogModels[keys[keys.length - 1]];
    }
    else {
        return container.dialogModels[vars.idPrefix + id] || null;
    }
};

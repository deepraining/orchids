
'use strict';

var container = require('../data/container');
var vars = require('../data/vars');

/**
 * get page model
 * @param id Page id, if not set, return current page
 * @returns {*}
 */
module.exports = (id) => {
    if (!id) {
        var keys = Object.keys(container.pageModels);
        if (!keys.length) return null;
        return container.pageModels[keys[keys.length - 1]];
    }
    else {
        try {
            return container.pageModels[vars.idPrefix + id];
        } catch (e) {
            return null;
        }

    }
};

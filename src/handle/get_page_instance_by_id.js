
'use strict';

var container = require('../data/container');
var vars = require('../data/vars');

/**
 * get page instance
 * @param id Page id, if not set, return current page
 * @returns {*}
 */
module.exports = (id) => {
    if (!id) {
        var keys = Object.keys(container.pagesInstances);
        if (!keys.length) return null;
        return container.pagesInstances[keys[keys.length - 1]];
    }
    else {
        try {
            return container.pagesInstances[vars.idPrefix + id];
        } catch (e) {
            return null;
        }

    }
};

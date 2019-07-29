
'use strict';

/**
 * get reverse object keys
 *
 * example: {a: 1, b: 2, c: 3} => ['c', 'b', 'a']
 *
 * @param obj
 * @returns {Array}
 */
module.exports = (obj) => {
    var result = [];

    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) result.unshift(attr);
    }

    return result;
};


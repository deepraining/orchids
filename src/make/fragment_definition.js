
'use strict';

/**
 * make a fragment definition
 *
 * @param option
 * @param fragmentObj
 * @param parent
 * @returns {{option: *, fragment: *, parent: *}}
 */
module.exports = (option, fragmentObj, parent) => {

    return {
        option: option,
        fragment: fragmentObj,
        parent: parent
    };
};

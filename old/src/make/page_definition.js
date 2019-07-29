
'use strict';

/**
 * make a page definition
 *
 * @param option
 * @param pageObj
 * @param parent
 * @param singleton
 * @returns {{option: *, page: *, parent: *, singleton: boolean}}
 */
module.exports = (option, pageObj, parent, singleton) => {

    return {
        option: option,
        page: pageObj,
        parent: parent,
        singleton: !!singleton
    };
};

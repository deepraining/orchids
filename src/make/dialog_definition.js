
'use strict';

/**
 * make a dialog definition
 *
 * @param option
 * @param dialogObj
 * @param parent
 * @param singleton
 * @returns {{option: *, dialog: *, parent: *, singleton: boolean}}
 */
module.exports = (option, dialogObj, parent, singleton) => {

    return {
        option: option,
        dialog: dialogObj,
        parent: parent,
        singleton: !!singleton
    };
};

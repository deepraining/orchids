
'use strict';

/**
 * make a dialog model
 *
 * @param name
 * @param forResult
 * @param dialogInstance
 * @param singleton
 * @returns {{name: *, forResult: boolean, dialog: *, singleton: boolean}}
 */
module.exports = (name, forResult, dialogInstance, singleton) => {
    
    return {
        name: name,
        forResult: !!forResult,
        dialog: dialogInstance,
        singleton: !!singleton
    };
};

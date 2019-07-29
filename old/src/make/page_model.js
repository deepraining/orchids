
'use strict';

/**
 * make a page model
 *
 * @param name
 * @param forResult
 * @param pageInstance
 * @param singleton
 * @returns {{name: *, forResult: boolean, page: *, singleton: boolean}}
 */
module.exports = (name, forResult, pageInstance, singleton) => {
    
    return {
        name: name,
        forResult: !!forResult,
        page: pageInstance,
        singleton: !!singleton
    };
};

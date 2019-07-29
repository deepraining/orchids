
'use strict';

/**
 * make a singleton page model
 *
 * @param id
 * @param pageInstance
 * @returns {{id: *, page: *}}
 */
module.exports = (id, pageInstance) => {
    
    return {
        id: id,
        page: pageInstance
    };
};


'use strict';

/**
 * make a singleton dialog model
 *
 * @param id
 * @param dialogInstance
 * @returns {{id: *, dialog: *}}
 */
module.exports = (id, dialogInstance) => {
    
    return {
        id: id,
        dialog: dialogInstance
    };
};

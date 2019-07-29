
'use strict';

var logger = require('./logger');

module.exports = (container) => {

    var type = typeof container;

    // no container
    if (!container) return null;
    // selector
    else if (type == 'string') return document.getElementById(container);
    // dom
    else if(type == 'object' && container.nodeType == 1 && typeof container.nodeName == 'string')
        return container;
    else {
        logger.error('unknown root container, it should be one of follows: id selector, dom object.');
        logger.info('choose document.body instead.');

        return null;
    }
};

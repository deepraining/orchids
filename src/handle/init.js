
'use strict';

var defaultAppOption = require('../option/app');
var extend = require('extend');
var container = require('../data/container');
var getRootContainer = require('../util/get_root_container');
var app = require('../app');

/**
 * initialize app
 *
 * @param option
 */
module.exports = (option) => {

    if (option && option.container) {

        var domContainer = getRootContainer(option.container);

        if (domContainer) {
            container.rootContainer = domContainer;
            document.body.classList.add('orchids-custom-container');
        }
    }

    app.option = extend(true, {}, defaultAppOption, option || {});
};


'use strict';

var defaultAppOption = require('../option/app');
var extend = require('../util/extend');
var container = require('../util/container');
var getRootContainer = require('../util/get_root_container');
var app = require('../app');

/**
 * initialize app
 *
 * @param option
 */
module.exports = (option) => {

    if (option && option.rootContainer) {

        var domContainer = getRootContainer(option.rootContainer);

        if (domContainer) {
            container.rootContainer = domContainer;
            document.body.classList.add('orchids-custom-container');
        }
    }

    app.option = extend(true, {}, defaultAppOption, option || {});
};

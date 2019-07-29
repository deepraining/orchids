
"use strict";

var defaultAppOption = require('./option/app');

/**
 * app singleton instance
 * @type {{}}
 */
var app = {
    option: defaultAppOption
};

module.exports = app;
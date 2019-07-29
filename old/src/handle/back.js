
'use strict';

var container = require('../data/container');
var app = require('../app');
var backPage = require('./back_page');
var backDialog = require('./back_dialog');

/**
 * back to prev page or prev dialog
 */
module.exports = () => {
    // has dialog active
    if (Object.keys(container.dialogModels).length >= 1) {
        backDialog();
        return;
    }

    if (app.option.route) Object.keys(container.pageModels).length > 1 && history.back();
    else backPage();
};

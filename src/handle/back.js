
'use strict';

var container = require('../data/container');
var app = require('../app');
var pageBack = require('./page_back');
var dialogBack = require('./dialog_back');

/**
 * back to prev page or prev dialog
 */
module.exports = () => {
    // has dialog active
    if (Object.keys(container.dialogModels).length >= 1) {
        dialogBack();
        return;
    }

    if (app.option.route) Object.keys(container.pageModels).length >= 2 && history.back();
    else pageBack();
};

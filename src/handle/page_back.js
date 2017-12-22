
'use strict';

var container = require('../data/container');
var app = require('../app');
var util = require('../util');
var getCurrentPageModel = require('../get/current_page_model');
var getPrevPageModel = require('../get/prev_page_model');
var deleteCurrentPageModel = require('../delete/current_page_model');

/**
 * back to prev page
 */
module.exports = () => {

    // if current pages remain only 1, back action is invalid.
    if (Object.keys(container.pageModels).length <= 1) return;

    var currentModel = getCurrentPageModel();
    var prevModel = getPrevPageModel();
    // for result
    if (currentModel.forResult) {
        prevModel.page.onPageResult && prevModel.page.onPageResult(currentModel.page.__orchids__result || null);
    }
    // destroy or hide
    currentModel.singleton ? currentModel.page.__orchids__hide(!0) : currentModel.page.__orchids__destroy();
    // call prev page's __orchids__show method
    prevModel.page.__orchids__show();

    deleteCurrentPageModel();

    app.option.route && typeof app.option.onRouteChange == 'function' && app.option.onRouteChange();

    util.decreasePagesCount();
};
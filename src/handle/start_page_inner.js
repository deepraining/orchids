
'use strict';

var container = require('../data/container');
var vars = require('../data/vars');
var logger = require('../util/logger');
var extend = require('../util/extend');
var makePageModel = require('../make/page_model');
var makeSingletonPageModel = require('../make/singleton_page_model');
var util = require('../util');
var app = require('../app');
var getCurrentPageModel = require('../get/current_page_model');

/**
 * initialize a Page and show it
 * @param name Name of the Page Object
 * @param data Data to initialize a Page, and will be use by onCreate method
 * @param forResult Whether current page is initialized by startPageForResult
 * @param prepareResultData Parameter to be used by the next page's prepareForResult method
 */
module.exports = (name, data, forResult, prepareResultData) => {

    // has dialog active
    if (Object.keys(container.dialogModels).length) {
        logger.error('Currently has dialog in present, can not start a page.');
        return;
    }

    var pageDefinition = container.pageDefinitions[name]; // the Page Object

    if (!pageDefinition) {
        logger.error('The Page "' + name + '" you called is not registered.');
        return;
    }

    // current page model
    var currentPageModel = getCurrentPageModel();

    if (currentPageModel && currentPageModel.singleton) {
        logger.error('The Page "' + currentPageModel.name + '" is singleton, and is active currently, can not start another page.');
        return;
    }

    // call current page's __orchids__hide method
    currentPageModel && currentPageModel.page.__orchids__hide();

    // singleton
    if (pageDefinition.option.singleton) {
        // singleton model of the page
        var singletonModel = container.singletonPageModels[name];

        // has initialized before
        if (singletonModel) {
            container.pageModels[vars.idPrefix + singletonModel.id] = makePageModel(name, forResult, singletonModel.page, !0);

            forResult ? singletonModel.page.__orchids__show(!0, !0, prepareResultData) : singletonModel.page.__orchids__show(!0);

            typeof app.option.onRouteChange == 'function' && app.option.onRouteChange();

            util.increasePagesCount();

            return;
        }
    }

    // Page option
    var pageOption = extend(true, {}, pageDefinition.option);
    // pageId
    pageOption.pageId = ++vars.pageCount;
    // route
    pageOption.route = app.option.route;

    // initialize page
    var instance = new pageDefinition.page(pageOption, data || {});


    forResult && instance.prepareForResult(prepareResultData);

    if (pageDefinition.option.singleton)
        container.singletonPageModels[name] = makeSingletonPageModel(pageOption.pageId, instance);


    container.pageModels[vars.idPrefix + pageOption.pageId] = makePageModel(name, forResult, instance, pageOption.singleton);

    typeof app.option.onRouteChange == 'function' && app.option.onRouteChange();

    util.increasePagesCount();
};

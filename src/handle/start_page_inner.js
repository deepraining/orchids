
'use strict';

var container = require('../data/container');
var vars = require('../data/vars');
var logger = require('../util/logger');
var extend = require('../util/extend');
var util = require('../util');
var app = require('../app');
var getCurrentPage = require('./get_current_page');

/**
 * initialize a Page and show it
 * @param name Name of the Page Object
 * @param data Data to initialize a Page, and will be use by onCreate method
 * @param forResult Whether current page is initialized by startPageForResult
 * @param prepareResultData Parameter to be used by the next page's prepareForResult method
 */
module.exports = (name, data, forResult, prepareResultData) => {

    // has dialog active
    if (Object.keys(container.dialogsInstances).length) {
        logger.error('Currently has dialog in present, can not start a page.');
        return;
    }

    var page = container.pages[name]; // the Page Object

    if (!page) {
        logger.error('The Page "' + name + '" you called is not registered.');
        return;
    }

    // current page instance
    var currentPageInstance = getCurrentPage();

    if (currentPageInstance && currentPageInstance.singleton) {
        logger.error('The Page "' + currentPageInstance.name + '" is singleton, and is active currently, can not start another page.');
        return;
    }

    // call current page's __orchids__hide method
    currentPageInstance && currentPageInstance.page.__orchids__hide();

    // singleton
    if (page.option.singleton) {
        // singleton instance of the page
        var singletonInstance = container.singletonPagesInstances[name];

        // has initialized before
        if (singletonInstance) {
            container.pagesInstances[vars.idPrefix + singletonInstance.id] = {
                name: name,
                forResult: !!forResult,
                page: singletonInstance.page,
                singleton: !0
            };

            forResult ? singletonInstance.page.__orchids__show(!0, !0, prepareResultData) : singletonInstance.page.__orchids__show(!0);

            typeof app.option.onRouteChange == 'function' && app.option.onRouteChange();

            util.increasePagesCount();

            return;
        }
    }

    // Page option
    var pageOption = extend(true, {}, page.option);
    // pageId
    pageOption.pageId = ++vars.pageCount;
    // route
    pageOption.route = app.option.route;

    // initialize page
    var instance = new page.page(pageOption, data || {});


    forResult && instance.prepareForResult(prepareResultData);

    if (page.option.singleton)
        container.singletonPagesInstances[name] = {
            id: pageOption.pageId,
            page: instance
        };


    container.pagesInstances[vars.idPrefix + pageOption.pageId] = {
        name: name,
        forResult: !!forResult,
        page: instance,
        singleton: !!pageOption.singleton
    };

    typeof app.option.onRouteChange == 'function' && app.option.onRouteChange();

    util.increasePagesCount();
};

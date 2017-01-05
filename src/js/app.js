"use strict";

/**
 * app singleton instance
 * @type {{}}
 */
var app = {
    // app singleton default option
    option: {
        /**
         * background of root element
         */
        backgroundColor: '#ffffff',
        /**
         * start page with route or not
         * if set to true, the url will be changed when a page is started
         * like: url?orchidsPage=pageName&orchidsOption=serializedData
         */
        route: !1,
        /**
         * whether to use animation when switch between pages
         * default: true
         */
        animate: !0,
        /**
         * animation direction of switching page
         * horizontal/vertical, default: horizontal
         */
        animateDirection: 'horizontal'
    },
    /**
     * all registered page Object container
     * format: {
     *     name: {
     *         option: option, // Option to initialize a Page
     *         superPage: '', // super page name, default is blank string
     *         page: Page // Page Object
     *     }
     * }
     * @type {{}}
     */
    pages: {},
    /**
     * all registered Pages Attributes
     * format: {
     *     name: {
     *         name1: field1,
     *         name2: filed2,
     *         name3: func1,
     *         name4: func2
     *     }
     * }
     * @type {{}}
     */
    pagesAttributes: {},
    /**
     * all initialized Page instances
     * format: {
     *     id: {
     *         name: pageName, // Page name
     *         forResult: true/false, // whether current page is initialized by startPageForResult or not
     *         singleton: true/false, // whether current page is singleton or not.
     *         page: Page // Page instance
     *     }
     * }
     * @type {{}}
     */
    pagesInstances: {}
};

var util = require('./util'),
    page = require('./Page');

    /**
     * total page count of current app
     * @type {number}
     */
    var pageCount = 0;
/**
 * initialize app
 */
app.init = function(option) {
    util.extend(true, app.option, option || {});
};
/**
 * start current application
 * if current url has orchidsPage parameter, it'will start the "orchidsPage" specified page, not the page "pageName"
 *
 * @param pageName
 * @param data
 * @param startOption
 */
app.start = function (pageName, data, startOption) {
    var params = (function () {
            var params = {};
            !!location.search && (
                location.search.slice(1).split('&').map(function (item) {
                    params[item.split('=')[0]] = item.split('=')[1]
                })
            );
            return params;
        })(),
        pageName,
        orchidsData;

    // tell the first page and option by the parameter
    if (!!params.orchidsPage) {
        pageName = decodeURIComponent(params.orchidsPage);
        try {
            orchidsData = JSON.parse(decodeURIComponent(params.orchidsData));
        } catch (e) {
            orchidsData = {};
        }

        app.startPage(pageName, orchidsData);
        return;
    }

    app.startPage(pageName, data, startOption);

    // if user call back page by phone button, keep it
    window.onpopstate = function (event) {

    }
};
/**
 * initialize a Page and show it
 * @param pageName The name of a Page Object
 * @param data Data to initialize a Page, and will be use by onCreate method
 * @param startOption Option for how to start a page
 *     {
 *         launchMode: 'clearStack', // it will clear the page stack when the page is created, and it will be in the bottom of the page stack
 *         route: true/false, //
 *     }
 * @param forResult Whether current page is initialized by startPageForResult or not
 * @param prepareResultData Parameter to be used by the next page's prepareForResult method
 */
app.startPageInner = function (pageName, data, startOption, forResult, prepareResultData) {
    var pageObject = app.pages[pageName], // the Page Object
        option, // Page option
        instance; // instance of page

    if (!pageObject) {
        console.error('The Page "' + pageName + '" you called is not registered, please register it before initialize.');
        return;
    }

    startOption = startOption || {};



    if (pageObject.option.singleton) {
        Object.keys(app.pagesInstances).map(function (id) {
            var page = app.pages[id];
            if (page.name == pageName) {
                instance = page.page;
                return !1;
            }
        });
        if (!!instance) {
            instance.__orchids__show();
            return;
        }
    }

    option = util.extend(true, {}, pageObject.option);
    option.pageId = ++pageCount;
    instance = new pageObject.page(option, data || {});
    forResult && instance.prepareForResult(prepareResultData);
    app.pagesInstances[option.pageId] = {
        name: pageName,
        forResult: !!forResult,
        singleton: option.singleton,
        page: instance
    };
};

/**
 * start a page
 * @param pageName
 * @param data
 * @param startOption
 */
app.startPage = function (pageName, data, startOption) {
    app.startPageInner(pageName, data, startOption, !1)
};
/**
 * start a page for result
 * @param pageName
 * @param data
 * @param prepareResultData Parameter to be used by the next page's prepareForResult method
 * @param startOption
 */
app.startPageForResult = function (pageName, data, prepareResultData, startOption) {
    app.startPageInner(pageName, data, startOption, !0, prepareResultData)
};

/**
 * register a Page Object
 * @param pageName New name of new Page Object, support dot semantic, for instance, "foo.bar.name"
 * @param extendAttributes Attributes to be extended to new Page Object
 * @param option Option to initialize a Page
 * @param superPageName Super Page Object, default is Page
 */

app.registerPage = function (pageName, extendAttributes, option, superPageName) {
    var newPage, // new Page Object
        superPagesExtendAttributes = [], // all super extend attributes
        superPagesOptions = [], // all super options
        tempOption,
        i, il;

    /**
     * get all super extend attributes
     *
     * @param superPageName
     */
    function getSuperPagesExtendAttributes(superPageName) {
        var superPage = app.pages[superPageName],
            superOption = superPage.option,
            superExtendAttributes = app.pagesAttributes[superPageName];

        !!superExtendAttributes && superPagesExtendAttributes.unshift(superExtendAttributes);
        !!superOption && superPagesOptions.unshift(superOption);
        !!superPage.superPage && getSuperPagesExtendAttributes(superPage.superPage);
    }

    if (!pageName || typeof pageName != 'string') {
        console.error('Register a Page Object needs a explicit string name');
        return;
    }

    if (!!app.pagesAttributes[pageName]) {
        console.error('page "' + pageName + '" has been registered, and now is override, but this is a incorrect handle, so here is the message');
    }
    // put extendAttributes to pagesAttributes container
    app.pagesAttributes[pageName] = extendAttributes;

    newPage = page();
    tempOption = util.extend(!0, {}, app.option);
    // no superPage
    if (!!superPageName) {
        getSuperPagesExtendAttributes(superPageName);
        for (i = 0, il = superPagesExtendAttributes.length; i < il; i++) {
            util.extend(!0, newPage.prototype, superPagesExtendAttributes[i]);
        }

        for (i = 0, il = superPagesOptions.length; i < il; i++) {
            util.extend(!0, tempOption, superPagesOptions[i]);
        }
    }
    util.extend(!0, newPage.prototype, extendAttributes);
    util.extend(!0, tempOption, option);

    tempOption.pageName = pageName;
    app.pages[pageName] = {
        superPage: superPageName,
        option: tempOption,
        page: newPage
    };
};

/**
 * get page object
 * @param index
 * @returns {*}
 */
app.getPage = function (index) {
    typeof index == 'undefined' && (index = -1);
    var keys = Object.keys(app.pagesInstances);
    return app.pagesInstances[keys[(keys.length + index) % keys.length]];
};

/**
 * get current page object
 * @returns {*}
 */
app.getCurrentPage = function () {
    return app.getPage(-1);
};

/**
 * get prev page object
 * @returns {*}
 */
app.getPrevPage = function () {
    return app.getPage(-2);
};

/**
 * delete page object
 * @param index
 * @returns {*}
 */
app.deletePage = function (index) {
    typeof index == 'undefined' && (index = -1);
    var keys = Object.keys(app.pagesInstances);
    delete app.pagesInstances[keys[(keys.length + index) % keys.length]];
};

/**
 * delete current page object
 * @returns {*}
 */
app.deleteCurrentPage = function () {
    return app.deletePage(-1);
};
/**
 * back to prev page
 */
app.back = function () {
    var instance,
        prevInstance;

    // if current pages remain only 1, back action is invalid.
    if (Object.keys(app.pagesInstances).length <= 1) return;

    instance = app.getCurrentPage();
    prevInstance = app.getPrevPage();
    // for result
    instance.forResult && (
        !!prevInstance.page.onPageResult && prevInstance.page.onPageResult(instance.page.__orchids__result || {})
    );
    // destroy
    instance.page.__orchids__hide();
    app.deleteCurrentPage();
};

module.exports = app;
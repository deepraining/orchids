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
    }
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
    pages = {},
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
    pagesAttributes = {},
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
    pagesInstances = {};

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
 */
app.startPageInner = function (pageName, data, startOption, forResult) {
    var pageObject = pages[pageName], // the Page Object
        option, // Page option
        instance; // instance of page

    if (!pageObject) {
        console.error('The Page "' + pageName + '" you called is not registered, please register it before initialize.');
        return;
    }

    startOption = startOption || {};



    if (pageObject.option.singleton) {
        Object.keys(pagesInstances).map(function (id) {
            var page = pages[id];
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
    pagesInstances[option.pageId] = {
        name: pageName,
        forResult: !!forResult,
        singleton: option.singleton,
        page: instance
    };
};

app.startPage = function (pageName, data, startOption) {
    app.startPageInner(pageName, data, startOption, !1)
};

app.startPageForResult = function (pageName, data, startOption) {
    app.startPageInner(pageName, data, startOption, !0)
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
        superPagesExtendAttributes = []; // all super extend attributes

    /**
     * get all super extend attributes
     *
     * @param superPageName
     */
    function getSuperPagesExtendAttributes(superPageName) {
        var superPage = pages[superPageName],
            superExtendAttributes = pagesAttributes[superPageName];

        !!superExtendAttributes && superPagesExtendAttributes.unshift(superExtendAttributes);
        !!superPage.superPage && getSuperPagesExtendAttributes(superPage.superPage);
    }

    if (!pageName || typeof pageName != 'string') {
        console.error('Register a Page Object needs a explicit string name');
        return;
    }

    if (!!pagesAttributes[pageName]) {
        console.error('page "' + pageName + '" has been registered, and now is override, but this is a incorrect handle, so here is the message');
    }
    // put extendAttributes to pagesAttributes container
    pagesAttributes[pageName] = extendAttributes;

    newPage = page();
    // no superPage
    if (!superPageName) {
        util.extend(!0, newPage.prototype, extendAttributes);
    }
    // has superPage
    else {
        getSuperPagesExtendAttributes(superPageName);
        if (superPagesExtendAttributes.length == 1) util.extend(!0, newPage.prototype, extendAttributes, superPagesExtendAttributes[0]);
        else if (superPagesExtendAttributes.length == 2) util.extend(!0, newPage.prototype, extendAttributes, superPagesExtendAttributes[0], superPagesExtendAttributes[1]);
        else if (superPagesExtendAttributes.length == 3) util.extend(!0, newPage.prototype, extendAttributes, superPagesExtendAttributes[0], superPagesExtendAttributes[1], superPagesExtendAttributes[2]);
        else if (superPagesExtendAttributes.length == 4) util.extend(!0, newPage.prototype, extendAttributes, superPagesExtendAttributes[0], superPagesExtendAttributes[1], superPagesExtendAttributes[2], superPagesExtendAttributes[3]);
        else if (superPagesExtendAttributes.length == 5) util.extend(!0, newPage.prototype, extendAttributes, superPagesExtendAttributes[0], superPagesExtendAttributes[1], superPagesExtendAttributes[2], superPagesExtendAttributes[3], superPagesExtendAttributes[4]);
        else if (superPagesExtendAttributes.length == 6) util.extend(!0, newPage.prototype, extendAttributes, superPagesExtendAttributes[0], superPagesExtendAttributes[1], superPagesExtendAttributes[2], superPagesExtendAttributes[3], superPagesExtendAttributes[4], superPagesExtendAttributes[5]);
        else if (superPagesExtendAttributes.length == 7) util.extend(!0, newPage.prototype, extendAttributes, superPagesExtendAttributes[0], superPagesExtendAttributes[1], superPagesExtendAttributes[2], superPagesExtendAttributes[3], superPagesExtendAttributes[4], superPagesExtendAttributes[5], superPagesExtendAttributes[6]);
        else if (superPagesExtendAttributes.length == 8) util.extend(!0, newPage.prototype, extendAttributes, superPagesExtendAttributes[0], superPagesExtendAttributes[1], superPagesExtendAttributes[2], superPagesExtendAttributes[3], superPagesExtendAttributes[4], superPagesExtendAttributes[5], superPagesExtendAttributes[6], superPagesExtendAttributes[7]);
        else {
            console.error('The max extend level is 8, and now is more than 8.');
        }
    }
    option = option || {};
    option = util.extend(true, {}, app.option, option);
    option.pageName = pageName;
    pages[pageName] = {
        superPage: void 0,
        option: option,
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
    var keys = Object.keys(pagesInstances);
    return pagesInstances[keys[(keys.length + index) % keys.length]];
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
    var keys = Object.keys(pagesInstances);
    delete pagesInstances[keys[(keys.length + index) % keys.length]];
};

/**
 * delete current page object
 * @returns {*}
 */
app.deleteCurrentPage = function () {
    return app.deletePage(-1);
};

app.back = function () {
    var instance = app.getCurrentPage();
    // for result
    instance.forResult && (
        !!app.getPrevPage.onPageResult && app.getPrevPage.onPageResult(instance.__orchids__result)
    );
    // destroy
    instance.__orchids__hide();
    app.deleteCurrentPage();
};

module.exports = app;
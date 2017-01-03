/**
 * base Object
 * @type {{}}
 */
var util = require('./util'),
    App = require('./App'),
    page = require('./Page'),
    // singleton app instance
    app,
    /**
     * all registered page Object container
     * format: {
     *     name: {
     *         singleton: true/false, // is singleton or not
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
     * create and start a App Object
     */
    createApp = function (option) {
        app = new App(option);
    },
    getApp = function () {
        !app && console.error('You did not initialize a app. Please initialize a app before get it.');
        return app;
    },
    /**
     * register a Page Object
     * @param pageName New name of new Page Object, support dot semantic, for instance, "foo.bar.name"
     * @param extendAttributes Attributes to be extended to new Page Object
     * @param superPageName Super Page Object, default is Page
     * @param singleton Whether current page is singleton or not
     */
    registerPage = function (pageName, extendAttributes, superPageName, singleton) {
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
        pages[pageName] = {
            superPage: void 0,
            singleton: !!singleton,
            page: newPage
        };
    },
    /**
     * initialize a Page and show it
     */
    startPage = app.startPage,
    /**
     * initialize a Page and show it, with a returned value when the started page is destroyed
     */
    startPageForResult = app.startPageForResult;
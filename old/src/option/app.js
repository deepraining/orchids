
'use strict';

/**
 * default app option
 *
 * @type {{}}
 */
module.exports = {
    /**
     * whether start page with route or not
     * if set to true, the url will be changed when a page is started
     * like: url?orchidsPage=pageName&orchidsId=pageId
     */
    route: !1,
    /**
     * function: called when first page is initialized
     */
    onFirstPageInitialized: void 0,
    /**
     * function: called when route changed
     */
    onRouteChange: void 0
};

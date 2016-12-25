"use strict";

/**
 * all registered page Object container
 * format: {
 *     namespace: {
 *         namespace: {
 *             ultimateName: Page
 *         }
 *     }
 * }
 * @type {{}}
 */
var pages = {},
    /**
     * all page instances container
     * format: {
     *     pageId: {
     *         name: 'namespace.namespace.ultimateName',
     *         instance: instanceOfPage
     *     }
     * }
     * @type {{}}
     */
    instances = {},
    /**
     * register a Page Object
     * @param pageName new name of new Page Object, support dot semantic, for instance, "foo.bar.name"
     * @param extendAttributes attributes to be extended to new Page Object
     * @param superPage super Page Object, default is Page
     */
    registerPage = function (pageName, extendAttributes, superPage) {

    },
    /**
     * initialize a Page and show it
     * @param pageName the name of a Page Object
     * @param params
     * @param option
     */
    startPage = function (pageName, params, option) {

    },
    /**
     * initialize a Page and show it, with a returned value when the started page is destroyed
     * @param pageName the name of a Page Object
     * @param params
     * @param option
     */
    startPageForResult = function (pageName, params, option) {

    };


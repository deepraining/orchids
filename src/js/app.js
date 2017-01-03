"use strict";

var util = require('./util'),
    /**
     * default Page option
     * @type {{}}
     */
    defaultOption = {
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
        animateDirection: 'horizontal',
        /**
         * 初始化html
         */
        pages: {
            name: 'pageOption1',
            name2: 'pageOption2'
        }

    };

/**
 *
 * @param option Option to initialize App
 * @constructor
 */
function App(option) {
    var self = this;
    // global option for all pages
    self.option = util.extend(true, {}, option);
    self.__orchids__preInit();
    self.__orchids__init();
}

App.prototype = {
    constructor: App,
    // current page id, index from 1
    currentPageId: 0,
    // current result for onPageResult and seResult method
    currentResult: void 0,
    /**
     * all page instances container
     * format: {
         *     pageId: {
         *         name: 'name',
         *         singleton: true/false,
         *         instance: instanceOfPage
         *     }
         * }
     * @type {{}}
     */
    pages: {},

    __orchids__preInit: function () {
        var self = this,
            color = self.option.backgroundColor;
        // have color attribute
        if (!!color) {
            !/^#\w{6}$/.test(color) && !/^\w{6}$/.test(color) ? (
                self.backgroundColor = '',
                    console.error('The backgroundColor attribute of App option could not be parsed with wrong format.\nthe suggested format is: #000000~#ffffff/000000~ffffff, and input is: "' + color + '"')
            ) : (
                color.slice(0, 1) != '#' && (self.option.backgroundColor = '#' + color)
            )
        }
        // no
        else {
            self.option.backgroundColor = '';
        }
    },
    __orchids__init: function() {
        var self = this,
            params = (function () {
                var params = {};
                !!location.search && (
                    location.search.slice(1).split('&').map(function (item) {
                        params[item.split('=')[0]] = item.split('=')[1]
                    })
                );
                return params;
            })(),
            pageName,
            pageOption;

        // tell the first page and option by the parameter
        if (!!params.orchidsPage) {
            pageName = decodeURIComponent(params.orchidsPage);
            try {
                pageOption = JSON.parse(decodeURIComponent(params.orchidsOption));
            } catch (e) {
                pageOption = {};
            }

            self.startPage(pageName, pageOption);
        }
    },
    /**
     * initialize a Page and show it
     * @param pageName The name of a Page Object
     * @param option Option to initialize a Page
     */
    startPage: function (pageName, option) {

    },
    /**
     * initialize a Page and show it, with a returned value when the started page is destroyed
     * @param pageName The name of a Page Object
     * @param option Option to initialize a Page
     * @param data Parameter of the next Page's prepareForResult method
     */
    startPageForResult: function (pageName, option, data) {

    }
};

module.exports = App;
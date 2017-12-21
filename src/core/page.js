"use strict";

var extend = require('../util/extend');

var init = require('./page/init');
var renderFragments = require('./page/render_fragments');
var showFragment = require('./page/show_fragment');
var routeForward = require('./page/route_forward');
var destroy = require('./page/destroy');
var hide = require('./page/hide');
var show = require('./page/show');

module.exports = () => {
    /**
     * constructor
     *
     * @param option Option to initialize page
     * @param data Parameter to be used by onCreate method
     * @constructor
     */
    function Page(option, data) {
        var self = this;
        self.option = extend(true, {}, option);
        self.__orchids__data = data || {};
        /**
         * current fragment instances
         * @type {{}}
         * @private
         */
        self.__orchids__fragmentsInstances = {};
        /**
         * current active fragment id
         * @type {number}
         * @private
         */
        self.__orchids__currentFragmentId = 1;
        self.__orchids__init();
    }

    Page.prototype = {
        constructor: Page,
        __orchids__init: () => {
            var self = this;

            init(self);
        },
        // render fragments
        __orchids__renderFragments: () => {
            var self = this;

            renderFragments(self);
        },
        /**
         * show fragment specified by id
         * @param id
         */
        showFragment: (id) => {
            var self = this;

            showFragment(self, id)
        },
        /**
         * get fragment specified by id, default return the first fragment
         * @param id
         */
        getFragment: (id) => {
            var self = this;
            id = id || 1;
            try {
                return self.__orchids__fragmentsInstances[id];
            } catch (e) {
                return null;
            }
        },
        // make a forward route
        __orchids__routeForward: () => {
            var self = this;

            routeForward(self);
        },

        // destroy current page
        __orchids__destroy: () => {
            var self = this;

            destroy(self);
        },

        // hide current page
        __orchids__hide: (isSingleton) => {
            var self = this;

            hide(self, isSingleton);
        },

        // show current page
        __orchids__show: (isSingleton, forResult, prepareResultData) => {
            var self = this;

            show(self, isSingleton, forResult, prepareResultData);
        },

        /**
         * render a page after a page is initialized
         * @param data
         */
        onCreate: function(data) {},

        /**
         * pre handle before destroy a page
         */
        onDestroy: function() {},

        /**
         * called when back page from other page
         */
        onShow: function () {},
        /**
         * called when start another page
         */
        onHide: function () {},
        /**
         * set the result if this page is called by startPageForResult method,
         * and the returned value will be used as the param of the onPageResult method of last page
         *
         * @param {*} data
         */
        setResult: function(data) {
            var self = this;
            self.__orchids__result = data;
        },
        /**
         * called when the child page destroyed and return the value by setResult method.
         * @param {*} data
         */
        onPageResult: function(data) {},
        /**
         * receive data from the previous page, startPageForResult method's second parameter
         * @param data
         */
        prepareForResult: function(data) {}
    };

    return Page;
};
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
        self.__orchids__data = data || null;
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
        /**
         * init page
         * @private
         */
        __orchids__init: function() {
            var self = this;

            init(self);
        },
        /**
         * render fragments
         * @private
         */
        __orchids__renderFragments: function() {
            var self = this;

            renderFragments(self);
        },
        /**
         * show fragment specified by id
         * @param id
         */
        showFragment: function(id) {
            var self = this;

            showFragment(self, id)
        },
        /**
         * get fragment specified by id, default return the first fragment
         * @param id
         */
        getFragment: function(id) {
            var self = this;
            id = id || 1;

            return self.__orchids__fragmentsInstances[id] || null;
        },
        /**
         * make a forward route
         * @private
         */
        __orchids__routeForward: function() {
            var self = this;

            routeForward(self);
        },
        /**
         * destroy current page
         * @private
         */
        __orchids__destroy: function() {
            var self = this;

            destroy(self);
        },
        /**
         * hide current page
         * @param isSingleton
         * @private
         */
        __orchids__hide: function(isSingleton) {
            var self = this;

            hide(self, isSingleton);
        },
        /**
         * show current page
         * @param isSingleton
         * @param forResult
         * @param prepareResultData
         * @private
         */
        __orchids__show: function(isSingleton, forResult, prepareResultData) {
            var self = this;

            show(self, isSingleton, forResult, prepareResultData);
        },
        /**
         * before a page is initialized
         */
        beforeCreate: function () {},
        /**
         * render a page after a page is initialized
         * @param data
         */
        onCreate: function(data) {},
        /**
         * after a page is initialized
         */
        afterCreate: function () {},
        /**
         * pre handle before destroy a page
         */
        onDestroy: function() {},
        /**
         * after destroy a page
         */
        afterDestroy: function() {},
        /**
         * called when back page from other page or dialog
         */
        onShow: function () {},
        /**
         * called when page is completely shown
         */
        afterShow: function () {},
        /**
         * called when start another page or dialog
         */
        onHide: function () {},
        /**
         * called when page is completely hidden
         */
        afterHide: function () {},
        /**
         * set the result if this page is called by startPageForResult method,
         * and the returned value will be used as the param of the onResult method of last page
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
        onResult: function(data) {},
        /**
         * receive data from the previous page, startPageForResult method's second parameter
         * @param data
         */
        prepareForResult: function(data) {}
    };

    return Page;
};
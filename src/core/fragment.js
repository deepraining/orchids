"use strict";

var extend = require('../util/extend');

var init = require('./fragment/init');
var renderSubFragments = require('./fragment/render_sub_fragments');
var showSubFragment = require('./fragment/show_sub_fragment');

var newFragment = () => {
    /**
     *
     * @param option Option to initialize fragment
     * @constructor
     */
    function Fragment(option) {
        var self = this;
        self.option = extend(true, {}, option);
        // whether current fragment is initialized
        self.__orchids__initialized = !1;
        /**
         * current sub fragment instances
         * @type {{}}
         * @private
         */
        self.__orchids__subFragmentsInstances = {};
        /**
         * current active sub fragment id
         * @type {number}
         * @private
         */
        self.__orchids__currentSubFragmentId = 1;
        self.__orchids__init();
    }

    Fragment.prototype = {
        constructor: Fragment,
        /**
         * init fragment
         * @private
         */
        __orchids__init: function() {
            var self = this;

            init(self);
        },
        /**
         * render sub fragments
         * @private
         */
        __orchids__renderSubFragments: function () {
            var self = this;

            renderSubFragments(self);
        },
        /**
         * show sub fragment specified by id
         * @param id
         */
        showSubFragment: function (id) {
            var self = this;

            showSubFragment(self, id);
        },
        /**
         * called when current page is destroy
         * @private
         */
        __orchids__destroy: function () {
            var self = this;

            // call all sub fragments's __orchids__destroy
            Object.keys(self.__orchids__subFragmentsInstances).forEach((id) => {
                self.__orchids__subFragmentsInstances[id].__orchids__destroy();
            });
            self.onDestroy();
        },
        /**
         * hide current fragment
         * @private
         */
        __orchids__hide: function () {
            var self = this;
            // call active sub fragment's __orchids__hide
            try {
                self.__orchids__subFragmentsInstances[self.__orchids__currentSubFragmentId].__orchids__hide();
            }
            catch (e) {}

            self.onHide();
        },
        /**
         * show current sub fragment
         * @private
         */
        __orchids__show: function () {
            var self = this;

            self.onShow();
            // call active sub fragment's __orchids__show
            try {
                self.__orchids__subFragmentsInstances[self.__orchids__currentSubFragmentId].__orchids__show();
            }
            catch (e) {}
        },
        /**
         * get sub fragment specified by id, default return the first fragment
         * @param id
         */
        getSubFragment: function (id) {
            var self = this;
            id = id || 1;

            return self.__orchids__subFragmentsInstances[id] || null;
        },
        /**
         * render a fragment after a fragment is initialized
         */
        onCreate: function() {},
        /**
         * pre handle before destroy a fragment
         */
        onDestroy: function() {},
        /**
         * called when showed, not include first show while created
         */
        onShow: function () {},
        /**
         * called when show another fragment
         */
        onHide: function () {}
    };

    return Fragment;
};

module.exports = newFragment;
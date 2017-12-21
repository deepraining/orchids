"use strict";

var init = require('./fragment/init');
var renderSubFragments = require('./fragment/render_sub_fragments');
var showSubFragment = require('./fragment/show_sub_fragment');

var newFragment = function () {
    /**
     *
     * @param option Option to initialize fragment
     * @constructor
     */
    function Fragment(option) {
        var self = this;
        self.option = util.extend(true, {}, option);
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
        __orchids__init: function() {
            var self = this;

            init(self);
        },
        // render sub fragments
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
        // called when current page is destroy
        __orchids__destroy: function () {
            var self = this;

            // call all sub fragments's __orchids__destroy
            Object.keys(self.__orchids__subFragmentsInstances).map(function (id) {
                self.__orchids__subFragmentsInstances[id].__orchids__destroy();
            });
            self.onDestroy();
        },
        // hide current fragment
        __orchids__hide: function () {
            var self = this;
            // call active sub fragment's __orchids__hide
            try {
                self.__orchids__subFragmentsInstances[self.__orchids__currentSubFragmentId].__orchids__hide();
            }
            catch (e) {}

            self.onHide();
        },

        // show current sub fragment
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
            try {
                return self.__orchids__subFragmentsInstances[id];
            } catch (e) {
                return null;
            }
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
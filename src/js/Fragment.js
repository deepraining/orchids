"use strict";

var util = require('./util');

var newFragment = function () {
    /**
     *
     * @param option Option to initialize fragment
     * @param data Parameter to be used by onCreate method
     * @constructor
     */
    function Fragment(option, data) {
        var self = this;
        self.option = util.extend(true, {}, option);
        self.__orchids__data = data || {};
        self.__orchids__init();
        // whether current fragment is initialized
        self.__orchids_initialized = !1;
    }

    Fragment.prototype = {
        constructor: Fragment,
        __orchids__init: function() {
            var self = this,
                classes = [
                    'orchids',
                    'orchids-fragment'
                ];
            // make id
            self.id = self.option.fragmentId;
            // whether current fragment is the first fragment to render or not, for confirming to start current fragment with or without animation.
            self.__orchids__isFirstFragment = self.id == 1;
            // make root el
            self.el = document.createElement('div');
            // data-orchids-fragment-is
            self.el.dataset.orchidsFragmentId = self.id;
            // animation
            !!self.option.animate && (
                classes.push('orchids-with-animation')
            );
            // direction
            self.option.animateDirection == 'vertical' ? classes.push('orchids-vertical') : classes.push('orchids-horizontal');
            // classList
            self.__orchids__isFirstFragment && classes.push('orchids-active');
            self.el.classList = classes.join(' ');
            // background color
            self.el.style.backgroundColor = self.option.backgroundColor;

            // add to body element
            document.body.appendChild(self.el);

            // user custom initialization
            !!self.onCreate && self.onCreate(self.__orchids__data);

            /**
             * show fragment, delay 100 ms to guarantee the animation  is ok, and 0 is not ok
             */
            !self.__orchids__isFirstFragment && setTimeout(function () {
                self.el.classList.add('orchids-active')
            }, 100);
        },
        /**
         * render a fragment after a fragment is initialized
         * @param data
         */
        onCreate: function(data) {}
    };

    return Fragment;
};

module.exports = newFragment;
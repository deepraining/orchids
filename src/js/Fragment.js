"use strict";

var util = require('./util'),
    container = require('./container');

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
            var styleKeys;
            // make id
            self.id = self.option.fragmentId;
            // whether current fragment is the first fragment to render or not
            self.__orchids__isFirstFragment = self.id == 1;
            // make root el
            self.el = document.createElement('div');
            // data-orchids-fragment-is
            self.el.dataset.orchidsFragmentId = self.id;
            self.el.dataset.orchidsFragmentName = self.option.fragmentName;

            // background color
            self.el.style.backgroundColor = self.option.backgroundColor;

            // extra style
            self.option.style && (styleKeys = Object.keys(self.option.style)).length && (
                styleKeys.map(function (key) {
                    self.el.style[key] = self.option.style[key]
                })
            );

            self.el.classList.add('orchids', 'orchids-fragment');
            // left, top, width, height
            self.option.fragmentDirection == 'vertical' ? (
                self.el.classList.add('orchids-vertical'),
                    self.el.style.top = self.option.fragmentHeight * (self.id - 1) + 'px',
                    self.el.style.height = self.option.fragmentHeight + 'px'
            ) : (
                self.el.classList.add('orchids-horizontal'),
                    self.el.style.left = self.option.fragmentWidth * (self.id - 1) + 'px',
                    self.el.style.width = self.option.fragmentWidth + 'px'
            );
            // user custom initialization
            self.__orchids__isFirstFragment && (
                self.__orchids__initialized = !0,
                !!self.onCreate && self.onCreate(),
                    // render fragments
                !!self.option.subFragments && !!self.option.subFragments.length && self.__orchids__renderSubFragments()
            );
        },
        // render sub fragments
        __orchids__renderSubFragments: function () {
            var self = this,
                fragmentsEl = self.el.querySelector('[data-orchids-fragments]'),
                i, il, fragmentName, fragment,
                fragmentOption, instance;
            if (!fragmentsEl) {
                console.error('Render fragments failed: no fragments container which should has "data-orchids-sub-fragments" attribute.');
                return;
            }

            // guarantee the root fragments elements has overflow-hidden element
            fragmentsEl.style.overflow = 'hidden';
            // fragment's width and height
            self.__orchids__subFragmentWidth = fragmentsEl.offsetWidth;
            self.__orchids__subFragmentHeight = fragmentsEl.offsetHeight;

            // create fragments container element
            self.__orchids__subFragmentsContainerEl = document.createElement('div');
            self.__orchids__subFragmentsContainerEl.classList.add('orchids-sub-fragments-container');
            self.option.subFragmentAnimate && self.__orchids__subFragmentsContainerEl.classList.add('orchids-with-animation');
            self.option.subFragmentAnimateDirection == 'vertical' ? (
                self.__orchids__subFragmentsContainerEl.classList.add('orchids-vertical'),
                    self.__orchids__subFragmentsContainerEl.style.height = self.option.subFragments.length * self.__orchids__subFragmentHeight + 'px'
            ) : (
                self.__orchids__subFragmentsContainerEl.classList.add('orchids-horizontal'),
                    self.__orchids__subFragmentsContainerEl.style.width = self.option.subFragments.length * self.__orchids__subFragmentWidth + 'px'
            );

            // clear fragments root element inner html
            fragmentsEl.innerHTML = '';
            fragmentsEl.appendChild(self.__orchids__subFragmentsContainerEl);

            for (i = 0, il = self.option.subFragments.length; i < il; i++) {
                fragmentName = self.option.subFragments[i];
                fragment = container.fragments[fragmentName];
                if (!fragment) {
                    console.error('Render fragment "' + fragmentName + '" failed: no such a fragment registered.');
                    return;
                }
                fragmentOption = util.extend(!0, {}, fragment.option);
                fragmentOption.fragmentId = i + 1;
                fragmentOption.fragmentWidth = self.__orchids__subFragmentWidth;
                fragmentOption.fragmentHeight = self.__orchids__subFragmentHeight;
                fragmentOption.fragmentDirection = self.option.subFragmentAnimateDirection;
                instance = new fragment.fragment(fragmentOption);

                self.__orchids__subFragmentsInstances[fragmentOption.fragmentId] = instance;
                // add sub fragment element to current root sub fragments container
                self.__orchids__subFragmentsContainerEl.appendChild(instance.el);
            }
        },
        /**
         * show sub fragment specified by id
         * @param id
         */
        showSubFragment: function (id) {
            var self = this,
                instance, previousInstance;
            if (!id) {
                console.error('method showFragment needs a specified fragment id');
                return;
            }
            if (id == self.__orchids__currentSubFragmentId) {
                return;
            }
            instance = self.__orchids__subFragmentsInstances[id];
            if (!instance) {
                console.error('fragment not found with id: ' + id + '.');
                return;
            }

            // create fragment if not created, or call onShow method
            !instance.__orchids__initialized ?
                (
                    !!instance.onCreate && instance.onCreate(),
                        instance.__orchids__initialized = !0
                ) :
            !!instance.onShow && instance.onShow();
            // call previous fragment onHide method
            previousInstance = self.__orchids__subFragmentsInstances[self.__orchids__currentSubFragmentId];
            !!previousInstance.onHide && previousInstance.onHide();
            // update current active fragment id
            self.__orchids__currentSubFragmentId = id;
            // create sub fragments if not created
            !!instance.option.subFragments && !!instance.option.subFragments.length && instance.__orchids__renderSubFragments();
            self.option.subFragmentAnimateDirection == 'vertical' ? (
                self.__orchids__subFragmentsContainerEl.style.transform = 'translateY(' + (0 - self.__orchids__subFragmentHeight * (id - 1)) + 'px)'
            ) : (
                self.__orchids__subFragmentsContainerEl.style.transform = 'translateX(' + (0 - self.__orchids__subFragmentWidth * (id - 1)) + 'px)'
            );
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
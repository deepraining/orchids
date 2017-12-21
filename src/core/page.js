"use strict";

var extend = require('../util/extend');
var container = require('../data/container');
var directionClasses = require('../data/direction_classes');
var logger = require('../util/logger');

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
            var styleKeys;
            // make id
            self.id = self.option.pageId;
            // whether current page is the first page to render or not, for confirming to start current page with or without animation.
            self.__orchids__isFirstPage = self.id === 1;
            // make root el
            self.el = document.createElement('div');
            // data-orchids-page-is
            self.el.dataset.orchidsPageId = self.id;
            self.el.dataset.orchidsPageName = self.option.pageName;
            self.el.classList.add('orchids', 'orchids-page');
            // animation
            self.option.animate && self.el.classList.add('orchids-with-animation');
            // direction
            self.el.classList.add(directionClasses[self.option.animateDirection || 'r2l']);
            // fade
            self.option.fadeInOut && self.el.classList.add('orchids-with-fade');
            // singleton
            self.option.singleton && self.el.classList.add('orchids-page-singleton');
            // active
            self.__orchids__isFirstPage && self.el.classList.add('orchids-active');
            // background color
            self.el.style.backgroundColor = self.option.backgroundColor;

            // extra style
            self.option.style && (styleKeys = Object.keys(self.option.style)).length && (
                styleKeys.map(function (key) {
                    self.el.style[key] = self.option.style[key]
                })
            );

            // add to container
            container.rootContainer.appendChild(self.el);

            // user custom initialization
            !!self.onCreate && self.onCreate(self.__orchids__data);

            // route, if it is the first page, no route change
            !!self.option.route && !self.__orchids__isFirstPage && self.__orchids__routeForward();

            // render fragments
            !!self.option.fragments && !!self.option.fragments.length && self.__orchids__renderFragments();

            /**
             * show page, delay 100 ms to guarantee the animation  is ok, and 0 is not ok
             */
            !self.__orchids__isFirstPage && setTimeout(function () {
                self.el.classList.add('orchids-active')
            }, 100);

        },
        // render fragments
        __orchids__renderFragments: function () {
            var self = this,
                fragmentsEl = self.el.querySelector('[data-orchids-fragments]'),
                i, il, fragmentName, fragment,
                fragmentOption, instance;
            if (!fragmentsEl) {
                console.error('Render fragments failed: no fragments container which should has "data-orchids-fragments" attribute.');
                return;
            }

            // guarantee the root fragments elements has overflow-hidden element
            fragmentsEl.style.overflow = 'hidden';
            // fragment's width and height
            self.__orchids__fragmentWidth = fragmentsEl.offsetWidth;
            self.__orchids__fragmentHeight = fragmentsEl.offsetHeight;

            // create fragments container element
            self.__orchids__fragmentsContainerEl = document.createElement('div');
            self.__orchids__fragmentsContainerEl.classList.add('orchids-fragments-container');
            self.option.fragmentAnimate && self.__orchids__fragmentsContainerEl.classList.add('orchids-with-animation');
            self.option.fragmentAnimateDirection == 'vertical' ? (
                self.__orchids__fragmentsContainerEl.classList.add('orchids-vertical'),
                    self.__orchids__fragmentsContainerEl.style.height = self.option.fragments.length * self.__orchids__fragmentHeight + 'px'
            ) : (
                self.__orchids__fragmentsContainerEl.classList.add('orchids-horizontal'),
                    self.__orchids__fragmentsContainerEl.style.width = self.option.fragments.length * self.__orchids__fragmentWidth + 'px'
            );

            // clear fragments root element inner html
            fragmentsEl.innerHTML = '';
            fragmentsEl.appendChild(self.__orchids__fragmentsContainerEl);

            for (i = 0, il = self.option.fragments.length; i < il; i++) {
                fragmentName = self.option.fragments[i];
                fragment = container.fragmentDefinitions[fragmentName];
                if (!fragment) {
                    console.error('Render fragment "' + fragmentName + '" failed: no such a fragment registered.');
                    return;
                }
                fragmentOption = extend(!0, {}, fragment.option);
                fragmentOption.fragmentId = i + 1;
                fragmentOption.fragmentWidth = self.__orchids__fragmentWidth;
                fragmentOption.fragmentHeight = self.__orchids__fragmentHeight;
                fragmentOption.fragmentDirection = self.option.fragmentAnimateDirection;
                instance = new fragment.fragment(fragmentOption);

                self.__orchids__fragmentsInstances[fragmentOption.fragmentId] = instance;
                // add fragment element to current root fragments container
                self.__orchids__fragmentsContainerEl.appendChild(instance.el);
            }
        },
        /**
         * show fragment specified by id
         * @param id
         */
        showFragment: function (id) {
            var self = this,
                instance, previousInstance;
            if (!id) {
                console.error('method showFragment needs a specified fragment id');
                return;
            }
            if (id == self.__orchids__currentFragmentId) {
                return;
            }
            instance = self.__orchids__fragmentsInstances[id];
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
            previousInstance = self.__orchids__fragmentsInstances[self.__orchids__currentFragmentId];
            !!previousInstance.onHide && previousInstance.onHide();
            // update current active fragment id
            self.__orchids__currentFragmentId = id;
            // create sub fragments if not created
            !!instance.option.subFragments && !!instance.option.subFragments.length && instance.__orchids__renderSubFragments();
            self.option.fragmentAnimateDirection == 'vertical' ? (
                self.__orchids__fragmentsContainerEl.style.transform = 'translateY(' + (0 - self.__orchids__fragmentHeight * (id - 1)) + 'px)'
            ) : (
                self.__orchids__fragmentsContainerEl.style.transform = 'translateX(' + (0 - self.__orchids__fragmentWidth * (id - 1)) + 'px)'
            );
        },
        /**
         * get fragment specified by id, default return the first fragment
         * @param id
         */
        getFragment: function (id) {
            var self = this;
            id = id || 1;
            try {
                return self.__orchids__fragmentsInstances[id];
            } catch (e) {
                return null;
            }
        },
        // make a forward route
        __orchids__routeForward: function () {
            var self = this,
                pageName = encodeURIComponent(self.option.pageName),
                pageData = encodeURIComponent(JSON.stringify(self.__orchids__data)),
                params = (function () {
                    var params = {};
                    !!location.search && (
                        location.search.slice(1).split('&').map(function (item) {
                            params[item.split('=')[0]] = item.split('=')[1]
                        })
                    );
                    return params;
                })(),
                searchString = '';
            params.orchidsPage = pageName;
            params.orchidsData = pageData;

            Object.keys(params).map(function (key) {
                searchString += '&' + key + '=' + (!!params[key] ? params[key] : '');
            });

            history.pushState({
                pageId: self.id
            }, null, '?' + searchString.slice(1));
        },

        // destroy current page
        __orchids__destroy: function () {
            var self = this;

            // call all fragments's __orchids__destroy
            Object.keys(self.__orchids__fragmentsInstances).map(function (id) {
                self.__orchids__fragmentsInstances[id].__orchids__destroy();
            });
            self.onDestroy();

            self.el.classList.remove('orchids-active');
            self.option.animate ? (
                // has animation
                setTimeout(function () {
                    self.el.remove()
                }, 500)
            ) : (
                // no animation
                self.el.remove()
            );
        },

        // hide current page
        __orchids__hide: function (isSingleton) {
            var self = this;
            // call active fragment's __orchids__hide
            try {
                self.__orchids__fragmentsInstances[self.__orchids__currentFragmentId].__orchids__hide();
            }
            catch (e) {}

            self.onHide();

            isSingleton && (self.el.classList.remove('orchids-active'));
        },

        // show current page
        __orchids__show: function (isSingleton, forResult, prepareResultData) {
            var self = this;

            isSingleton && (
                self.el.classList.add('orchids-active'),
                    // route, if it is the first page, no route change
                !!self.option.route && !self.__orchids__isFirstPage && self.__orchids__routeForward()
            );

            self.onShow();
            // call active fragment's __orchids__show
            try {
                self.__orchids__fragmentsInstances[self.__orchids__currentFragmentId].__orchids__show();
            }
            catch (e) {}

            forResult && self.prepareForResult(prepareResultData);
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
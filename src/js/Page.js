"use strict";

var util = require('./util'),
    container = require('./container');

var newPage = function () {
    /**
     *
     * @param option Option to initialize page
     * @param data Parameter to be used by onCreate method
     * @constructor
     */
    function Page(option, data) {
        var self = this;
        self.option = util.extend(true, {}, option);
        self.__orchids__data = data || {};
        self.__orchids__init();
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
    }

    Page.prototype = {
        constructor: Page,
        __orchids__init: function() {
            var self = this,
                classes = [
                    'orchids',
                    'orchids-page'
                ];
            // make id
            self.id = self.option.pageId;
            // whether current page is the first page to render or not, for confirming to start current page with or without animation.
            self.__orchids__isFirstPage = self.id == 1;
            // make root el
            self.el = document.createElement('div');
            // data-orchids-page-is
            self.el.dataset.orchidsPageId = self.id;
            // animation
            !!self.option.animate && (
                classes.push('orchids-with-animation')
            );
            // direction
            self.option.animateDirection == 'vertical' ? classes.push('orchids-vertical') : classes.push('orchids-horizontal');
            // classList
            self.__orchids__isFirstPage && classes.push('orchids-active');
            self.el.classList = classes.join(' ');
            // background color
            self.el.style.backgroundColor = self.option.backgroundColor;

            // add to body element
            document.body.appendChild(self.el);

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
                fragmentsContainerClasses = [
                    'orchids-fragments-container'
                ],
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

            self.option.fragmentAnimate && fragmentsContainerClasses.push('orchids-with-animation');
            self.option.fragmentAnimateDirection == 'vertical' ? (
                fragmentsContainerClasses.push('orchids-vertical'),
                    self.__orchids__fragmentsContainerEl.style.height = self.option.fragments.length * self.__orchids__fragmentHeight + 'px'
            ) : (
                fragmentsContainerClasses.push('orchids-horizontal'),
                    self.__orchids__fragmentsContainerEl.style.width = self.option.fragments.length * self.__orchids__fragmentWidth + 'px'
            );

            // class list
            self.__orchids__fragmentsContainerEl.classList = fragmentsContainerClasses.join(' ');
            // clear fragments root element inner html
            fragmentsEl.innerHTML = '';
            fragmentsEl.appendChild(self.__orchids__fragmentsContainerEl);

            for (i = 0, il = self.option.fragments.length; i < il; i++) {
                fragmentName = self.option.fragments[i];
                fragment = container.fragments[fragmentName];
                if (!fragment) {
                    console.error('Render fragment "' + fragmentName + '" failed: no such a fragment registered.');
                    return;
                }
                fragmentOption = util.extend(!0, {}, fragment.option);
                fragmentOption.fragmentId = i + 1;
                fragmentOption.fragmentWidth = self.__orchids__fragmentWidth;
                fragmentOption.fragmentHeight = self.__orchids__fragmentHeight;
                fragmentOption.fragmentDirection = self.option.fragmentAnimateDirection;
                instance = new fragment.fragment(fragmentOption);

                self.__orchids__fragmentsInstances[fragmentOption.fragmentId] = instance;
            }
        },
        /**
         * show fragment specified by id
         * @param id
         */
        showFragment: function (id) {
            var self = this,
                instance;
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

            // update current active fragment id
            self.__orchids__currentFragmentId = id;
            // create fragment if not created
            !instance.__orchids__initialized && !!instance.onCreate && instance.onCreate();
            // create sub fragments if not created
            !!instance.option.subFragments && !!instance.option.subFragments.length && instance.__orchids__renderSubFragments();
            self.option.fragmentAnimateDirection == 'vertical' ? (
                self.__orchids__fragmentsContainerEl.style.transform = 'translateY(' + (0 - self.__orchids__fragmentHeight * (id - 1)) + ')'
            ) : (
                self.__orchids__fragmentsContainerEl.style.transform = 'translateX(' + (0 - self.__orchids__fragmentWidth * (id - 1)) + ')'
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
        // back a route (current no using)
        //__orchids__routeBack: function () {
        //    history.back();
        //},
        // hide current page
        __orchids__hide: function () {
            var self = this;
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

        // show current page (current no using)
        //__orchids__show: function () {
        //    var self = this;
        //    // route
        //    !!self.option.route && self.__orchids__routeForward();
        //    self.el.classList.add('orchids-active');
        //},

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

module.exports = newPage;
"use strict";

var util = require('./util');

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

            /**
             * show page, delay 100 ms to guarantee the animation  is ok, and 0 is not ok
             */
            !self.__orchids__isFirstPage && setTimeout(function () {
                self.el.classList.add('orchids-active')
            }, 100);
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
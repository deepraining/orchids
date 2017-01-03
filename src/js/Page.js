"use strict";

var util = require('./util'),
    idGenerator = require('./idGenerator'),
    app = require('./app'),
    defaultBackgroundColor = '#ffffff',
    /**
     * default Page option
     * @type {{}}
     */
    defaultOption = {
        /**
         * page name
         */
        pageName: '',
        /**
         * background of root element
         */
        backgroundColor: defaultBackgroundColor,
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
         * whether current page is singleton or not.
         * if set to true, it will not be removed from dom when called onDestroy, and will not render again when it is initialized again
         */
        singleton: !1
    };

var newPage = function () {
    /**
     *
     * @param option Option to initialize page
     * @param forResult Whether current page is called by startPage or startPageForResult
     * @constructor
     */
    function Page(option, forResult) {
        var self = this;
        self.option = util.extend(true, {}, option);
        self.__orchids__preInit();
        self.__orchids__init();
    }

    Page.prototype = {
        constructor: Page,
        __orchids__preInit: function () {
            var self = this,
                color = self.option.backgroundColor;
            // have color attribute
            if (!!color) {
                !/^#\w{6}$/.test(color) && !/^\w{6}$/.test(color) ? (
                    self.backgroundColor = '',
                        console.error('The backgroundColor attribute of Page option could not be parsed with wrong format.\nthe suggested format is: #000000~#ffffff/000000~ffffff, and input is: "' + color + '"')
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
                classes = [
                    'orchids',
                    'orchids-page'
                ];
            // make id
            self.id = idGenerator.getPageId();
            // whether current page is the first page to render or not, for confirming to start current page with or without animation.
            self.__orchids__isFirstPage = self.id == 1;
            // make root el
            self.el = document.createElement('div');
            // data-orchids-page-is
            self.el.dataset.orchidsPageId = self.id;
            // animation
            // self
            if (typeof self.option.animate != 'undefined') {
                !!self.option.animate && (
                    classes.push('orchids-with-animation'),
                        self.option.animateDirection == 'vertical' ? classes.push('orchids-vertical') : classes.push('orchids-horizontal')
                )
            }
            // app
            else if (typeof app.option.animate != 'undefined') {
                !!app.option.animate && (
                    classes.push('orchids-with-animation'),
                        app.option.animateDirection == 'vertical' ? classes.push('orchids-vertical') : classes.push('orchids-horizontal')
                )
            }
            // default
            else {
                classes.push('orchids-with-animation'),
                    classes.push('orchids-horizontal')
            }
            // classList
            self.__orchids__isFirstPage && classes.push('orchids-active');
            self.el.classList = classes.join(' ');
            // background color
            self.el.style.backgroundColor = !!self.option.backgroundColor ? self.option.backgroundColor : (
                !!app.option.backgroundColor ? app.option.backgroundColor : defaultBackgroundColor
            );
            // z-index
            !!self.option.singleton && (self.el.style.zIndex = 2);
            // user custom initialization
            !!self.onCreate && self.onCreate();

            // route
            // self
            if (typeof self.option.route != 'undefined') {
                !!self.option.route && self.__orchids__routeForward();
            }
            // app
            else if (typeof app.option.route != 'undefined') {
                !!app.option.route && self.__orchids__routeForward()
            }

            // add to body element
            document.body.appendChild(el);

            // show page
            !self.__orchids__isFirstPage && setTimeout(function () {
                self.el.classList.add('orchids-active')
            }, 0);
        },
        // make a forward route
        __orchids__routeForward: function () {
            var self = this,
                pageName = encodeURIComponent(self.option.pageName),
                pageOption = encodeURIComponent(JSON.stringify(self.option)),
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
            params.orchidsOption = pageOption;

            Object.keys(params).map(function (key) {
                searchString += '&' + key + '=' + (!!params[key] ? params[key] : '');
            });

            history.pushState(null, null, '?' + searchString.slice(1));
        },
        // back a route
        __orchids__routeBack: function () {
            history.back();
        },
        // hide current page
        __orchids__hide: function () {
            var self = this,
                prevPage = app.getPrevPage();
            self.onDestroy();
            !!prevPage.onPageResult && prevPage.onPageResult(self.__orchids__result);
            self.el.classList.remove('orchids-active');
            !self.option.singleton && setTimeout(function () {
                self.el.remove()
            }, 500);
            // route
            // self
            if (typeof self.option.route != 'undefined') {
                !!self.option.route && self.__orchids__routeBack();
            }
            // app
            else if (typeof app.option.route != 'undefined') {
                !!app.option.route && self.__orchids__routeBack()
            }
        },

        // show current page
        __orchids__show: function () {
            var self = this;
            // route
            // self
            if (typeof self.option.route != 'undefined') {
                !!self.option.route && self.__orchids__routeForward();
            }
            // app
            else if (typeof app.option.route != 'undefined') {
                !!app.option.route && self.__orchids__routeForward()
            }
            self.el.classList.add('orchids-active');
        },

        // render a page after a page is initialized
        onCreate: function() {},

        // pre handle before destroy a page
        onDestroy: function() {},

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
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
         * background of root element
         */
        backgroundColor: defaultBackgroundColor,
        /**
         * whether to use animation when switch between pages
         * default: true
         */
        animate: !0,
        /**
         * animation direction of switching page
         * horizontal/vertical, default: horizontal
         */
        animateDirection: 'horizontal'

    };

function Page(option) {
    var self = this;
    self.option = util.extend(true, {}, defaultOption, option);
    self.__orchids__preInit();
    self.__orchids__init();

}

Page.prototype = {
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
        // animation
        self.option.animate && (
            classes.push('orchids-with-animation'),
                self.option.animateDirection == 'vertical' ? classes.push('orchids-vertical') : classes.push('orchids-horizontal')
        );
        self.__orchids__isFirstPage && classes.push('orchids-active');
        self.el.classList = classes.join(' ');
        // background color
        self.el.style.backgroundColor = !!self.option.backgroundColor ? self.option.backgroundColor : (
            !!app.option.backgroundColor ? app.option.backgroundColor : defaultBackgroundColor
        );

        // user custom initialization
        !!self.onCreate && self.onCreate();

        // add to body element
        document.body.appendChild(el);

        // show page
        !self.__orchids__isFirstPage && setTimeout(function () {
            self.el.classList += ' orchids-active'
        }, 0);
    },

    // hide current page
    __orchids__hide: function () {

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

    }
};
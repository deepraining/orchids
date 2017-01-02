"use strict";

var util = require('./util'),
    /**
     * default Page option
     * @type {{}}
     */
    defaultOption = {
        /**
         * background of root element
         */
        backgroundColor: '#ffffff',
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
         * 初始化html
         */
        pages: {
            name: 'pageOption1',
            name2: 'pageOption2'
        }

    };

var app = {
    currentPageId: 0,
    initialize: function(option) {
        app.option = util.extend(true, {}, defaultOption, option);
    }
};
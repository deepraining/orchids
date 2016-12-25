"use strict";

var util = require('./util'),
    methods = [
        'onCreate', 'onDestroy'
    ],
    /**
     * default Page option
     * @type {{}}
     */
    defaultOption = {
        /**
         * 初始化html
         */
        initHtml: '',
        handlers: {}

    };

function Page(option) {
    var self = this;
    self.option = util.extend(true, {}, defaultOption, option);

    self.init();
}

Page.prototype = {
    init: function() {
        var self = this;

        self.handlers = {}
    },
    onCreate: function() {

    },

};
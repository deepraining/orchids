"use strict";

var util = require('./util'),
    methods = [
        'onCreate', 'onDestroy'
    ],
    /**
     * default Fragment option
     * @type {{}}
     */
    defaultOption = {
        /**
         * 初始化html
         */
        initHtml: '',
        handlers: {}

    };

function Fragment(option) {
    var self = this;
    self.option = util.extend(true, {}, defaultOption, option);

    self.init();
}

Fragment.prototype = {
    init: function() {
        var self = this;

        self.handlers = {}
    },
    onCreate: function() {

    },

};
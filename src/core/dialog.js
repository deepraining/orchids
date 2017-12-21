/**
 * Similar to Page Object, but no route, always cover page(that is to say, if you want to go to another page,
 *     you need first to close current dialog, or you will not see the effect), 
 */

"use strict";

var extend = require('../util/extend');
var container = require('../data/container');

var init = require('./dialog/init');

var newDialog = () => {
    /**
     * constructor
     * @param option Option to initialize dialog
     * @param data Parameter to be used by onCreate method
     * @constructor
     */
    function Dialog(option, data) {
        var self = this;
        self.option = extend(true, {}, option);
        self.__orchids__data = data || {};
        self.__orchids__init();
    }

    Dialog.prototype = {
        constructor: Dialog,
        __orchids__init: function() {
            var self = this;

            init(self);
        },
        // destroy current dialog
        __orchids__destroy: function () {
            var self = this;
            self.onDestroy();

            self.el.classList.remove('orchids-active');

            if (self.option.animate)
                // has animation
                setTimeout(function () {
                    self.el.remove()
                }, 500);
            else
                // no animation
                self.el.remove();
        },

        // show current dialog
        __orchids__show: function (forResult, prepareResultData) {
            var self = this;

            /**
             * show dialog
             */
            self.el.classList.add('orchids-active');

            self.onShow();

            forResult && self.prepareForResult(prepareResultData);
        },

        // hide current dialog
        __orchids__hide: function () {
            var self = this;

            self.onHide();
            /**
             * hide dialog
             */
            self.el.classList.remove('orchids-active');
        },

        // render a dialog after a dialog is initialized
        onCreate: function(data) {},

        // pre handle before destroy a dialog
        onDestroy: function() {},

        /**
         * called when back dialog from other dialog
         */
        onShow: function () {},
        /**
         * called when start another dialog
         */
        onHide: function () {},

        /**
         * set the result if this dialog is called by startDialogForResult method,
         * and the returned value will be used as the param of the onDialogResult method of last dialog
         *
         * @param {*} data
         */
        setResult: function(data) {
            var self = this;
            self.__orchids__result = data;
        },
        /**
         * called when the child dialog destroyed and return the value by setResult method.
         * @param {*} data
         */
        onDialogResult: function(data) {},
        /**
         * receive data from the previous dialog, startDialogForResult method's second parameter
         * @param data
         */
        prepareForResult: function(data) {}
    };

    return Dialog;
};

module.exports = newDialog;
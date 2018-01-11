/**
 * Similar to Page Object, but no route, always cover page(that is to say, if you want to go to another page,
 *     you need first to close current dialog, or you will not see the effect), 
 */

"use strict";

var extend = require('../util/extend');
var vars = require('../data/vars');

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
        self.__orchids__data = data || null;
        self.__orchids__init();
    }

    Dialog.prototype = {
        constructor: Dialog,
        /**
         * init dialog
         * @private
         */
        __orchids__init: function() {
            var self = this;

            init(self);
        },
        /**
         * destroy current dialog
         * @private
         */
        __orchids__destroy: function () {
            var self = this;
            self.onDestroy();
        },
        /**
         * show current dialog
         * @param isSingleton
         * @param forResult
         * @param prepareResultData
         * @private
         */
        __orchids__show: function (isSingleton, forResult, prepareResultData) {
            var self = this;

            /**
             * show dialog
             */
            isSingleton && self.el.classList.add('orchids-active');

            self.onShow();

            forResult && self.prepareForResult(prepareResultData);
        },
        /**
         * hide current dialog
         * @param isSingleton
         * @private
         */
        __orchids__hide: function (isSingleton) {
            var self = this;

            self.onHide();
            /**
             * hide dialog
             */
            isSingleton && self.el.classList.remove('orchids-active');
        },
        /**
         * before a dialog is initialized
         */
        beforeCreate: function () {},
        /**
         * render a dialog after a dialog is initialized
         * @param data
         */
        onCreate: function(data) {},
        /**
         * after a dialog is initialized
         */
        afterCreate: function () {},
        /**
         * pre handle before destroy a dialog
         */
        onDestroy: function() {},
        /**
         * after destroy a dialog
         */
        afterDestroy: function() {},
        /**
         * called when back dialog from other dialog
         */
        onShow: function () {},
        /**
         * called when dialog is completely shown
         */
        afterShow: function () {},
        /**
         * called when start another dialog
         */
        onHide: function () {},
        /**
         * called when dialog is completely hidden
         */
        afterHide: function () {},
        /**
         * set the result if this dialog is called by startDialogForResult method,
         * and the returned value will be used as the param of the onResult method of last dialog or page
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
        onResult: function(data) {},
        /**
         * receive data from the previous dialog, startDialogForResult method's second parameter
         * @param data
         */
        prepareForResult: function(data) {}
    };

    return Dialog;
};

module.exports = newDialog;
/**
 * Similar to Page Object, but no route, always cover page(that is to say, if you want to go to another page,
 *     you need first to close current dialog, or you will not see the effect), 
 */

"use strict";

var util = require('./util');

var newDialog = function () {
    /**
     *
     * @param option Option to initialize dialog
     * @param data Parameter to be used by onCreate method
     * @constructor
     */
    function Dialog(option, data) {
        var self = this;
        self.option = util.extend(true, {}, option);
        self.__orchids__data = data || {};
        self.__orchids__init();
    }

    Dialog.prototype = {
        constructor: Dialog,
        __orchids__init: function() {
            var self = this,
                classes = [
                    'orchids',
                    'orchids-dialog',
                    'orchids-with-animation'
                ];
            // make id
            self.id = self.option.dialogId;
            // make root el
            self.el = document.createElement('div');
            // data-orchids-dialog-is
            self.el.dataset.orchidsDialogId = self.id;
            // direction
            self.option.animateDirection == 'horizontal' ? classes.push('orchids-horizontal') : classes.push('orchids-vertical');
            // classList
            self.el.classList = classes.join(' ');
            // background color
            self.el.style.backgroundColor = self.option.backgroundColor;

            // add to body element
            document.body.appendChild(self.el);

            // user custom initialization
            !!self.onCreate && self.onCreate(self.__orchids__data);

            /**
             * show dialog, delay 100 ms to guarantee the animation  is ok, and 0 is not ok
             */
            setTimeout(function () {
                self.el.classList.add('orchids-active')
            }, 100);
        },
        // hide current dialog
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

        // show current dialog
        __orchids__show: function (forResult, prepareResultData) {
            var self = this;
            // add to body element
            document.body.appendChild(self.el);

            /**
             * show dialog, delay 100 ms to guarantee the animation  is ok, and 0 is not ok
             */
            self.option.animate ? (
                // has animation
                setTimeout(function () {
                    self.el.classList.add('orchids-active')
                }, 100)
            ) : (
                // no animation
                self.el.classList.add('orchids-active')
            );

            forResult && self.prepareForResult(prepareResultData);
        },

        // render a dialog after a dialog is initialized
        onCreate: function(data) {},

        // pre handle before destroy a dialog
        onDestroy: function() {},

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
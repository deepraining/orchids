/**
 * Similar to Page Object, but no route, always cover page(that is to say, if you want to go to another page,
 *     you need first to close current dialog, or you will not see the effect), 
 */

"use strict";

var util = require('./util');
var container = require('../data/container');
var directionClasses = require('./directionClasses');

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
        self.__orchids__getRootContainer();
        self.__orchids__init();
    }

    Dialog.prototype = {
        constructor: Dialog,
        __orchids__init: function() {
            var self = this;
            var styleKeys;
            // make id
            self.id = self.option.dialogId;
            // make root el
            self.el = document.createElement('div');
            // data-orchids-dialog-is
            self.el.dataset.orchidsDialogId = self.id;
            self.el.dataset.orchidsDialogName = self.option.dialogName;
            self.el.classList.add('orchids', 'orchids-dialog');
            // animation
            !!self.option.animate && self.el.classList.add('orchids-with-animation');
            // direction
            self.el.classList.add(directionClasses[self.option.animateDirection || 'b2t']);
            // fade
            self.option.fadeInOut && self.el.classList.add('orchids-with-fade');
            // singleton
            self.option.singleton && self.el.classList.add('orchids-dialog-singleton');
            // background color
            self.el.style.backgroundColor = self.option.backgroundColor;

            // extra style
            self.option.style && (styleKeys = Object.keys(self.option.style)).length && (
                styleKeys.map(function (key) {
                    self.el.style[key] = self.option.style[key]
                })
            );

            // add to container
            self.rootContainer.appendChild(self.el);

            // user custom initialization
            !!self.onCreate && self.onCreate(self.__orchids__data);

            /**
             * show dialog, delay 100 ms to guarantee the animation  is ok, and 0 is not ok
             */
            setTimeout(function () {
                self.el.classList.add('orchids-active')
            }, 100);
        },
        // get root container
        __orchids__getRootContainer: function () {
            var self = this;
            var type = typeof self.option.rootContainer;
            // defined a custom root container
            if (self.option.rootContainer) {
                // selector
                if (type == 'string') self.rootContainer = document.getElementById(self.option.rootContainer);
                // dom
                else if(type == 'object' && self.option.rootContainer.nodeType == 1 && typeof self.option.rootContainer.nodeName == 'string')
                    self.rootContainer = self.option.rootContainer;
                else {
                    console.error('orchids: unknown root container, it should be one of follows: id selector, dom object.');
                    self.rootContainer = document.body;
                }
            }
            else if (container.rootContainer) {
                self.rootContainer = container.rootContainer;
            }
            else self.rootContainer = document.body;
        },
        // destroy current dialog
        __orchids__destroy: function () {
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
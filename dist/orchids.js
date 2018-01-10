/*!
 * 
 *     orchids v0.1.2
 * 
 *     https://github.com/senntyou/orchids
 * 
 *     @senntyou <jiangjinbelief@163.com>
 * 
 *     2018-01-10 19:19:42
 *     
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["orchids"] = factory();
	else
		root["orchids"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



module.exports = {
  /**
   * root container
   */
  rootContainer: document.body,
  /**
   * container of all registered page definitions
   *
   * @type {{}}
   */
  pageDefinitions: {
    /**
     * pageName: {
     *     option: option,
     *     parent: void 0, // parent page name
     *     page: Page, // Page Object
     *     singleton: true/false // whether is singleton instance
     * }
     */
  },
  /**
   * container of all registered Page Attributes
   *
   * @type {{}}
   */
  pageAttributes: {
    /**
     * pageName: {
     *     fieldName: attr/method
     * }
     */
  },
  /**
   * container of all initialized Page models
   *
   * @type {{}}
   */
  pageModels: {
    /**
     * // example: id-1, id-2. Simple number id is array, could not refactor sequence
     * 'id'-id: {
     *     name: pageName, // Page name
     *     forResult: true/false, // whether current page is initialized by startPageForResult
     *     page: Page, // Page instance
     *     singleton: true/false // whether is singleton instance
     * }
     */
  },
  /**
   * container of all initialized singleton Page models
   *
   * @type {{}}
   */
  singletonPageModels: {
    /**
     * pageName: {
     *     id: id, // page id
     *     page: Page // Page instance
     * }
     */
  },
  /**
   * container of all registered dialog definitions
   *
   * @type {{}}
   */
  dialogDefinitions: {
    /**
     * dialogName: {
     *     option: option,
     *     parent: void 0, // parent dialog name
     *     dialog: Dialog, // Dialog Object
     *     singleton: true/false // whether is singleton instance.
     * }
     */
  },
  /**
   * container of all registered Dialog Attributes
   *
   * @type {{}}
   */
  dialogAttributes: {
    /**
     * dialogName: {
     *     fieldName: attr/method
     * }
     */
  },
  /**
   * container of all initialized Dialog models
   *
   * @type {{}}
   */
  dialogModels: {
    /**
     * // example: id-1, id-2. Simple number id is array, could not refactor sequence
     * 'id'-id: {
     *     name: dialogName, // Dialog name
     *     forResult: true/false, // whether current dialog is initialized by startDialogForResult
     *     dialog: Dialog, // Dialog instance
     *     singleton: true/false // whether is singleton instance.
     * }
     */
  },
  /**
   * container of all initialized singleton Dialog models
   *
   * @type {{}}
   */
  singletonDialogModels: {
    /**
     * dialogName: {
     *     id: id, // dialog id
     *     dialog: Dialog // Dialog instance
     * }
     */
  },
  /**
   * container of all registered fragment definitions
   *
   * @type {{}}
   */
  fragmentDefinitions: {
    /**
     * fragmentName: {
     *     option: option,
     *     parent: void 0, // parent fragment
     *     fragment: Fragment // Fragment Object
     * }
     */
  },
  /**
   * container of all registered Fragment Attributes
   *
   * @type {{}}
   */
  fragmentAttributes: {
    /**
     * fragmentName: {
     *     fieldName: attr/method
     * }
     */
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/**
 * from jquery (https://github.com/jquery/jquery/blob/master/src/core.js#L131)
 * @returns {*|{}}
 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var class2type = {},
    hasOwn = class2type.hasOwnProperty,
    isWindow = function isWindow(obj) {
    return obj != null && obj === obj.window;
},
    isPlainObject = function isPlainObject(obj) {
    // Not plain objects:
    // - Any object or value whose internal [[Class]] property is not "[object Object]"
    // - DOM nodes
    // - window
    if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) !== "object" || obj.nodeType || isWindow(obj)) {
        return false;
    }

    if (obj.constructor && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
        return false;
    }

    // If the function hasn't returned already, we're confident that
    // |obj| is a plain object, created by {} or constructed with new Object
    return true;
},
    extend = function extend() {
    var options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false;

    // Handle a deep copy situation
    if (typeof target === "boolean") {
        deep = target;

        // Skip the boolean and the target
        target = arguments[i] || {};
        i++;
    }

    // Handle case when target is a string or something (possible in deep copy)
    if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && typeof target != 'function') {
        target = {};
    }

    // Extend jQuery itself if only one argument is passed
    if (i === length) {
        target = this;
        i--;
    }

    for (; i < length; i++) {
        // Only deal with non-null/undefined values
        if ((options = arguments[i]) != null) {
            // Extend the base object
            for (name in options) {
                src = target[name];
                copy = options[name];

                // Prevent never-ending loop
                if (target === copy) {
                    continue;
                }

                // Recurse if we're merging plain objects or arrays
                if (deep && copy && (isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && Array.isArray(src) ? src : [];
                    } else {
                        clone = src && isPlainObject(src) ? src : {};
                    }

                    // Never move original objects, clone them
                    target[name] = extend(deep, clone, copy);

                    // Don't bring in undefined values
                } else if (copy !== undefined) {
                    target[name] = copy;
                }
            }
        }
    }

    // Return the modified object
    return target;
};

module.exports = extend;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var prefix = 'orchids: ';

module.exports = {
    log: function log(str) {
        console.log(prefix + str);
    },
    info: function info(str) {
        console.info(prefix + str);
    },
    warn: function warn(str) {
        console.warn(prefix + str);
    },
    error: function error(str) {
        console.error(prefix + str);
    },
    throwError: function throwError(str) {
        throw new Error(prefix + str);
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/**
 * app singleton instance
 * @type {{}}
 */

var app = {};

module.exports = app;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



module.exports = {
    // id prefix for page and dialog
    idPrefix: 'id-',
    // pages count
    pageCount: 0,
    // dialogs count
    dialogCount: 0,
    // whether current application is initialized
    appInitialized: !1
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var getPageModelById = __webpack_require__(9);

module.exports = function () {
    return getPageModelById();
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var originUrl = __webpack_require__(31);

var pagesCountCacheKey = 'orchids-pages-count: ' + originUrl;

module.exports = {
    increasePagesCount: function increasePagesCount() {
        window.sessionStorage[pagesCountCacheKey] = !window.sessionStorage[pagesCountCacheKey] ? 1 : parseInt(window.sessionStorage[pagesCountCacheKey]) + 1;
    },
    decreasePagesCount: function decreasePagesCount() {
        window.sessionStorage[pagesCountCacheKey] = parseInt(window.sessionStorage[pagesCountCacheKey]) - 1;
    },
    getPagesCount: function getPagesCount() {
        return parseInt(window.sessionStorage[pagesCountCacheKey]) || 0;
    },
    resetPagesCount: function resetPagesCount() {
        return window.sessionStorage[pagesCountCacheKey] = 0;
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var params = {};
location.search && location.search.slice(1).split('&').forEach(function (item) {
    var itemArray = item.split('=');
    params[itemArray[0]] = itemArray[1];
});

module.exports = params;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var container = __webpack_require__(0);
var app = __webpack_require__(3);
var util = __webpack_require__(6);
var getCurrentPageModel = __webpack_require__(5);
var getPrevPageModel = __webpack_require__(33);
var deleteCurrentPageModel = __webpack_require__(34);

/**
 * back to prev page
 */
module.exports = function () {

    // if current pages remain only 1, back action is invalid.
    if (Object.keys(container.pageModels).length <= 1) return;

    var currentModel = getCurrentPageModel();
    var prevModel = getPrevPageModel();
    // for result
    if (currentModel.forResult) {
        prevModel.page.onResult && prevModel.page.onResult(currentModel.page.__orchids__result || null);
    }
    // destroy or hide
    currentModel.singleton ? currentModel.page.__orchids__hide(!0) : currentModel.page.__orchids__destroy();
    // call prev page's __orchids__show method
    prevModel.page.__orchids__show();

    deleteCurrentPageModel();

    app.option.route && typeof app.option.onRouteChange == 'function' && app.option.onRouteChange();

    util.decreasePagesCount();
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var container = __webpack_require__(0);
var vars = __webpack_require__(4);

/**
 * get page model
 * @param id Page id, if not set, return current page
 * @returns {*}
 */
module.exports = function (id) {
    if (!id) {
        var keys = Object.keys(container.pageModels);
        if (!keys.length) return null;
        return container.pageModels[keys[keys.length - 1]];
    } else {
        return container.pageModels[vars.idPrefix + id] || null;
    }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var container = __webpack_require__(0);
var vars = __webpack_require__(4);

/**
 * get page model
 * @param index Page index, if not set, return current page
 * @returns {*}
 */
module.exports = function (index) {
    typeof index == 'undefined' && (index = -1);

    var keys = Object.keys(container.pageModels);
    var keysLength = keys.length;

    index < 0 && (index += keysLength);

    if (index < 0 || index > keysLength - 1) return null;

    return container.pageModels[keys[index]];
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var deleteDialogModelByIndex = __webpack_require__(36);

/**
 * delete current dialog model
 */
module.exports = function () {
  deleteDialogModelByIndex();
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var startPageInner = __webpack_require__(13);

/**
 * start a page
 * @param name Name of page
 * @param data Parameter to used by new page's onCreate method
 */
module.exports = function (name, data) {
  startPageInner(name, data, !1);
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var container = __webpack_require__(0);
var vars = __webpack_require__(4);
var logger = __webpack_require__(2);
var extend = __webpack_require__(1);
var makePageModel = __webpack_require__(37);
var makeSingletonPageModel = __webpack_require__(38);
var util = __webpack_require__(6);
var app = __webpack_require__(3);
var getCurrentPageModel = __webpack_require__(5);

/**
 * initialize a Page and show it
 * @param name Name of the Page Object
 * @param data Data to initialize a Page, and will be use by onCreate method
 * @param forResult Whether current page is initialized by startPageForResult
 * @param prepareResultData Parameter to be used by the next page's prepareForResult method
 */
module.exports = function (name, data, forResult, prepareResultData) {

    if (!vars.appInitialized) {
        logger.error('Application is not initialized yet, please call "orchids.start" to init application before do this.');
        return;
    }

    // has dialog active
    if (Object.keys(container.dialogModels).length) {
        logger.error('Currently has dialog in present, can not start a page.');
        return;
    }

    var pageDefinition = container.pageDefinitions[name]; // the Page Object

    if (!pageDefinition) {
        logger.error('The Page "' + name + '" you called is not registered.');
        return;
    }

    // current page model
    var currentPageModel = getCurrentPageModel();

    if (currentPageModel && currentPageModel.singleton) {
        logger.error('The Page "' + currentPageModel.name + '" is singleton, and is active currently, can not start another page.');
        return;
    }

    // call current page's __orchids__hide method
    currentPageModel && currentPageModel.page.__orchids__hide();

    // singleton
    if (pageDefinition.option.singleton) {
        // singleton model of the page
        var singletonModel = container.singletonPageModels[name];

        // has initialized before
        if (singletonModel) {
            container.pageModels[vars.idPrefix + singletonModel.id] = makePageModel(name, forResult, singletonModel.page, !0);

            forResult ? singletonModel.page.__orchids__show(!0, !0, prepareResultData) : singletonModel.page.__orchids__show(!0);

            typeof app.option.onRouteChange == 'function' && app.option.onRouteChange();

            util.increasePagesCount();

            return;
        }
    }

    // Page option
    var pageOption = extend(true, {}, pageDefinition.option);
    // pageId
    pageOption.pageId = ++vars.pageCount;
    // route
    pageOption.route = app.option.route;

    // initialize page
    var instance = new pageDefinition.page(pageOption, data);

    forResult && instance.prepareForResult(prepareResultData);

    if (pageDefinition.option.singleton) container.singletonPageModels[name] = makeSingletonPageModel(pageOption.pageId, instance);

    container.pageModels[vars.idPrefix + pageOption.pageId] = makePageModel(name, forResult, instance, pageOption.singleton);

    typeof app.option.onRouteChange == 'function' && app.option.onRouteChange();

    util.increasePagesCount();
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var getDialogModelById = __webpack_require__(15);

module.exports = function () {
    return getDialogModelById();
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var container = __webpack_require__(0);
var vars = __webpack_require__(4);

/**
 * get dialog model
 * @param id Dialog id, if not set, return current dialog
 * @returns {*}
 */
module.exports = function (id) {
    if (!id) {
        var keys = Object.keys(container.dialogModels);
        if (!keys.length) return null;
        return container.dialogModels[keys[keys.length - 1]];
    } else {
        return container.dialogModels[vars.idPrefix + id] || null;
    }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var container = __webpack_require__(0);
var vars = __webpack_require__(4);

/**
 * get dialog model
 * @param index Dialog index, if not set, return current dialog
 * @returns {*}
 */
module.exports = function (index) {
    typeof index == 'undefined' && (index = -1);

    var keys = Object.keys(container.dialogModels);
    var keysLength = keys.length;

    index < 0 && (index += keysLength);

    if (index < 0 || index > keysLength - 1) return null;

    return container.dialogModels[keys[index]];
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



module.exports = {
    l2r: 'orchids-left-to-right',
    r2l: 'orchids-right-to-left',
    t2b: 'orchids-top-to-bottom',
    b2t: 'orchids-bottom-to-top'
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var container = __webpack_require__(0);
var vars = __webpack_require__(4);
var logger = __webpack_require__(2);
var extend = __webpack_require__(1);
var makeDialogModel = __webpack_require__(67);
var makeSingletonDialogModel = __webpack_require__(68);
var getCurrentPageModel = __webpack_require__(5);
var getCurrentDialogModel = __webpack_require__(14);

/**
 * initialize a Dialog and show it
 * @param name Name of the Dialog Object
 * @param data Data to initialize a Dialog, and will be use by onCreate method
 * @param forResult Whether current dialog is initialized by startDialogForResult
 * @param prepareResultData Parameter to be used by the next dialog's prepareForResult method
 */
module.exports = function (name, data, forResult, prepareResultData) {

    var dialog = container.dialogDefinitions[name]; // the Dialog Object

    if (!dialog) {
        logger.error('The Dialog "' + name + '" you called is not registered.');
        return;
    }

    // current dialog model
    var currentDialogModel = getCurrentDialogModel();

    if (currentDialogModel && currentDialogModel.singleton) {
        logger.error('The Dialog "' + currentDialogModel.name + '" is singleton, and is active currently, can not start another dialog.');
        return;
    }

    // current page model
    var currentPageModel = getCurrentPageModel();

    // call current dialog's onHide method
    if (currentDialogModel) currentDialogModel.dialog.onHide();
    // call current page's onHide method
    else if (currentPageModel) currentPageModel.page.onHide();

    // singleton
    if (dialog.option.singleton) {
        // singleton model of the dialog
        var singletonModel = container.singletonDialogModels[name];

        // has initialized before
        if (singletonModel) {
            container.dialogModels[vars.idPrefix + singletonModel.id] = makeDialogModel(name, forResult, singletonModel.dialog, !0);

            forResult ? singletonModel.dialog.__orchids__show(!0, !0, prepareResultData) : singletonModel.dialog.__orchids__show(!0);

            return;
        }
    }

    // Dialog option
    var dialogOption = extend(true, {}, dialog.option);
    // dialogId
    dialogOption.dialogId = ++vars.dialogCount;

    // initialize dialog
    var instance = new dialog.dialog(dialogOption, data);

    forResult && instance.prepareForResult(prepareResultData);

    if (dialog.option.singleton) container.singletonDialogModels[name] = makeSingletonDialogModel(dialogOption.dialogId, instance);

    container.dialogModels[vars.idPrefix + dialogOption.dialogId] = makeDialogModel(name, forResult, instance, dialogOption.singleton);
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var getPageModelById = __webpack_require__(9);

/**
 * get page object
 * @param id Page id, if not set, return current page
 * @returns {*}
 */
module.exports = function (id) {
    var model = getPageModelById(id);

    return model ? model.page : null;
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var getDialogModelById = __webpack_require__(15);

/**
 * get dialog object
 * @param id Dialog id, if not set, return current dialog
 * @returns {*}
 */
module.exports = function (id) {
    var model = getDialogModelById(id);

    return model ? model.dialog : null;
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(22);

var orchids = {};

orchids.init = __webpack_require__(27);
orchids.start = __webpack_require__(30);
orchids.back = __webpack_require__(39);

orchids.registerPage = __webpack_require__(42);
orchids.registerDialog = __webpack_require__(53);
orchids.registerFragment = __webpack_require__(58);
orchids.startPage = __webpack_require__(12);
orchids.startPageForResult = __webpack_require__(65);
orchids.startDialog = __webpack_require__(66);
orchids.startDialogForResult = __webpack_require__(69);

orchids.getPage = __webpack_require__(19);
orchids.getPageByIndex = __webpack_require__(70);
orchids.getCurrentPage = __webpack_require__(71);
orchids.getDialog = __webpack_require__(20);
orchids.getDialogByIndex = __webpack_require__(72);
orchids.getCurrentDialog = __webpack_require__(73);

module.exports = orchids;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(23);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(25)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/.0.28.7@css-loader/index.js!./index.css", function() {
			var newContent = require("!!../../node_modules/.0.28.7@css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)(undefined);
// imports


// module
exports.push([module.i, ".orchids {\r\n    display: block;\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n.orchids:before,\r\n.orchids:after {\r\n    box-sizing: border-box;\r\n}\r\n.orchids-page,\r\n.orchids-dialog {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #ffffff;\r\n    overflow: auto;\r\n    z-index: 1;\r\n}\r\n.orchids-page-singleton {\r\n    z-index: 2;\r\n}\r\n.orchids-dialog {\r\n    z-index: 3;\r\n}\r\n.orchids-dialog-singleton {\r\n    z-index: 4;\r\n}\r\n/* animation */\r\n.orchids-page.orchids-with-animation,\r\n.orchids-dialog.orchids-with-animation {\r\n    transition: all .5s;\r\n}\r\n.orchids-page.orchids-with-animation.orchids-with-fade,\r\n.orchids-dialog.orchids-with-animation.orchids-with-fade {\r\n    opacity: 0;\r\n}\r\n.orchids-page.orchids-with-animation.orchids-with-fade.orchids-active,\r\n.orchids-dialog.orchids-with-animation.orchids-with-fade.orchids-active {\r\n    opacity: 1;\r\n}\r\n.orchids-page.orchids-right-to-left,\r\n.orchids-dialog.orchids-right-to-left {\r\n    transform: translateX(100%);\r\n}\r\n.orchids-page.orchids-left-to-right,\r\n.orchids-dialog.orchids-left-to-right {\r\n    transform: translateX(-100%);\r\n}\r\n.orchids-page.orchids-right-to-left.orchids-active,\r\n.orchids-dialog.orchids-right-to-left.orchids-active,\r\n.orchids-page.orchids-left-to-right.orchids-active,\r\n.orchids-dialog.orchids-left-to-right.orchids-active {\r\n    transform: translateX(0);\r\n}\r\n.orchids-page.orchids-bottom-to-top,\r\n.orchids-dialog.orchids-bottom-to-top {\r\n    transform: translateY(100%);\r\n}\r\n.orchids-page.orchids-top-to-bottom,\r\n.orchids-dialog.orchids-top-to-bottom {\r\n    transform: translateY(-100%);\r\n}\r\n.orchids-page.orchids-bottom-to-top.orchids-active,\r\n.orchids-dialog.orchids-bottom-to-top.orchids-active,\r\n.orchids-page.orchids-top-to-bottom.orchids-active,\r\n.orchids-dialog.orchids-top-to-bottom.orchids-active {\r\n    transform: translateY(0);\r\n}\r\n\r\n/* fragment */\r\n.orchids-fragment {\r\n    position: absolute;\r\n    background-color: #ffffff;\r\n    overflow: auto;\r\n    z-index: 1;\r\n}\r\n.orchids-fragment.orchids-horizontal {\r\n    top: 0;\r\n    height: 100%;\r\n}\r\n.orchids-fragment.orchids-vertical {\r\n    left: 0;\r\n    width: 100%;\r\n}\r\n.orchids-fragments-container,\r\n.orchids-sub-fragments-container{\r\n    position: absolute;\r\n    overflow: hidden;\r\n    left: 0;\r\n    top: 0;\r\n}\r\n.orchids-fragments-container.orchids-with-animation,\r\n.orchids-sub-fragments-container.orchids-with-animation {\r\n    transition: all .5s;\r\n}\r\n.orchids-fragments-container.orchids-horizontal,\r\n.orchids-sub-fragments-container.orchids-horizontal {\r\n    height: 100%;\r\n    transform: translateX(0);\r\n}\r\n.orchids-fragments-container.orchids-vertical,\r\n.orchids-sub-fragments-container.orchids-vertical {\r\n    width: 100%;\r\n    transform: translateY(0);\r\n}\r\n\r\n/* has custom root container */\r\n.orchids-custom-container .orchids-page,\r\n.orchids-custom-container .orchids-dialog {\r\n    position: absolute;\r\n}", ""]);

// exports


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(26);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var defaultAppOption = __webpack_require__(28);
var extend = __webpack_require__(1);
var container = __webpack_require__(0);
var getRootContainer = __webpack_require__(29);
var app = __webpack_require__(3);

/**
 * initialize app
 *
 * @param option
 */
module.exports = function (option) {

    if (option && option.container) {

        var domContainer = getRootContainer(option.container);

        if (domContainer) {
            container.rootContainer = domContainer;
            document.body.classList.add('orchids-custom-container');
        }
    }

    app.option = extend(true, {}, defaultAppOption, option || {});
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/**
 * default app option
 *
 * @type {{}}
 */

module.exports = {
  /**
   * whether start page with route or not
   * if set to true, the url will be changed when a page is started
   * like: url?orchidsPage=pageName&orchidsData=serializedData
   */
  route: !1,
  /**
   * function: called when first page is initialized
   */
  onFirstPageInitialized: void 0,
  /**
   * function: called when route changed
   */
  onRouteChange: void 0
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var logger = __webpack_require__(2);

module.exports = function (container) {

    var type = typeof container === 'undefined' ? 'undefined' : _typeof(container);

    // no container
    if (!container) return null;
    // selector
    else if (type == 'string') return document.getElementById(container);
        // dom
        else if (type == 'object' && container.nodeType == 1 && typeof container.nodeName == 'string') return container;else {
                logger.error('unknown root container, it should be one of follows: id selector, dom object.');
                logger.info('choose document.body instead.');

                return null;
            }
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var util = __webpack_require__(6);
var app = __webpack_require__(3);
var vars = __webpack_require__(4);
var urlParams = __webpack_require__(7);
var onPopState = __webpack_require__(32);
var startPage = __webpack_require__(12);

/**
 * start current application
 * if current url has orchidsPage parameter, it'will start the "orchidsPage" specified page, not the page "pageName"
 *
 * @param pageName
 * @param data Data to initialize a Page, and will be use by onCreate method
 */
module.exports = function (pageName, data) {

    // make appInitialized mark is true
    vars.appInitialized = !0;

    // this must do in the first
    var existedPagesCount = util.getPagesCount();

    // if user call back page by phone button, keep it
    // here we do not consider other action, like forward, refresh, for this is main for mobile using
    window.onpopstate = onPopState;

    util.resetPagesCount(); // every time start application, will change reset pages count

    // tell the first page and option by the parameter
    if (urlParams.orchidsPage && !existedPagesCount) {
        var orchidsPage = decodeURIComponent(urlParams.orchidsPage);
        var orchidsData = decodeURIComponent(urlParams.orchidsData);
        try {
            orchidsData = JSON.parse(orchidsData);
        } catch (e) {}

        startPage(orchidsPage, orchidsData);
    } else {
        app.option.route && existedPagesCount > 1 && window.history.go(1 - existedPagesCount);
        startPage(pageName, data);
    }

    // first page initialize complete
    app.option.onFirstPageInitialized && app.option.onFirstPageInitialized();
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var params = __webpack_require__(7);

var paramsKeys = Object.keys(params);
var query = '';

var exclude = {
    orchidsPage: !0,
    orchidsData: !0
};

paramsKeys.forEach(function (key) {
    !exclude[key] && (query += '&' + key + '=' + params[key]);
});

var originUrl = location.origin + location.pathname + (query ? '?' + query.slice(1) : '');

module.exports = originUrl;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var container = __webpack_require__(0);
var backPage = __webpack_require__(8);
var getCurrentPageModel = __webpack_require__(5);
var deleteCurrentDialogModel = __webpack_require__(11);

/**
 * window.onpopstate
 *
 * @param e
 */
module.exports = function (e) {

    // if user back page by press back button of phone, close all dialogs first
    var dialogModelsKeys = Object.keys(container.dialogModels);

    if (dialogModelsKeys.length) {
        var dialogModel;
        var prevDialogModel;
        var currentPageModel = getCurrentPageModel();

        for (var il = dialogModelsKeys.length, i = il - 1; i >= 0; i--) {
            // first dialog
            if (i <= 0) {
                dialogModel = container.dialogModels[dialogModelsKeys[i]];
                if (dialogModel.forResult && currentPageModel && currentPageModel.page.onResult) {
                    currentPageModel.page.onResult(dialogModel.dialog.__orchids__result || null);
                }
            } else {
                // at least two dialogs
                prevDialogModel = container.dialogModels[dialogModelsKeys[i - 1]];
                dialogModel = container.dialogModels[dialogModelsKeys[i]];
                if (dialogModel.forResult && prevDialogModel.dialog.onResult) {
                    prevDialogModel.dialog.onResult(dialogModel.dialog.__orchids__result || null);
                }
            }
            // destroy
            dialogModel.dialog.__orchids__destroy();
            deleteCurrentDialogModel();
        }
    }

    backPage();
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var getPageModelByIndex = __webpack_require__(10);

module.exports = function () {
    return getPageModelByIndex(-2);
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var deletePageModelByIndex = __webpack_require__(35);

/**
 * delete current page model
 */
module.exports = function () {
  deletePageModelByIndex();
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var container = __webpack_require__(0);

/**
 * delete page model by index
 *
 * @param index
 */
module.exports = function (index) {
    typeof index == 'undefined' && (index = -1);

    var keys = Object.keys(container.pageModels);
    var keysLength = keys.length;

    index < 0 && (index += keysLength);

    delete container.pageModels[keys[index]];
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var container = __webpack_require__(0);

/**
 * delete dialog model by index
 *
 * @param index
 */
module.exports = function (index) {
    typeof index == 'undefined' && (index = -1);

    var keys = Object.keys(container.dialogModels);
    var keysLength = keys.length;

    index < 0 && (index += keysLength);

    delete container.dialogModels[keys[index]];
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/**
 * make a page model
 *
 * @param name
 * @param forResult
 * @param pageInstance
 * @param singleton
 * @returns {{name: *, forResult: boolean, page: *, singleton: boolean}}
 */

module.exports = function (name, forResult, pageInstance, singleton) {

    return {
        name: name,
        forResult: !!forResult,
        page: pageInstance,
        singleton: !!singleton
    };
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/**
 * make a singleton page model
 *
 * @param id
 * @param pageInstance
 * @returns {{id: *, page: *}}
 */

module.exports = function (id, pageInstance) {

    return {
        id: id,
        page: pageInstance
    };
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var container = __webpack_require__(0);
var app = __webpack_require__(3);
var backPage = __webpack_require__(8);
var backDialog = __webpack_require__(40);

/**
 * back to prev page or prev dialog
 */
module.exports = function () {
    // has dialog active
    if (Object.keys(container.dialogModels).length >= 1) {
        backDialog();
        return;
    }

    if (app.option.route) Object.keys(container.pageModels).length > 1 && history.back();else backPage();
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var container = __webpack_require__(0);
var getCurrentPageModel = __webpack_require__(5);
var getCurrentDialogModel = __webpack_require__(14);
var getPrevDialogModel = __webpack_require__(41);
var deleteCurrentDialogModel = __webpack_require__(11);

/**
 * back to prev dialog
 */
module.exports = function () {

    // if current dialogs is empty, back action is invalid.
    if (!Object.keys(container.dialogModels).length) return;

    var currentModel = getCurrentDialogModel();
    var prevModel = getPrevDialogModel();
    var currentPageModel = getCurrentPageModel();
    var hasPrevDialog = !1;

    // for result
    if (currentModel.forResult) {
        // has prev dialog model
        if (prevModel) {
            prevModel.dialog.onResult && prevModel.dialog.onResult(currentModel.dialog.__orchids__result || {});
            hasPrevDialog = !0;
        } else if (currentPageModel) {
            currentPageModel.page.onResult && currentPageModel.page.onResult(currentModel.dialog.__orchids__result || {});
        }
    }

    // destroy or hide
    currentModel.singleton ? currentModel.dialog.__orchids__hide() : currentModel.dialog.__orchids__destroy();
    hasPrevDialog ? prevModel.dialog.onShow() : currentPageModel && currentPageModel.page.onShow();

    deleteCurrentDialogModel();
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var getDialogModelByIndex = __webpack_require__(16);

module.exports = function () {
    return getDialogModelByIndex(-2);
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var _arguments = arguments;
var container = __webpack_require__(0);
var logger = __webpack_require__(2);
var extend = __webpack_require__(1);
var makePageDefinition = __webpack_require__(43);
var makeNewPage = __webpack_require__(44);
var defaultPageOption = __webpack_require__(52);
var app = __webpack_require__(3);

/**
 * register a Page Object
 *
 * @param name Name of page
 * @param attributes Attributes to be extended to new Page Object
 * @param option Option to initialize a Page
 * @param parentName Parent Page Object
 */
module.exports = function (name, attributes, option, parentName) {
    // all parent extend attributes
    var allParentAttributes = [];
    // all parent options
    var allParentOption = [];

    /**
     * get all parent attributes
     *
     * @param parentName
     */
    var getParentAttributes = function getParentAttributes(parentName) {
        var parent = container.pageDefinitions[parentName],
            parentOption = parent.option,
            parentAttributes = container.pageAttributes[parentName];

        parentAttributes && allParentAttributes.unshift(parentAttributes);
        parentOption && allParentOption.unshift(parentOption);
        parent.parent && getParentAttributes(parent.parent);
    };

    if (!name || typeof name != 'string') {
        logger.throwError('"' + JSON.stringify(name) + '" is not a valid page name.');
        return;
    }

    if (container.pageAttributes[name]) {
        logger.throwError('page "' + name + '" has been registered.');
        return;
    }

    if (_arguments.length == 1) {
        logger.error('Register page "' + name + '" without extend attributes.');
        return;
    }
    // (name, attr)
    else if (_arguments.length == 2) {
            option = {};
            parentName = void 0;
        }
        // (name, attr, parent)
        else if (_arguments.length == 3 && typeof _arguments[2] == 'string') {
                parentName = option;
                option = {};
            }

    // put attributes to pageAttributes container
    container.pageAttributes[name] = attributes;

    // new Page Object
    var newPage = makeNewPage();
    var pageOption = extend(!0, {}, defaultPageOption);

    // has parent
    if (parentName) {
        getParentAttributes(parentName);

        allParentAttributes.forEach(function (item) {
            extend(!0, newPage.prototype, item);
        });

        allParentOption.forEach(function (item) {
            extend(!0, pageOption, item);
        });
    }

    extend(!0, newPage.prototype, attributes);
    extend(!0, pageOption, option);

    pageOption.name = name;
    pageOption.route = app.option.route;
    container.pageDefinitions[name] = makePageDefinition(pageOption, newPage, parentName, pageOption.singleton);
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/**
 * make a page definition
 *
 * @param option
 * @param pageObj
 * @param parent
 * @param singleton
 * @returns {{option: *, page: *, parent: *, singleton: boolean}}
 */

module.exports = function (option, pageObj, parent, singleton) {

    return {
        option: option,
        page: pageObj,
        parent: parent,
        singleton: !!singleton
    };
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var extend = __webpack_require__(1);

var init = __webpack_require__(45);
var renderFragments = __webpack_require__(46);
var _showFragment = __webpack_require__(47);
var routeForward = __webpack_require__(48);
var destroy = __webpack_require__(49);
var hide = __webpack_require__(50);
var show = __webpack_require__(51);

module.exports = function () {
  /**
   * constructor
   *
   * @param option Option to initialize page
   * @param data Parameter to be used by onCreate method
   * @constructor
   */
  function Page(option, data) {
    var self = this;
    self.option = extend(true, {}, option);
    self.__orchids__data = data || null;
    /**
     * current fragment instances
     * @type {{}}
     * @private
     */
    self.__orchids__fragmentsInstances = {};
    /**
     * current active fragment id
     * @type {number}
     * @private
     */
    self.__orchids__currentFragmentId = 1;
    self.__orchids__init();
  }

  Page.prototype = {
    constructor: Page,
    /**
     * init page
     * @private
     */
    __orchids__init: function __orchids__init() {
      var self = this;

      init(self);
    },
    /**
     * render fragments
     * @private
     */
    __orchids__renderFragments: function __orchids__renderFragments() {
      var self = this;

      renderFragments(self);
    },
    /**
     * show fragment specified by id
     * @param id
     */
    showFragment: function showFragment(id) {
      var self = this;

      _showFragment(self, id);
    },
    /**
     * get fragment specified by id, default return the first fragment
     * @param id
     */
    getFragment: function getFragment(id) {
      var self = this;
      id = id || 1;

      return self.__orchids__fragmentsInstances[id] || null;
    },
    /**
     * make a forward route
     * @private
     */
    __orchids__routeForward: function __orchids__routeForward() {
      var self = this;

      routeForward(self);
    },
    /**
     * destroy current page
     * @private
     */
    __orchids__destroy: function __orchids__destroy() {
      var self = this;

      destroy(self);
    },
    /**
     * hide current page
     * @param isSingleton
     * @private
     */
    __orchids__hide: function __orchids__hide(isSingleton) {
      var self = this;

      hide(self, isSingleton);
    },
    /**
     * show current page
     * @param isSingleton
     * @param forResult
     * @param prepareResultData
     * @private
     */
    __orchids__show: function __orchids__show(isSingleton, forResult, prepareResultData) {
      var self = this;

      show(self, isSingleton, forResult, prepareResultData);
    },
    /**
     * render a page after a page is initialized
     * @param data
     */
    onCreate: function onCreate(data) {},
    /**
     * pre handle before destroy a page
     */
    onDestroy: function onDestroy() {},
    /**
     * called when back page from other page or dialog
     */
    onShow: function onShow() {},
    /**
     * called when start another page or dialog
     */
    onHide: function onHide() {},
    /**
     * set the result if this page is called by startPageForResult method,
     * and the returned value will be used as the param of the onResult method of last page
     *
     * @param {*} data
     */
    setResult: function setResult(data) {
      var self = this;
      self.__orchids__result = data;
    },
    /**
     * called when the child page destroyed and return the value by setResult method.
     * @param {*} data
     */
    onResult: function onResult(data) {},
    /**
     * receive data from the previous page, startPageForResult method's second parameter
     * @param data
     */
    prepareForResult: function prepareForResult(data) {}
  };

  return Page;
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var container = __webpack_require__(0);
var directionClasses = __webpack_require__(17);

/**
 * page's init action
 *
 * @param self
 */
module.exports = function (self) {
    // make id
    self.id = self.option.pageId;
    // whether current page is the first page to render or not, for confirming to start current page with or without animation.
    self.__orchids__isFirstPage = self.id === 1;
    // make root el
    self.el = document.createElement('div');
    // data-orchids-page-id
    self.el.dataset.orchidsPageId = self.id;
    self.el.dataset.orchidsPageName = self.option.name;
    self.el.classList.add('orchids', 'orchids-page');
    // animation
    self.option.animate && self.el.classList.add('orchids-with-animation');
    // direction
    self.el.classList.add(directionClasses[self.option.animateDirection || 'r2l']);
    // fade
    self.option.fadeInOut && self.el.classList.add('orchids-with-fade');
    // singleton
    self.option.singleton && self.el.classList.add('orchids-page-singleton');
    // active
    self.__orchids__isFirstPage && self.el.classList.add('orchids-active');
    // background color
    self.option.backgroundColor && (self.el.style.backgroundColor = self.option.backgroundColor);

    // extra style
    if (self.option.style) {
        var styleKeys = Object.keys(self.option.style);
        if (styleKeys.length) styleKeys.forEach(function (key) {
            self.el.style[key] = self.option.style[key];
        });
    }

    // add to container
    container.rootContainer.appendChild(self.el);

    // user custom initialization
    self.onCreate && self.onCreate(self.__orchids__data);

    // route, if it is the first page, no route change
    self.option.route && !self.__orchids__isFirstPage && self.__orchids__routeForward();

    // render fragments
    self.option.fragments && self.option.fragments.length && self.__orchids__renderFragments();

    /**
     * show page, delay 100 ms to guarantee the animation  is ok, and 0 is not ok
     */
    !self.__orchids__isFirstPage && setTimeout(function () {
        self.el.classList.add('orchids-active');
    }, 100);
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var logger = __webpack_require__(2);
var extend = __webpack_require__(1);
var container = __webpack_require__(0);

/**
 * page's renderFragments action
 *
 * @param self
 */
module.exports = function (self) {

    var fragmentsContainer = self.el.querySelector('[data-orchids-fragments]');
    if (!fragmentsContainer) {
        logger.error('Render fragments failed: no fragments container which should has "data-orchids-fragments" attribute.');
        return;
    }

    // guarantee the root element has `overflow: hidden` element
    fragmentsContainer.style.overflow = 'hidden';
    // fragment's width and height
    self.__orchids__fragmentWidth = fragmentsContainer.offsetWidth;
    self.__orchids__fragmentHeight = fragmentsContainer.offsetHeight;

    // create fragments container element
    self.__orchids__fragmentsContainer = document.createElement('div');
    self.__orchids__fragmentsContainer.classList.add('orchids-fragments-container');
    self.option.fragmentAnimate && self.__orchids__fragmentsContainer.classList.add('orchids-with-animation');

    if (self.option.fragmentAnimateDirection == 'vertical') {
        self.__orchids__fragmentsContainer.classList.add('orchids-vertical');
        self.__orchids__fragmentsContainer.style.height = self.option.fragments.length * self.__orchids__fragmentHeight + 'px';
    } else {
        self.__orchids__fragmentsContainer.classList.add('orchids-horizontal');
        self.__orchids__fragmentsContainer.style.width = self.option.fragments.length * self.__orchids__fragmentWidth + 'px';
    }

    // clear fragments root element inner html
    fragmentsContainer.innerHTML = '';
    fragmentsContainer.appendChild(self.__orchids__fragmentsContainer);

    self.option.fragments.forEach(function (fragmentName, index) {
        var fragment = container.fragmentDefinitions[fragmentName];
        if (!fragment) {
            logger.error('Render fragment "' + fragmentName + '" failed: not registered.');
            return;
        }
        var fragmentOption = extend(!0, {}, fragment.option);
        fragmentOption.fragmentId = index + 1;
        fragmentOption.fragmentWidth = self.__orchids__fragmentWidth;
        fragmentOption.fragmentHeight = self.__orchids__fragmentHeight;
        fragmentOption.fragmentDirection = self.option.fragmentAnimateDirection;
        var instance = new fragment.fragment(fragmentOption);

        self.__orchids__fragmentsInstances[fragmentOption.fragmentId] = instance;
        // add fragment element to current root fragments container
        self.__orchids__fragmentsContainer.appendChild(instance.el);
    });
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var logger = __webpack_require__(2);
var extend = __webpack_require__(1);
var container = __webpack_require__(0);

/**
 * page's showFragment action
 *
 * @param self
 * @param id
 */
module.exports = function (self, id) {
    if (!id) {
        logger.error('method showFragment needs a specified fragment id');
        return;
    }
    if (id === self.__orchids__currentFragmentId) return;

    var instance = self.__orchids__fragmentsInstances[id];
    if (!instance) {
        logger.error('fragment not found with id: ' + id + '.');
        return;
    }

    // create fragment if not created, or call onShow method
    if (!instance.__orchids__initialized) {
        instance.onCreate && instance.onCreate();
        // create sub fragments
        instance.option.subFragments && instance.option.subFragments.length && instance.__orchids__renderSubFragments();
        instance.__orchids__initialized = !0;
    } else {
        instance.onShow && instance.onShow();
    }

    // call previous fragment onHide method
    var previousInstance = self.__orchids__fragmentsInstances[self.__orchids__currentFragmentId];
    previousInstance.onHide && previousInstance.onHide();

    // update current active fragment id
    self.__orchids__currentFragmentId = id;

    if (self.option.fragmentAnimateDirection == 'vertical') self.__orchids__fragmentsContainer.style.transform = 'translateY(' + (0 - self.__orchids__fragmentHeight * (id - 1)) + 'px)';else self.__orchids__fragmentsContainer.style.transform = 'translateX(' + (0 - self.__orchids__fragmentWidth * (id - 1)) + 'px)';
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var urlParams = __webpack_require__(7);

module.exports = function (self) {

    urlParams.orchidsPage = encodeURIComponent(self.option.name);
    urlParams.orchidsData = encodeURIComponent(JSON.stringify(self.__orchids__data));

    var searchString = '';
    Object.keys(urlParams).forEach(function (key) {
        searchString += '&' + key + '=' + (urlParams[key] || '');
    });

    history.pushState({ pageId: self.id }, null, '?' + searchString.slice(1));
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



module.exports = function (self) {
    // call all fragments's __orchids__destroy
    Object.keys(self.__orchids__fragmentsInstances).forEach(function (id) {
        self.__orchids__fragmentsInstances[id].__orchids__destroy();
    });
    self.onDestroy();

    self.el.classList.remove('orchids-active');
    if (self.option.animate) {
        // has animation
        setTimeout(function () {
            self.el.remove();
        }, 500);
    } else
        // no animation
        self.el.remove();
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



module.exports = function (self, isSingleton) {
    // call active fragment's __orchids__hide
    self.__orchids__fragmentsInstances[self.__orchids__currentFragmentId] && self.__orchids__fragmentsInstances[self.__orchids__currentFragmentId].__orchids__hide();

    self.onHide();

    isSingleton && self.el.classList.remove('orchids-active');
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



module.exports = function (self, isSingleton, forResult, prepareResultData) {
    if (isSingleton) {
        self.el.classList.add('orchids-active');
        // route, if it is the first page, no route change
        self.option.route && !self.__orchids__isFirstPage && self.__orchids__routeForward();
    }

    self.onShow();
    // call active fragment's __orchids__show
    self.__orchids__fragmentsInstances[self.__orchids__currentFragmentId] && self.__orchids__fragmentsInstances[self.__orchids__currentFragmentId].__orchids__show();

    forResult && self.prepareForResult(prepareResultData);
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/**
 * default page option
 *
 * @type {{}}
 */

module.exports = {
  /**
   * background of root element
   */
  backgroundColor: '#ffffff',
  /**
   * style of root element
   */
  style: void 0,
  /**
   * whether to use animation when switch between pages
   * default: true
   */
  animate: !0,
  /**
   * whether to fade page when switch between pages
   * default: false
   */
  fadeInOut: !1,
  /**
   * animation direction of switching page
   * l2r/r2l/t2b/b2t(left-right, top-bottom), default: r2l
   */
  animateDirection: 'r2l',
  /**
   * fragments in page
   *
   * note that, current page element should have a child node
   * which has 'data-orchids-fragments' attribute,
   * and it must has position-relative or position-absolute width specified width and height
   * or fragments will not be rendered correctly
   * fragments: [
   *     'name1',
   *     'name2'
   * ]
   */
  fragments: void 0,
  /**
   * whether to use animation when switch between fragments
   * default: true
   */
  fragmentAnimate: !0,
  /**
   * animation direction of switching fragment
   * horizontal/vertical, default: horizontal
   */
  fragmentAnimateDirection: 'horizontal',
  /**
   * whether current page is singleton
   */
  singleton: !1
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var _arguments = arguments;
var container = __webpack_require__(0);
var logger = __webpack_require__(2);
var extend = __webpack_require__(1);
var makeDialogDefinition = __webpack_require__(54);
var makeNewDialog = __webpack_require__(55);
var defaultDialogOption = __webpack_require__(57);
var app = __webpack_require__(3);

/**
 * register a Dialog Object
 *
 * @param name Name of dialog
 * @param attributes Attributes to be extended to new Dialog Object
 * @param option Option to initialize a Dialog
 * @param parentName Parent Dialog Object
 */
module.exports = function (name, attributes, option, parentName) {
    // all parent extend attributes
    var allParentAttributes = [];
    // all parent options
    var allParentOption = [];

    /**
     * get all parent attributes
     *
     * @param parentName
     */
    var getParentAttributes = function getParentAttributes(parentName) {
        var parent = container.dialogDefinitions[parentName],
            parentOption = parent.option,
            parentAttributes = container.dialogAttributes[parentName];

        parentAttributes && allParentAttributes.unshift(parentAttributes);
        parentOption && allParentOption.unshift(parentOption);
        parent.parent && getParentAttributes(parent.parent);
    };

    if (!name || typeof name != 'string') {
        logger.throwError('"' + JSON.stringify(name) + '" is not a valid dialog name.');
        return;
    }

    if (container.dialogAttributes[name]) {
        logger.throwError('dialog "' + name + '" has been registered.');
        return;
    }

    if (_arguments.length == 1) {
        logger.error('Register dialog "' + name + '" without extend attributes.');
        return;
    }
    // (name, attr)
    else if (_arguments.length == 2) {
            option = {};
            parentName = void 0;
        }
        // (name, attr, parent)
        else if (_arguments.length == 3 && typeof _arguments[2] == 'string') {
                parentName = option;
                option = {};
            }

    // put attributes to dialogAttributes container
    container.dialogAttributes[name] = attributes;

    // new Dialog Object
    var newDialog = makeNewDialog();
    var dialogOption = extend(!0, {}, defaultDialogOption);

    // has parent
    if (parentName) {
        getParentAttributes(parentName);

        allParentAttributes.forEach(function (item) {
            extend(!0, newDialog.prototype, item);
        });

        allParentOption.forEach(function (item) {
            extend(!0, dialogOption, item);
        });
    }

    extend(!0, newDialog.prototype, attributes);
    extend(!0, dialogOption, option);

    dialogOption.name = name;
    container.dialogDefinitions[name] = makeDialogDefinition(dialogOption, newDialog, parentName, dialogOption.singleton);
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/**
 * make a dialog definition
 *
 * @param option
 * @param dialogObj
 * @param parent
 * @param singleton
 * @returns {{option: *, dialog: *, parent: *, singleton: boolean}}
 */

module.exports = function (option, dialogObj, parent, singleton) {

    return {
        option: option,
        dialog: dialogObj,
        parent: parent,
        singleton: !!singleton
    };
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Similar to Page Object, but no route, always cover page(that is to say, if you want to go to another page,
 *     you need first to close current dialog, or you will not see the effect), 
 */



var extend = __webpack_require__(1);
var container = __webpack_require__(0);

var init = __webpack_require__(56);

var newDialog = function newDialog() {
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
    __orchids__init: function __orchids__init() {
      var self = this;

      init(self);
    },
    /**
     * destroy current dialog
     * @private
     */
    __orchids__destroy: function __orchids__destroy() {
      var self = this;
      self.onDestroy();

      self.el.classList.remove('orchids-active');

      if (self.option.animate)
        // has animation
        setTimeout(function () {
          self.el.remove();
        }, 500);else
        // no animation
        self.el.remove();
    },
    /**
     * show current dialog
     * @param forResult
     * @param prepareResultData
     * @private
     */
    __orchids__show: function __orchids__show(forResult, prepareResultData) {
      var self = this;

      /**
       * show dialog
       */
      self.el.classList.add('orchids-active');

      self.onShow();

      forResult && self.prepareForResult(prepareResultData);
    },
    /**
     * hide current dialog
     * @private
     */
    __orchids__hide: function __orchids__hide() {
      var self = this;

      self.onHide();
      /**
       * hide dialog
       */
      self.el.classList.remove('orchids-active');
    },
    /**
     * render a dialog after a dialog is initialized
     * @param data
     */
    onCreate: function onCreate(data) {},
    /**
     * pre handle before destroy a dialog
     */
    onDestroy: function onDestroy() {},
    /**
     * called when back dialog from other dialog
     */
    onShow: function onShow() {},
    /**
     * called when start another dialog
     */
    onHide: function onHide() {},
    /**
     * set the result if this dialog is called by startDialogForResult method,
     * and the returned value will be used as the param of the onResult method of last dialog or page
     *
     * @param {*} data
     */
    setResult: function setResult(data) {
      var self = this;
      self.__orchids__result = data;
    },
    /**
     * called when the child dialog destroyed and return the value by setResult method.
     * @param {*} data
     */
    onResult: function onResult(data) {},
    /**
     * receive data from the previous dialog, startDialogForResult method's second parameter
     * @param data
     */
    prepareForResult: function prepareForResult(data) {}
  };

  return Dialog;
};

module.exports = newDialog;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var container = __webpack_require__(0);
var directionClasses = __webpack_require__(17);

/**
 * dialog's init action
 *
 * @param self
 */
module.exports = function (self) {
    // make id
    self.id = self.option.dialogId;
    // make root el
    self.el = document.createElement('div');
    // data-orchids-dialog-id
    self.el.dataset.orchidsDialogId = self.id;
    self.el.dataset.orchidsDialogName = self.option.name;
    self.el.classList.add('orchids', 'orchids-dialog');
    // animation
    self.option.animate && self.el.classList.add('orchids-with-animation');
    // direction
    self.el.classList.add(directionClasses[self.option.animateDirection || 'b2t']);
    // fade
    self.option.fadeInOut && self.el.classList.add('orchids-with-fade');
    // singleton
    self.option.singleton && self.el.classList.add('orchids-dialog-singleton');
    // background color
    self.option.backgroundColor && (self.el.style.backgroundColor = self.option.backgroundColor);

    // extra style
    if (self.option.style) {
        var styleKeys = Object.keys(self.option.style);
        if (styleKeys.length) styleKeys.forEach(function (key) {
            self.el.style[key] = self.option.style[key];
        });
    }

    // add to container
    container.rootContainer.appendChild(self.el);

    // user custom initialization
    self.onCreate && self.onCreate(self.__orchids__data);

    /**
     * show dialog, delay 100 ms to guarantee the animation  is ok, and 0 is not ok
     */
    setTimeout(function () {
        self.el.classList.add('orchids-active');
    }, 100);
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/**
 * default dialog option
 * 
 * @type {{}}
 */

module.exports = {
  /**
   * background of root element
   */
  backgroundColor: '#ffffff',
  /**
   * style of root element
   */
  style: void 0,
  /**
   * whether to use animation when switch between dialogs
   * default: true
   */
  animate: !0,
  /**
   * whether to fade dialog when switch between dialogs
   * default: false
   */
  fadeInOut: !1,
  /**
   * animation direction of switching dialog
   * l2r/r2l/t2b/b2t(left-right, top-bottom), default: b2t
   */
  animateDirection: 'b2t',
  /**
   * whether current dialog is singleton or not
   */
  singleton: !1
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var _arguments = arguments;
var container = __webpack_require__(0);
var logger = __webpack_require__(2);
var extend = __webpack_require__(1);
var makeFragmentDefinition = __webpack_require__(59);
var makeNewFragment = __webpack_require__(60);
var defaultFragmentOption = __webpack_require__(64);

/**
 * register a Fragment Object
 *
 * @param name Name of fragment
 * @param attributes Attributes to be extended to new Fragment Object
 * @param option Option to initialize a Fragment
 * @param parentName Parent Fragment Object
 */
module.exports = function (name, attributes, option, parentName) {
    // all parent extend attributes
    var allParentAttributes = [];
    // all parent options
    var allParentOption = [];

    /**
     * get all parent attributes
     *
     * @param parentName
     */
    var getParentAttributes = function getParentAttributes(parentName) {
        var parent = container.fragmentDefinitions[parentName],
            parentOption = parent.option,
            parentAttributes = container.fragmentAttributes[parentName];

        parentAttributes && allParentAttributes.unshift(parentAttributes);
        parentOption && allParentOption.unshift(parentOption);
        parent.parent && getParentAttributes(parent.parent);
    };

    if (!name || typeof name != 'string') {
        logger.throwError('"' + JSON.stringify(name) + '" is not a valid fragment name.');
        return;
    }

    if (container.fragmentAttributes[name]) {
        logger.throwError('fragment "' + name + '" has been registered.');
        return;
    }

    if (_arguments.length == 1) {
        logger.error('Register fragment "' + name + '" without extend attributes.');
        return;
    }
    // (name, attr)
    else if (_arguments.length == 2) {
            option = {};
            parentName = void 0;
        }
        // (name, attr, parent)
        else if (_arguments.length == 3 && typeof _arguments[2] == 'string') {
                parentName = option;
                option = {};
            }

    // put attributes to fragmentAttributes container
    container.fragmentAttributes[name] = attributes;

    // new Fragment Object
    var newFragment = makeNewFragment();
    var fragmentOption = extend(!0, {}, defaultFragmentOption);

    // has parent
    if (parentName) {
        getParentAttributes(parentName);

        allParentAttributes.forEach(function (item) {
            extend(!0, newFragment.prototype, item);
        });

        allParentOption.forEach(function (item) {
            extend(!0, fragmentOption, item);
        });
    }

    extend(!0, newFragment.prototype, attributes);
    extend(!0, fragmentOption, option);

    fragmentOption.name = name;
    container.fragmentDefinitions[name] = makeFragmentDefinition(fragmentOption, newFragment, parentName);
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/**
 * make a fragment definition
 *
 * @param option
 * @param fragmentObj
 * @param parent
 * @returns {{option: *, fragment: *, parent: *}}
 */

module.exports = function (option, fragmentObj, parent) {

    return {
        option: option,
        fragment: fragmentObj,
        parent: parent
    };
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var extend = __webpack_require__(1);

var init = __webpack_require__(61);
var renderSubFragments = __webpack_require__(62);
var _showSubFragment = __webpack_require__(63);

var newFragment = function newFragment() {
  /**
   *
   * @param option Option to initialize fragment
   * @constructor
   */
  function Fragment(option) {
    var self = this;
    self.option = extend(true, {}, option);
    // whether current fragment is initialized
    self.__orchids__initialized = !1;
    /**
     * current sub fragment instances
     * @type {{}}
     * @private
     */
    self.__orchids__subFragmentsInstances = {};
    /**
     * current active sub fragment id
     * @type {number}
     * @private
     */
    self.__orchids__currentSubFragmentId = 1;
    self.__orchids__init();
  }

  Fragment.prototype = {
    constructor: Fragment,
    /**
     * init fragment
     * @private
     */
    __orchids__init: function __orchids__init() {
      var self = this;

      init(self);
    },
    /**
     * render sub fragments
     * @private
     */
    __orchids__renderSubFragments: function __orchids__renderSubFragments() {
      var self = this;

      renderSubFragments(self);
    },
    /**
     * show sub fragment specified by id
     * @param id
     */
    showSubFragment: function showSubFragment(id) {
      var self = this;

      _showSubFragment(self, id);
    },
    /**
     * called when current page is destroy
     * @private
     */
    __orchids__destroy: function __orchids__destroy() {
      var self = this;

      // call all sub fragments's __orchids__destroy
      Object.keys(self.__orchids__subFragmentsInstances).forEach(function (id) {
        self.__orchids__subFragmentsInstances[id].__orchids__destroy();
      });
      self.onDestroy();
    },
    /**
     * hide current fragment
     * @private
     */
    __orchids__hide: function __orchids__hide() {
      var self = this;
      // call active sub fragment's __orchids__hide
      self.__orchids__subFragmentsInstances[self.__orchids__currentSubFragmentId] && self.__orchids__subFragmentsInstances[self.__orchids__currentSubFragmentId].__orchids__hide();

      self.onHide();
    },
    /**
     * show current sub fragment
     * @private
     */
    __orchids__show: function __orchids__show() {
      var self = this;

      self.onShow();
      // call active sub fragment's __orchids__show
      self.__orchids__subFragmentsInstances[self.__orchids__currentSubFragmentId] && self.__orchids__subFragmentsInstances[self.__orchids__currentSubFragmentId].__orchids__show();
    },
    /**
     * get sub fragment specified by id, default return the first fragment
     * @param id
     */
    getSubFragment: function getSubFragment(id) {
      var self = this;
      id = id || 1;

      return self.__orchids__subFragmentsInstances[id] || null;
    },
    /**
     * render a fragment after a fragment is initialized
     */
    onCreate: function onCreate() {},
    /**
     * pre handle before destroy a fragment
     */
    onDestroy: function onDestroy() {},
    /**
     * called when showed, not include first show while created
     */
    onShow: function onShow() {},
    /**
     * called when show another fragment
     */
    onHide: function onHide() {}
  };

  return Fragment;
};

module.exports = newFragment;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



module.exports = function (self) {
    // make id
    self.id = self.option.fragmentId;
    // whether current fragment is the first fragment to render or not
    self.__orchids__isFirstFragment = self.id == 1;
    // make root el
    self.el = document.createElement('div');
    // data-orchids-fragment-id
    self.el.dataset.orchidsFragmentId = self.id;
    self.el.dataset.orchidsFragmentName = self.option.name;

    // background color
    self.option.backgroundColor && (self.el.style.backgroundColor = self.option.backgroundColor);

    // extra style
    if (self.option.style) {
        var styleKeys = Object.keys(self.option.style);
        if (styleKeys.length) styleKeys.forEach(function (key) {
            self.el.style[key] = self.option.style[key];
        });
    }

    self.el.classList.add('orchids', 'orchids-fragment');

    // left, top, width, height
    if (self.option.fragmentDirection == 'vertical') {
        self.el.classList.add('orchids-vertical');
        self.el.style.top = self.option.fragmentHeight * (self.id - 1) + 'px';
        self.el.style.height = self.option.fragmentHeight + 'px';
    } else {
        self.el.classList.add('orchids-horizontal');
        self.el.style.left = self.option.fragmentWidth * (self.id - 1) + 'px';
        self.el.style.width = self.option.fragmentWidth + 'px';
    }

    // user custom initialization
    if (self.__orchids__isFirstFragment) {
        self.__orchids__initialized = !0;
        self.onCreate && self.onCreate();
        // render fragments
        self.option.subFragments && self.option.subFragments.length && self.__orchids__renderSubFragments();
    }
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var logger = __webpack_require__(2);
var extend = __webpack_require__(1);
var container = __webpack_require__(0);

module.exports = function (self) {

    var fragmentsContainer = self.el.querySelector('[data-orchids-sub-fragments]');
    if (!fragmentsContainer) {
        logger.error('Render fragments failed: no fragments container which should has "data-orchids-sub-fragments" attribute.');
        return;
    }

    // guarantee the root fragments elements has `overflow: hidden` element
    fragmentsContainer.style.overflow = 'hidden';
    // fragment's width and height
    self.__orchids__subFragmentWidth = fragmentsContainer.offsetWidth;
    self.__orchids__subFragmentHeight = fragmentsContainer.offsetHeight;

    // create fragments container element
    self.__orchids__subFragmentsContainer = document.createElement('div');
    self.__orchids__subFragmentsContainer.classList.add('orchids-sub-fragments-container');
    self.option.subFragmentAnimate && self.__orchids__subFragmentsContainer.classList.add('orchids-with-animation');

    if (self.option.subFragmentAnimateDirection == 'vertical') {
        self.__orchids__subFragmentsContainer.classList.add('orchids-vertical');
        self.__orchids__subFragmentsContainer.style.height = self.option.subFragments.length * self.__orchids__subFragmentHeight + 'px';
    } else {
        self.__orchids__subFragmentsContainer.classList.add('orchids-horizontal');
        self.__orchids__subFragmentsContainer.style.width = self.option.subFragments.length * self.__orchids__subFragmentWidth + 'px';
    }

    // clear fragments root element inner html
    fragmentsContainer.innerHTML = '';
    fragmentsContainer.appendChild(self.__orchids__subFragmentsContainer);

    self.option.subFragments.forEach(function (fragmentName, index) {
        var fragment = container.fragmentDefinitions[fragmentName];
        if (!fragment) {
            logger.error('Render fragment "' + fragmentName + '" failed: not registered.');
            return;
        }
        var fragmentOption = extend(!0, {}, fragment.option);
        fragmentOption.fragmentId = index + 1;
        fragmentOption.fragmentWidth = self.__orchids__subFragmentWidth;
        fragmentOption.fragmentHeight = self.__orchids__subFragmentHeight;
        fragmentOption.fragmentDirection = self.option.subFragmentAnimateDirection;
        var instance = new fragment.fragment(fragmentOption);

        self.__orchids__subFragmentsInstances[fragmentOption.fragmentId] = instance;
        // add sub fragment element to current root sub fragments container
        self.__orchids__subFragmentsContainer.appendChild(instance.el);
    });
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var logger = __webpack_require__(2);
var extend = __webpack_require__(1);
var container = __webpack_require__(0);

module.exports = function (self, id) {
    if (!id) {
        logger.error('method showFragment needs a specified fragment id');
        return;
    }
    if (id == self.__orchids__currentSubFragmentId) {
        return;
    }
    var instance = self.__orchids__subFragmentsInstances[id];
    if (!instance) {
        logger.error('fragment not found with id: ' + id + '.');
        return;
    }

    // create fragment if not created, or call onShow method
    if (!instance.__orchids__initialized) {
        instance.onCreate && instance.onCreate();
        // create sub fragments if not created
        instance.option.subFragments && instance.option.subFragments.length && instance.__orchids__renderSubFragments();
        instance.__orchids__initialized = !0;
    } else instance.onShow && instance.onShow();

    // call previous fragment onHide method
    var previousInstance = self.__orchids__subFragmentsInstances[self.__orchids__currentSubFragmentId];
    previousInstance.onHide && previousInstance.onHide();
    // update current active fragment id
    self.__orchids__currentSubFragmentId = id;

    if (self.option.subFragmentAnimateDirection == 'vertical') self.__orchids__subFragmentsContainer.style.transform = 'translateY(' + (0 - self.__orchids__subFragmentHeight * (id - 1)) + 'px)';else self.__orchids__subFragmentsContainer.style.transform = 'translateX(' + (0 - self.__orchids__subFragmentWidth * (id - 1)) + 'px)';
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/**
 * default fragment option
 * 
 * @type {{}}
 */

module.exports = {
  /**
   * background of root element
   */
  backgroundColor: '#ffffff',
  /**
   * style of root element
   */
  style: void 0,
  /**
   * sub fragments
   *
   * note that, current fragment element should have a child node
   * which has 'data-orchids-sub-fragments' attribute,
   * and it must has position-relative or position-absolute width specified width and height
   * or fragments will not be rendered correctly
   * subFragments: [
   *     'name1',
   *     'name2'
   * ]
   */
  subFragments: void 0,
  /**
   * whether to use animation when switch between sub fragments
   * default: true
   */
  subFragmentAnimate: !0,
  /**
   * animation direction of switching sub fragment
   * horizontal/vertical, default: horizontal
   */
  subFragmentAnimateDirection: 'horizontal'
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var startPageInner = __webpack_require__(13);

/**
 * start a page for a result
 * @param name Name of page
 * @param data Parameter to used by new page's onCreate method
 * @param prepareResultData Parameter to be used by the next page's prepareForResult method
 */
module.exports = function (name, data, prepareResultData) {
  startPageInner(name, data, !0, prepareResultData);
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var startDialogInner = __webpack_require__(18);

/**
 * start a dialog
 * @param name Name of dialog
 * @param data Parameter to used by new dialog's onCreate method
 */
module.exports = function (name, data) {
  startDialogInner(name, data, !1);
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/**
 * make a dialog model
 *
 * @param name
 * @param forResult
 * @param dialogInstance
 * @param singleton
 * @returns {{name: *, forResult: boolean, dialog: *, singleton: boolean}}
 */

module.exports = function (name, forResult, dialogInstance, singleton) {

    return {
        name: name,
        forResult: !!forResult,
        dialog: dialogInstance,
        singleton: !!singleton
    };
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/**
 * make a singleton dialog model
 *
 * @param id
 * @param dialogInstance
 * @returns {{id: *, dialog: *}}
 */

module.exports = function (id, dialogInstance) {

    return {
        id: id,
        dialog: dialogInstance
    };
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var startDialogInner = __webpack_require__(18);

/**
 * start a dialog for a result
 * @param name Name of dialog
 * @param data Parameter to used by new dialog's onCreate method
 * @param prepareResultData Parameter to be used by the next dialog's prepareForResult method
 */
module.exports = function (name, data, prepareResultData) {
  startDialogInner(name, data, !0, prepareResultData);
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var getPageModelByIndex = __webpack_require__(10);

/**
 * get page object
 * @param index Page index, if not set, return current page
 * @returns {*}
 */
module.exports = function (index) {
    var model = getPageModelByIndex(index);

    return model ? model.page : null;
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var getPageById = __webpack_require__(19);

module.exports = function () {
    return getPageById();
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var getDialogModelByIndex = __webpack_require__(16);

/**
 * get dialog object
 * @param index Dialog index, if not set, return current dialog
 * @returns {*}
 */
module.exports = function (index) {
    var model = getDialogModelByIndex(index);

    return model ? model.dialog : null;
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var getDialogById = __webpack_require__(20);

module.exports = function () {
    return getDialogById();
};

/***/ })
/******/ ]);
});
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);

	var orchids = {};

	orchids.app = __webpack_require__(5);

	window.orchids = orchids;

	module.exports = orchids;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.26.1@css-loader/index.js!./orchids.css", function() {
				var newContent = require("!!./../../node_modules/.0.26.1@css-loader/index.js!./orchids.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".orchids {\r\n    display: block;\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n.orchids:before,\r\n.orchids:after {\r\n    box-sizing: border-box;\r\n}\r\n.orchids-page,\r\n.orchids-fragment {\r\n    background: #ffffff;\r\n    overflow: auto;\r\n    -webkit-overflow-scrolling: touch;\r\n    z-index: 1;\r\n}\r\n.orchids-page {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n/* left and width attribute need to be set in Fragment Object */\r\n.orchids-fragment {\r\n    position: absolute;\r\n    top: 0;\r\n    height: 100%;\r\n}\r\n/* 动画 */\r\n.orchids-page.orchids-with-animation,\r\n.orchids-fragment.orchids-with-animation {\r\n    transition: all .5s;\r\n}\r\n/* 水平动画，默认 */\r\n.orchids-page.orchids-with-animation {\r\n    opacity: 0;\r\n}\r\n.orchids-page.orchids-with-animation.orchids-active {\r\n    opacity: 1;\r\n}\r\n.orchids-page.orchids-with-animation.orchids-horizontal {\r\n    transform: translateX(100%);\r\n}\r\n.orchids-page.orchids-with-animation.orchids-horizontal.orchids-active {\r\n    transform: translateX(0);\r\n}\r\n/* 竖直动画 */\r\n.orchids-page.orchids-with-animation.orchids-vertical {\r\n    transform: translateY(100%);\r\n}\r\n.orchids-page.orchids-with-animation.orchids-vertical.orchids-active {\r\n    transform: translateY(0);\r\n}", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
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

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/**
	 * app singleton instance
	 * @type {{}}
	 */
	var app = {
	    // app singleton default option
	    option: {
	        /**
	         * background of root element
	         */
	        backgroundColor: '#ffffff',
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
	        animateDirection: 'horizontal'
	    }
	},
	    /**
	     * all registered page Object container
	     * format: {
	     *     name: {
	     *         option: option, // Option to initialize a Page
	     *         superPage: '', // super page name, default is blank string
	     *         page: Page // Page Object
	     *     }
	     * }
	     * @type {{}}
	     */
	    pages = {},
	    /**
	     * all registered Pages Attributes
	     * format: {
	     *     name: {
	     *         name1: field1,
	     *         name2: filed2,
	     *         name3: func1,
	     *         name4: func2
	     *     }
	     * }
	     * @type {{}}
	     */
	    pagesAttributes = {},
	    /**
	     * all initialized Page instances
	     * format: {
	     *     id: {
	     *         name: pageName, // Page name
	     *         forResult: true/false, // whether current page is initialized by startPageForResult or not
	     *         singleton: true/false, // whether current page is singleton or not.
	     *         page: Page // Page instance
	     *     }
	     * }
	     * @type {{}}
	     */
	    pagesInstances = {};

	var util = __webpack_require__(6),
	    page = __webpack_require__(7);

	    /**
	     * total page count of current app
	     * @type {number}
	     */
	    var pageCount = 0;
	/**
	 * initialize app
	 */
	app.init = function(option) {
	    util.extend(true, app.option, option || {});
	    var params = (function () {
	            var params = {};
	            !!location.search && (
	                location.search.slice(1).split('&').map(function (item) {
	                    params[item.split('=')[0]] = item.split('=')[1]
	                })
	            );
	            return params;
	        })(),
	        pageName,
	        orchidsData;

	    // tell the first page and option by the parameter
	    if (!!params.orchidsPage) {
	        pageName = decodeURIComponent(params.orchidsPage);
	        try {
	            orchidsData = JSON.parse(decodeURIComponent(params.orchidsData));
	        } catch (e) {
	            orchidsData = {};
	        }

	        app.startPage(pageName, orchidsData);
	    }
	};
	/**
	 * initialize a Page and show it
	 * @param pageName The name of a Page Object
	 * @param data Data to initialize a Page, and will be use by onCreate method
	 * @param startOption Option for how to start a page
	 *     {
	 *         launchMode: 'clearStack', // it will clear the page stack when the page is created, and it will be in the bottom of the page stack
	 *         route: true/false, //
	 *     }
	 * @param forResult Whether current page is initialized by startPageForResult or not
	 */
	app.startPageInner = function (pageName, data, startOption, forResult) {
	    var pageObject = pages[pageName], // the Page Object
	        option, // Page option
	        instance; // instance of page

	    if (!pageObject) {
	        console.error('The Page "' + pageName + '" you called is not registered, please register it before initialize.');
	        return;
	    }

	    startOption = startOption || {};



	    if (pageObject.option.singleton) {
	        Object.keys(pagesInstances).map(function (id) {
	            var page = pages[id];
	            if (page.name == pageName) {
	                instance = page.page;
	                return !1;
	            }
	        });
	        if (!!instance) {
	            instance.__orchids__show();
	            return;
	        }
	    }

	    option = util.extend(true, {}, pageObject.option);
	    option.pageId = ++pageCount;
	    instance = new pageObject.page(option, data || {});
	    pagesInstances[option.pageId] = {
	        name: pageName,
	        forResult: !!forResult,
	        singleton: option.singleton,
	        page: instance
	    };
	};

	app.startPage = function (pageName, data, startOption) {
	    app.startPageInner(pageName, data, startOption, !1)
	};

	app.startPageForResult = function (pageName, data, startOption) {
	    app.startPageInner(pageName, data, startOption, !0)
	};

	/**
	 * register a Page Object
	 * @param pageName New name of new Page Object, support dot semantic, for instance, "foo.bar.name"
	 * @param extendAttributes Attributes to be extended to new Page Object
	 * @param option Option to initialize a Page
	 * @param superPageName Super Page Object, default is Page
	 */

	app.registerPage = function (pageName, extendAttributes, option, superPageName) {
	    var newPage, // new Page Object
	        superPagesExtendAttributes = []; // all super extend attributes

	    /**
	     * get all super extend attributes
	     *
	     * @param superPageName
	     */
	    function getSuperPagesExtendAttributes(superPageName) {
	        var superPage = pages[superPageName],
	            superExtendAttributes = pagesAttributes[superPageName];

	        !!superExtendAttributes && superPagesExtendAttributes.unshift(superExtendAttributes);
	        !!superPage.superPage && getSuperPagesExtendAttributes(superPage.superPage);
	    }

	    if (!pageName || typeof pageName != 'string') {
	        console.error('Register a Page Object needs a explicit string name');
	        return;
	    }

	    if (!!pagesAttributes[pageName]) {
	        console.error('page "' + pageName + '" has been registered, and now is override, but this is a incorrect handle, so here is the message');
	    }
	    // put extendAttributes to pagesAttributes container
	    pagesAttributes[pageName] = extendAttributes;

	    newPage = page();
	    // no superPage
	    if (!superPageName) {
	        util.extend(!0, newPage.prototype, extendAttributes);
	    }
	    // has superPage
	    else {
	        getSuperPagesExtendAttributes(superPageName);
	        if (superPagesExtendAttributes.length == 1) util.extend(!0, newPage.prototype, extendAttributes, superPagesExtendAttributes[0]);
	        else if (superPagesExtendAttributes.length == 2) util.extend(!0, newPage.prototype, extendAttributes, superPagesExtendAttributes[0], superPagesExtendAttributes[1]);
	        else if (superPagesExtendAttributes.length == 3) util.extend(!0, newPage.prototype, extendAttributes, superPagesExtendAttributes[0], superPagesExtendAttributes[1], superPagesExtendAttributes[2]);
	        else if (superPagesExtendAttributes.length == 4) util.extend(!0, newPage.prototype, extendAttributes, superPagesExtendAttributes[0], superPagesExtendAttributes[1], superPagesExtendAttributes[2], superPagesExtendAttributes[3]);
	        else if (superPagesExtendAttributes.length == 5) util.extend(!0, newPage.prototype, extendAttributes, superPagesExtendAttributes[0], superPagesExtendAttributes[1], superPagesExtendAttributes[2], superPagesExtendAttributes[3], superPagesExtendAttributes[4]);
	        else if (superPagesExtendAttributes.length == 6) util.extend(!0, newPage.prototype, extendAttributes, superPagesExtendAttributes[0], superPagesExtendAttributes[1], superPagesExtendAttributes[2], superPagesExtendAttributes[3], superPagesExtendAttributes[4], superPagesExtendAttributes[5]);
	        else if (superPagesExtendAttributes.length == 7) util.extend(!0, newPage.prototype, extendAttributes, superPagesExtendAttributes[0], superPagesExtendAttributes[1], superPagesExtendAttributes[2], superPagesExtendAttributes[3], superPagesExtendAttributes[4], superPagesExtendAttributes[5], superPagesExtendAttributes[6]);
	        else if (superPagesExtendAttributes.length == 8) util.extend(!0, newPage.prototype, extendAttributes, superPagesExtendAttributes[0], superPagesExtendAttributes[1], superPagesExtendAttributes[2], superPagesExtendAttributes[3], superPagesExtendAttributes[4], superPagesExtendAttributes[5], superPagesExtendAttributes[6], superPagesExtendAttributes[7]);
	        else {
	            console.error('The max extend level is 8, and now is more than 8.');
	        }
	    }
	    option = option || {};
	    option = util.extend(true, {}, app.option, option);
	    option.pageName = pageName;
	    pages[pageName] = {
	        superPage: void 0,
	        option: option,
	        page: newPage
	    };
	};

	/**
	 * get page object
	 * @param index
	 * @returns {*}
	 */
	app.getPage = function (index) {
	    typeof index == 'undefined' && (index = -1);
	    var keys = Object.keys(pagesInstances);
	    return pagesInstances[keys[(keys.length + index) % keys.length]];
	};

	/**
	 * get current page object
	 * @returns {*}
	 */
	app.getCurrentPage = function () {
	    return app.getPage(-1);
	};

	/**
	 * get prev page object
	 * @returns {*}
	 */
	app.getPrevPage = function () {
	    return app.getPage(-2);
	};

	/**
	 * delete page object
	 * @param index
	 * @returns {*}
	 */
	app.deletePage = function (index) {
	    typeof index == 'undefined' && (index = -1);
	    var keys = Object.keys(pagesInstances);
	    delete pagesInstances[keys[(keys.length + index) % keys.length]];
	};

	/**
	 * delete current page object
	 * @returns {*}
	 */
	app.deleteCurrentPage = function () {
	    return app.deletePage(-1);
	};

	app.back = function () {
	    var instance = app.getCurrentPage();
	    // for result
	    instance.forResult && (
	        !!app.getPrevPage.onPageResult && app.getPrevPage.onPageResult(instance.__orchids__result)
	    );
	    // destroy
	    instance.__orchids__hide();
	    app.deleteCurrentPage();
	};

	module.exports = app;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * from jquery (https://github.com/jquery/jquery/blob/master/src/core.js#L131)
	 * @returns {*|{}}
	 */
	var class2type = {},
	    hasOwn = class2type.hasOwnProperty,
	    isWindow = function( obj ) {
	        return obj != null && obj === obj.window;
	    },
	    isPlainObject = function( obj ) {
	        // Not plain objects:
	        // - Any object or value whose internal [[Class]] property is not "[object Object]"
	        // - DOM nodes
	        // - window
	        if ( typeof obj !== "object" || obj.nodeType || isWindow( obj ) ) {
	            return false;
	        }

	        if ( obj.constructor &&
	            !hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
	            return false;
	        }

	        // If the function hasn't returned already, we're confident that
	        // |obj| is a plain object, created by {} or constructed with new Object
	        return true;
	    },
	    extend = function() {
	        var options, name, src, copy, copyIsArray, clone,
	            target = arguments[0] || {},
	            i = 1,
	            length = arguments.length,
	            deep = false;

	        // Handle a deep copy situation
	        if ( typeof target === "boolean" ) {
	            deep = target;

	            // Skip the boolean and the target
	            target = arguments[ i ] || {};
	            i++;
	        }

	        // Handle case when target is a string or something (possible in deep copy)
	        if ( typeof target !== "object" && typeof target != 'function' ) {
	            target = {};
	        }

	        // Extend jQuery itself if only one argument is passed
	        if ( i === length ) {
	            target = this;
	            i--;
	        }

	        for ( ; i < length; i++ ) {
	            // Only deal with non-null/undefined values
	            if ( (options = arguments[ i ]) != null ) {
	                // Extend the base object
	                for ( name in options ) {
	                    src = target[ name ];
	                    copy = options[ name ];

	                    // Prevent never-ending loop
	                    if ( target === copy ) {
	                        continue;
	                    }

	                    // Recurse if we're merging plain objects or arrays
	                    if ( deep && copy && ( isPlainObject(copy) || (copyIsArray = Array.isArray(copy)) ) ) {
	                        if ( copyIsArray ) {
	                            copyIsArray = false;
	                            clone = src && Array.isArray(src) ? src : [];

	                        } else {
	                            clone = src && isPlainObject(src) ? src : {};
	                        }

	                        // Never move original objects, clone them
	                        target[ name ] = extend( deep, clone, copy );

	                        // Don't bring in undefined values
	                    } else if ( copy !== undefined ) {
	                        target[ name ] = copy;
	                    }
	                }
	            }
	        }

	        // Return the modified object
	        return target;
	    };

	module.exports = {
	    extend: extend
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var util = __webpack_require__(6);

	var newPage = function () {
	    /**
	     *
	     * @param option Option to initialize page
	     * @param data Parameter to be used by onCreate method
	     * @constructor
	     */
	    function Page(option, data) {
	        var self = this;
	        self.option = util.extend(true, {}, option);
	        self.__orchids__init();
	        self.__orchids__data = data || {};
	    }

	    Page.prototype = {
	        constructor: Page,
	        __orchids__init: function() {
	            var self = this,
	                classes = [
	                    'orchids',
	                    'orchids-page'
	                ];
	            // make id
	            self.id = self.option.pageId;
	            // whether current page is the first page to render or not, for confirming to start current page with or without animation.
	            self.__orchids__isFirstPage = self.id == 1;
	            // make root el
	            self.el = document.createElement('div');
	            // data-orchids-page-is
	            self.el.dataset.orchidsPageId = self.id;
	            // animation
	            !!self.option.animate && (
	                classes.push('orchids-with-animation'),
	                    self.option.animateDirection == 'vertical' ? classes.push('orchids-vertical') : classes.push('orchids-horizontal')
	            );

	            // classList
	            self.__orchids__isFirstPage && classes.push('orchids-active');
	            self.el.classList = classes.join(' ');
	            // background color
	            self.el.style.backgroundColor = self.option.backgroundColor;
	            // z-index
	            !!self.option.singleton && (self.el.style.zIndex = 2);
	            // user custom initialization
	            !!self.onCreate && self.onCreate(self.__orchids__data);

	            // route, if it is the first page, no route change
	            !!self.option.route && self.__orchids__isFirstPage && self.__orchids__routeForward();

	            // add to body element
	            document.body.appendChild(self.el);

	            // show page
	            !self.__orchids__isFirstPage && setTimeout(function () {
	                self.el.classList.add('orchids-active')
	            }, 0);
	        },
	        // make a forward route
	        __orchids__routeForward: function () {
	            var self = this,
	                pageName = encodeURIComponent(self.option.pageName),
	                pageData = encodeURIComponent(JSON.stringify(self.__orchids__data)),
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
	            params.pageData = pageData;

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
	            var self = this;
	            self.onDestroy();
	            self.el.classList.remove('orchids-active');
	            !self.option.singleton && setTimeout(function () {
	                self.el.remove()
	            }, 500);
	            // route
	            !!self.option.route && self.__orchids__routeBack();
	        },

	        // show current page
	        __orchids__show: function () {
	            var self = this;
	            // route
	            !!self.option.route && self.__orchids__routeForward();
	            self.el.classList.add('orchids-active');
	        },

	        // render a page after a page is initialized
	        onCreate: function(data) {},

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

/***/ }
/******/ ]);
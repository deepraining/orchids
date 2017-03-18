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
        animateDirection: 'horizontal',
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
         * function: called when first page is initialized
         */
        onFirstPageInitialized: void 0
    },
    // default dialog option
    defaultDialogOption: {
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
        animateDirection: 'vertical',
        /**
         * whether current dialog is singleton or not
         */
        singleton: !0
    },
    // default fragment option
    defaultFragmentOption: {
        /**
         * background of root element
         */
        backgroundColor: '#ffffff',
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
    }
};


var util = require('./util'),
    page = require('./Page'),
    dialog = require('./Dialog'),
    fragment = require('./Fragment'),
    container = require('./container');

app.pages = container.pages;
app.pagesAttributes = container.pagesAttributes;
app.pagesInstances = container.pagesInstances;
app.dialogs = container.dialogs;
app.dialogsAttributes = container.dialogsAttributes;
app.dialogsInstances = container.dialogsInstances;
app.dialogsSingletonInstances = container.dialogsSingletonInstances;
app.fragments = container.fragments;
app.fragmentsAttributes = container.fragmentsAttributes;

    /**
     * total page count of current app
     * @type {number}
     */
    var pageCount = 0,
        dialogCount = 0;
/**
 * initialize app
 */
app.init = function(option) {
    util.extend(true, app.option, option || {});
};
/**
 * on pop state
 * @param event
 */
app.onpopstate = function (event) {
    var dialogInstance,
        prevDialogInstance,
        pageInstance,
        i, il, dialogsInstancesKeys;

    // if user page back by press back button of phone, close all dialogs first
    dialogsInstancesKeys = Object.keys(app.dialogsInstances);
    if (!!dialogsInstancesKeys.length) {
        for (il = dialogsInstancesKeys.length, i = il - 1; i >= 0; i--) {
            // first dialog
            i <= 0 ? (
                pageInstance = app.getCurrentPage(),
                    dialogInstance = app.dialogsInstances[dialogsInstancesKeys[i]],
                    dialogInstance.forResult && !!pageInstance.page.onPageResult && pageInstance.page.onPageResult(dialogInstance.dialog.__orchids__result || {}),
                    // destroy
                    dialogInstance.dialog.__orchids__destroy(),
                    app.deleteCurrentDialog()
            ) : (
                // at least two dialogs
                prevDialogInstance = app.dialogsInstances[dialogsInstancesKeys[i - 1]],
                    dialogInstance = app.dialogsInstances[dialogsInstancesKeys[i]],
                    dialogInstance.forResult && !!prevDialogInstance.dialog.onDialogResult && prevDialogInstance.dialog.onDialogResult(dialogInstance.dialog.__orchids__result || {}),
                    // destroy
                    dialogInstance.dialog.__orchids__destroy(),
                    app.deleteCurrentDialog()
            );
        }
    }
    app.pageBack();
};
/**
 * start current application
 * if current url has orchidsPage parameter, it'will start the "orchidsPage" specified page, not the page "pageName"
 *
 * @param pageName
 * @param data Data to initialize a Page, and will be use by onCreate method
 */
app.start = function (pageName, data) {
    var params = (function () {
            var params = {};
            !!location.search && (
                location.search.slice(1).split('&').map(function (item) {
                    params[item.split('=')[0]] = item.split('=')[1]
                })
            );
            return params;
        })(),
        orchidsPage,
        orchidsData;


    // if user call back page by phone button, keep it
    // here we do not consider other action, like forward, refresh, for this is main for wechat webapp using
    window.onpopstate = app.onpopstate;

    // tell the first page and option by the parameter
    if (!!params.orchidsPage) {
        orchidsPage = decodeURIComponent(params.orchidsPage);
        try {
            orchidsData = JSON.parse(decodeURIComponent(params.orchidsData));
        } catch (e) {
            orchidsData = {};
        }

        app.startPage(orchidsPage, orchidsData);
    }
    else {
        app.startPage(pageName, data);
    }

    // 第一个页面初始化完成
    !!app.option.onFirstPageInitialized && app.option.onFirstPageInitialized();
};
/**
 * initialize a Page and show it
 * @param pageName The name of a Page Object
 * @param data Data to initialize a Page, and will be use by onCreate method
 * @param forResult Whether current page is initialized by startPageForResult or not
 * @param prepareResultData Parameter to be used by the next page's prepareForResult method
 */
app.startPageInner = function (pageName, data, forResult, prepareResultData) {
    var pageObject = app.pages[pageName], // the Page Object
        option, // Page option
        instance, // instance of page
        prevPageInstance;

    // has dialog active
    if (Object.keys(app.dialogsInstances).length >= 1) {
        console.error('Current application has dialog present, please close it and then start another page.');
        return;
    }

    if (!pageObject) {
        console.error('The Page "' + pageName + '" you called is not registered, please register it before initialize.');
        return;
    }

    // call prev page's __orchids__hide method
    prevPageInstance = app.getCurrentPage();
    !!prevPageInstance && prevPageInstance.page.__orchids__hide();

    option = util.extend(true, {}, pageObject.option);
    // pageId
    option.pageId = ++pageCount;
    // route
    option.route = app.option.route;
    instance = new pageObject.page(option, data || {});
    forResult && instance.prepareForResult(prepareResultData);
    app.pagesInstances[option.pageId] = {
        name: pageName,
        forResult: !!forResult,
        page: instance
    };
};

/**
 * start a page
 * @param pageName
 * @param data Parameter to use by new page's onCreate method
 */
app.startPage = function (pageName, data) {
    app.startPageInner(pageName, data, !1)
};
/**
 * start a page for result
 * @param pageName
 * @param data Parameter to use by new page's onCreate method
 * @param prepareResultData Parameter to be used by the next page's prepareForResult method
 */
app.startPageForResult = function (pageName, data, prepareResultData) {
    app.startPageInner(pageName, data, !0, prepareResultData)
};

/**
 * initialize a Dialog and show it
 * @param dialogName The name of a Dialog Object
 * @param data Data to initialize a Dialog, and will be use by onCreate method
 * @param forResult Whether current dialog is initialized by startDialogForResult or not
 * @param prepareResultData Parameter to be used by the next dialog's prepareForResult method
 */
app.startDialogInner = function (dialogName, data, forResult, prepareResultData) {
    var dialogObject = app.dialogs[dialogName], // the Dialog Object
        option, // Dialog option
        instance, // instance of dialog
        existedSingletonInstance; //

    if (!dialogObject) {
        console.error('The Dialog "' + dialogName + '" you called is not registered, please register it before initialize.');
        return;
    }

    // singleton
    if (dialogObject.option.singleton) {
        Object.keys(app.dialogsInstances).map(function (id) {
            var dialog = app.dialogsInstances[id];
            if (dialog.name == dialogName) {
                existedSingletonInstance = dialog;
                return !1;
            }
        });
        if (!!existedSingletonInstance) {
            console.error('The Dialog "' + dialogName + '" is singleton, and is active in current application, please do not use it twice');
            return;
        }
        Object.keys(app.dialogsSingletonInstances).map(function (name) {
            var singletonInstance;
            if (name == dialogName) {
                singletonInstance = app.dialogsSingletonInstances[name];
                // update forResult and active attribute
                instance = singletonInstance;
                return !1;
            }
        });
        if (!!instance) {
            app.dialogsInstances[instance.id] = {
                name: dialogName,
                forResult: !!forResult,
                dialog: instance.dialog
            };
            forResult ? instance.dialog.__orchids__show(!0, prepareResultData) : instance.dialog.__orchids__show();
            return;
        }
    }


    option = util.extend(true, {}, dialogObject.option);
    // dialogId
    option.dialogId = ++dialogCount;

    instance = new dialogObject.dialog(option, data || {});
    forResult && instance.prepareForResult(prepareResultData);

    dialogObject.option.singleton && (
        app.dialogsSingletonInstances[dialogName] = {
            id: option.dialogId,
            dialog: instance
        }
    );

    app.dialogsInstances[option.dialogId] = {
        name: dialogName,
        forResult: !!forResult,
        dialog: instance
    };
};

/**
 * start a dialog
 * @param dialogName
 * @param data Parameter to use by new dialog's onCreate method
 */
app.startDialog = function (dialogName, data) {
    app.startDialogInner(dialogName, data, !1)
};
/**
 * start a dialog for result
 * @param dialogName
 * @param data Parameter to use by new dialog's onCreate method
 * @param prepareResultData Parameter to be used by the next dialog's prepareForResult method
 */
app.startDialogForResult = function (dialogName, data, prepareResultData) {
    app.startDialogInner(dialogName, data, !0, prepareResultData)
};

/**
 * register a Page Object
 * @param pageName New name of new Page Object
 * @param extendAttributes Attributes to be extended to new Page Object
 *     attributes to use
 *     {
 *         id, // current page id
 *         el, // current page root element
 *         option // current page option
 *     }
 *     methods to override
 *     {
 *         // render a page after a page is initialized
 *         onCreate: function(){},
 *         // pre handle before destroy a page
 *         onDestroy: function() {},
 *         // called when back page from other page
 *         onShow: function () {},
 *         // called when start another page
 *         onHide: function () {},
 *         // called when the child page destroyed and return the value by setResult method.
 *         onPageResult: function(data) {},
 *         // receive data from the previous page, startPageForResult method's second parameter
 *         prepareForResult: function(data) {}
 *     }
 *     methods to call
 *     {
 *         // set the result if this page is called by startPageForResult method,
 *         // and the returned value will be used as the param of the onPageResult method of last page
 *         setResult: function(data) {},
 *         // show fragment specified by id
 *         showFragment: function(id) {},
 *         // get fragment specified by id, default return the first fragment
 *         getFragment: function(id) {}
 *     }
 * @param option Option to initialize a Page
 *     {
 *         backgroundColor: '#ffffff',
 *         animate: !0,
 *         animateDirection: 'horizontal',
 *         // sub fragments
 *         // note that, current page element should have a child node
 *         // which has 'data-orchids-fragments' attribute,
 *         // and it must has position-relative or position-absolute width specified width and height
 *         // or fragments will not be rendered correctly
 *         fragments: [
 *             'name1',
 *             'name2'
 *         ],
 *         fragmentAnimate: !0,
 *         fragmentAnimateDirection: 'horizontal'
 *     }
 * @param superPageName Super Page Object, default is Page
 */

app.registerPage = function (pageName, extendAttributes, option, superPageName) {
    var newPage, // new Page Object
        superPagesExtendAttributes = [], // all super extend attributes
        superPagesOptions = [], // all super options
        tempOption,
        i, il;

    /**
     * get all super extend attributes
     *
     * @param superPageName
     */
    function getSuperPagesExtendAttributes(superPageName) {
        var superPage = app.pages[superPageName],
            superOption = superPage.option,
            superExtendAttributes = app.pagesAttributes[superPageName];

        !!superExtendAttributes && superPagesExtendAttributes.unshift(superExtendAttributes);
        !!superOption && superPagesOptions.unshift(superOption);
        !!superPage.superPage && getSuperPagesExtendAttributes(superPage.superPage);
    }

    if (!pageName || typeof pageName != 'string') {
        console.error('Register a Page Object needs a explicit string name');
        return;
    }

    if (!!app.pagesAttributes[pageName]) {
        console.error('page "' + pageName + '" has been registered, and now is override, but this is a incorrect handle, so here is the message');
    }

    if (arguments.length == 1) {
        console.error('Register page "' + pageName + '" with no extend attributes is not ok, please check it');
        return;
    }
    else if (arguments.length == 2) {
        option = {};
        superPageName = '';
    }
    else if (arguments.length == 3 && typeof arguments[2] == 'string') {
        superPageName = option;
        option = {};
    }

    // put extendAttributes to pagesAttributes container
    app.pagesAttributes[pageName] = extendAttributes;

    newPage = page();
    tempOption = util.extend(!0, {}, app.option);
    // no superPage
    if (!!superPageName) {
        getSuperPagesExtendAttributes(superPageName);
        for (i = 0, il = superPagesExtendAttributes.length; i < il; i++) {
            util.extend(!0, newPage.prototype, superPagesExtendAttributes[i]);
        }

        for (i = 0, il = superPagesOptions.length; i < il; i++) {
            util.extend(!0, tempOption, superPagesOptions[i]);
        }
    }
    util.extend(!0, newPage.prototype, extendAttributes);
    util.extend(!0, tempOption, option);

    tempOption.pageName = pageName;
    app.pages[pageName] = {
        superPage: superPageName,
        option: tempOption,
        page: newPage
    };
};

/**
 * register a Dialog Object
 * @param dialogName New name of new Dialog Object
 * @param extendAttributes Attributes to be extended to new Dialog Object
 *     attributes to use
 *     {
 *         id, // current dialog id
 *         el, // current dialog root element
 *         option // current dialog option
 *     }
 *     methods to override
 *     {
 *         // render a dialog after a dialog is initialized
 *         onCreate: function(){},
 *         // pre handle before destroy a dialog
 *         onDestroy: function() {},
 *         // called when the child dialog destroyed and return the value by setResult method.
 *         onDialogResult: function(data) {},
 *         // receive data from the previous dialog, startDialogForResult method's second parameter
 *         prepareForResult: function(data) {}
 *     }
 *     methods to call
 *     {
 *         // set the result if this dialog is called by startDialogForResult method,
 *         // and the returned value will be used as the param of the onDialogResult method of last dialog
 *         setResult: function(data) {}
 *     }
 * @param option Option to initialize a Dialog
 *     {
 *         backgroundColor: '#ffffff',
 *         animate: !0,
 *         animateDirection: 'vertical',
 *         singleton: !0 // whether current dialog is singleton or not, if true, it will be only created once, and will not be destroyed
 *     }
 * @param superDialogName Super Dialog Object, default is Dialog
 */
app.registerDialog = function (dialogName, extendAttributes, option, superDialogName) {
    var newDialog, // new Dialog Object
        superDialogsExtendAttributes = [], // all super extend attributes
        superDialogsOptions = [], // all super options
        tempOption,
        i, il;

    /**
     * get all super extend attributes
     *
     * @param superDialogName
     */
    function getSuperDialogsExtendAttributes(superDialogName) {
        var superDialog = app.dialogs[superDialogName],
            superOption = superDialog.option,
            superExtendAttributes = app.dialogsAttributes[superDialogName];

        !!superExtendAttributes && superDialogsExtendAttributes.unshift(superExtendAttributes);
        !!superOption && superDialogsOptions.unshift(superOption);
        !!superDialog.superDialog && getSuperDialogsExtendAttributes(superDialog.superDialog);
    }

    if (!dialogName || typeof dialogName != 'string') {
        console.error('Register a Dialog Object needs a explicit string name');
        return;
    }

    if (!!app.dialogsAttributes[dialogName]) {
        console.error('dialog "' + dialogName + '" has been registered, and now is override, but this is a incorrect handle, so here is the message');
    }

    if (arguments.length == 1) {
        console.error('Register dialog "' + dialogName + '" with no extend attributes is not ok, please check it');
        return;
    }
    else if (arguments.length == 2) {
        option = {};
        superDialogName = '';
    }
    else if (arguments.length == 3 && typeof arguments[2] == 'string') {
        superDialogName = option;
        option = {};
    }

    // put extendAttributes to dialogsAttributes container
    app.dialogsAttributes[dialogName] = extendAttributes;

    newDialog = dialog();
    tempOption = util.extend(!0, {}, app.defaultDialogOption);
    // no superDialog
    if (!!superDialogName) {
        getSuperDialogsExtendAttributes(superDialogName);
        for (i = 0, il = superDialogsExtendAttributes.length; i < il; i++) {
            util.extend(!0, newDialog.prototype, superDialogsExtendAttributes[i]);
        }

        for (i = 0, il = superDialogsOptions.length; i < il; i++) {
            util.extend(!0, tempOption, superDialogsOptions[i]);
        }
    }
    util.extend(!0, newDialog.prototype, extendAttributes);
    util.extend(!0, tempOption, option);

    tempOption.dialogName = dialogName;
    app.dialogs[dialogName] = {
        superDialog: superDialogName,
        option: tempOption,
        singleton: !!tempOption.singleton,
        dialog: newDialog
    };
};

/**
 * register a Fragment Object
 * @param fragmentName New name of new Fragment Object
 * @param extendAttributes Attributes to be extended to new Fragment Object
 *     attributes to use
 *     {
 *         id, // current fragment id
 *         el, // current fragment root element
 *         option // current fragment option
 *     }
 *     methods to override
 *     {
 *         // render a fragment after a fragment is initialized
 *         onCreate: function(){},
 *         // pre handle before destroy a fragment
 *         onDestroy: function() {},
 *         // called when showed, not include first show while created
 *         onShow: function () {},
 *         // called when show another fragment
 *         onHide: function () {},
 *     }
 *     methods to call
 *     {
 *         // show sub fragment specified by id
 *         showSubFragment: function(id) {},
 *         // get sub fragment specified by id, default return the first fragment
 *         getSubFragment: function(id) {}
 *     }
 * @param option Option to initialize a Fragment
 *     {
 *         backgroundColor: '#ffffff',
 *         // sub fragments
 *         // note that, current fragment element should have a child node
 *         // which has 'data-orchids-sub-fragments' attribute,
 *         // and it must has position-relative or position-absolute width specified width and height
 *         // or fragments will not be rendered correctly
 *         subFragments: [
 *             'name1',
 *             'name2'
 *         ],
 *         subFragmentAnimate: !0,
 *         subFragmentAnimateDirection: 'horizontal'
 *     }
 * @param superFragmentName Super Fragment Object, default is Fragment
 */

app.registerFragment = function (fragmentName, extendAttributes, option, superFragmentName) {
    var newFragment, // new Fragment Object
        superFragmentsExtendAttributes = [], // all super extend attributes
        superFragmentsOptions = [], // all super options
        tempOption,
        i, il;

    /**
     * get all super extend attributes
     *
     * @param superFragmentName
     */
    function getSuperFragmentsExtendAttributes(superFragmentName) {
        var superFragment = app.fragments[superFragmentName],
            superOption = superFragment.option,
            superExtendAttributes = app.fragmentsAttributes[superFragmentName];

        !!superExtendAttributes && superFragmentsExtendAttributes.unshift(superExtendAttributes);
        !!superOption && superFragmentsOptions.unshift(superOption);
        !!superFragment.superFragment && getSuperFragmentsExtendAttributes(superFragment.superFragment);
    }

    if (!fragmentName || typeof fragmentName != 'string') {
        console.error('Register a Fragment Object needs a explicit string name');
        return;
    }

    if (!!app.fragmentsAttributes[fragmentName]) {
        console.error('fragment "' + fragmentName + '" has been registered, and now is override, but this is a incorrect handle, so here is the message');
    }

    if (arguments.length == 1) {
        console.error('Register fragment "' + fragmentName + '" with no extend attributes is not ok, please check it');
        return;
    }
    else if (arguments.length == 2) {
        option = {};
        superFragmentName = '';
    }
    else if (arguments.length == 3 && typeof arguments[2] == 'string') {
        superFragmentName = option;
        option = {};
    }

    // put extendAttributes to fragmentsAttributes container
    app.fragmentsAttributes[fragmentName] = extendAttributes;

    newFragment = fragment();
    tempOption = util.extend(!0, {}, app.defaultFragmentOption);
    // no superFragment
    if (!!superFragmentName) {
        getSuperFragmentsExtendAttributes(superFragmentName);
        for (i = 0, il = superFragmentsExtendAttributes.length; i < il; i++) {
            util.extend(!0, newFragment.prototype, superFragmentsExtendAttributes[i]);
        }

        for (i = 0, il = superFragmentsOptions.length; i < il; i++) {
            util.extend(!0, tempOption, superFragmentsOptions[i]);
        }
    }
    util.extend(!0, newFragment.prototype, extendAttributes);
    util.extend(!0, tempOption, option);

    tempOption.fragmentName = fragmentName;
    app.fragments[fragmentName] = {
        superFragment: superFragmentName,
        option: tempOption,
        fragment: newFragment
    };
};
/**
 * get page object
 * @param index
 * @returns {*}
 */
app.getPage = function (index) {
    typeof index == 'undefined' && (index = -1);
    var keys = Object.keys(app.pagesInstances);
    return app.pagesInstances[keys[(keys.length + index) % keys.length]];
};

/**
 * get page object
 * @param id Page id, if not set, return current page
 * @returns {*}
 */
app.getPageById = function (id) {
    var keys;
    if (!id) {
        keys = Object.keys(app.pagesInstances);
        if (!keys.length) return null;
        return app.pagesInstances[keys[keys.length - 1]].page;
    }
    else {
        try {
            return app.pagesInstances[id].page;
        } catch (e) {
            return null;
        }

    }
};
/**
 * get current page object
 * @returns {*}
 */
app.getCurrentPage = function () {
    return app.getPage(-1);
};
/**
 * get current page instance
 * @returns {*}
 */
app.getCurrentPageInstance = function () {
    return app.getPage(-1).page;
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
    var keys = Object.keys(app.pagesInstances);
    delete app.pagesInstances[keys[(keys.length + index) % keys.length]];
};

/**
 * delete current page object
 * @returns {*}
 */
app.deleteCurrentPage = function () {
    return app.deletePage(-1);
};

/**
 * get dialog object
 * @param id Dialog id, if not set, return current dialog
 * @returns {*}
 */
app.getDialogById = function (id) {
    var keys;
    if (!id) {
        keys = Object.keys(app.dialogsInstances);
        if (!keys.length) return null;
        return app.dialogsInstances[keys[keys.length - 1]].dialog;
    }
    else {
        try {
            return app.dialogsInstances[id].dialog;
        } catch (e) {
            return null;
        }
    }
};


/**
 * get dialog object
 * @param index
 * @returns {*}
 */
app.getDialog = function (index) {
    typeof index == 'undefined' && (index = -1);
    var keys = Object.keys(app.dialogsInstances);
    return app.dialogsInstances[keys[(keys.length + index) % keys.length]];
};

/**
 * get current dialog object
 * @returns {*}
 */
app.getCurrentDialog = function () {
    return app.getDialog(-1);
};
/**
 * get current dialog instance
 * @returns {*}
 */
app.getCurrentDialogInstance = function () {
    try {
        return app.getDialog(-1).dialog;
    }
    catch (e) {
        return null;
    }
};
/**
 * get prev dialog object
 * @returns {*}
 */
app.getPrevDialog = function () {
    return app.getDialog(-2);
};

/**
 * delete dialog object
 * @param index
 * @returns {*}
 */
app.deleteDialog = function (index) {
    typeof index == 'undefined' && (index = -1);
    var keys = Object.keys(app.dialogsInstances);
    delete app.dialogsInstances[keys[(keys.length + index) % keys.length]];
};

/**
 * delete current dialog object
 * @returns {*}
 */
app.deleteCurrentDialog = function () {
    return app.deleteDialog(-1);
};
/**
 * back to prev page or prev dialog
 */
app.back = function () {
    // has dialog active
    if (Object.keys(app.dialogsInstances).length >= 1) {
        app.dialogBack();
        return;
    }

    app.option.route ? (
        Object.keys(app.pagesInstances).length >= 2 && history.back()
    ) : app.pageBack();
};

/**
 * back to prev page
 */
app.pageBack = function () {
    var instance,
        prevInstance;

    // if current pages remain only 1, back action is invalid.
    if (Object.keys(app.pagesInstances).length <= 1) return;

    instance = app.getCurrentPage();
    prevInstance = app.getPrevPage();
    // for result
    instance.forResult && (
        !!prevInstance.page.onPageResult && prevInstance.page.onPageResult(instance.page.__orchids__result || {})
    );
    // destroy
    instance.page.__orchids__destroy();
    // call prev page's __orchids__show method
    prevInstance.page.__orchids__show();
    app.deleteCurrentPage();
};


/**
 * back to page
 */
app.dialogBack = function () {
    var instance,
        prevInstance,
        prevPageInstance;

    // if current dialogs remain 0, back action is invalid.
    if (Object.keys(app.dialogsInstances).length <= 0) return;

    instance = app.getCurrentDialog();
    // for result
    instance.forResult && (
        prevInstance = app.getPrevDialog(),
            !!prevInstance ? (
                !!prevInstance.dialog.onDialogResult && prevInstance.dialog.onDialogResult(instance.dialog.__orchids__result || {})
            ) : (
                prevPageInstance = app.getPrevPage(),
                !!prevPageInstance.page.onPageResult && prevPageInstance.page.onPageResult(instance.dialog.__orchids__result || {})
            )
    );
    // destroy
    instance.dialog.__orchids__destroy();
    app.deleteCurrentDialog();
};

module.exports = app;
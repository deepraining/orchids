"use strict";

/**
 * app singleton instance
 * @type {{}}
 */
var app = {};

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
        orchidsData,
        existedPagesCount = util.getPagesCount();


    // if user call back page by phone button, keep it
    // here we do not consider other action, like forward, refresh, for this is main for wechat webapp using
    window.onpopstate = app.onpopstate;

    util.resetPagesCount(); // every time start application, will change reset pages count

    // tell the first page and option by the parameter
    if (!!params.orchidsPage && !existedPagesCount) {
        orchidsPage = decodeURIComponent(params.orchidsPage);
        try {
            orchidsData = JSON.parse(decodeURIComponent(params.orchidsData));
        } catch (e) {
            orchidsData = {};
        }

        app.startPage(orchidsPage, orchidsData);
    }
    else {
        !!app.option.route && existedPagesCount > 1 && window.history.go(1 - existedPagesCount);
        app.startPage(pageName, data);
    }

    // first page initialize complete
    !!app.option.onFirstPageInitialized && app.option.onFirstPageInitialized();
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
            return app.dialogsInstances[idPrefix + id].dialog;
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

    if (keys.length + index < 0) return null;

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
    // destroy or hide
    instance.singleton ? instance.page.__orchids__hide(!0) : instance.page.__orchids__destroy();
    // call prev page's __orchids__show method
    prevInstance.page.__orchids__show();
    app.deleteCurrentPage();

    !!app.option.route && typeof app.option.onRouteChange == 'function' && app.option.onRouteChange();

    util.decreasePagesCount();
};


/**
 * back to page
 */
app.dialogBack = function () {
    var instance,
        prevInstance = app.getPrevDialog(),
        prevPageInstance = app.getCurrentPage(),
        prevInstanceIsDialog = !1;

    // if current dialogs remain 0, back action is invalid.
    if (Object.keys(app.dialogsInstances).length <= 0) return;

    instance = app.getCurrentDialog();
    // for result
    instance.forResult && (
        !!prevInstance ? (
            !!prevInstance.dialog.onDialogResult && prevInstance.dialog.onDialogResult(instance.dialog.__orchids__result || {}),
                prevInstanceIsDialog = !0
        ) : (
            !!prevPageInstance && !!prevPageInstance.page.onPageResult && prevPageInstance.page.onPageResult(instance.dialog.__orchids__result || {}),
                prevInstanceIsDialog = !1
        )
    );
    // destroy or hide
    instance.singleton ? instance.dialog.__orchids__hide() : instance.dialog.__orchids__destroy();
    prevInstanceIsDialog ? prevInstance.dialog.onShow() : !!prevPageInstance && prevPageInstance.page.onShow();
    app.deleteCurrentDialog();
};

module.exports = app;
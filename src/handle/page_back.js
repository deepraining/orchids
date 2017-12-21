
'use strict';

/**
 * back to prev page
 */
module.exports = () => {
    var instance,
        prevInstance;

    // if current pages remain only 1, back action is invalid.
    if (Object.keys(app.pageModels).length <= 1) return;

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
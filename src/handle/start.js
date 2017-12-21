
'use strict';

var util = require('../util');
var app = require('../app');
var urlParams = require('../util/url_params');
var onPopState = require('./on_pop_state');
var startPage = require('./start_page');

/**
 * start current application
 * if current url has orchidsPage parameter, it'will start the "orchidsPage" specified page, not the page "pageName"
 *
 * @param pageName
 * @param data Data to initialize a Page, and will be use by onCreate method
 */
module.exports = (pageName, data) => {

    // this must do in the first
    var existedPagesCount = util.getPagesCount();

    // if user call back page by phone button, keep it
    // here we do not consider other action, like forward, refresh, for this is main for mobile using
    window.onpopstate = onPopState;

    util.resetPagesCount(); // every time start application, will change reset pages count

    // tell the first page and option by the parameter
    if (urlParams.orchidsPage && !existedPagesCount) {
        var orchidsPage = decodeURIComponent(urlParams.orchidsPage);
        var orchidsData;
        try {
            orchidsData = JSON.parse(decodeURIComponent(urlParams.orchidsData));
        } catch (e) {
            orchidsData = {};
        }

        startPage(orchidsPage, orchidsData);
    }
    else {
        app.option.route && existedPagesCount > 1 && window.history.go(1 - existedPagesCount);
        startPage(pageName, data);
    }

    // first page initialize complete
    app.option.onFirstPageInitialized && app.option.onFirstPageInitialized();
};

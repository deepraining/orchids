
'use strict';

var originUrl = require('./origin_url');

var pagesCountCacheKey = 'orchids-pages-count: ' + originUrl;

module.exports = {
    increasePagesCount: () => {
        window.sessionStorage[pagesCountCacheKey] = !window.sessionStorage[pagesCountCacheKey] ? 1 :
        parseInt(window.sessionStorage[pagesCountCacheKey]) + 1;
    },
    decreasePagesCount: () => {
        window.sessionStorage[pagesCountCacheKey] = parseInt(window.sessionStorage[pagesCountCacheKey]) - 1;
    },
    getPagesCount: () => {
        return parseInt(window.sessionStorage[pagesCountCacheKey]) || 0;
    },
    resetPagesCount: () => {
        return window.sessionStorage[pagesCountCacheKey] = 0;
    }
};
"use strict";

/**
 * page id
 * @type {number}
 */
var pageId = 1,
    /**
     * fragment id
     * @type {number}
     */
    fragmentId = 1,
    /**
     * fragment container id
     * @type {number}
     */
    fragmentContainerId = 1;

module.exports = {
    getPageId: function() {
        return pageId++;
    },
    getFragmentId: function() {
        return fragmentId++;
    },
    getFragmentContainerId: function() {
        return fragmentContainerId++;
    }
};
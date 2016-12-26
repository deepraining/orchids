"use strict";

/**
 * window's width, get the content's width, not the viewport
 * @type {Number}
 */
var winWidth = window.innerWidth,
    winHeight = window.innerHeight;

module.exports = {
    __width__: winWidth,
    __height__: winHeight
};
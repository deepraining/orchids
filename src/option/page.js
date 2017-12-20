
'use strict';

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
    singleton: !1,
    /**
     * id selector / dom: custom root container for current page
     */
    rootContainer: void 0
};

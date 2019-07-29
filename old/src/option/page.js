
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

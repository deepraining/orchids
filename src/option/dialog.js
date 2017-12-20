
'use strict';

/**
 * default dialog option
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
     * whether to use animation when switch between dialogs
     * default: true
     */
    animate: !0,
    /**
     * whether to fade dialog when switch between dialogs
     * default: false
     */
    fadeInOut: !1,
    /**
     * animation direction of switching dialog
     * l2r/r2l/t2b/b2t(left-right, top-bottom), default: b2t
     */
    animateDirection: 'b2t',
    /**
     * whether current dialog is singleton or not
     */
    singleton: !1,
    /**
     * id selector / dom: custom root container for current dialog
     */
    rootContainer: void 0
};

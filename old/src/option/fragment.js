
'use strict';

/**
 * default fragment option
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
     * sub fragments
     *
     * note that, current fragment element should have a child node
     * which has 'data-orchids-sub-fragments' attribute,
     * and it must has position-relative or position-absolute width specified width and height
     * or fragments will not be rendered correctly
     * subFragments: [
     *     'name1',
     *     'name2'
     * ]
     */
    subFragments: void 0,
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
};

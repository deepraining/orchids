"use strict";

var util = require('./util'),
    idGenerator = require('./idGenerator'),
    /**
     * default initial style for the root element 'div'.
     * @type {{}}
     */
    defaultInitialStyle = {
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
        'z-index': '{{zIndex}}',
        background: '{{background}}',
        overflow: 'auto',
        '-webkit-overflow-scrolling': 'touch'
    },
    /**
     * default Page option
     * @type {{}}
     */
    defaultOption = {
        /**
         * background of root element
         */
        background: '#ffffff',
        /**
         * whether to use animation when switch between pages
         * default: true
         */
        animate: !0,
        /**
         * animation direction of switching page
         * horizontal/vertical, default: horizontal
         */
        animateDirection: 'horizontal',
        /**
         * 初始化html
         */
        initHtml: '',
        fragments: {
            name: 'fragmentOption1',
            name2: 'fragmentOption2'
        }

    };

function Page(option) {
    var self = this;
    self.option = util.extend(true, {}, defaultOption, option);

    self.init();
}

Page.prototype = {
    init: function() {
        var self = this,
            initialStyle = util.extend(true, {}, defaultInitialStyle),
            initialStyleString = void 0;

        self.option.animate && (
            initialStyle.transition = 'all .5s',
                initialStyle.transform = self.option.animateDirection == 'vertical' ? 'translateX(100%)' : 'translateY(100%)'
        );

        // make id
        self.id = idGenerator.getPageId();
        // make root el
        self.el = document.createElement('div');
        document.body.appendChild(el);


    },
    onCreate: function() {

    },

};
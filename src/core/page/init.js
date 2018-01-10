
'use strict';

var container = require('../../data/container');
var directionClasses = require('../../data/direction_classes');

/**
 * page's init action
 *
 * @param self
 */
module.exports = (self) => {
    // make id
    self.id = self.option.pageId;

    // before element is created
    self.beforeCreate && self.beforeCreate();

    // whether current page is the first page to render or not, for confirming to start current page with or without animation.
    self.__orchids__isFirstPage = self.id === 1;
    // make root el
    self.el = document.createElement('div');
    // data-orchids-page-id
    self.el.dataset.orchidsPageId = self.id;
    self.el.dataset.orchidsPageName = self.option.name;
    self.el.classList.add('orchids', 'orchids-page');
    // animation
    self.option.animate && self.el.classList.add('orchids-with-animation');
    // direction
    self.el.classList.add(directionClasses[self.option.animateDirection || 'r2l']);
    // fade
    self.option.fadeInOut && self.el.classList.add('orchids-with-fade');
    // singleton
    self.option.singleton && self.el.classList.add('orchids-page-singleton');
    // active
    (self.__orchids__isFirstPage || !self.option.animate) && self.el.classList.add('orchids-active');
    // background color
    self.option.backgroundColor && (self.el.style.backgroundColor = self.option.backgroundColor);

    // extra style
    if (self.option.style) {
        var styleKeys = Object.keys(self.option.style);
        if (styleKeys.length)
            styleKeys.forEach((key) => {
                self.el.style[key] = self.option.style[key]
            });
    }

    // add to container
    container.rootContainer.appendChild(self.el);

    // user custom initialization
    self.onCreate(self.__orchids__data);

    // route, if it is the first page, no route change
    self.option.route && !self.__orchids__isFirstPage && self.__orchids__routeForward();

    // render fragments
    self.option.fragments && self.option.fragments.length && self.__orchids__renderFragments();
};

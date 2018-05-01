
'use strict';

var logger = require('../../util/logger');
var extend = require('extend');
var container = require('../../data/container');

/**
 * page's renderFragments action
 *
 * @param self
 */
module.exports = (self) => {

    var fragmentsContainer = self.el.querySelector('[data-orchids-fragments]');
    if (!fragmentsContainer) {
        logger.error('Render fragments failed: no fragments container which should has "data-orchids-fragments" attribute.');
        return;
    }

    // guarantee the root element has `overflow: hidden` element
    fragmentsContainer.style.overflow = 'hidden';
    // fragment's width and height
    self.__orchids__fragmentWidth = fragmentsContainer.offsetWidth;
    self.__orchids__fragmentHeight = fragmentsContainer.offsetHeight;

    // create fragments container element
    self.__orchids__fragmentsContainer = document.createElement('div');
    self.__orchids__fragmentsContainer.classList.add('orchids-fragments-container');
    self.option.fragmentAnimate && self.__orchids__fragmentsContainer.classList.add('orchids-with-animation');

    if (self.option.fragmentAnimateDirection == 'vertical') {
        self.__orchids__fragmentsContainer.classList.add('orchids-vertical');
        self.__orchids__fragmentsContainer.style.height = self.option.fragments.length * self.__orchids__fragmentHeight + 'px';
    }
    else {
        self.__orchids__fragmentsContainer.classList.add('orchids-horizontal');
        self.__orchids__fragmentsContainer.style.width = self.option.fragments.length * self.__orchids__fragmentWidth + 'px';
    }

    // clear fragments root element inner html
    fragmentsContainer.innerHTML = '';
    fragmentsContainer.appendChild(self.__orchids__fragmentsContainer);

    self.option.fragments.forEach((fragmentName, index) => {
        var fragment = container.fragmentDefinitions[fragmentName];
        if (!fragment) {
            logger.error('Render fragment "' + fragmentName + '" failed: not registered.');
            return;
        }
        var fragmentOption = extend(!0, {}, fragment.option);
        fragmentOption.fragmentId = index + 1;
        fragmentOption.fragmentWidth = self.__orchids__fragmentWidth;
        fragmentOption.fragmentHeight = self.__orchids__fragmentHeight;
        fragmentOption.fragmentDirection = self.option.fragmentAnimateDirection;
        var instance = new fragment.fragment(fragmentOption);

        self.__orchids__fragmentsInstances[fragmentOption.fragmentId] = instance;
        // add fragment element to current root fragments container
        self.__orchids__fragmentsContainer.appendChild(instance.el);
    });
};


'use strict';

var logger = require('../../util/logger');
var extend = require('extend');
var container = require('../../data/container');

module.exports = (self) => {

    var fragmentsContainer = self.el.querySelector('[data-orchids-sub-fragments]');
    if (!fragmentsContainer) {
        logger.error('Render fragments failed: no fragments container which should has "data-orchids-sub-fragments" attribute.');
        return;
    }

    // guarantee the root fragments elements has `overflow: hidden` element
    fragmentsContainer.style.overflow = 'hidden';
    // fragment's width and height
    self.__orchids__subFragmentWidth = fragmentsContainer.offsetWidth;
    self.__orchids__subFragmentHeight = fragmentsContainer.offsetHeight;

    // create fragments container element
    self.__orchids__subFragmentsContainer = document.createElement('div');
    self.__orchids__subFragmentsContainer.classList.add('orchids-sub-fragments-container');
    self.option.subFragmentAnimate && self.__orchids__subFragmentsContainer.classList.add('orchids-with-animation');

    if (self.option.subFragmentAnimateDirection == 'vertical') {
        self.__orchids__subFragmentsContainer.classList.add('orchids-vertical');
        self.__orchids__subFragmentsContainer.style.height = self.option.subFragments.length * self.__orchids__subFragmentHeight + 'px';
    }
    else {
        self.__orchids__subFragmentsContainer.classList.add('orchids-horizontal');
        self.__orchids__subFragmentsContainer.style.width = self.option.subFragments.length * self.__orchids__subFragmentWidth + 'px';
    }

    // clear fragments root element inner html
    fragmentsContainer.innerHTML = '';
    fragmentsContainer.appendChild(self.__orchids__subFragmentsContainer);

    self.option.subFragments.forEach((fragmentName, index) => {
        var fragment = container.fragmentDefinitions[fragmentName];
        if (!fragment) {
            logger.error('Render fragment "' + fragmentName + '" failed: not registered.');
            return;
        }
        var fragmentOption = extend(!0, {}, fragment.option);
        fragmentOption.fragmentId = index + 1;
        fragmentOption.fragmentWidth = self.__orchids__subFragmentWidth;
        fragmentOption.fragmentHeight = self.__orchids__subFragmentHeight;
        fragmentOption.fragmentDirection = self.option.subFragmentAnimateDirection;
        var instance = new fragment.fragment(fragmentOption);

        self.__orchids__subFragmentsInstances[fragmentOption.fragmentId] = instance;
        // add sub fragment element to current root sub fragments container
        self.__orchids__subFragmentsContainer.appendChild(instance.el);
    });
};

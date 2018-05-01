
'use strict';

var logger = require('../../util/logger');
var extend = require('extend');
var container = require('../../data/container');

/**
 * page's showFragment action
 *
 * @param self
 * @param id
 */
module.exports = (self, id) => {
    if (!id) {
        logger.error('method showFragment needs a specified fragment id');
        return;
    }
    if (id === self.__orchids__currentFragmentId) return;

    var instance = self.__orchids__fragmentsInstances[id];
    if (!instance) {
        logger.error('fragment not found with id: ' + id + '.');
        return;
    }

    // create fragment if not created, or call __orchids__show method
    if (!instance.__orchids__initialized) {
        instance.onCreate();
        // create sub fragments
        instance.option.subFragments && instance.option.subFragments.length && instance.__orchids__renderSubFragments();
        instance.__orchids__initialized = !0;
    }
    else {
        instance.__orchids__show();
    }

    // call previous fragment __orchids__hide method
    var previousInstance = self.__orchids__fragmentsInstances[self.__orchids__currentFragmentId];
    previousInstance.__orchids__hide();

    // update current active fragment id
    self.__orchids__currentFragmentId = id;

    if (self.option.fragmentAnimateDirection == 'vertical')
        self.__orchids__fragmentsContainer.style.transform = 'translateY(' + (0 - self.__orchids__fragmentHeight * (id - 1)) + 'px)';
    else
        self.__orchids__fragmentsContainer.style.transform = 'translateX(' + (0 - self.__orchids__fragmentWidth * (id - 1)) + 'px)';
};

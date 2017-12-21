
'use strict';

var logger = require('../../util/logger');
var extend = require('../../util/extend');
var container = require('../../data/container');

module.exports = (self, id) => {
    if (!id) {
        logger.error('method showFragment needs a specified fragment id');
        return;
    }
    if (id == self.__orchids__currentSubFragmentId) {
        return;
    }
    var instance = self.__orchids__subFragmentsInstances[id];
    if (!instance) {
        logger.error('fragment not found with id: ' + id + '.');
        return;
    }

    // create fragment if not created, or call onShow method
    if (!instance.__orchids__initialized) {
        instance.onCreate && instance.onCreate();
        instance.__orchids__initialized = !0;
    }
    else
        instance.onShow && instance.onShow();

    // call previous fragment onHide method
    var previousInstance = self.__orchids__subFragmentsInstances[self.__orchids__currentSubFragmentId];
    previousInstance.onHide && previousInstance.onHide();
    // update current active fragment id
    self.__orchids__currentSubFragmentId = id;
    // create sub fragments if not created
    instance.option.subFragments && instance.option.subFragments.length && instance.__orchids__renderSubFragments();

    if (self.option.subFragmentAnimateDirection == 'vertical')
        self.__orchids__subFragmentsContainer.style.transform = 'translateY(' + (0 - self.__orchids__subFragmentHeight * (id - 1)) + 'px)';
    else
        self.__orchids__subFragmentsContainer.style.transform = 'translateX(' + (0 - self.__orchids__subFragmentWidth * (id - 1)) + 'px)';

};

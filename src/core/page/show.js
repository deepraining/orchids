
'use strict';

module.exports = (self, isSingleton, forResult, prepareResultData) => {
    if (isSingleton) {
        self.el.classList.add('orchids-active');
        // route, if it is the first page, no route change
        self.option.route && !self.__orchids__isFirstPage && self.__orchids__routeForward();
    }

    self.onShow();
    // call active fragment's __orchids__show
    self.__orchids__fragmentsInstances[self.__orchids__currentFragmentId] &&
    self.__orchids__fragmentsInstances[self.__orchids__currentFragmentId].__orchids__show();

    forResult && self.prepareForResult(prepareResultData);
};

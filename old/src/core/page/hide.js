
'use strict';

module.exports = (self, isSingleton) => {
    // call active fragment's __orchids__hide
    self.__orchids__fragmentsInstances[self.__orchids__currentFragmentId] &&
    self.__orchids__fragmentsInstances[self.__orchids__currentFragmentId].__orchids__hide();

    self.onHide();

    isSingleton && self.el.classList.remove('orchids-active');
};

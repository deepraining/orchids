
'use strict';

module.exports = (self, isSingleton) => {
    // call active fragment's __orchids__hide
    try {
        self.__orchids__fragmentsInstances[self.__orchids__currentFragmentId].__orchids__hide();
    }
    catch (e) {}

    self.onHide();

    isSingleton && (self.el.classList.remove('orchids-active'));
};

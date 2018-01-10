
'use strict';

var vars = require('../../data/vars');

module.exports = (self) => {
    // call all fragments's __orchids__destroy
    Object.keys(self.__orchids__fragmentsInstances).forEach((id) => {
        self.__orchids__fragmentsInstances[id].__orchids__destroy();
    });
    self.onDestroy();

    self.el.classList.remove('orchids-active');
    if (self.option.animate) {
        // has animation
        setTimeout(() => {
            self.el.remove()
        }, vars.animateTime)
    }
    else
    // no animation
        self.el.remove();
};

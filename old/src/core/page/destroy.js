
'use strict';

var vars = require('../../data/vars');

module.exports = (self) => {
    // call all fragments's __orchids__destroy
    Object.keys(self.__orchids__fragmentsInstances).forEach((id) => {
        self.__orchids__fragmentsInstances[id].__orchids__destroy();
    });
    self.onDestroy();
};

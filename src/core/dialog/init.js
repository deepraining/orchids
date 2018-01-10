
'use strict';

var container = require('../../data/container');
var directionClasses = require('../../data/direction_classes');

/**
 * dialog's init action
 *
 * @param self
 */
module.exports = (self) => {
    // make id
    self.id = self.option.dialogId;

    // before element is created
    self.beforeCreate && self.beforeCreate();

    // make root el
    self.el = document.createElement('div');
    // data-orchids-dialog-id
    self.el.dataset.orchidsDialogId = self.id;
    self.el.dataset.orchidsDialogName = self.option.name;
    self.el.classList.add('orchids', 'orchids-dialog');
    // animation
    self.option.animate && self.el.classList.add('orchids-with-animation');
    // direction
    self.el.classList.add(directionClasses[self.option.animateDirection || 'b2t']);
    // fade
    self.option.fadeInOut && self.el.classList.add('orchids-with-fade');
    // singleton
    self.option.singleton && self.el.classList.add('orchids-dialog-singleton');
    // active
    !self.option.animate && self.el.classList.add('orchids-active');
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
};

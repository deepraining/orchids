
'use strict';

module.exports = (self) => {
    // make id
    self.id = self.option.fragmentId;
    // whether current fragment is the first fragment to render or not
    self.__orchids__isFirstFragment = self.id == 1;
    // make root el
    self.el = document.createElement('div');
    // data-orchids-fragment-id
    self.el.dataset.orchidsFragmentId = self.id;
    self.el.dataset.orchidsFragmentName = self.option.name;

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

    self.el.classList.add('orchids', 'orchids-fragment');
    
    // left, top, width, height
    if (self.option.fragmentDirection == 'vertical') {
        self.el.classList.add('orchids-vertical');
        self.el.style.top = self.option.fragmentHeight * (self.id - 1) + 'px';
        self.el.style.height = self.option.fragmentHeight + 'px';
    }
    else {
        self.el.classList.add('orchids-horizontal');
        self.el.style.left = self.option.fragmentWidth * (self.id - 1) + 'px';
        self.el.style.width = self.option.fragmentWidth + 'px';
    }

    // user custom initialization
    if (self.__orchids__isFirstFragment) {
        self.__orchids__initialized = !0;
        self.onCreate();
            // render fragments
        self.option.subFragments && self.option.subFragments.length && self.__orchids__renderSubFragments();
    }
};

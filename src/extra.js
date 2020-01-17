import share, { stacks, optionsCollection } from './share';
import { decPagesCount, getPagesCount, resetPagesCount } from './count';

const directionToClass = {
  l2r: 'orchids-left-to-right',
  r2l: 'orchids-right-to-left',
  t2b: 'orchids-top-to-bottom',
  b2t: 'orchids-bottom-to-top',
};

const defaultOptions = {
  animate: !0,
  direction: 'r2l',
  route: !0,
};

export const makePage = (name, attributes, options) => {
  // Record options
  optionsCollection[name] = { ...defaultOptions, ...options };

  function Page({ id, parent }, data) {
    this.id = id;
    this.name = name;
    this.options = { ...optionsCollection[name] };

    this.beforeCreate();

    this.el = document.createElement('div');

    // data-orchids-id
    this.el.dataset.orchidsId = this.id;
    this.el.dataset.orchidsName = this.name;
    this.el.classList.add('orchids', 'orchids-page');

    if (this.options.animate) {
      this.el.classList.add('orchids-with-animation');
      this.el.classList.add(directionToClass[this.options.direction]);
    }

    if (this.options.backgroundColor) {
      this.el.style.backgroundColor = this.options.backgroundColor;
    }

    if (this.options.style) {
      Object.keys(this.options.style).forEach(key => {
        this.el.style[key] = this.options.style[key];
      });
    }

    parent.appendChild(this.el);

    this.created(data);
  }

  Page.prototype = {
    constructor: Page,
    beforeCreate() {},
    created() {},
    afterAnimate() {},
    beforeDestroy() {},
    destroyed() {},
    beforeHide() {},
    afterShow() {},
  };

  Object.keys(attributes).forEach(attr => {
    Page.prototype[attr] = attributes[attr];
  });

  return Page;
};

const onHashChange = () => {
  if (share.pushingHash) {
    // reset
    share.pushingHash = !1;
    return;
  }

  while (stacks.length > 1) {
    const instance = stacks.pop();
    const prevInstance = stacks[stacks.length - 1];
    instance.beforeDestroy();
    if (instance.options.animate) {
      instance.el.classList.remove('orchids-active');
      setTimeout(() => {
        instance.el.remove();
        instance.destroyed();
        if (prevInstance) prevInstance.afterShow();
      }, 500);
    } else {
      instance.el.remove();
      instance.destroyed();
      if (prevInstance) prevInstance.afterShow();
    }

    if (instance.options.route) break;
  }

  decPagesCount();
};

export const initApp = () => {
  // This must be done in the first.
  const existedPagesCount = getPagesCount();
  resetPagesCount();

  if (existedPagesCount > 1) window.history.go(1 - existedPagesCount);

  if (window.location.href.indexOf('#') === -1) {
    window.location.replace(window.location.href + '#/');
  }
  window.onhashchange = onHashChange;
};

export const getAllRoutePages = () => stacks.filter(p => p.options.route);

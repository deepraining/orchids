import share, { stacks } from './share';
import { getPagesCount, resetPagesCount } from './count';

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
  function Page({ id, parent }, data) {
    this.id = id;
    this.name = name;
    this.options = { ...defaultOptions, ...options };
    this.orchidsIsFirstPage = this.id === 1;

    if (this.orchidsIsFirstPage) {
      // If first page, route must be true
      this.options.route = !0;
    }

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

    if (this.options.route && !this.orchidsIsFirstPage) {
      share.pushHash = !0;
      window.location.hash = `${this.name}/${this.id}`;
    } else if (this.options.route && this.orchidsIsFirstPage) {
      this.el.classList.add('orchids-active');
    }

    parent.appendChild(this.el);

    this.created(data);
  }

  Page.prototype = {
    constructor: Page,
    beforeCreate() {},
    created() {},
    beforeDestroy() {},
    destroyed() {},
  };

  Object.keys(attributes).forEach(attr => {
    Page.prototype[attr] = attributes[attr];
  });

  return Page;
};

export const onHashChange = () => {
  if (share.pushHash) {
    // reset
    share.pushHash = !1;
    return;
  }

  while (stacks.length > 1) {
    const item = stacks.pop();
    item.instance.beforeDestroy();
    if (item.instance.animate) {
      item.instance.el.classList.remove('orchids-active');
      setTimeout(() => {
        item.instance.el.remove();
        item.instance.destroyed();
      }, 500);
    } else {
      item.instance.el.remove();
      item.instance.destroyed();
    }

    if (item.instance.options.route) break;
  }
};

export const initApp = () => {
  // This must be done in the first.
  const existedPagesCount = getPagesCount();
  resetPagesCount();

  if (existedPagesCount > 1) window.history.go(1 - existedPagesCount);

  window.location.hash = '/';
  window.onhashchange = onHashChange;
};

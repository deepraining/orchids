import share, { definitions, stacks } from './share';
import { makePage, initApp, onHashChange } from './extra';
import { decPagesCount, incPagesCount } from './count';

export const init = ({ root }) => {
  if (share.initialized) throw new Error('Cant init after start a page.');

  if (root) {
    share.root = root;
    document.body.classList.add('orchids-custom-container');
  }
};

export const registerPage = (name, attributes = {}, options = {}) => {
  if (!name || typeof name !== 'string') {
    throw new Error('Page name should be non empty string.');
  }

  if (definitions[name]) {
    throw new Error(`Page[${name}] has already been registered.`);
  }

  definitions[name] = makePage(name, attributes, options);
};

export const startPage = (name, data) => {
  if (!name || typeof name !== 'string') {
    throw new Error('Page name should be non empty string.');
  }

  if (!share.initialized) {
    initApp();
    share.initialized = !0;
  }

  if (!definitions[name]) {
    throw new Error(`Page[${name}] is not registered.`);
  }

  const instance = new definitions[name](
    { id: share.id, parent: share.root },
    data,
  );
  const { id } = share;

  stacks.push({ id, name, instance });

  if (instance.options.animate) incPagesCount();

  if (!instance.orchidsIsFirstPage && instance.options.animate) {
    // Show page, and delay 100 ms to guarantee that the animation is ok
    setTimeout(() => {
      instance.el.classList.add('orchids-active');
    }, 100);
  }

  share.id += 1;
};

export const back = () => {
  if (stacks.length < 2) return;

  const lastItem = stacks[stacks.length - 1];
  if (lastItem.instance.options.route) {
    decPagesCount();
    onHashChange();
  } else {
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
  }
};

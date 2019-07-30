import share, { definitions, stacks } from './share';
import { makePage, initApp } from './extra';
import { incPagesCount } from './count';

/**
 * Register a Page.
 * @param name Page name.
 * @param attributes Page attributes.
 * @param options Page options.
 */
export const registerPage = (name, attributes = {}, options = {}) => {
  if (!name || typeof name !== 'string') {
    throw new Error('Page name should be non empty string.');
  }

  if (definitions[name]) {
    throw new Error(`Page[${name}] has already been registered.`);
  }

  definitions[name] = makePage(name, attributes, options);
};

/**
 * Start a Page
 * @param name Page name.
 * @param data Page data pass to `created` hook.
 */
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

  stacks.push(instance);

  if (instance.options.animate) incPagesCount();

  if (!instance.orchidsIsFirstPage && instance.options.animate) {
    // Show page, and delay 100 ms to guarantee that the animation is ok
    setTimeout(() => {
      instance.el.classList.add('orchids-active');
    }, 100);
  }

  share.id += 1;
};

/**
 * Back a Page.
 */
export const back = () => {
  if (stacks.length < 2) return;

  const lastInstance = stacks[stacks.length - 1];
  if (lastInstance.options.route) {
    window.history.back();
  } else {
    const instance = stacks.pop();
    instance.beforeDestroy();
    if (instance.options.animate) {
      instance.el.classList.remove('orchids-active');
      setTimeout(() => {
        instance.el.remove();
        instance.destroyed();
      }, 500);
    } else {
      instance.el.remove();
      instance.destroyed();
    }
  }
};

/**
 * Init application.
 * @param root Root container.
 */
export const init = ({ root }) => {
  if (share.initialized) throw new Error('Cant init after start a page.');

  if (root) {
    share.root = root;
    document.body.classList.add('orchids-custom-container');
  }
};

/**
 * Get Page by index.
 * @param index
 * @returns {*}
 */
export const getPage = index => stacks[index || 0];

/**
 * Get pages' length.
 * @returns {number}
 */
export const getPagesLength = () => stacks.length;

/**
 * Get current Page.
 * @returns {*}
 */
export const getCurrentPage = () => stacks[stacks.length - 1];

/**
 * Get last Page which has route.
 * @returns {*}
 */
export const getLastRoutePage = () => {
  for (let len = stacks.length - 1; len > -1; len -= 1) {
    const instance = stacks[len];
    if (instance.options.route) return instance;
  }

  return undefined;
};

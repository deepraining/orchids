import share, { definitions, stacks, optionsCollection } from './share';
import { makePage, initApp, getAllRoutePages } from './extra';
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
 * @param options Options to start current page.
 */
export const startPage = (name, data, options = {}) => {
  if (!name || typeof name !== 'string') {
    throw new Error('Page name should be non empty string.');
  }

  const definition = definitions[name];

  if (!definition) {
    throw new Error(`Page[${name}] is not registered.`);
  }

  const pageOptions = optionsCollection[name];
  const { beforeAppInitialized = !1 } = options;
  const runBeforeAppInitialized =
    !share.initialized && !pageOptions.route && beforeAppInitialized;

  if (!runBeforeAppInitialized) {
    if (!share.initialized) {
      if (stacks.length) {
        throw new Error(
          'Cant init application, for some pages having been existed.',
        );
      }
      if (!pageOptions.route) {
        throw new Error('First page should have options.route equals to true.');
      }

      initApp();
      share.initialized = !0;
    }
  }

  // eslint-disable-next-line new-cap
  const instance = new definition({ id: share.id, parent: share.root }, data);

  stacks.push(instance);

  instance.isFirstPage = stacks.length === 1;

  if (instance.options.route) {
    if (!instance.isFirstPage) {
      share.pushingHash = !0;
      window.location.hash = `${instance.name}/${instance.id}`;

      if (instance.options.animate) {
        // Show page, and delay 100 ms to guarantee that the animation is ok
        setTimeout(() => {
          instance.el.classList.add('orchids-active');
        }, 100);
      }
    } else if (instance.options.animate) {
      instance.el.classList.add('orchids-active');
    }
    incPagesCount();
  } else if (instance.options.animate) {
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
  // Initialized, first page must be a route page.
  if (share.initialized && stacks.length < 2) return;

  const lastInstance = stacks[stacks.length - 1];

  // When not initialized, stacks cant be empty.
  if (!lastInstance) return;

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
export const getPage = (index = 0) =>
  stacks[index < 0 ? stacks.length + index : index];

/**
 * Get route Page by index.
 * @param index
 * @returns {*}
 */
export const getRoutePage = (index = 0) => {
  const pages = getAllRoutePages();
  return pages[index < 0 ? pages.length + index : index];
};

/**
 * Get pages' length.
 * @returns {number}
 */
export const getPagesLength = () => stacks.length;

/**
 * Get route pages' length.
 * @returns {number}
 */
export const getRoutePagesLength = () => getAllRoutePages().length;

/**
 * Get current Page.
 * @returns {*}
 */
export const getCurrentPage = () => getPage(-1);

/**
 * Get current Page.
 * @returns {*}
 */
export const getCurrentRoutePage = () => getRoutePage(-1);

/**
 * Get pages by name.
 * @param name
 * @returns {*[]}
 */
export const getPages = name =>
  !name ? [...stacks] : stacks.filter(p => p.name === name);

/**
 * Get Route pages by name
 * @param name
 * @returns {*[]}
 */
export const getRoutePages = name => {
  const pages = getAllRoutePages();
  return !name ? [...pages] : pages.filter(p => p.name === name);
};

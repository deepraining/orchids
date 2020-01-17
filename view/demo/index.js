import '../../src/styles/index.less';
import {
  // init,
  registerPage,
  startPage,
  back,
  getPage,
  getRoutePage,
  getPagesLength,
  getRoutePagesLength,
  getCurrentPage,
  getCurrentRoutePage,
  getPages,
  getRoutePages,
} from '../../src';

// init({root: document.getElementById('container')});

window.startPage = startPage;
window.getPage = getPage;
window.getRoutePage = getRoutePage;
window.getPagesLength = getPagesLength;
window.getRoutePagesLength = getRoutePagesLength;
window.getCurrentPage = getCurrentPage;
window.getCurrentRoutePage = getCurrentRoutePage;
window.getPages = getPages;
window.getRoutePages = getRoutePages;

registerPage('a', {
  beforeCreate() {
    console.log('a: beforeCreate');
  },
  created({ title, content }) {
    console.log('a: created');
    document.title = title;
    this.el.innerHTML = content;
  },
  afterAnimate() {
    console.log('a: afterAnimate');
  },
  beforeDestroy() {
    console.log('a: beforeDestroy');
  },
  destroyed() {
    console.log('a: destroyed');
  },
  beforeHide() {
    console.log('a: beforeHide');
  },
  afterShow() {
    console.log('a: afterShow');
  },
});

registerPage(
  'b',
  {
    beforeCreate() {
      console.log('b: beforeCreate');
    },
    created({ title, content }) {
      console.log('b: created');
      document.title = title;
      this.el.innerHTML = content;
    },
    afterAnimate() {
      console.log('b: afterAnimate');
    },
    beforeDestroy() {
      console.log('b: beforeDestroy');
    },
    destroyed() {
      console.log('b: destroyed');
    },
    beforeHide() {
      console.log('b: beforeHide');
    },
    afterShow() {
      console.log('b: afterShow');
    },
  },
  {
    backgroundColor: '#ff0000',
    route: !1,
    direction: 'b2t',
  },
);

registerPage(
  'c',
  {
    beforeCreate() {
      console.log('c: beforeCreate');
    },
    created({ title, content }) {
      console.log('c: created');
      document.title = title;
      this.el.innerHTML = content;
    },
    afterAnimate() {
      console.log('c: afterAnimate');
    },
    beforeDestroy() {
      console.log('c: beforeDestroy');
    },
    destroyed() {
      console.log('c: destroyed');
    },
    beforeHide() {
      console.log('c: beforeHide');
    },
    afterShow() {
      console.log('c: afterShow');
    },
  },
  {
    animate: !1,
    style: {
      color: '#ff0000',
    },
  },
);

startPage('a', { title: 'aa', content: 'aaa' });
// startPage('b', { title: 'bb', content: 'bbb' });

document.getElementById('back').addEventListener(
  'click',
  () => {
    back();
  },
  !1,
);
document.getElementById('action-1').addEventListener(
  'click',
  () => {
    startPage('a', { title: 'aaaaaaa', content: 'aaaaaaaaaaaaaaa' });
  },
  !1,
);
document.getElementById('action-2').addEventListener(
  'click',
  () => {
    startPage('b', { title: 'bbbbbbbbb', content: 'bbbbbbbbbbbbbbbbbb' });
  },
  !1,
);
document.getElementById('action-3').addEventListener(
  'click',
  () => {
    startPage('c', { title: 'cccccccccc', content: 'cccccccccccccccccccc' });
  },
  !1,
);

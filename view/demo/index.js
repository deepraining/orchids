import '../../src/styles/index.less';
import { registerPage, startPage } from '../../src';

registerPage('a', {
  beforeCreate() {
    console.log('a: beforeCreate');
  },
  created({ title, content }) {
    document.title = title;
    this.el.innerHTML = content;
  },
  beforeDestroy() {
    console.log('a: beforeDestroy');
  },
  destroyed() {
    console.log('a: destroyed');
  },
});

startPage('a', { title: 'aa', content: 'aaa' });

document.getElementById('action-1').addEventListener(
  'click',
  () => {
    startPage('a', { title: 'aaaaaaa', content: 'aaaaaaaaaaaaaaa' });
  },
  !1,
);

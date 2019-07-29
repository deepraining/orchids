/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies */
import tasksPlugin from 'lila-tasks';
import webpackPlugin from 'lila-webpack';
import webpackConfigPlugin from './scripts/lila-webpack-config';

export default lila => {
  tasksPlugin(lila);
  webpackPlugin(lila);
  webpackConfigPlugin(lila);

  const { getSettings, setSetting } = lila;
  const [defaultEntry] = getSettings(['defaultEntry']);

  setSetting('src', 'view');

  return ({ entry }) => ({
    tasks: [
      '@lila/webpack',
      [
        '@lila/move',
        {
          source: 'build/index.html',
          target: entry === defaultEntry ? undefined : `build/${entry}.html`,
        },
      ],
    ],
  });
};

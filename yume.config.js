
"use strict";

const moment = require('moment');

const packageJson = require('./package.json');

module.exports = {
    // module definition
    modules: {
        index: {
            js: 'src/index.js',
            filename: 'orchids',
            library: 'orchids',
            libraryTarget: "umd"
        },
        demo: {
            html: 'demo/index.html',
            js: 'demo/index.js'
        },
        'demo-no-route': {
            html: 'demo/no-route.html',
            js: 'demo/no-route.js'
        },
        'demo-custom-container': {
            html: 'demo/custom-container.html',
            js: 'demo/custom-container.js'
        },
        example: {
            html: 'example/index.html',
            js: 'example/index.js'
        },
        'example-no-route': {
            html: 'example/no-route.html',
            js: 'example/no-route.js'
        },
        'example-custom-container': {
            html: 'example/custom-container.html',
            js: 'example/custom-container.js'
        }
    },
    banner: `
    orchids v${packageJson.version}

    https://github.com/senntyou/orchids

    @senntyou <jiangjinbelief@163.com>

    ${moment().format('YYYY-MM-DD HH:mm:ss')}
    `
};


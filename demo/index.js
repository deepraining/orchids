

require('bootstrap/dist/css/bootstrap.css');
const VConsole = require('vconsole');

const orchids = require('../src');

new VConsole();

orchids.init({
    route: !0,
    onFirstPageInitialized: function() {
        console.log('first page initialized');
    },
    onRouteChange: function () {
        console.log('route change');
    }
});

require('../exec/common')(orchids);

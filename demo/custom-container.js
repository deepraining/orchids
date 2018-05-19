

require('bootstrap/dist/css/bootstrap.css');

const orchids = require('../src');

orchids.init({
    route: !0,
    onFirstPageInitialized: function() {
        console.log('first page initialized');
    },
    onRouteChange: function () {
        console.log('route change');
    },
    container: 'container'
});

require('../exec/common')(orchids);

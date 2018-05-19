

require('bootstrap/dist/css/bootstrap.css');

const orchids = require('../src');

orchids.init({
    onFirstPageInitialized: function() {
        console.log('first page initialized');
    },
    onRouteChange: function () {
        console.log('route change');
    }
});

require('../exec/common')(orchids);



require('bootstrap/dist/css/bootstrap.css');
require('../dist/orchids.css');
const orchids = require('../dist/orchids');

orchids.init({
    onFirstPageInitialized: function() {
        console.log('first page initialized');
    },
    onRouteChange: function () {
        console.log('route change');
    }
});

require('../exec/common')(orchids);

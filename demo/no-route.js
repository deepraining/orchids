orchids.init({
    onFirstPageInitialized: function() {
        console.log('first page initialized');
    },
    onRouteChange: function () {
        console.log('route change');
    }
});

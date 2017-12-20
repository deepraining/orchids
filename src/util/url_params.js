
'use strict';

var params = {};
!!location.search && (
    location.search.slice(1).split('&').forEach((item) => {
        var itemArray = item.split('=');
        params[itemArray[0]] = itemArray[1];
    })
);

module.exports = params;

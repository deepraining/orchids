
'use strict';

var params = require('./url_params');

var paramsKeys = Object.keys(params);
var query = '';

var exclude = {
    orchidsPage: !0,
    orchidsData: !0
};

paramsKeys.forEach((key) => {
    !exclude[key] && (query += ('&' + key + '=' + params[key]));
});

var originUrl = location.origin + location.pathname + (query ? '?' + query.slice(1) : '');

module.exports = originUrl;

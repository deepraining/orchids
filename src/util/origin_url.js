
'use strict';

var params = require('./url_params');

var paramsKeys = Object.keys(params);
var query = '';

paramsKeys.forEach((key) => {
    key.slice(0, 7) !== 'orchids' && (query += ('&' + key + '=' + params[key]));
});

var originUrl = location.origin + location.pathname + (query ? '?' + query.slice(1) : '');

module.exports = originUrl;


'use strict';

var urlParams = require('../../util/url_params');

module.exports = (self) => {

    urlParams.orchidsPage = self.option.name;
    urlParams.orchidsId = self.id;

    var searchString = '';
    Object.keys(urlParams).forEach((key) => {
        searchString += '&' + key + '=' + (urlParams[key] || '');
    });

    history.pushState({pageId: self.id}, null, '?' + searchString.slice(1));
};

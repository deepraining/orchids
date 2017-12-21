
'use strict';

var urlParams = require('../../util/url_params');

module.exports = (self) => {

    urlParams.orchidsPage = encodeURIComponent(self.option.name);
    urlParams.orchidsData = encodeURIComponent(JSON.stringify(self.__orchids__data));

    var searchString = '';
    Object.keys(urlParams).forEach((key) => {
        searchString += '&' + key + '=' + (urlParams[key] || '');
    });

    history.pushState({pageId: self.id}, null, '?' + searchString.slice(1));
};


'use strict';

var urlParams = require('../../util/url_params');
var vars = require('../../data/vars');

module.exports = (self) => {

    urlParams.orchidsPage = self.option.name;
    urlParams.orchidsId = self.id;

    var searchString = '';
    Object.keys(urlParams).forEach((key) => {
        searchString += '&' + key + '=' + (urlParams[key] || '');
    });

    vars.pushHash = !0;
    // history.pushState({pageId: self.id}, null, '?' + searchString.slice(1));
    window.location.hash = self.option.name + '/' + self.id;
};

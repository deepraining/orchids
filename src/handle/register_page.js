
'use strict';

var container = require('../data/container');
var logger = require('../util/logger');
var extend = require('../util/extend');
var makePageDefinition = require('../make/page_definition');
var makeNewPage = require('../core/page');
var defaultPageOption = require('../option/page');
var app = require('../app');

/**
 * register a Page Object
 *
 * @param name Name of page
 * @param attributes Attributes to be extended to new Page Object
 * @param option Option to initialize a Page
 * @param parentName Parent Page Object
 */
module.exports = (name, attributes, option, parentName) => {
    // all parent extend attributes
    var allParentAttributes = [];
    // all parent options
    var allParentOption = [];

    /**
     * get all parent attributes
     *
     * @param parentName
     */
    var getParentAttributes = (parentName) => {
        var parent = container.pageDefinitions[parentName],
            parentOption = parent.option,
            parentAttributes = container.pageAttributes[parentName];

        parentAttributes && allParentAttributes.unshift(parentAttributes);
        parentOption && allParentOption.unshift(parentOption);
        parent.parent && getParentAttributes(parent.parent);
    };

    if (!name || typeof name != 'string') {
        logger.throwError('"' + JSON.stringify(name) + '" is not a valid page name.');
        return;
    }

    if (container.pageAttributes[name]) {
        logger.throwError('page "' + name + '" has been registered.');
        return;
    }

    if (arguments.length == 1) {
        logger.error('Register page "' + name + '" without extend attributes.');
        return;
    }
    // (name, attr)
    else if (arguments.length == 2) {
        option = {};
        parentName = void 0;
    }
    // (name, attr, parent)
    else if (arguments.length == 3 && typeof arguments[2] == 'string') {
        parentName = option;
        option = {};
    }

    // put attributes to pageAttributes container
    container.pageAttributes[name] = attributes;

    // new Page Object
    var newPage = makeNewPage();
    var pageOption = extend(!0, {}, defaultPageOption);

    // has parent
    if (parentName) {
        getParentAttributes(parentName);

        allParentAttributes.forEach((item) => {
            extend(!0, newPage.prototype, item);
        });

        allParentOption.forEach((item) => {
            extend(!0, pageOption, item);
        });
    }

    extend(!0, newPage.prototype, attributes);
    extend(!0, pageOption, option);

    pageOption.name = name;
    pageOption.route = app.option.route;
    container.pageDefinitions[name] = makePageDefinition(pageOption, newPage, parentName, pageOption.singleton);
};

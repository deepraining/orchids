
'use strict';

var container = require('../data/container');
var logger = require('../util/logger');
var extend = require('extend');
var makeFragmentDefinition = require('../make/fragment_definition');
var makeNewFragment = require('../core/fragment');
var defaultFragmentOption = require('../option/fragment');

/**
 * register a Fragment Object
 *
 * @param name Name of fragment
 * @param attributes Attributes to be extended to new Fragment Object
 * @param option Option to initialize a Fragment
 * @param parentName Parent Fragment Object
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
        var parent = container.fragmentDefinitions[parentName],
            parentOption = parent.option,
            parentAttributes = container.fragmentAttributes[parentName];

        parentAttributes && allParentAttributes.unshift(parentAttributes);
        parentOption && allParentOption.unshift(parentOption);
        parent.parent && getParentAttributes(parent.parent);
    };

    if (!name || typeof name != 'string') {
        logger.throwError('"' + JSON.stringify(name) + '" is not a valid fragment name.');
        return;
    }

    if (container.fragmentAttributes[name]) {
        logger.throwError('fragment "' + name + '" has been registered.');
        return;
    }

    if (arguments.length == 1) {
        logger.error('Register fragment "' + name + '" without extend attributes.');
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

    // put attributes to fragmentAttributes container
    container.fragmentAttributes[name] = attributes;

    // new Fragment Object
    var newFragment = makeNewFragment();
    var fragmentOption = extend(!0, {}, defaultFragmentOption);

    // has parent
    if (parentName) {
        getParentAttributes(parentName);

        allParentAttributes.forEach((item) => {
            extend(!0, newFragment.prototype, item);
        });

        allParentOption.forEach((item) => {
            extend(!0, fragmentOption, item);
        });
    }

    extend(!0, newFragment.prototype, attributes);
    extend(!0, fragmentOption, option);

    fragmentOption.name = name;
    container.fragmentDefinitions[name] = makeFragmentDefinition(fragmentOption, newFragment, parentName);
};

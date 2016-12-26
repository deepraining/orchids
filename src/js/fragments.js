"use strict";

/**
 * all registered fragment Object container
 * format: {
 *     namespace: {
 *         namespace: {
 *             ultimateName: Fragment
 *         }
 *     }
 * }
 * @type {{}}
 */
var fragments = {},
    /**
     * all fragment instances container
     * format: {
     *     fragmentId: {
     *         name: 'namespace.namespace.ultimateName',
     *         instance: instanceOfFragment
     *     }
     * }
     * @type {{}}
     */
    instances = {},
    /**
     * register a Fragment Object
     * @param fragmentName new name of new Fragment Object, support dot semantic, for instance, "foo.bar.name"
     * @param extendAttributes attributes to be extended to new Fragment Object
     * @param superFragment super Fragment Object, default is Fragment
     */
    registerFragment = function (fragmentName, extendAttributes, superFragment) {

    },
    /**
     * initialize a Fragment and show it
     * @param fragmentName the name of a Fragment Object
     * @param params
     * @param option
     */
    startFragment = function (fragmentName, params, option) {

    };


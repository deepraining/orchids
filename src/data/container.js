
'use strict';

module.exports = {
    /**
     * root container
     */
    rootContainer: document.body,
    /**
     * container of all registered pages
     *
     * @type {{}}
     */
    pages: {
        /**
         * pageName: {
         *     option: option,
         *     parent: void 0, // parent page name
         *     page: Page // Page Object
         * }
         */
    },
    /**
     * container of all registered Pages Attributes
     *
     * @type {{}}
     */
    pagesAttributes: {
        /**
         * pageName: {
         *     fieldName: attr/method
         * }
         */
    },
    /**
     * container of all initialized Page instances
     *
     * @type {{}}
     */
    pagesInstances: {
        /**
         * // for instance id-1, id-2. Simple number id is array, could not refactor sequence
         * 'id'-id: {
         *     name: pageName, // Page name
         *     forResult: true/false, // whether current page is initialized by startPageForResult
         *     page: Page, // Page instance
         *     singleton: true/false // whether is singleton instance
         * }
         */
    },
    /**
     * container of all initialized singleton Page instances
     *
     * @type {{}}
     */
    singletonPagesInstances: {
        /**
         * pageName: {
         *     id: id, // page id
         *     page: Page // Page instance
         * }
         */
    },
    /**
     * container of all registered dialogs
     *
     * @type {{}}
     */
    dialogs: {
        /**
         * dialogName: {
         *     option: option,
         *     parent: void 0, // parent dialog name
         *     dialog: Dialog // Dialog Object
         * }
         */
    },
    /**
     * container of all registered Dialogs Attributes
     *
     * @type {{}}
     */
    dialogsAttributes: {
        /**
         * dialogName: {
         *     fieldName: attr/method
         * }
         */
    },
    /**
     * container of all initialized Dialog instances
     *
     * @type {{}}
     */
    dialogsInstances: {
        /**
         * // for instance id-1, id-2. Simple number id is array, could not refactor sequence
         * 'id'-id: {
         *     name: dialogName, // Dialog name
         *     forResult: true/false, // whether current dialog is initialized by startDialogForResult
         *     dialog: Dialog, // Dialog instance
         *     singleton: true/false // whether is singleton instance.
         * }
         */
    },
    /**
     * container of all initialized singleton Dialog instances
     *
     * @type {{}}
     */
    singletonDialogsInstances: {
        /**
         * dialogName: {
         *     id: id, // dialog id
         *     dialog: Dialog // Dialog instance
         * }
         */
    },
    /**
     * container of all registered fragments
     *
     * @type {{}}
     */
    fragments: {
        /**
         * fragmentName: {
         *     option: option,
         *     parent: void 0, // parent fragment
         *     fragment: Fragment // Fragment Object
         * }
         */
    },
    /**
     * container of all registered Fragments Attributes
     *
     * @type {{}}
     */
    fragmentsAttributes: {
        /**
         * fragmentName: {
         *     fieldName: attr/method
         * }
         */
    }
};
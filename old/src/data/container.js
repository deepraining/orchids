
'use strict';

module.exports = {
    /**
     * root container
     */
    rootContainer: document.body,
    /**
     * container of all registered page definitions
     *
     * @type {{}}
     */
    pageDefinitions: {
        /**
         * pageName: {
         *     option: option,
         *     parent: void 0, // parent page name
         *     page: Page, // Page Object
         *     singleton: true/false // whether is singleton instance
         * }
         */
    },
    /**
     * container of all registered Page Attributes
     *
     * @type {{}}
     */
    pageAttributes: {
        /**
         * pageName: {
         *     fieldName: attr/method
         * }
         */
    },
    /**
     * container of all initialized Page models
     *
     * @type {{}}
     */
    pageModels: {
        /**
         * // example: id-1, id-2. Simple number id is array, could not refactor sequence
         * 'id'-id: {
         *     name: pageName, // Page name
         *     forResult: true/false, // whether current page is initialized by startPageForResult
         *     page: Page, // Page instance
         *     singleton: true/false // whether is singleton instance
         * }
         */
    },
    /**
     * container of all initialized singleton Page models
     *
     * @type {{}}
     */
    singletonPageModels: {
        /**
         * pageName: {
         *     id: id, // page id
         *     page: Page // Page instance
         * }
         */
    },
    /**
     * container of all registered dialog definitions
     *
     * @type {{}}
     */
    dialogDefinitions: {
        /**
         * dialogName: {
         *     option: option,
         *     parent: void 0, // parent dialog name
         *     dialog: Dialog, // Dialog Object
         *     singleton: true/false // whether is singleton instance.
         * }
         */
    },
    /**
     * container of all registered Dialog Attributes
     *
     * @type {{}}
     */
    dialogAttributes: {
        /**
         * dialogName: {
         *     fieldName: attr/method
         * }
         */
    },
    /**
     * container of all initialized Dialog models
     *
     * @type {{}}
     */
    dialogModels: {
        /**
         * // example: id-1, id-2. Simple number id is array, could not refactor sequence
         * 'id'-id: {
         *     name: dialogName, // Dialog name
         *     forResult: true/false, // whether current dialog is initialized by startDialogForResult
         *     dialog: Dialog, // Dialog instance
         *     singleton: true/false // whether is singleton instance.
         * }
         */
    },
    /**
     * container of all initialized singleton Dialog models
     *
     * @type {{}}
     */
    singletonDialogModels: {
        /**
         * dialogName: {
         *     id: id, // dialog id
         *     dialog: Dialog // Dialog instance
         * }
         */
    },
    /**
     * container of all registered fragment definitions
     *
     * @type {{}}
     */
    fragmentDefinitions: {
        /**
         * fragmentName: {
         *     option: option,
         *     parent: void 0, // parent fragment
         *     fragment: Fragment // Fragment Object
         * }
         */
    },
    /**
     * container of all registered Fragment Attributes
     *
     * @type {{}}
     */
    fragmentAttributes: {
        /**
         * fragmentName: {
         *     fieldName: attr/method
         * }
         */
    }
};
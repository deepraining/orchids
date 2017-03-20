var container = {
    /**
     * all registered page Object container
     * format: {
     *     name: {
     *         option: option, // Option to initialize a Page, available option is showed bellow
     *             {
     *                 backgroundColor: '#ffffff',
     *                 animate: !0,
     *                 animateDirection: 'horizontal',
     *                 singleton: !1
     *             }
     *         superPage: '', // super page name, default is blank string
     *         page: Page // Page Object
     *     }
     * }
     * @type {{}}
     */
    pages: {},
    /**
     * all registered Pages Attributes
     * format: {
         *     name: {
         *         name1: field1,
         *         name2: filed2,
         *         name3: func1,
         *         name4: func2
         *     }
         * }
     * @type {{}}
     */
    pagesAttributes: {},
    /**
     * all initialized Page instances (current page is not supporting singleton)
     * format: {
         *     'id'-id: { // for instance id-1, id-2. Simple number id is array, could not refactor sequence
         *         name: pageName, // Page name
         *         forResult: true/false, // whether current page is initialized by startPageForResult or not
         *         page: Page, // Page instance
         *         singleton: true/false // whether is singleton instance or not.
         *     }
         * }
     * @type {{}}
     */
    pagesInstances: {},
    /**
     * all initialized Page singleton instances
     * format: {
         *     name: {
         *         id: id, // page id
         *         page: Page // Page instance
         *     }
         * }
     * @type {{}}
     */
    pagesSingletonInstances: {},
    /**
     * all registered dialog Object container
     * format: {
         *     name: {
         *         option: option, // Option to initialize a Dialog, available option is showed bellow
         *             {
         *                 backgroundColor: '#ffffff',
         *                 animate: !0,
         *                 animateDirection: 'vertical',
         *                 singleton: !1
         *             }
         *         superDialog: '', // super dialog name, default is blank string
         *         dialog: Dialog // Dialog Object
         *     }
         * }
     * @type {{}}
     */
    dialogs: {},
    /**
     * all registered Dialogs Attributes
     * format: {
         *     name: {
         *         name1: field1,
         *         name2: filed2,
         *         name3: func1,
         *         name4: func2
         *     }
         * }
     * @type {{}}
     */
    dialogsAttributes: {},
    /**
     * all initialized Dialog instances
     * format: {
         *     'id'-id: { // for instance id-1, id-2. Simple number id is array, could not refactor sequence
         *         name: dialogName, // Dialog name
         *         forResult: true/false, // whether current page is initialized by startPageForResult or not
         *         dialog: Dialog, // Dialog instance
         *         singleton: true/false // whether is singleton instance or not.
         *     }
         * }
     * @type {{}}
     */
    dialogsInstances: {},
    /**
     * all initialized Dialog singleton instances
     * format: {
         *     name: {
         *         id: id, // dialog id
         *         dialog: Dialog // Dialog instance
         *     }
         * }
     * @type {{}}
     */
    dialogsSingletonInstances: {},
    /**
     * all registered fragment Object container
     * format: {
         *     name: {
         *         option: option, // Option to initialize a Fragment, available option is showed bellow
         *             {
         *                 backgroundColor: '#ffffff'
         *             }
         *         superFragment: '', // super fragment name, default is blank string
         *         fragment: Fragment // Fragment Object
         *     }
         * }
     * @type {{}}
     */
    fragments: {},
    /**
     * all registered Fragments Attributes
     * format: {
         *     name: {
         *         name1: field1,
         *         name2: filed2,
         *         name3: func1,
         *         name4: func2
         *     }
         * }
     * @type {{}}
     */
    fragmentsAttributes: {}
};

module.exports = container;
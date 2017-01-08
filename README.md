# orchids, make web app be felt as native app

## how to use

### orchids.init

register global option

```
orchids.init({
    /**
     * background of root element
     */
    backgroundColor: '#ffffff',
    /**
     * start page with route or not
     * if set to true, the url will be changed when a page is started
     * like: url?orchidsPage=pageName&orchidsOption=serializedData
     */
    route: !1,
    /**
     * whether to use animation when switch between pages
     * default: true
     */
    animate: !0,
    /**
     * animation direction of switching page
     * horizontal/vertical, default: horizontal
     */
    animateDirection: 'horizontal',
    /**
     * whether to use animation when switch between fragments
     * default: true
     */
    fragmentAnimate: !0,
    /**
     * animation direction of switching fragment
     * horizontal/vertical, default: horizontal
     */
    fragmentAnimateDirection: 'horizontal'
});
```

### orchids.registerPage

```
/**
 * register a Page Object
 * @param pageName New name of new Page Object
 * @param extendAttributes Attributes to be extended to new Page Object
 *     attributes to use
 *     {
 *         id, // current page id
 *         el, // current page root element
 *         option // current page option
 *     }
 *     methods to override
 *     {
 *         // render a page after a page is initialized
 *         onCreate: function(){},
 *         // pre handle before destroy a page
 *         onDestroy: function() {},
 *         // called when back page from other page
 *         onShow: function () {},
 *         // called when start another page
 *         onHide: function () {},
 *         // called when the child page destroyed and return the value by setResult method.
 *         onPageResult: function(data) {},
 *         // receive data from the previous page, startPageForResult method's second parameter
 *         prepareForResult: function(data) {}
 *     }
 *     methods to call
 *     {
 *         // set the result if this page is called by startPageForResult method,
 *         // and the returned value will be used as the param of the onPageResult method of last page
 *         setResult: function(data) {},
 *         // show fragment specified by id
 *         showFragment: function(id) {},
 *         // get fragment specified by id, default return the first fragment
 *         getFragment: function(id) {}
 *     }
 * @param option Option to initialize a Page
 *     {
 *         backgroundColor: '#ffffff',
 *         animate: !0,
 *         animateDirection: 'horizontal',
 *         // sub fragments
 *         // note that, current page element should have a child node
 *         // which has 'data-orchids-fragments' attribute,
 *         // and it must has position-relative or position-absolute width specified width and height
 *         // or fragments will not be rendered correctly
 *         fragments: [
 *             'name1',
 *             'name2'
 *         ],
 *         fragmentAnimate: !0,
 *         fragmentAnimateDirection: 'horizontal'
 *     }
 * @param superPageName Super Page Object, default is Page
 */
orchids.registerPage(pageName, extendAttributes, option, superPageName);
orchids.registerPage(pageName, extendAttributes, superPageName);
```

### orchids.registerDialog

```
/**
 * register a Dialog Object
 * @param dialogName New name of new Dialog Object
 * @param extendAttributes Attributes to be extended to new Dialog Object
 *     methods to override
 *     {
 *         // render a dialog after a dialog is initialized
 *         onCreate: function(){},
 *         // pre handle before destroy a dialog
 *         onDestroy: function() {},
 *         // called when the child dialog destroyed and return the value by setResult method.
 *         onDialogResult: function(data) {},
 *         // receive data from the previous dialog, startDialogForResult method's second parameter
 *         prepareForResult: function(data) {}
 *     }
 *     methods to call
 *     {
 *         // set the result if this dialog is called by startDialogForResult method,
 *         // and the returned value will be used as the param of the onDialogResult method of last dialog
 *         setResult: function(data) {}
 *     }
 * @param option Option to initialize a Dialog
 *     {
 *         backgroundColor: '#ffffff',
 *         animate: !0,
 *         animateDirection: 'vertical',
 *         singleton: !0 // whether current dialog is singleton or not, if true,
 *                       //it will be only created once, and will not be destroyed
 *     }
 * @param superDialogName Super Dialog Object, default is Dialog
 */
orchids.registerDialog(dialogName, extendAttributes, option, superDialogName);
orchids.registerDialog(dialogName, extendAttributes, superDialogName);
```

### orchids.registerFragment

```
/**
 * register a Fragment Object
 * @param fragmentName New name of new Fragment Object
 * @param extendAttributes Attributes to be extended to new Fragment Object
 *     attributes to use
 *     {
 *         id, // current fragment id
 *         el, // current fragment root element
 *         option // current fragment option
 *     }
 *     methods to override
 *     {
 *         // render a fragment after a fragment is initialized
 *         onCreate: function(){},
 *         // pre handle before destroy a fragment
 *         onDestroy: function() {},
 *         // called when showed, not include first show while created
 *         onShow: function () {},
 *         // called when show another fragment
 *         onHide: function () {},
 *     }
 *     methods to call
 *     {
 *         // show sub fragment specified by id
 *         showSubFragment: function(id) {},
 *         // get sub fragment specified by id, default return the first fragment
 *         getSubFragment: function(id) {}
 *     }
 * @param option Option to initialize a Fragment
 *     {
 *         backgroundColor: '#ffffff',
 *         // sub fragments
 *         // note that, current fragment element should have a child node
 *         // which has 'data-orchids-sub-fragments' attribute,
 *         // and it must has position-relative or position-absolute width specified width and height
 *         // or fragments will not be rendered correctly
 *         subFragments: [
 *             'name1',
 *             'name2'
 *         ],
 *         subFragmentAnimate: !0,
 *         subFragmentAnimateDirection: 'horizontal'
 *     }
 * @param superFragmentName Super Fragment Object, default is Fragment
 */
orchids.registerFragment(fragmentName, extendAttributes, option, superFragmentName)
orchids.registerFragment(fragmentName, extendAttributes, superFragmentName)
```

### orchids.startPage

```
/**
 * start a page
 * @param pageName
 * @param data Parameter to use by new page's onCreate method
 */
orchids.startPage(pageName, data)
```

### orchids.startPageForResult

```
/**
 * start a page
 * @param pageName
 * @param data Parameter to use by new page's onCreate method
 * @param prepareResultData Parameter to be used by the next page's prepareForResult method
 */
orchids.startPage(pageName, data, prepareResultData)
```


### orchids.startDialog

```
/**
 * start a dialog
 * @param dialogName
 * @param data Parameter to use by new dialog's onCreate method
 */
orchids.startDialog(dialogName, data)
```

### orchids.startDialogForResult

```
/**
 * start a dialog
 * @param dialogName
 * @param data Parameter to use by new dialog's onCreate method
 * @param prepareResultData Parameter to be used by the next dialog's prepareForResult method
 */
orchids.startDialog(dialogName, data, prepareResultData)
```

### orchids.back

```
/**
 * back to prev page or prev dialog
 */
orchids.back()
```

### orchids.start

```
/**
 * start current application
 * if current url has orchidsPage parameter, it'will start the "orchidsPage" specified page, not the page "pageName"
 *
 * @param pageName
 * @param data Data to initialize a Page, and will be use by onCreate method
 */
orchids.start(pageName, data)
```

### orchids.getPage

```
/**
 * get page object
 * @param id Page id, if not set, return current page
 * @returns {*}
 */
orchids.getPage(id)
```

### orchids.getDialog

```
/**
 * get dialog object
 * @param id Dialog id, if not set, return current dialog
 * @returns {*}
 */
orchids.getDialog(id)
```

### orchids.getCurrentPage

```
/**
 * get current page instance
 * @returns {*}
 */
orchids.getCurrentPage();
```

### orchids.getCurrentDialog

```
/**
 * get current dialog instance
 * @returns {*}
 */
orchids.getCurrentDialog();
```
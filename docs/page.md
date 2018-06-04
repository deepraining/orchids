# Page

## Base attributes

* `id`: Page id

* `el`: Page root element

* `option`: Page option
    - `option.name`: Page name

## Methods to override

* `beforeCreate`: Called before page being initialized.

* `onCreate`: Render page after a page being initialized.
    - `@param data`: From `orchids.startPage` second parameter.

* `afterCreate`: Called after page being rendered.

* `onDestroy`: Called before destroying page, for more pre handling.

* `afterDestroy`: Called after page being destroyed.

* `onShow`: Called when back page from another page.

* `afterShow`: Called when page is completely shown.

* `onHide`: Called when start another page.

* `afterHide`: Called when page is completely hidden.

* `onResult`: Called when the next page destroyed.
    - `@param data`: Returned the value by next page's `setResult` method.

* `prepareForResult`: Receive data from the previous page.
    - `@param data`: From `orchids.startPageForResult` third parameter.
    
## Methods to call

* `setResult`: Set the result if page is called by `startPageForResult` method, and the returned value will be used as the param of the `onResult` method of prev page or the `onResult` method of prev page.
    - `@param data`: Return the value to prev page's `onResult` method or prev page's `onResult` method.
    
* `showFragment`: Show a fragment specified by id.
    - `@param id`: Fragment id
    
* `getFragment`: Get a fragment specified by id, default return the first fragment.
    - `@param id`: Fragment id

## Options to init

* `backgroundColor`: Background color
    - `default`: `#ffffff`

* `style`: Styles to render root element.
    - `type`: `{*}`
    - `key`: Style key, like `marginLeft`
    - `value`: Style value, like `1px`

* `animate`: Whether to use animation when switching between pages.
    - `default`: `true`
    - `type`: `true/false`

* `fadeInOut`: Whether to fade page's opacity when switching between pages
    - `default`: `false`
    - `type`: `true/false`
    
* `animateDirection`: Animation direction when switching pages.
    - `detail`: `l2r/r2l/t2b/b2t(left-right, top-bottom)`
    - `default`: `r2l`
    
* `fragments`: Fragments of page.
    - `type`: `Array`
    - `example`: `['name1', 'name2']`
    - `note`: Current page element should have a child node which has `data-orchids-fragments` attribute, and it must has `position: relative` or `position: absolute` with specified width and height, or fragments will not be rendered correctly.

* `fragmentAnimate`: Whether to use animation when switching between fragments.
    - `default`: `true`
    - `type`: `true/false`
    
* `fragmentAnimateDirection`: Animation direction when switching fragments.
    - `detail`: `horizontal/vertical`
    - `default`: `horizontal`

* `singleton`: Whether page is singleton or not. If true, it will be only created once, and will not be destroyed forever.
    - `default`: `false`
    - `type`: `true/false`

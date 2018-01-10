# Page

## base attributes

* `id`: page id

* `el`: page root element

* `option`: page option
    - `option.name`: current page name

## methods to override

* `beforeCreate`: before a page is initialized

* `onCreate`: render a page after a page is initialized
    - `@param data`: from `orchids.startPage` second parameter
    
* `afterCreate`: after a page is initialized
    
* `onDestroy`: pre handle before destroy a page

* `onShow`: called when back page from other page or dialog

* `onHide`: called when start another page or dialog

* `onResult`: called when the next page destroyed
    - `@param data`: returned the value by next page's `setResult` method.
    
* `prepareForResult`: receive data from the previous page
    - `@param data`: from `orchids.startPageForResult` third parameter
    
## methods to call

* `setResult`: set the result if this page is called by `startPageForResult` method, and the returned value will be used as the param of the `onResult` method of prev page
    - `@param data`: return the value to prev page's `onResult` method.
    
* `showFragment`: show fragment specified by id
    - `@param id`: fragment id
    
* `getFragment`: get fragment specified by id, default return the first fragment
    - `@param id`: fragment id

## option to init

* `backgroundColor`: background color
    - `default`: `#ffffff`
    
* `style`: css style to render root element
    - `type`: `{*}`
    - `key`: origin dom css key, like `marginLeft`
    - `value`: origin dom css value, like `1px`
    
* `animate`: whether to use animation when switch between pages
    - `default`: `true`
    - `type`: `true/false`
    
* `fadeInOut`: whether to fade page when switch between pages
    - `default`: `false`
    - `type`: `true/false`
    
* `animateDirection`: animation direction of switching page
    - `detail`: `l2r/r2l/t2b/b2t(left-right, top-bottom)`
    - `default`: `r2l`
    
* `fragments`: fragments in page
    - `type`: `Array`
    - `example`: `['name1', 'name2']`
    - `note`: current page element should have a child node which has `data-orchids-fragments` attribute, and it must has `position: relative` or `position: absolute` width specified width and height, or fragments will not be rendered correctly

* `fragmentAnimate`: whether to use animation when switch between fragments
    - `default`: `true`
    - `type`: `true/false`
    
* `fragmentAnimateDirection`: animation direction of switching fragment
    - `detail`: `horizontal/vertical`
    - `default`: `horizontal`

* `singleton`: whether current page is singleton or not, if true, it will be only created once, and will not be destroyed
    - `default`: `false`
    - `type`: `true/false`
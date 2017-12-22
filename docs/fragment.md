# Fragment

## base attributes

* `id`: fragment id
* `el`: fragment root element
* `option`: fragment option

## methods to override

* `onCreate`: render a fragment after a fragment is initialized
* `onDestroy`: pre handle before destroy a fragment
* `onShow`: called when back fragment from other fragment
* `onHide`: called when start another fragment

## methods to call

* `showSubFragment`: show sub fragment specified by id
    - `@param id`: fragment id
* `getSubFragment`: get sub fragment specified by id, default return the first sub fragment
    - `@param id`: fragment id

## option to init

* `backgroundColor`: background color
    - `default`: `#ffffff`
* `style`: css style to render root element
    - `type`: `{*}`
    - `key`: origin dom css key, like `marginLeft`
    - `value`: origin dom css value, like `1px`
* `subFragments`: sub fragments in current fragment
    - `type`: `Array`
    - `example`: `['name1', 'name2']`
    - `note`: current fragment element should have a child node which has `data-orchids-sub-fragments` attribute, and it must has `position: relative` or `position: absolute` width specified width and height, or sub fragments will not be rendered correctly
* `subFragmentAnimate`: whether to use animation when switch between sub fragments
    - `default`: `true`
    - `type`: `true/false`
* `subFragmentAnimateDirection`: animation direction of switching sub fragment
    - `detail`: `horizontal/vertical`
    - `default`: `horizontal`
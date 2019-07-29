# Fragment

## Base attributes

* `id`: Fragment id

* `el`: Fragment root element

* `option`: Fragment option
    - `option.name`: Fragment name

## Methods to override

* `onCreate`: Render fragment after it being initialized.

* `onDestroy`: Called before destroying fragment.

* `onShow`: Called when back fragment from another fragment.

* `onHide`: Called when start another fragment.

## Methods to call

* `showSubFragment`: Show a sub fragment specified by id.
    - `@param id`: Fragment id

* `getSubFragment`: Get a sub fragment specified by id, default return the first sub fragment.
    - `@param id`: Fragment id

## Options to init

* `backgroundColor`: Background color
    - `default`: `#ffffff`

* `style`: Styles to render root element.
    - `type`: `{*}`
    - `key`: Style key, like `marginLeft`
    - `value`: Style value, like `1px`

* `subFragments`: Sub fragments of current fragment.
    - `type`: `Array`
    - `example`: `['name1', 'name2']`
    - `note`: Current fragment element should have a child node which has `data-orchids-sub-fragments` attribute, and it must has `position: relative` or `position: absolute` with specified width and height, or sub fragments will not be rendered correctly.

* `subFragmentAnimate`: Whether to use animation when switching between sub fragments.
    - `default`: `true`
    - `type`: `true/false`

* `subFragmentAnimateDirection`: Animation direction when switching sub fragments.
    - `detail`: `horizontal/vertical`
    - `default`: `horizontal`

# shallow-changes

> Compares objects or arrays and categorizes all keys as `added`, `deleted`, `equal` or `updated`

Shallow-Changes works in any JavaScript runtime. It has no dependencies and supports IE9+.

## Install

```sh
$ npm install --save shallow-changes
```

```javascript
// use as ES6 module
import shallowChanges from 'shallow-changes';
```

```javascript
// use as CommonJS module
var shallowChanges = require('shallow-changes');
```

```html
<!-- use in HTML, available as shallowChanges, only 512b gzipped -->
<script src=".../shallow-changes/dist/shallow-changes.umd.js"></script>
```

## Usage

```js
shallowChanges(objectOrArray1, objectOrArray2);
// returns { added: [], deleted: [], equal: [], updated: [] }
// arrays contain classified property keys
```

If any of the values is not of type object (not an object, array or instance) the return value is `false`.

See tests for [some](test/array.js) [examples](test/object.js).

## Config

Shallow-Changes has an optional third argument. It receives an object that can contain functions to overwrite the compare function `is` and/or the defined function `isDefined`.

The compare function `is` receives two values and returns a boolean. The default compare function tests if the values are strict equal `===` or both are `NaN`.

The defined function `isDefined` receives a value with a key and returns a boolean. If the function returns false the property will be ignored. The default defined function tests if the value is not `undefined`, so a property that changes from `undefined` to any value will be classified as `added`, not `updated`.

See tests for [usage](test/config.js).

```js
shallowChanges(objectOrArray1, objectOrArray2, { is: isEqualFunction, isDefined: isDefinedFunction });
```

## License

[MIT License](LICENSE) © [Martin Sachse](https://jsfi.io/)

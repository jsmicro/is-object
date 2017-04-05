# JSMicro - Is Object

### **`isObject(object)`**

Check does the given Javascript Object (array, object, string, etc) is an object.

### **`isNotObject(object)`**

Check does the given Javascript Object (array, object, string, etc) is not an object.

## Browser Usage

```bash
bower install --save jsmicro-is-object
```

```html
<script type="text/javascript" src="bower_components/jsmicro-is-object/index.js">
<script type="text/javascript">
    var obj = {};
    var nbr = 200;

    // Available in the window object.
    isObject(obj);      // true
    isObject(nbr);      // false
    isNotObject(nbr);   // true
</script>
```

## NodeJS Usage

```bash
npm install --save @jsmicro/is-object
```

```js
const obj = require('@jsmicro/is-object');

// Available in the global object.
isObject({}); // true
isObject(23322333); // false
isNotObject(23234); // true

// Also available in the export object.
obj.isObject({}); // true
obj.isObject(23322333); // false
obj.isNotObject(23333); // true
```

## Changelogs

#### **`v1.0.1 - May 21, 2016`**

* Added .npmignore

#### **`v1.0.0 - May 19, 2016`**

* Initial release.

### [The MIT License (MIT)](https://mahdaen.mit-license.org/)

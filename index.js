(function() {
    'use strict';

    if (!window.hasOwnProperty('isObject')) window.isObject = isObject;
    if (!window.hasOwnProperty('isNotObject')) window.isNotObject = isNotObject;

    function isObject(object) {
        return toString.call(object) === '[object Object]';
    }

    function isNotObject(object) {
        return !isObject(object);
    }
})();

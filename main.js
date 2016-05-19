'use strict';

if (!global.hasOwnProperty('isObject')) global.isObject = isObject;
if (!global.hasOwnProperty('isNotObject')) global.isNotObject = isNotObject;

/**
 * Check does the given javascript object is an Object.
 *
 * @param {*} object - Javascript object (array, object, string, etc) to check the type from.
 * @returns {boolean}
 */
function isObject(object) {
    return toString.call(object) === '[object Object]';
}

/**
 * Check does the given javascript object is not an Object.
 *
 * @param {*} object - Javascript object (array, object, string, etc) to check the type from.
 * @returns {boolean}
 */
function isNotObject(object) {
    return !isObject(object);
}

module.exports = {isObject, isNotObject};

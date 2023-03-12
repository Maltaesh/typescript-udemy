"use strict";
function merge(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
console.log(merge({ name: "Marcin" }, { lastName: "Emski" }));
console.log(merge({ 1: 1 }, { lastName: "Emski" }));
console.log(merge({ '1': 1 }, { lastName: "Emski" }));
function countAndDescribe(element) {
    let description = 'Got no value.';
    if (element.length === 1)
        description = 'Got 1 element';
    else if (element.length > 1)
        description = 'Got ' + element.length + ' elements.';
    return [element, description];
}
console.log(countAndDescribe('elelele'));
console.log(countAndDescribe([1, 2]));
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
console.log(extractAndConvert({ name: "Marcin" }, 'name'));
//# sourceMappingURL=app.js.map
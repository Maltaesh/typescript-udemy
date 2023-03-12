"use strict";
function merge(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
console.log(merge({ name: "Marcin" }, { lastName: "Emski" }));
console.log(merge({ 1: 1 }, { lastName: "Emski" }));
console.log(merge({ '1': 1 }, { lastName: "Emski" }));
//# sourceMappingURL=app.js.map
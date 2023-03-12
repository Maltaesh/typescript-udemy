"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add(1, 5);
console.log(result);
//# sourceMappingURL=app.js.map
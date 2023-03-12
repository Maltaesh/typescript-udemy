"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const names = ['Max', 'Manuel'];
console.log(names);
const promise = new Promise((res) => {
    setTimeout(() => {
        res('This is done');
    }, 2000);
});
promise
    .then(data => {
    return data.split(' ');
})
    .then(data => {
    console.log(data);
})
    .catch(err => {
    console.error(err);
});
//# sourceMappingURL=app.js.map
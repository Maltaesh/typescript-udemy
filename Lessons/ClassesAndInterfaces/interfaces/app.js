"use strict";
let user1;
user1 = {
    name: 'Marcin',
    age: 31,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user1.greet('Hi there, I am');
//# sourceMappingURL=app.js.map
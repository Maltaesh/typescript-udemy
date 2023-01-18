"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    read(text) {
        console.log(text);
    }
    greet(phrase) {
        console.log(phrase, this.name, this.age);
    }
}
const person = new Person('Marcin', 31);
person.greet('Hello,');
//# sourceMappingURL=app.js.map
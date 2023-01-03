"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    getName() {
        return this.name;
    }
}
const accounting = new Department('Accounting');
console.log(accounting);
console.log(accounting.getName());
const accountingCopy = { name: 'a', describe: accounting.getName };
//# sourceMappingURL=app.js.map
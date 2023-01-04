"use strict";
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.departmentEmployees = [];
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
    describe() {
        console.log(`Department: ${this.name} (ID: ${this.id})`);
    }
    addEmployee(employee) {
        this.departmentEmployees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.departmentEmployees.length);
        console.log(this.departmentEmployees);
    }
}
class ITDepartment extends Department {
    constructor(id) {
        super('IT', id);
    }
    addEmployee(employee) {
        if (employee === 'Marcin') {
            console.log('Marcin is already an employee');
            return;
        }
        this.departmentEmployees.push(employee);
    }
}
const it = new ITDepartment(2);
it.describe();
it.addEmployee('Marcin');
const accounting = new Department('Accounting', 1);
accounting.describe();
accounting.setName('Accounting and Compliance');
accounting.describe();
accounting.addEmployee('Marcin');
accounting.addEmployee('Klaudia');
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map
"use strict";
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.departmentEmployees = [];
        Department.listOfDepartments.push(this);
    }
    static get listOfDepartments() {
        return Department.departments;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
    addEmployee(employee) {
        this.departmentEmployees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.departmentEmployees.length);
        console.log(this.departmentEmployees);
    }
}
Department.departments = [];
class ITDepartment extends Department {
    constructor(id, techStack) {
        super('IT', id);
        this.techStack = [];
        if (techStack)
            this.techStack = [...this.techStack, ...techStack];
    }
    get getTechStack() {
        if (this.techStack) {
            return this.techStack;
        }
        throw new Error('There is no TechStack yet!');
    }
    set addTechStack(newTechStack) {
        if (Array.isArray(newTechStack)) {
            newTechStack.forEach(el => {
                if (el.length < 1)
                    throw new Error('All elements in tech stack array should be longer than 1 character');
            });
            if (newTechStack.length === 0)
                throw new Error('Tech stack array is empty!');
            if (newTechStack.length === 1)
                throw new Error('If You want to add new tech stack array it should has more elements than 1. If You have only one element, deliver it as a string!');
            this.techStack = [...this.techStack, ...newTechStack];
        }
        if (typeof newTechStack === "string") {
            this.techStack.push(newTechStack);
        }
    }
    addEmployee(employee) {
        if (employee === 'Marcin') {
            console.log('Marcin is already an employee');
            return;
        }
        this.departmentEmployees.push(employee);
    }
    describe() {
        console.log(`Department: ${this.name}, TechStack: ${this.getTechStack} (ID: ${this.id})`);
    }
}
class AccoutingDepartment extends Department {
    constructor(id) {
        super('Accounting', id);
    }
    describe() {
        console.log(`Department: ${this.name} (ID: ${this.id})`);
    }
}
const it = new ITDepartment(2, ['JavaScript', 'TypeScript']);
it.describe();
it.addEmployee('Marcin');
it.addTechStack = ['Node', 'Express'];
console.log(`TechStack: ${it.getTechStack}`);
console.log(Department.listOfDepartments);
const accounting = new AccoutingDepartment(1);
accounting.describe();
accounting.setName('Accounting and Compliance');
accounting.describe();
accounting.addEmployee('Marcin');
accounting.addEmployee('Klaudia');
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map
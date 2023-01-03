class Department {
    private readonly name: string

    constructor(n: string) {
        this.name = n
    }

    getName(this: Department) {
        return this.name
    }
}

const accounting = new Department('Accounting')

console.log(accounting)
console.log(accounting.getName())

const accountingCopy = {name: 'a', describe: accounting.getName}
// console.log('accountingCopy: ', accountingCopy.describe()) //  The 'this' context of type '{ name: string; describe: (this: Department) => string; }' is not assignable to method's 'this' of type 'Department'. Property 'getName' is missing in type '{ name: string; describe: (this: Department) => string; }' but required in type 'Department'.
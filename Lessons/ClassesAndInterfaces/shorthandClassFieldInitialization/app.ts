class Department {
    private departmentEmployees: string[] = []

    constructor(private name: string, private id: number) {
    }

    getName(this: Department) {
        return this.name
    }

    public setName(newName: string) {
        this.name = newName
    }

    public describe() {
        console.log(`Department: ${this.name} (ID: ${this.id})`)
    }

    public addEmployee(employee: string) {
        this.departmentEmployees.push(employee)
    }

    public printEmployeeInformation() {
        console.log(this.departmentEmployees.length)
        console.log(this.departmentEmployees)
    }
}

const accounting = new Department('Accounting', 1)

accounting.describe()

accounting.setName('Accounting and Compliance')

accounting.describe()

accounting.addEmployee('Marcin')
accounting.addEmployee('Klaudia')

accounting.printEmployeeInformation()
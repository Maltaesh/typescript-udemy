// abstract class Department {
//     private static departments: Array<Department> = []
//     protected departmentEmployees: string[] = []
//
//     protected constructor(protected name: string, protected id: number) {
//         Department.listOfDepartments.push(this)
//     }
//
//     static get listOfDepartments() {
//         return Department.departments
//     }
//
//     getName(this: Department) {
//         return this.name
//     }
//
//     public setName(newName: string) {
//         this.name = newName
//     }
//
//     abstract describe(): void
//
//     public addEmployee(employee: string) {
//         this.departmentEmployees.push(employee)
//     }
//
//     public printEmployeeInformation() {
//         console.log(this.departmentEmployees.length)
//         console.log(this.departmentEmployees)
//     }
// }
//
// class ITDepartment extends Department {
//     private techStack: string[] = []
//
//     constructor(id: number, techStack?: string[]) {
//         super('IT', id);
//         if (techStack)
//             this.techStack = [...this.techStack, ...techStack]
//     }
//
//     get getTechStack() {
//         if (this.techStack) {
//             return this.techStack
//         }
//         throw new Error('There is no TechStack yet!')
//     }
//
//     set addTechStack(newTechStack: string | string[]) {
//
//         if (Array.isArray(newTechStack)) {
//             newTechStack.forEach(el => {
//                 if (el.length < 1)
//                     throw new Error('All elements in tech stack array should be longer than 1 character')
//             })
//
//             if (newTechStack.length === 0)
//                 throw new Error('Tech stack array is empty!')
//
//             if (newTechStack.length === 1)
//                 throw new Error('If You want to add new tech stack array it should has more elements than 1. If You have only one element, deliver it as a string!')
//
//             this.techStack = [...this.techStack, ...newTechStack]
//         }
//
//
//         if (typeof newTechStack === "string") {
//             this.techStack.push(newTechStack)
//         }
//     }
//
//     override addEmployee(employee: string) {
//         if (employee === 'Marcin') {
//             console.log('Marcin is already an employee')
//             return
//         }
//         this.departmentEmployees.push(employee)
//     }
//
//     describe(): void {
//         console.log(`Department: ${this.name}, TechStack: ${this.getTechStack} (ID: ${this.id})`)
//     }
//
// }
//
// class AccountingDepartment extends Department {
//     private static instance: AccountingDepartment
//
//     private constructor(id: number) {
//         super('Accounting', id);
//     }
//
//     static getInstance(id: number) {
//         if (AccountingDepartment.instance)
//             return AccountingDepartment.instance
//
//         AccountingDepartment.instance = new AccountingDepartment(id)
//
//         return AccountingDepartment.instance
//     }
//
//     describe(): void {
//         console.log(`Department: ${this.name} (ID: ${this.id})`)
//     }
//
//
// }
//
// const it = new ITDepartment(2, ['JavaScript', 'TypeScript'])
//
// it.describe()
// it.addEmployee('Marcin')
// it.addTechStack = ['Node', 'Express']
// console.log(`TechStack: ${it.getTechStack}`)
// console.log(Department.listOfDepartments)
//
// const accounting = AccountingDepartment.getInstance(1)
// const accounting2 = AccountingDepartment.getInstance(3)
// console.log('There can be only one instance of an accounting department:git  ', (accounting === accounting2))
//
//
// accounting.describe()
//
// accounting.setName('Accounting and Compliance')
//
// accounting.describe()
//
// accounting.addEmployee('Marcin')
// accounting.addEmployee('Klaudia')
//
// accounting.printEmployeeInformation()
class Department {
    private readonly name: string

    constructor(n: string) {
        this.name = n
    }

    getName() {
        return this.name
    }
}

const accounting = new Department('Accounting')

console.log(accounting)

console.log('hehe')
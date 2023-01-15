interface Greetable {
    name: string

    greet(phrase: string): void
}

class Person implements Greetable {
    constructor(public name: string, private age: number) {
    }

    greet(phrase: string) {
        console.log(phrase, this.name, this.age)
    }
}

const person = new Person('Marcin', 31)

person.greet('Hello,')
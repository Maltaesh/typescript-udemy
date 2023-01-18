interface Named {
    readonly name: string
}

interface Greetable extends Named {
    greet(phrase: string): void
}

interface Readable {
    read(text: string): void
}

class Person implements Greetable, Readable {
    constructor(public name: string, private age: number) {
    }

    read(text: string) {
        console.log(text)
    }

    greet(phrase: string) {
        console.log(phrase, this.name, this.age)
    }
}

const person = new Person('Marcin', 31)

person.greet('Hello,')
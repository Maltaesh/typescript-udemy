type Combinable = string | number

function add(a: string, b: string): string
function add(a: number, b: number): number
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    }

    return a + b
}

const result = add(1, 5)
console.log(result)

export {}
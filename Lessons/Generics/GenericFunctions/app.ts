// this type accept only obiect's that AREN'T arrays or functions
type regularEverydayNormalObjectMotherFucker<T> = T extends Exclude<T, Array<any> | Function> ? T : never

function merge<T, U>(
    objA: regularEverydayNormalObjectMotherFucker<T>,
    objB: regularEverydayNormalObjectMotherFucker<U>) {

    return {
        ...objA,
        ...objB
    }
}

console.log(merge({name: "Marcin"}, {lastName: "Emski"}))
console.log(merge({1: 1}, {lastName: "Emski"}))
console.log(merge({'1': 1}, {lastName: "Emski"}))

// incorrect types of arguments:

// console.log(merge([1], {lastName: "Emski"}))
// console.log(merge({1: 1}, () => {}))


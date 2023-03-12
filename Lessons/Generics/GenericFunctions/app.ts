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

/*
 <T extends {length: number}>
 mean that argument of type T need to have a length property,
 so it fits to strings and arrays (e.x. [1,2].length)
 */
function countAndDescribe<T extends { length: number }>(element: T): [T, string] {
    let description = 'Got no value.'
    if (element.length === 1)
        description = 'Got 1 element'
    else if (element.length > 1)
        description = 'Got ' + element.length + ' elements.'

    return [element, description]
}

console.log(countAndDescribe('elelele'))
console.log(countAndDescribe([1, 2]))

//incorrect type of arguments
// console.log(countAndDescribe(1))

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key]
}

console.log(extractAndConvert({name: "Marcin"}, 'name'))


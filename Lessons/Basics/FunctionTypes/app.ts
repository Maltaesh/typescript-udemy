// type Combinable = number | string
// type ConvertDescriptor = 'as-number' | 'as-string'
//
// function combine(input1: Combinable, input2: Combinable, resultType: ConvertDescriptor) {
//     if (resultType === 'as-string') return `${input1} ${input2}`
//
//     return +input1 + +input2
// }
//
// function printResult(num: Combinable | undefined) {
//     console.log('Result: ' + num)
// }
//
// printResult(combine(5, 5, 'as-number'))
//
// let combineValues: (num: Combinable) => void
//
// // combineValues = combine // not allowed because combine function has 3 arguments, not 1
// combineValues = printResult // allowed because types are matching
// // combineValues = 5 // not allowed because combineValues need to have 1 argument, not a primitive
//
// function addAndHandleCallback(n1: number, n2: number, cb: (num: number) => void) {
//     const result = n1 + n2
//     cb(result)
// }
//
// addAndHandleCallback(1, 2, console.log)
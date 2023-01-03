// type Combinable = number | string
// type ConvertDescriptor = 'as-number' | 'as-string'
//
// function combine(input1: Combinable, input2: Combinable, resultType: ConvertDescriptor) {
//     if (resultType === 'as-string') return `${input1} ${input2}`
//     if (resultType === 'as-number') return +input1 + +input2
// }
//
// console.log(combine(22, 34, 'as-number'))
// console.log(combine('Marcin', 'Klaudia', 'as-string'))
// console.log(combine('11', 22, 'as-number'))
// console.log(combine('11', '11', 'as-number'))
// console.log(combine('11', '11', 'as-string'))
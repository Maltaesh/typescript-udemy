// version with enums:
// enum ResultType {
//     AS_NUMBER,
//     AS_STRING
// }
//
// function combine(input1: number | string, input2: number | string, resultType: ResultType) {
//     if (resultType === ResultType.AS_STRING) return `${input1}${input2}`
//     if (resultType === ResultType.AS_NUMBER) return +input1 + +input2
// }
//
// console.log(combine(22, 34, ResultType.AS_NUMBER))
// console.log(combine('Marcin', 'Klaudia', ResultType.AS_STRING))
// console.log(combine('11', 22, ResultType.AS_NUMBER))
// console.log(combine('11', '11', ResultType.AS_NUMBER))
// console.log(combine('11', '11', ResultType.AS_STRING))
// version with literal types
function combine(input1, input2, resultType) {
    if (resultType === 'as-string')
        return "".concat(input1).concat(input2);
    if (resultType === 'as-number')
        return +input1 + +input2;
}
console.log(combine(22, 34, 'as-number'));
console.log(combine('Marcin', 'Klaudia', 'as-string'));
console.log(combine('11', 22, 'as-number'));
console.log(combine('11', '11', 'as-number'));
console.log(combine('11', '11', 'as-string'));

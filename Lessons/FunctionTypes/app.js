"use strict";
function combine(input1, input2, resultType) {
    if (resultType === 'as-string')
        return `${input1} ${input2}`;
    return +input1 + +input2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(combine(5, 5, 'as-number'));
let combineValues;
combineValues = printResult;
function addAndHandleCallback(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandleCallback(1, 2, console.log);
//# sourceMappingURL=app.js.map
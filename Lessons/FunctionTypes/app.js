function combine(input1, input2, resultType) {
    if (resultType === 'as-string')
        return "".concat(input1, " ").concat(input2);
    if (resultType === 'as-number')
        return +input1 + +input2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(combine(5, 5, 'as-number'));
var combineValues;
// combineValues = combine // not allowed because combine function has 3 arguments, not 1
combineValues = printResult; // allowed because types are matching
// combineValues = 5 // not allowed because combineValues need to have 1 argument, not a primitive
function addAndHandleCallback(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandleCallback(1, 2, console.log);

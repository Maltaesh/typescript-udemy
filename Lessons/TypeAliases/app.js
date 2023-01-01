function combine(input1, input2, resultType) {
    if (resultType === 'as-string')
        return "".concat(input1, " ").concat(input2);
    if (resultType === 'as-number')
        return +input1 + +input2;
}
console.log(combine(22, 34, 'as-number'));
console.log(combine('Marcin', 'Klaudia', 'as-string'));
console.log(combine('11', 22, 'as-number'));
console.log(combine('11', '11', 'as-number'));
console.log(combine('11', '11', 'as-string'));

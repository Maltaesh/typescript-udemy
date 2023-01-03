"use strict";
function combine(input1, input2) {
    if (typeof input1 === 'number' || typeof input2 === 'number')
        return +input1 + +input2;
    return `${input1} ${input2}`;
}
console.log(combine(22, 34));
console.log(combine('Marcin', 'Klaudia'));
console.log(combine('11', 22));
//# sourceMappingURL=app.js.map
"use strict";
function add(num1, num2, printResult, phrase) {
    const result = num1 + num2;
    if (printResult) {
        console.log(`${phrase} ${result}`);
        return;
    }
    return result;
}
const printResult = true;
const number1 = 5;
const number2 = 2.5;
const phrase = "Aby to było tyle ile ma być!";
let text;
text = 'Konstantynopolitańczykiewiczówna';
let text2;
add(number1, number2, printResult, phrase);
//# sourceMappingURL=app.js.map
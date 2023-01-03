"use strict";
let userInput;
let userName;
userInput = 5;
console.log(userInput);
userInput = 'Marcin';
if (typeof userInput === 'string') {
    userName = userInput;
    console.log('I am a string!');
}
let userInput2;
let userName2;
userInput2 = 5;
console.log(userInput2);
userInput2 = 'Marcin';
userName2 = userInput;
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
const result = generateError('An error occurred!', 500);
console.log(result);
//# sourceMappingURL=app.js.map
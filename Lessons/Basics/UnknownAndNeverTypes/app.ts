// let userInput: unknown
// let userName: string
// userInput = 5
// console.log(userInput)
// userInput = 'Marcin'
// // userName = userInput // not allowed to assign type string to type unknown. Needed to check type of userInput i.e.
// if (typeof userInput === 'string') {
//     userName = userInput // this is allowed because of if-statement where userInput type is checked to be string
//     console.log('I am a string!')
// }
//
//
// let userInput2: unknown
// let userName2: any
// userInput2 = 5
// console.log(userInput2)
// userInput2 = 'Marcin'
// userName2 = userInput // allowed to assign type string to type any
//
//
// function generateError(message: string, code: number): never {
//     throw {message: message, errorCode: code}
// }
//
// const result = generateError('An error occurred!', 500)
// console.log(result)

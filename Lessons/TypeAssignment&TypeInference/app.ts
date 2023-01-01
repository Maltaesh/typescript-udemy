function add(num1: number, num2: number, printResult: boolean, phrase: string) {
    const result = num1 + num2

    if (printResult) {
        console.log(`${phrase} ${result}`)
        return
    }

    return result
}

const printResult = true
// printResult = false
const number1 = 5
const number2 = 2.5
const phrase = "Aby to było tyle ile ma być!"
let text: string
text = 'Konstantynopolitańczykiewiczówna'
let text2: 'Konstantynopolitańczywkiewiczówna'

add(number1, number2, printResult, phrase)
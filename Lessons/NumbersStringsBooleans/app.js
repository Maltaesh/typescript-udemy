function add(num1, num2, printResult, phrase) {
    var result = num1 + num2;
    if (printResult) {
        console.log("".concat(phrase, " ").concat(result));
        return;
    }
    return result;
}

var printResult = true;
var number1 = 5;
var number2 = 2.5;
var phrase = "Aby to było tyle ile ma być!";
add(number1, number2, printResult, phrase);

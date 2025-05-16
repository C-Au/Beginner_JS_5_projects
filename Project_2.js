// JS Calculator App
// https://youtu.be/kZMwrXyxQYE?si=1gw5TUQ-W0Pd9I6x
const prompt = require("prompt-sync")();

let number1;
let number2;

while (true) {
  number1 = parseFloat(prompt("Please enter Number 1: "));
  if (isNaN(number1)) {
    console.log("Invalid input");
  } else {
    break;
  }
}

while (true) {
  number2 = parseFloat(prompt("Please enter Number 2: "));
  if (isNaN(number2)) {
    console.log("Invalid input");
  } else {
    break;
  }
}

const operator = prompt("Enter Sign: ");

let result;
let valid = true;
switch (operator) {
  case "+":
    result = number1 + number2;
    break;
  case "-":
    result = number1 - number2;
    break;
  case "/":
    result = number1 / number2;
    break;
  case "*":
    result = number1 * number2;
    break;
  default:
    console.log("Invalid");
    valid = false;
    break;
}

if (valid) console.log(number1, operator, number2, "=", result);

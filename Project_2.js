// JS Calculator App
// https://youtu.be/kZMwrXyxQYE?si=1gw5TUQ-W0Pd9I6x
const prompt = require("prompt-sync")();

/**
 * Prompts the user to enter a number with the specified label.
 * Repeats the prompt until a valid number is entered.
 * @param {string} numberString - The label to display in the prompt.
 * @returns {number} - The number entered by the user.
 */

function getNumber(numberString) {
  while (true) {
    const number = parseFloat(
      prompt("Please enter number" + numberString + ": ")
    );
    if (isNaN(number)) {
      console.log("Invalid input");
    } else {
      return number;
    }
  }
}

const number1 = getNumber("One");
const number2 = getNumber("Two");

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

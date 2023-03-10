//Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

const add = (a, b) => a + b;

const sub = (a, b) => a - b;

const mul = (a, b) => a * b;

const div = (a, b) => a / b;


const number1 = parseInt(prompt("Enter the first number:"));
const number2 = parseInt(prompt("Enter the second number:"));

const operator = prompt("Enter the operator (+, -, *, /):");

let result;

switch (operator) {
   case "+":
        result = add(number1, number2);
        break;
    case "-":
        result = sub(number1, number2);
        break;
    case "*":
        result = mul(number1, number2);
        break;
    case "/":
        result = div(number1, number2);
        break;
    default:
        console.log("Invalid Operator");
}

console.log(`${number1} ${operator} ${number2} = ${result}`);
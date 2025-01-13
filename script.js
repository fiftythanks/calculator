function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

let number1;
let number2;
let operator;

function operate(number1, number2, operator) {
  return operator(number1, number2);
}


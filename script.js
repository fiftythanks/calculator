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

const buttons = {};
Array.from(document.querySelectorAll("button")).forEach((button) => {
  button.addEventListener("click", pressButton);
  buttons[button.id] = button;
});

const display = document.querySelector("#display").firstElementChild;

let result;
let float = 0;
function pressButton(e) {
  if (result !== undefined) {
    number1 = undefined;
    number2 = undefined;
    operator = undefined;
    result = undefined;
    float = 0;
    display.textContent = 0;
  } 
  
  if (display.textContent.length < 12) {
    switch (e.target) {
      case buttons.nought:
        if (display.textContent === "0") {
          break;
        } else {
          display.textContent += "0";
          break;
        }
      case buttons.one:
        if (display.textContent === "0") {
          display.textContent = "1";
        } else {
          display.textContent += "1";
        }
        break;
      case buttons.two:
        if (display.textContent === "0") {
          display.textContent = "2";
        } else {
          display.textContent += "2";
        }
        break;
      case buttons.three:
        if (display.textContent === "0") {
          display.textContent = "3";
        } else {
          display.textContent += "3";
        }
        break;
      case buttons.four:
        if (display.textContent === "0") {
          display.textContent = "4";
        } else {
          display.textContent += "4";
        }
        break;
      case buttons.five:
        if (display.textContent === "0") {
          display.textContent = "5";
        } else {
          display.textContent += "5";
        }
        break;
      case buttons.six:
        if (display.textContent === "0") {
          display.textContent = "6";
        } else {
          display.textContent += "6";
        }
        break;
      case buttons.seven:
        if (display.textContent === "0") {
          display.textContent = "7";
        } else {
          display.textContent += "7";
        }
        break;
      case buttons.eight:
        if (display.textContent === "0") {
          display.textContent = "8";
        } else {
          display.textContent += "8";
        }
        break;
      case buttons.nine:
        if (display.textContent === "0") {
          display.textContent = "9";
        } else {
          display.textContent += "9";
        }
        break;
      case buttons.dot:
        if (float === 0) {
          display.textContent += ".";
          float = 1;
        }
        break;
    }
  }
  switch (e.target) {
    case buttons.clear:
      number1 = undefined;
      number2 = undefined;
      operator = undefined;
      result = undefined;
      float = 0;
      display.textContent = 0;
      break;
    case buttons.plus:
      if (operator === add) {
        break;
      } else if (operator) {
        operator = add;
        break;
      } else {
        number1 = parseFloat(display.textContent);
        operator = add;
        float = 0;
        display.textContent = 0;
        break;
      }
    case buttons.minus:
      if (operator === subtract) {
        break;
      } else if (operator) {
        operator = subtract;
        break;
      } else {
        number1 = parseFloat(display.textContent);
        operator = subtract;
        float = 0;
        display.textContent = 0;
        break;
      }
    case buttons.multiply:
      if (operator === multiply) {
        break;
      } else if (operator) {
        operator = multiply;
        break;
      } else {
        number1 = parseFloat(display.textContent);
        operator = multiply;
        float = 0;
        display.textContent = 0;
        break;
      }
    case buttons.divide:
      if (operator === divide) {
        break;
      } else if (operator) {
        operator = divide;
        break;
      } else {
        number1 = parseFloat(display.textContent);
        operator = divide;
        float = 0;
        display.textContent = 0;
        break;
      }
      // 
    case buttons.equal:
      if (!number1 || !operator) {
        break;
      } else if (!number2) {
        number2 = parseFloat(display.textContent);
        if (operator === divide && number2 === 0) {
          result = NaN;
          display.textContent = "NaN";
        } else {
          result = operate(number1, number2, operator);
          if (result.toString().length <= 12) {
            display.textContent = result;
          } else {
            display.textContent = result.toExponential(2);
          }
        }
      }
      break;
  }

}
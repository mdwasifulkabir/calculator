const operators = "+-/*";
let num1, num2;
let operator;

function add(a, b){
  return a + b;
}

function subtract(a, b){
  return a - b;
}

function multiply(a, b){
  return a * b;
}

function divide(a, b){
  return a / b;
}

function operate(num1, num2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;

    case "-":
      result = subtract(num1, num2);
      break; 
    
    case "*":
      result = multiply(num1, num2);
      break;

    case "/":
      result = divide(num1, num2);
      break;
  }
  
  return result;
}

const numberContainer = document.querySelector("#number-container");
const operatorContainer = document.querySelector("#operator-container");
const display = document.querySelector("#display");

numberContainer.addEventListener("click", (e) => {
  display.textContent += e.target.textContent;
});

operatorContainer.addEventListener("click", (e) => {
  const keyText = e.target.textContent;
  
  switch(keyText) {
    case "Clear":
      display.textContent = "";
      break;

    case "=":
      calculate(display.textContent);
      break;

    default:
      //check if display already has a operator and if it does calculate that first
      const hasOperator = display.textContent.split('').find(c => operators.includes(c));
      if(hasOperator) {
        calculate(display.textContent);
        display.textContent += keyText;
      }
      else if(display.textContent != "") {
        display.textContent += keyText;
      }
  }
});

function calculate(displayVal) {
  const opIndex = displayVal.split('').findIndex(c => operators.includes(c));
  const operator = displayVal[opIndex];
  const nums = displayVal.split(operator);
  const num1 = parseInt(nums[0]);
  const num2 = parseInt(nums[1]);
  
  const result = operate(num1, num2, operator);
  if(result % 1 !== 0) {
    display.textContent = result.toFixed(11);
  } 
  else { 
  display.textContent = result;
  }
}
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
  const keyText = e.target.textContent;
  if (keyText === '.'){
    if (display.textContent.includes('.')) return;
  }
  display.textContent += keyText;
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
      //check if the last character is an operator
      const isLastOp = operators.includes(display.textContent.at(-1));

      if(hasOperator && !isLastOp) {
        calculate(display.textContent);
        display.textContent += keyText;
      } else if(display.textContent != "" && !isLastOp) {
        display.textContent += keyText;
      }
  }
});

function calculate(displayVal) {
  const opIndex = displayVal.split('').findIndex(c => operators.includes(c));
  const operator = displayVal[opIndex];
  const nums = displayVal.split(operator);
  const num1 = parseFloat(nums[0]);
  const num2 = parseFloat(nums[1]);
  
  const result = operate(num1, num2, operator);
  if(result % 1 !== 0) {
    //round to 11 decimal places and remove trailing zeroes
    display.textContent = parseFloat(result.toFixed(11));
  } else { 
  display.textContent = result;
  }
}
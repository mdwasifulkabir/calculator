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

const buttonContainer = document.querySelector("#button-container");
const display = document.querySelector("#display");

buttonContainer.addEventListener("click", (e) => {

  if (e.target.textContent == "Clear") {
    display.textContent = ""
  } 
  else if (e.target.textContent == "=") {
    calculate(display.textContent);
  }
  else {
  display.textContent += e.target.textContent;
  }
});

const operators = "+-/*";
function calculate(displayVal) {
  const opIndex = displayVal.split('').findIndex(c => operators.includes(c));
  const operator = displayVal[opIndex];
  const nums = displayVal.split(operator);
  const num1 = parseInt(nums[0]);
  const num2 = parseInt(nums[1]);
  console.log(`num1: ${num1}, num2: ${num2}, operator: ${operator}`);
  
  const result = operate(num1, num2, operator);
  console.log(`result: ${result}`);
  display.textContent = result;
}


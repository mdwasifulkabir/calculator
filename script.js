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
      res = add(num1, num2);
      break;

    case "-":
      res = subtract(num1, num2);
      break; 
    
    case "*":
      res = multiply(num1, num2);
      break;

    case "/":
      res = divide(num1, num2);
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
  else {
  display.textContent += e.target.textContent;
  }

})
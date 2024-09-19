const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('result');

let currentInput = '0';
let operator = null;
let previousInput = null;
let decimalAdded = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.innerText;

    if (value === 'C') {
      
      currentInput = '0';
      operator = null;
      previousInput = null;
      decimalAdded = false;
    } else if (value === '+/-') {

      currentInput = String(-parseFloat(currentInput));
    } else if (value === '%'|| value === '+'||  value === '-' || value === 'x' || value === '/') {
     
      operator = value;
      previousInput = currentInput;
      currentInput = '0';
      decimalAdded = false; 
    } else if (value === '=') {

      currentInput = calculate(previousInput, currentInput, operator);
      operator = null;
      previousInput = null;
    } else if (value === '.') {
   
      if (!decimalAdded) {
        currentInput += value;
        decimalAdded = true;
      }
    } else {
     
      if (currentInput === '0' && value !== '.') {
        currentInput = value;
      } else {
        currentInput += value;
      }
    }

    display.innerText = currentInput;
  });
});

function calculate(first, second, operator) {
  const a = parseFloat(first);
  const b = parseFloat(second);

  
  if (operator === '/' && b === 0) {
    return 'Error';
  }

  switch (operator) {
    case '+':
      return String(a + b);
    case '-':
      return String(a - b);
    case 'x':
      return String(a * b);
    case '/':
      return String(a / b);
    case '%':
      return String(a % b);
    default:
      return '0';
  }
}
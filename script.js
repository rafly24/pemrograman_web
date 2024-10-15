// Select the display element
const display = document.querySelector('.display');

// Select all button elements
const buttons = document.querySelectorAll('.buttons button');

// Initialize the display value
let currentValue = '0';

// Add event listeners to each button
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.textContent;
    switch (buttonText) {
      case 'AC':
        currentValue = '0';
        break;
      case '±':
        currentValue = currentValue * -1;
        break;
      case '%':
        currentValue = currentValue / 100;
        break;
      case '=':
        try {
          const expression = currentValue.replace('^', '**').replace('mod', '%');
          const result = eval(expression);
          if (result % 1 !== 0) {
            currentValue = 'Error: Modulus hanya dapat digunakan dengan bilangan bulat';
          } else {
            currentValue = result;
          }
        } catch (error) {
          currentValue = 'Error';
        }
        break;
      case '÷':
      case '×':
      case '-':
      case '+':
      case '^':
      case 'mod':
        if (currentValue !== '0') {
          currentValue += buttonText;
        }
        break;
      default:
        if (currentValue === '0') {
          currentValue = buttonText;
        } else {
          currentValue += buttonText;
        }
    }
    display.textContent = currentValue;
  });
});
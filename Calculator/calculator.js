/* const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter some input: ', (userInput) => {
  console.log('You entered:', userInput);
  rl.close();
}); */


/* const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter the value for x: ', (inputX) => {
  rl.question('Please enter the value for y: ', (inputY) => {
    console.log('You entered x:', inputX);
    console.log('You entered y:', inputY);

    // Now you can use inputX and inputY for future processing.
    // Convert them to the required type if needed, e.g., numbers.
    const x = parseFloat(inputX);
    const y = parseFloat(inputY);

    // Example of further processing
    console.log('Sum:', x + y);

    rl.close();
  });
});
 */

/* const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Receiving inputs
rl.question('Enter First Number: ', (num1) => {
  rl.question('Enter Second Number: ', (num2) => {
    console.log(`Number One: ${num1}`);
    console.log(`Number Two: ${num2}`);
    askOperator(rl);
  });
});

// Input function for the operation type. Will re-prompt if invalid operator is requested.
function askOperator(rl) {
  rl.question('Enter one of the following operations: add, sub, mult, div ', (operation) => {
    let expectedWords = ['add', 'sub', 'mult', 'div'];

    if (expectedWords.includes(operation)) {
      console.log(`Operation:${operation}`);
      rl.close();
    }
    else {
      console.log("Error: Unexpected Operation. Try Again. ");
      askOperator(rl);
    }
  });
}

// Taking the input and running the operation
function calculate(num1, num2, askOperator) {
  
} */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Get user inputs 
rl.question('Enter First Number: ', (num1) => {
  rl.question('Enter Second Number: ', (num2) => {
    rl.question('Enter one of the following operations: add, sub, mult, div: ', (operation) => {
      // Convert input strings to numbers
      const number1 = parseFloat(num1);
      const number2 = parseFloat(num2);
      
      // Process the inputs and show the result
      const result = calculate(number1, number2, operation);
      console.log(`Result: ${result}`);
      
      rl.close();
    });
  });
});

// Calculate the result based on the operation
function calculate(num1, num2, operation) {
  switch (operation) {
    case 'add': return num1 + num2;
    case 'sub': return num1 - num2;
    case 'mult': return num1 * num2;
    case 'div':
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return 'Error: Division by zero';
      }
    default:
      return 'Error: Invalid operation';
  }
}






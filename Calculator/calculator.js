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

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your name: ', (answer) => {
  console.log(`Hello, ${answer}!`);
  rl.close();
});

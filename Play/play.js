// var array = [1, 2, 2, 3];

// function unique(array) {
//     let newArray = [];
//     for (i = 0; i < array.length; i++){
//         const element = array[i];
//         if (!newArray.includes(element)){
//             newArray.push(element);
//         }
//     }
//     return newArray;
// }

// console.log(unique(array));
// console.log("Hello World");

// x = 4;
// y = 5; 

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter some text: ', (value) => {
//   console.log(`You entered: ${value}`);
//   rl.close();
// });


// const math = {
//   x: 4,
//   y: 3,
// }

// console.log("Sum is: ", math.x + math.y);
// console.log("Product is: ", math.x * math.y);
// console.log("Happy Holidays");


class Pet {
  constructor(name) {
      this.name = name;
      this.hunger = 0;
      this.tiredness = 0;
  }

  feed() {
      this.hunger -= 10;
      console.log(`${this.name} has been fed.`);
  }

  sleep() {
      this.tiredness -= 10;
      console.log(`${this.name} has taken a nap.`);
  }

  play() {
      this.hunger += 5;
      this.tiredness += 5;
      console.log(`${this.name} has played.`);
  }

  checkStatus() {
      console.log(`${this.name}'s Hunger level is: ${this.hunger}`);
      console.log(`${this.name}'s Tiredness level is: ${this.tiredness}`);
  }
}

let myPet = new Pet("Fluffy");

myPet.play();
myPet.checkStatus();
myPet.feed();
myPet.checkStatus();
myPet.sleep();
myPet.checkStatus();



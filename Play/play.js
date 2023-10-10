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


// const team1 = { name: "Team 1" };
// const team2 = { name: "Team 2" };
// const team3 = { name: "Team 3" };

// const teams = [team1, team2, team3];

// for (let i = 0; i < teams.length; i++) {
//     console.log(teams[i].name); 
// }




// const object = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3',
//     key4: 'value4',
//   };
  
//   console.log(Object.keys(object).length); 
  

// const object = { a: 1, b: 2, c: 3 } 
// for(let key in object) {
//     console.log(key);
// }

// console.log("Happy");

// let elements = ['a', 'a', 'b', 'c', 'd', 'd', 'd', 'd', 'd', 'r'];

// function countElements(elements) {
//     let counts = {};
//     for (let i = 0; i < elements.length; i++) {
//         let element = elements[i];
//         if (counts[element]) {
//             counts[element]++;
//         } else {
//             counts[element] = 1;
//         }
//     }
//     console.log(counts);
//     return counts;
// }

// countElements(elements);  

// let user = {
//     name: 'John',
//     address: null
//   };
  
// let street = user && user.address && user.address.street;
// console.log(street);

// console.log(2 + "2");
// console.log(2 + 2);

// let array = [4, 44, 444];

// console.log(array[0] + array[1]);
// console.log(array[1] + array[2]);

// array[1] = 21;

// console.log(array[0], array[1], array[2]);
// console.log("The math is as follows:", array[0] * array[1]);
// console.log("Hello World");

// let nestedArray = [1, 2, [3, 4, [5, 6]]];
// let flattenedArray = nestedArray.flat(2); 

// console.log(nestedArray)
// console.log(flattenedArray)
// console.log(nestedArray[0] + nestedArray[5])
// console.log(flattenedArray[0] + flattenedArray[5])
// console.log(nestedArray)
// console.log(flattenedArray)
// console.log(Happy Times)


// firstName = "John"
// lastName = "Doe"
// age = 35

// console.log("Name: ", firstName, "Last Name: ", lastName, "Age: ", age)

// console.log("Hello World")
// console.log("Hola World")
// console.log("Test")

// name = 'John';
// nameLength = name.length; 

// console.log(name.length);

// function ourFunction(a, b) {
//     console.log(a - b);
// }

// ourFunction(5, 12);

//// Using \ and \n
// console.log("First line\tSecond line\nThird Line\tFourth line\nFifth line\tSixth line")

//// Concatenating strings
// let str = "I come first. " + "I come second.";
// console.log(str)

//// Doing the same with + operatorl
// let str = "I come first. "
// str += "I come second."
// console.log(str)

// let myStr = "Jello World"
// myStr = "Hello World";
// console.log(myStr)

// function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
//     let result = "";
//     result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + "."
//     return result;
// }

// console.log(wordBlanks("dog", "big", "ran", "quickly"));

// array = [1, 2 , 3]
// array.push(["happy", "joy"])

// console.log(array)

// var myGlobal = 10;

// function fun1() {
//     oopsGlobal = 5;
// }

// function fun2() {
//     var output = "";
//     if (typeof myGlobal != "undefined") {
//         output += "myGlobal: " + myGlobal;
//     }
//     if (typeof oopsGlobal != "undefined") {
//         output += "oopsGlobal: " + oopsGlobal;
//     }
//     console.log(output);
// }

// fun1();
// fun2();


// function myLocalScope() {
//     let myData = 5;
//     console.log(myData)
// }

// myLocalScope();

// function minusSeven(num) {
//     return num - 7;
// }

// console.log(minusSeven(10));

// function nextInLine(arr, item) {
//     arr.push(item);
//     return arr.shift();
// }

// let testArr = [1,2,3,4,5];

// console.log("Before: " + JSON.stringify(testArr));

// nextInLine(testArr, 6);
// console.log("After: " + JSON.stringify(testArr));

// function determineTrueOrFalse(trueOrFalse) {
//     if (trueOrFalse == 1) {
//         console.log("Yes it is true");
//     }
//     else if (trueOrFalse == 0) {
//         console.log("No it is not true");
//     }
//     else {
//         console.log("Unclear");
//     }
// }

// let result = true;
// determineTrueOrFalse(result);


// function testEqual(val) {
//     if (val == 12) {
//         return "Equal";
//     }
//     return "Not Equal";
// }

// console.log(testEqual(10));

// function testEqual(a, b) {
//     if (a === b) {
//         return "Equal";
//     }
//     return "Not Equal";
// }

// console.log(testEqual(10, "10"));

// function testEqual(a, b) {
//     if (a !== b) {
//         return "Not Equal";
//     }
//     return "Equal";
// }

// console.log(testEqual(10, "10"));

// function testGreaterThan(val) {
//     if (val > 100) {
//         return "Over 100";
//     }
//     if (val > 10) {
//         return "Over 10";
//     }
//     return "10 or Under";
// }

// console.log(testGreaterThan(10));

// function testLogicalAnd(val) {

// if (val <= 50 && val >= 25) {
//     if (val >= 25) {
//         return "Yes";
//     }
// }
//     return "No";
// }

// console.log(testLogicalAnd(10));

// function testLogicalOr(val){
//     if (val < 10 || val > 20){
//         return "Outside";

//     }
//     return "Inside";
// }

// console.log(testLogicalOr(15));

// function caseSwitch(val) {
//     let answer = "";
//     switch(val) {
//         case 1:
//             answer = "alpha";
//             break;
//         case 2:
//             answer = "beta";
//             break;
//         case 3:
//             answer = "gamma";
//             break;
//         case 4:
//             answer = "delta";
//             break;
//         default:
//             answer = "Error Statement"
//             break;
//     }
//     return answer;
// }

// console.log(caseSwitch(5));

// function caseSwitch(val) {
//     let answer = "";
//     switch(val) {
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//             answer = "Kumbaya";
//         case 5:
//         case 6:
//         case 7:
//         case 8:
//             answer = "High Altitude Kumbaya";
//     }
//     return answer;
// }

// console.log(caseSwitch(5));

// function logMessage(message) {
//     return (message);
// }
// console.log(logMessage("Hello, world!"));

// function isLess(a, b) {
//     return (a < b) 
// }  

// console.log(isLess(10, 15));

// let a = 10;
// let b = 10;

// console.log(a * b);

// function fibonacci(num) {
//     var sequence = [0, 1];

//     for (var i = 2; i < num; i++) {
//         sequence[i] = sequence[i - 1] + sequence[i - 2];
//     }

//     return sequence;
// }

// console.log(fibonacci(10));  // Prints: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// console.log(happy times)



// function addTwoNumbers(num1, num2) {
//     return num1 + num2;
// }

// var result = addTwoNumbers(3, 7);
// console.log("The sum is: " + result);

// // Create an array of strings
// let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// // Iterate over the array and print each item
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// let a = 10;
// let b = 10;

// console.log(a * b);

// // Define a function to greet a user
// function greet(name) {
//     console.log("Hello, " + name + "!");
// }

// // Call the function with a name
// greet("Alice");
// greet("Bob");
// greet("Eve, please stop spying. No one appreciates the nosy.");

// // Initialize counter variable
// var counter = 1;

// // Use a while loop to print numbers from 1 to 10
// while(counter <= 10) {
//   console.log(counter);
//   counter++;
// }

// console.log("Happy day")

// function abTest(a,b) {
//   if (a < 0 || b <0){
//     return undefined;
//   }

//   return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }

// console.log(abTest(2, -2));
// console.log("Happy Times")

// let count = 0;

// function cc(card) {
//   switch(card){
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count++;
//       break;
//     case 10:
//     case "J":
//     case "Q":
//     case "K":
//     case "A":
//       count--;
//       break;
//   }

//   let holdbet = 'Hold';
//   if (count > 0) {
//     holdbet = 'Bet';
//   }
  
//   return count + " " + holdbet;
// }

// cc(2); cc('K'); cc(10); cc('K'); cc('A')
// console.log(cc())

// let ourDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"]
// };

// let myDog = {
//   name: "Quincy",
//   legs: 3,
//   tails: 1,
//   friends: []
// }

// myDog.name = "Bungee"
// myDog["bark"] = "Woof"

// console.log(myDog.name);
// console.log(myDog.bark);

// delete myDog.bark;
// console.log(myDog.bark);

// class Pet {
//   constructor(name, age, species) {
//     this.name = name;
//     this.age = age;
//     this.species = species;
//   }

//   eat() {
//     console.log(this.name + ' is eating.');
//   }

//   sleep() {
//     console.log(this.name + ' is sleeping.');
//   }
// }

// let dog = new Pet('Buddy', 5, 'dog');
// let cat = new Pet('Whiskers', 3, 'cat');

// dog.eat(); // Outputs: 'Buddy is eating.'
// cat.sleep(); // Outputs: 'Whiskers is sleeping.'


// let myStorage = {
//   Car: {
//     Inside: {
//       gloveBox: "maps",
//       passengerSeat: "crumbs"
//     },
//     Outside: {
//       Trunk: "jack"
//     }
//   }
// };

// let gloveBoxContents = myStorage.Car.Inside.gloveBox;
// console.log(gloveBoxContents);

// let compliments = [
//   "You're an awesome friend.",
//   "You're a gift to those around you.",
//   "You're a smart cookie.",
//   "You're amazing!",
//   "You're strong.",
//   "Your perspective is refreshing.",
//   "You're an excellent listener.",
//   "You're a ray of sunshine.",
//   "You're someone's reason to smile.",
//   "You're inspiring."
// ];

// let randomIndex = Math.floor(Math.random() * compliments.length);

// console.log(compliments[randomIndex]);

// let myPlants = [
//   { 
//     type: "flowers",
//     list: [
//       "rose",
//       "tulip", 
//       "dandelion"
//     ]
//   },
//   {
//     type: "trees",
//     list: [
//       "fir",
//       "pine",
//       "birch"
//     ]
//   }
// ];

// let secondTree = myPlants[0].list[2];
// console.log(secondTree);

// myArray = ['hello', 'to', 'the', 'world'];

// console.log(myArray);

// myArray.push('Bam')
// myArray.unshift('Hi')
// console.log(myArray);

// **************************************************************** JSYT COURSE: Timestamp 2:03:05


// let text = "hello world";
// let encoder = new TextEncoder();  // This encoder defaults to UTF-8
// let uint8Array = encoder.encode(text);

// console.log(uint8Array);


// let a = 4;
// ++a; 
// a++;

// console.log(a);

// let a = 1 + 2 * 3;
// let b = (1 + 2) * 3; 
// console.log(a);
// console.log(b);

// let a = [4, 5, 7]
// console.log(a[0])
// console.log(a)

// let counter = 0;
// function timeout() {
//     setTimeout(function () {
//         console.log('hi ' + counter++);
//         timeout()
//     }, 2000);
// }

// timeout();

// let counter = 0;

// function timeout() {
//     console.log('hi ' + counter++);
//     setTimeout(timeout, 2000);
// }

// timeout();

// function three () {
//     return function () {
//         return 'three';
//     }
// }

// console.log(three()());

// module-pattern

/* var counter = (function(){

    let count = 0

    function print(message) {
        console.log(message + '---' + count);
    }

    return {
        get: function() {
            return count;
        },

        set: function(value) {
            count = value;
        },

        increment: function() {
            count += 1;
            print('After increment: ');
        },

        reset: function() {
                print('Before reset: ');
                count = 0;
                print('After reset: ');
        }
    }
})();

counter.set(7);
console.log(counter.get());

counter.reset(); */

/* function sayHello(name) {
    return function(){
        console.log('howdy ' + name);
    }
}

let bob = sayHello('bob');
let conrad = sayHello('conrad');
let grant = sayHello('grant');

bob();
conrad();
grant(); */


/* function first() {
    return this;
}

console.log(first() === global);

function second() {
    'use strict';

    return this;
}

console.log(second() === global);
console.log(second() === undefined);
console.log(second()); */

/* console.log(global);
 */

/* let myObject = {
    value: 'My Object'
};

global.value = 'Global object';

function newFunction() {
    return this.value;
}

console.log(newFunction()); */

/* let me = {
    name: 'JF',
    age: 42,
    favNoise: 'bark',
    whatIsThis: function() {
        return this;
    }
}

console.log(me.whatIsThis()); */

/* let car = {
    make: 'bmw',
    model: '330i',
    year: 2006,
}

console.log(car.make + ' ' + car.model); */

/* function printToScreen() {
    console.log(this.firstName + ' ' + this.lastName);
}

let customer1 = {
    firstName: 'Bob',
    lastName: 'Taylor',
    print: printToScreen
}

let customer2 = {
    firstName: 'Jane',
    lastName: 'Stewart',
    print: printToScreen
}

customer1.print();
customer2.print(); */

/* // Regex
let pattern = /xyz/;
console.log(pattern);
console.log(typeof pattern);

let value = 'This is xyz a test';

//Search + Replace
console.log(pattern.test(value));
console.log(value.replace(pattern, 'just'));

console.log(value.match(pattern));
var match = value.match(pattern);
console.log(match.index); */

/* // Built-in Native Types 
let myString = new String('howdy');
console.log(typeof myString);
console.log(myString.toString()); */

/* // Constructor Call
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year
}

let car1 = new Car('bmw', '330i', 2006);

console.log(car1); */

/// Learn classes and constructors
/// Or learn object literals

/* // CLASSES AND CONSTRUCTORS
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log('Hello, ' + this.name);
    }
}

const john = new Person('John', 30);
john.greet();

const person = {
    name: 'John',
    age: '30',
    greet: function(){
        console.log('Hello, ' + this.name);
    }
// OBJECT LITERAL
}

person.greet(); */

/* // USING ARROW FUNCTIONS
// NO ARROW
let hi = function() {
    console.log('Hello World')
}

hi();

// WITH ARROW
let hey = () => {
    console.log('Hello World')
}

hey();

let hello = (name) => {
    console.log('Howdy ' + name);
}

hello('Bob');

let hello1 = (name) => {
    console.log(`Howdy ${name}`);
}

hello1('Bob');
 */

/* // DATE OBJECT
let today = new Date();
let bob = new Date('December 7,1969 07:01:23');
let bob = new Date('1969-12-07T07:01:23');
let bob = new Date(1969, 11, 6) */

/* // ES6 SYNTAX OPTIONS - IMPORTANT
const square = (number) => {
    return number * number;
};
// versus

const square1 = number => number * number; */

/*  // FIDLING WITH JARED EXAMPLE
    const Square = (n) => {
    n** 2; 
    let x = 4; 
    console.log("more useless statements inside one function");
    }; */

/* // CALLBACK

function fetchData(callback) {
    // Simulating fetching data with a timeout
    setTimeout(function() {
        console.log("Data fetched!");
        callback();
    }, 2000);
}

function displayData() {
    console.log("Displaying data...");
}

// Fetch data and then display it
fetchData(displayData); */

/* function isStrictMode() {
    return this === undefined;
}

console.log(isStrictMode());  // If this returns true, the function is in strict mode.
 */

/* const square = number => number * number;

const square = function(number) {
    return number * number;
}

console.log(square(8)); */

/* const jobs = [
    {
        id: 1,
        isActive: true
    },
    {
        id: 2, 
        isActive: true
    },
    {
        id: 3, 
        isActive: false
    },
]; */

/* const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false },
];

const activeJobs = jobs.filter(function(job) {
    return job.isActive;
    });

const activeJobs = jobs.filter(job => job.isActive); */

/* // COMPARING VALUES
let a = 1, b = '1';
let result = (a == b) ? 'equal' : 'inequal';
console.log(result); */

/* const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    country: 'US'
};

const { firstName, ...restOfPerson } = person;

console.log(firstName);     // 'John'
console.log(restOfPerson);  // { lastName: 'Doe', age: 30, country: 'US' }

// New Project
console.log("hello world"); */


/* // CALLBACK FUNCTION
function greet(name, callback) {
    console.log('Hello, ' + name);
    callback();
}

greet('Alice', function() {
    console.log('Greeting completed.');
});
 */

/* // EXERCISE ON CLASS/OBJECT
class Employee {
    constructor(name, id, salary){
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    calculateMonthlyPaycheck(){
        return this.salary / 12;
    }
}

const employee1 = new Employee("James", 2535, 60000);
const employee2 = new Employee("David", 5757, 55000);

console.log(employee2.calculateMonthlyPaycheck()); */

// ASYNC CRASHCOURSE

/* let persons = [
    {
        "hat": "cap",
        "shirt": "jersey",
        "shoes": "cleats"
    },
    {
        "hat": "hatless",
        "shirt": "shirtless",
        "shoes": "shoeless"
    }
];

for (let i = 0; i < persons.length; i++) {
    console.log(`Person ${i + 1}`);
    console.log(`Hat: ${persons[i].hat}`);
    console.log(`Shirt: ${persons[i].shirt}`);
    console.log(''); // To add a newline for better readability
} */

/* let testObj = {
    entree: "vegan burger",
    side: "greens",
    drink: "purified water"
};

console.log(testObj.entree);
console.log(testObj.drink); */

/* const testObj = {
    12: "Namath", 
    16: "Montana",
    19: "Unitas"
};

let playerNumber = 16;
let player = testObj[playerNumber];

console.log(player); */

/* const ourDog = {
    name: "Camper",
    legs: "4",
    tails: "1",
    friends: "All things"
};

ourDog.name = "Happy Camper"
ourDog.bark = "Woof";

console.log("Meet:", ourDog.name);
console.log(ourDog.bark); */

// FREE CODE CAMP EXAMPLE
/* function phoneticLookup(val) {
    let result = "";

    let lookup = {
        alpha: "Adams",
        bravo: "Boston",
        charlie: "Chicago",
        delta: "Denver",
        echo: "Easy", 
        foxtrot: "Frank"
    };  

    result = lookup[val];

    return result;
}

console.log(phoneticLookup("charlie")); */


// GPT4 EXAMPLE 
/* function phoneticLookup(val) {
    let lookup = {
        alpha: "Adams",
        bravo: "Boston",
        charlie: "Chicago",
        delta: "Denver",
        echo: "Easy", 
        foxtrot: "Frank"
    };  

    return lookup[val];
}

console.log(phoneticLookup("charlie")); */


// HGPT EXAMPLE
/* const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };

const phoneticLookup = (val) => lookup[val];

// Pre ES6:
// function phoneticLookup(val) {
//    return lookup[val];
//} 
  
console.log(phoneticLookup("delta")); */

/* const myObj = {
    gift: "Pony",
    pet: "Dog", 
    bed: "Wooden"
}

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not Found";
    }
}

console.log(checkObj("banana")); */

/* const myObj = {
    gift: "Pony",
    pet: "Dog", 
    bed: "Made of wood"
}

function checkObj(checkProp) {
    return myObj.hasOwnProperty(checkProp) ? myObj[checkProp] : "Not Found";
}

console.log(checkObj("gift")); */

/* const myMusic = [
    {
        artist: "Billy Joel",
        title: "Piano Man",
        releaseYear: 1973,
        formats: [
            "CD",
            "8T",
            "LP"
        ],
        gold: true
    },
    {
        artist: "Beau Carnes",
        title: "Cereal Man",
        releaseYear: 2005,
        formats: [
            "YT Video"
        ]
    }
]

console.log(myMusic[1].artist);
console.log(myMusic[1].title); */

/* const storage = {
    car: {
        inside: {
            gloveBox: "maps",
            passangerSeat: "crumbs"
        },
        outside: {
            trunk: "jack",
        }
    }
};

const gloveBoxContents = storage.car.inside.gloveBox;

console.log(gloveBoxContents); */

/* const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
]

console.log(myPlants[1].list[0]); */

/* const Car = {
    make: "bmw",
    model: "330i",
    year: 2006,
    getPrice: function() {
        return 5000;
    },
    printDescrip: function() {
        console.log(this.make + ' ' + this.model);
    }
}

Car.printDescrip(); */

/* function first() {
    return this;
}

console.log(first() === global); */

/* function second() {
    'use strict';

    return this;
}

console.log(second() === global);
console.log(second() === undefined); */

/* function fifth() {
    console.log(this.firstName + ' ' + this.lastName);
}

let customer1 = {
    firstName: 'Tommy',
    lastName: 'P.',
    print: fifth
}

let customer2 = {
    firstName: 'Jared',
    lastName: 'M.',
    print: fifth
}

customer2.print();
customer1.print(); */

/* const dude = {};
dude.name = "SINAAAA";
dude.age = 34;

console.log(dude.name);
console.log(dude.age); */

// INHERITANCE

/* const me = {
    talk() {
        return 'Talking';
    }
}

const you = {
    talk() {
        return 'Talking';
    }
}

console.log(me.talk());
console.log(you.talk());
 */

/* class Person {
    talk() {
        return 'Talking';
    }
}

Person.prototype.talk = function(){
    return 'New and improved Talking'
};

const me = new Person();
const you = new Person();

console.log(me.talk());
console.log(you.talk());

class SuperHuman extends Person {
    fly() {
        return 'Flyyying';
    }
}

const him = new SuperHuman();

console.log(him.fly());
console.log(him.talk()); */

// THIS IN AN OBJECT METHOD

/* const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`;
    },
    getAge: function() {
      return this.age;
    }
  };
  
  console.log(person.getFullName()); // Output: "John Doe"
  console.log(person.getAge()); // Output: 30 */

// THIS IN A CONSTRUCTOR 
/*   function Car(make, model) {
    this.make = make;
    this.model = model;
    this.getDescription = function() {
      return `${this.make} ${this.model}`;
    };
  }
  
  const myCar = new Car('Toyota', 'Camry');
  console.log(myCar.getDescription()); // Output: "Toyota Camry"  */ 

// THIS IN AN OBJECT

/* const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`;
    },
    getAge: function() {
      return this.age;
    }
  };
  
  console.log(person.getFullName()); // Output: "John Doe"
  console.log(person.getAge()); // Output: 30 */

  // USING EXTENDS AND SUPER TO SET-UP INHERITENCE IN AN ES6 CLASS FORMAT 

/*   class Animal {
    constructor(name, species) {
      this.name = name;
      this.species = species;
    }
  
    speak() {
      return `Hi, I'm a ${this.species} and my name is ${this.name}`;
    }
  }
  
  // Child Class
  class Dog extends Animal {
    constructor(name, breed) {
      super(name, 'dog');  // Call parent constructor with super
      this.breed = breed;
    }
  
    woof() {
      return 'Woof! Woof!';
    }
  }
  
  const myDog = new Dog('Max', 'Labrador');
  console.log(myDog.speak());  // Output: "Hi, I'm a dog and my name is Max"
  console.log(myDog.woof());   // Output: "Woof! Woof!" */
  
// THIS 

/* function talk() {
    return `I am ${this.name}`
}

const me = {
    name: 'John',
    talk
}

const you = {
    name: 'Jack',
    talk
}

console.log(me.talk());
console.log(you.talk()); */

/* const weirdArray = [
    "apple",
    "banana",
    function() {
      return `The third element is a function and it can access the array itself: ${this[0]}, ${this[1]}`;
    }
  ];
  
  console.log(weirdArray[2].call(weirdArray));  */

/*   const weirdArray = [
    "apple",
    "banana",
    "carrot",
    () => {
      const [firstElement, secondElement] = weirdArray;
      return `The third element is a function and it can access the array itself: ${firstElement}, ${secondElement}`;
    }
  ];
  
  // Execute the function
  console.log(weirdArray[3]()); */
  


// JS FCC: 2:03:06

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

function determineTrueOrFalse(trueOrFalse) {
    if (trueOrFalse == 1) {
        console.log("Yes it is true");
    }
    else if (trueOrFalse == 0) {
        console.log("No it is not true");
    }
    else {
        console.log("Unclear");
    }
}

let result = true;
determineTrueOrFalse(result);

// Timestapm 1:09:39
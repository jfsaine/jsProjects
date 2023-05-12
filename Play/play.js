
var array = [1, 2, 2, 3];

function unique(array) {
    let newArray = [];
    for (i = 0; i < array.length; i++){
        const element = array[i];
        if (!newArray.includes(element)){
            newArray.push(element);
        }
    }
    return newArray;
}

console.log(unique(array));
console.log("Hello World");

x = 4;
y = 5; 

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

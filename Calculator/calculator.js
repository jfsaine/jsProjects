function askUser() {
    var userInput = prompt("Please enter some input:", "Default value");
    
    if (userInput != null) {
        console.log("User entered: " + userInput);
        return userInput;
    } else {
        console.log("User cancelled or entered nothing.");
        return null;
    }
}

// To use the function
var response = askUser();

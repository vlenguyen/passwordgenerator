// Assignment code here
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var number = "0123456789"
var special = "!@#$%^&*()"
var characterBank = ""; //everything the user said yes to

function generatePassword() {
  console.log('whatsup');
  var newPassword = ""
  var passwordLength = window.prompt("how many characters btwn 8-128");
console.log("pw length", passwordLength);
// window.alert("The computer chose "); <a message alert pop up
var specialCharacters = window.confirm("special character");
console.log("special character", specialCharacters); // boolean - special character

var uppercasePrompt = window.confirm("uppercase?");
console.log("uppercase", uppercasePrompt); // boolean - capital

var numbersPrompt = window.confirm("how many numbers");
console.log("numbers", numbersPrompt); // boolean - numbers

var lowercasePrompt = window.confirm("lowercase");
console.log("lowercase", lowercasePrompt); // boolean - lowercase

if (uppercasePrompt === true){
  console.log('before', characterBank);
characterBank += uppercase;
console.log('after', characterBank);
};


if (numbersPrompt === true){
  console.log('before', characterBank);
characterBank += number;
console.log('after', characterBank);
};

if (lowercasePrompt === true){
  console.log('before', characterBank);
characterBank += lowercase;
console.log('after', characterBank);
};

if (specialCharacters === true){
  console.log('before', characterBank);
characterBank += special;
console.log('after', characterBank);
};

for (var i = 0; i < passwordLength; i++) {
  // This is the block of code that will run each time
  console.log("This is the current value of i: " + i + ".");
  newPassword += characterBank.charAt(Math.floor(Math.random() * characterBank.length))
}

console.log('new password', newPassword);
return newPassword; // return from function generatePassword to function writePassword. this is the pass ~ call to recieve function.

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() { //here's the other function. function is recieving the call
  console.log('hello');
  var password = generatePassword(); //calling this action. give info from one function to the other function --> need to return the info. . this function is called. 
  var passwordText = document.querySelector("#password");
// console.log('hello');
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

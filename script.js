// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  const pwdLength = prompt("To set the length of your password, choose any number between 8 and 128:");
  const values = [];

      if(confirm("lowercase")) {
          values.push("abcdefghijklmnopqrstuvwxyz");
      }
      if(confirm("uppercase")) {
          values.push("ABCDEFGHIJKLMNPQRSTUVWXYZ");
      }
      if(confirm("numbers")) {
          values.push("1234567890");
      }
      if(confirm("characters")) {
          values.push("!@#$%^&*()+-./:;<={}|~?");
      }
  let pword = "";
  for(var i = 0; i <= pwdLength; i++) {
      pword = pword + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
      }
} 

console.log(generatePassword());

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN prompted for character types to include in the password
//THEN I choose lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page


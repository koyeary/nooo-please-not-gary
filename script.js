//create event listener to trigger the password generator
document.getElementbyId("#generate").onclick = writePassword();

// Writes password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");
	passwordText.value = password;
}


function generatePassword() {
	var pwdLength = prompt("How long should your password be?\ Pick a number between 8 and 128");
	if (pwdLength < 8 || pwdLength > 128) {
		alert("ERROR. Must select a number between 8 and 128. Page will reload.");
    return location.reload();
	} else {
		alert("In the following prompts, you'll be asked" +
			" to select what kind of characters to include." +
			" Click 'OK' for yes and 'Cancel' for no.");
	}
 

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNPQRSTUVWXYZ";
var numbers = "1234567890";
var specialCharacters = "!@#$%^&*()+-./:;<={}|~?";
var str = [];


	if (confirm("lowercase")) {
		str.push(lowercase);
	}
	if (confirm("uppercase")) {
		str.push(uppercase);
	}
	if (confirm("numbers")) {
		str.push(numbers);
	}
	if (confirm("special characters")) {
		str.push(specialCharacters);
	}

var characters = str.join('');
if (characters === ("")) {
	alert("ERROR. You did not select any character types. Page will Reload.");
	return location.reload();
} else {
	var charactersLength = characters.length;
	//Computer selects random characters, using the password length as a parameter, 
	//and returns them as a string. This is the password.
	var result = '';
	for (var i = 0; i < pwdLength; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
  }
}


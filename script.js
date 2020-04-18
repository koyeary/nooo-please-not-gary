//create event listener to trigger the password generator
document.getElementbyId("#generate").onclick = writePassword();


// Writes password to the #password input
function writePassword() {
	//sets the password length and 
	var pwdLength = prompt("How long should your password be?\Pick a number between 8 and 128");
	var password = generatePassword(pwdLength);
	var passwordText = document.querySelector("#password");
	passwordText.value = password;
}

//Generates password within the parameters of the selected length
function generatePassword(length) {

	alert("In the following prompts, you'll be asked\ to select what kind of characters to include.\ Click 'OK' for yes and 'Cancel' for no.");

	//Creates an empty array and adds strings of selected characters as they are confirmed.
	var str = [];
	if (confirm("lowercase")) {
		str.push("abcdefghijklmnopqrstuvwxyz");
	}
	if (confirm("uppercase")) {
		str.push("ABCDEFGHIJKLMNPQRSTUVWXYZ");
	}
	if (confirm("numbers")) {
		str.push("1234567890");
	}
	if (confirm("special characters")) {
		str.push("!@#$%^&*()+-./:;<={}|~?");
	}

	//Concatenates these separate strings into a single array. 
  var characters = str.join('');

  //Computer selects random characters, using the password length as a parameter, 
 //and returns them as a string. This is the password.
	var result = '';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}






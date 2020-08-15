// Assignment code here
var specialCharacters = [ ' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
var lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers =['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

var randomChar = function (charArray) {
  var randomizedChar = charArray[Math.floor(Math.random() * charArray.length)];
  return randomizedChar;
}

var createPassword1 = function(criteria1, length) {
  var password = "";
  for (var i = 0; i < length; i++) {
    password = password + randomChar(criteria1);
    console.log(password);
  }
  return password;
}

var createPassword2 = function(criteria1, criteria2, length) {
  var criteriaList = [criteria1, criteria2];
  var password = "";
  for (var i = 0; i < length; i++) {
    password = password + randomChar(criteriaList[Math.floor(Math.random() * criteriaList.length)]);
    console.log(password);
  }
  return password;
}

var createPassword3 = function(criteria1, criteria2, criteria3, length) {
  var criteriaList = [criteria1, criteria2, criteria3];
  var password = "";
  for (var i = 0; i < length; i++) {
    password = password + randomChar(criteriaList[Math.floor(Math.random() * criteriaList.length)]);
    console.log(password);
  }
  return password;
}

var createPassword4 = function(criteria1, criteria2, criteria3, criteria4, length) {
  var criteriaList = [criteria1, criteria2, criteria3, criteria4];
  var password = "";
  for (var i = 0; i < length; i++) {
    password = password + randomChar(criteriaList[Math.floor(Math.random() * criteriaList.length)]);
    console.log(password);
  }
  return password;
}

var generatePassword = function() {
  var passwordLength = 0;
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("How long would you like the pasword? pick a number between 8 and 128"));
    console.log(passwordLength);
    if (passwordLength < 8) {
      alert(`${passwordLength} is too short! Try again.`);
    } else if (passwordLength > 128) {
      alert(`${passwordLength} is too long! Try again.`);
    }
  }
  var confirmLower = false;
  var confirmSpecial = false;
  var confirmUpper = false;
  var confirmNumbers = false;

  while (confirmLower === false && confirmSpecial === false && confirmUpper === false && confirmNumbers === false) {
    confirmLower = confirm("would you like lowerercase characters?");
    confirmSpecial = confirm("would you like special characters?");
    confirmUpper = confirm("would you like uppercase characters?");
    confirmNumbers = confirm("would you like numbers?");
    if (confirmLower === false && confirmSpecial === false && confirmUpper === false && confirmNumbers === false) {
      alert("You must pick at least one!")
    }
  }
debugger;
  if(confirmLower === true && confirmSpecial === true && confirmUpper === true && confirmNumbers === true) {
    return createPassword4(lowerLetters, specialCharacters, upperLetters, numbers, passwordLength);
  }else if (confirmLower === true && confirmSpecial === true && confirmUpper === true && confirmNumbers === false) {
    return createPassword3(lowerLetters, specialCharacters, upperLetters, passwordLength);
  } else if (confirmLower === true && confirmSpecial === true && confirmUpper === false && confirmNumbers === true) {
    return createPassword3(lowerLetters, specialCharacters, numbers, passwordLength);
  } else if (confirmLower === true && confirmSpecial === false && confirmUpper === true && confirmNumbers === true) {
    return createPassword3(lowerLetters, numbers, upperLetters, passwordLength);
  } else if (confirmLower === true && confirmSpecial === true && confirmUpper === false && confirmNumbers === false) {
    return createPassword2(lowerLetters, specialCharacters, passwordLength);
  } else if (confirmLower === true && confirmSpecial === false && confirmUpper === true && confirmNumbers === false) {
    return createPassword2(lowerLetters, upperLetters, passwordLength);
  } else if (confirmLower === true && confirmSpecial === false && confirmUpper === false && confirmNumbers === true) {
    return createPassword2(lowerLetters, numbers, passwordLength);a
  } else if (confirmLower === true && confirmSpecial === false && confirmUpper === false && confirmNumbers === false) {
    return createPassword1(lowerLetters, passwordLength);
  }
  else if(confirmSpecial === true && confirmLower === true && confirmUpper === true && confirmNumbers === false) {
      return createPassword3(specialCharacters, lowerLetters, upperLetters, passwordLength);
  } else if (confirmSpecial === true && confirmLower === true && confirmUpper === false && confirmNumbers === true) {
    return createPassword3(specialCharacters, lowerLetters, numbers, passwordLength);
  } else if (confirmSpecial === true && confirmLower === false && confirmUpper === true && confirmNumbers === true) {
    return createPassword3(specialCharacters, numbers, upperLetters, passwordLength);
  } else if (confirmSpecial === true && confirmLower === true && confirmUpper === false && confirmNumbers === false) {
    return createPassword2(specialCharacters, lowerLetters, passwordLength);
  } else if (confirmSpecial === true && confirmLower === false && confirmUpper === true && confirmNumbers === false) {
    return createPassword2(specialCharacters, upperLetters, passwordLength);
  } else if (confirmSpecial === true && confirmLower === false && confirmUpper === false && confirmNumbers === true) {
    return createPassword2(specialCharacters, numbers, passwordLength);a
  } else if (confirmSpecial === true && confirmLower === false && confirmUpper === false && confirmNumbers === false) {
    return createPassword1(specialCharacters, passwordLength);
  }
  else if(confirmUpper === true && confirmLower === true && confirmSpecial === true && confirmNumbers === false) {
    return createPassword3(upperLetters, lowerLetters, specialCharacters, passwordLength);
  } else if (confirmUpper === true && confirmLower === true && confirmSpecial === false && confirmNumbers === true) {
    return createPassword3(upperLetters, lowerLetters, numbers, passwordLength);
  } else if (confirmUpper === true && confirmLower === false && confirmSpecial === true && confirmNumbers === true) {
    return createPassword3(upperLetters, numbers, specialCharacters, passwordLength);
  } else if (confirmUpper === true && confirmLower === true && confirmSpecial === false && confirmNumbers === false) {
    return createPassword2(upperLetters, lowerLetters, passwordLength);
  } else if (confirmUpper === true && confirmLower === false && confirmSpecial === true && confirmNumbers === false) {
    return createPassword2(upperLetters, specialCharacters, passwordLength);
  } else if (confirmUpper === true && confirmLower === false && confirmSpecial === false && confirmNumbers === true) {
    return createPassword2(upperLetters, numbers, passwordLength);a
  } else if (confirmUpper === true && confirmLower === false && confirmSpecial === false && confirmNumbers === false){
    return createPassword1(upperLetters, passwordLength);
  }
  else if(confirmNumbers === true && confirmLower === true && confirmSpecial === true && confirmUpper === false) {
    return createPassword3(numbers, lowerLetters, specialCharacters, passwordLength);
  } else if (confirmNumbers === true && confirmLower === true && confirmSpecial === false && confirmUpper === true) {
    return createPassword3(numbers, lowerLetters, upperLetters, passwordLength);
  } else if (confirmNumbers === true && confirmLower === false && confirmSpecial === true && confirmUpper === true) {
    return createPassword3(numbers, upperLetters, specialCharacters, passwordLength);
  } else if (confirmNumbers === true && confirmLower === true && confirmSpecial === false && confirmUpper === false) {
    return createPassword2(numbers, lowerLetters, passwordLength);
  } else if (confirmNumbers === true && confirmLower === false && confirmSpecial === true && confirmUpper === false) {
    return createPassword2(numbers, specialCharacters, passwordLength);
  } else if (confirmNumbers === true && confirmLower === false && confirmSpecial === false && confirmUpper === true) {
    return createPassword2(numbers, upperLetters, passwordLength);a
  } else if (confirmNumbers === true && confirmLower === false && confirmSpecial === false && confirmUpper === false){
    return createPassword1(numbers, passwordLength);
  }
  else {
    debugger;
  }
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword())

// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

  // Converting String to individual number variables for easy reading of code
  var firstDigit = Number(cardNumber[0]);
  var secondDigit = Number(cardNumber[1]);
  var length = cardNumber.length;
  var firstFourDigits = Number(cardNumber.substr(0,4));
  var firstTwoDigits = Number(cardNumber.substr(0,2));


  // Conditional statements for card numbers that dont start with a specific digit

  if (firstDigit < 3 || firstDigit > 6){
  	return "Invalid Card Number";
  }

  // Conditional statements for Diner's Club and American Express

  if (firstDigit === 3){
  	if ((secondDigit === 8 || secondDigit === 9) && length === 14){
  	return "Diner's Club";
  	} else if ((secondDigit === 4 || secondDigit === 7) && length === 15){
  	return "American Express";
  	}
  }

  // Conditional statement for Visa

  if ((length === 13 || length === 16 || length === 19) && firstDigit === 4){
  	return "Visa";
  }

  // Conditional statement for MasterCard

  if (firstDigit === 5 && length === 16 && secondDigit > 0 && secondDigit < 6){
  	return "MasterCard";
  }

  // Conditional statements for Discover
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.

  if ((length === 19 || length === 16) && (firstFourDigits === 6011 || firstTwoDigits === 64 || firstTwoDigits === 65)){
	return "Discover";
  }

  // Conditional statements for Maestro 5018, 5020, 5038, or 6304

  if ((length > 11 && length < 20) && (firstFourDigits === 5018 || firstFourDigits === 5020 || firstFourDigits === 5038 || firstFourDigits === 6304)){
  	return "Maestro";
  }

  // in any other case we will need to return invalid card number

  return "Invalid Card Number";
  
};



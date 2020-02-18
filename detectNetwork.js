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

  firstDigit = Number(cardNumber[0]);
  secondDigit = Number(cardNumber[1]);
  length = cardNumber.length;

  // Conditional statements for invalid card numbers not starting with 3

  if (firstDigit !== 3){
  	return "Invalid Card Number";
  }

  // Conditional statements for Diner's Club

  if ((secondDigit === 8 || secondDigit === 9) && length === 14){
  	return "Diner's Club";
  }

  // Conditional statements for American Express

  if ((secondDigit === 4 || secondDigit === 7) && length === 15){
  	return "American Express";
  }

  // in any other case we will need to return invalid card number

  return "Invalid Card Number";
  
};



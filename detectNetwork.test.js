
 
  // describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  /* it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
*/

/* describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    throw new Error('Delete me!');
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('3934567890123') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});
*/

describe('American Express', function() {

  var should = chai.should();

  it('has a prefix of 34 and a length of 15', function() {
    detectNetwork('343456789012345').should.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    detectNetwork('373456789012345').should.equal('American Express');
  });
});

describe('Visa', function() {

  var should = chai.should();
 

  it('has a prefix of 4 and a length of 13', function() {
    detectNetwork('4123456789012').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    detectNetwork('4123456789012345').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    detectNetwork('4123456789012345678').should.equal('Visa');
  });
});

describe('MasterCard', function() {

  var should = chai.should();
 
  it('Has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('Has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('Has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var should = chai.should();

  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011123456789012').should.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011123456789012345').should.equal('Discover');
  });

  it('has a prefix of 644 and a length of 19', function() {
    detectNetwork('6441123456789012345').should.equal('Discover');
  });

  it('has a prefix of 644 and a length of 16', function() {
    detectNetwork('6441234567890123').should.equal('Discover');
  });

  it('has a prefix of 645 and a length of 16', function() {
    detectNetwork('6451234567890123').should.equal('Discover');
  });

  it('has a prefix of 645 and a length of 19', function() {
    detectNetwork('6451234567890123123').should.equal('Discover');
  });

  it('has a prefix of 646 and a length of 16', function() {
    detectNetwork('6461234567890123').should.equal('Discover');
  });

  it('has a prefix of 646 and a length of 19', function() {
    detectNetwork('6461234567890123123').should.equal('Discover');
  });

  it('has a prefix of 646 and a length of 16', function() {
    detectNetwork('6461234567890123').should.equal('Discover');
  });

  it('has a prefix of 646 and a length of 19', function() {
    detectNetwork('6461234567890123123').should.equal('Discover');
  });

  it('has a prefix of 647 and a length of 16', function() {
    detectNetwork('6471234567890123').should.equal('Discover');
  });

  it('has a prefix of 647 and a length of 19', function() {
    detectNetwork('6471234567890123123').should.equal('Discover');
  });

  it('has a prefix of 648 and a length of 16', function() {
    detectNetwork('6481234567890123').should.equal('Discover');
  });

  it('has a prefix of 648 and a length of 19', function() {
    detectNetwork('6481234567890123123').should.equal('Discover');
  });

  it('has a prefix of 649 and a length of 16', function() {
    detectNetwork('6491234567890123').should.equal('Discover');
  });

  it('has a prefix of 649 and a length of 19', function() {
    detectNetwork('6491234567890123123').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6551234567890123').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6551234567890123123').should.equal('Discover');
  });

});

  describe('Maestro', function() {

  var should = chai.should();

  it('has a prefix of 5018 and a length of 12', function () {
    detectNetwork('501812341234').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 12', function () {
    detectNetwork('502012341234').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 12', function () {
    detectNetwork('503812341234').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 12', function () {
    detectNetwork('630412341234').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 13', function () {
    detectNetwork('5018123412341').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 13', function () {
    detectNetwork('5020123412341').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 13', function () {
    detectNetwork('5038123412341').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 13', function () {
    detectNetwork('6304123412341').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 14', function () {
    detectNetwork('50181234123412').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 14', function () {
    detectNetwork('50201234123412').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 14', function () {
    detectNetwork('50381234123412').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 14', function () {
    detectNetwork('63041234123412').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 15', function () {
    detectNetwork('501812341234123').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 15', function () {
    detectNetwork('502012341234123').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 15', function () {
    detectNetwork('503812341234123').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 15', function () {
    detectNetwork('630412341234123').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 16', function () {
    detectNetwork('5018123412341234').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 16', function () {
    detectNetwork('5020123412341234').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 16', function () {
    detectNetwork('5038123412341234').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 16', function () {
    detectNetwork('6304123412341234').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 17', function () {
    detectNetwork('50181234123412341').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 17', function () {
    detectNetwork('50201234123412341').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 17', function () {
    detectNetwork('50381234123412341').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 17', function () {
    detectNetwork('63041234123412341').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 18', function () {
    detectNetwork('501812341234123412').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 18', function () {
    detectNetwork('502012341234123412').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 18', function () {
    detectNetwork('503812341234123412').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 18', function () {
    detectNetwork('630412341234123412').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 19', function () {
    detectNetwork('5018123412341234123').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 19', function () {
    detectNetwork('5020123412341234123').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 19', function () {
    detectNetwork('5038123412341234123').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 19', function () {
    detectNetwork('6304123412341234123').should.equal('Maestro');
  });

});

// Creating a function to generate a certain set of numbers to add to a prefix for testing

var generateNumbers = function(prefix, totalLength){
  var resultString = prefix;

  while (resultString.length < totalLength){
    resultString += '1';
  }

  return resultString;
}

describe ('China UnionPay', function() {
  var should = chai.should();
  var prefixArray = [];
  var lengthArray = [16, 17, 18, 19];
  var networkName = "China UnionPay";

  // populating the prefixArray with a set of loops

  for (let i = 622126; i < 622926; i ++){
    prefixArray.push(i.toString());
  }

  for (i = 624; i < 627; i ++){
    prefixArray.push(i.toString());
  }

  for (i = 6282; i < 6289; i ++){
    prefixArray.push(i.toString());
  }

  // using chai.should to run the test the appropriate amount of times (every possible combination)

  for (let i = 0; i < prefixArray.length; i++){
    for (let j = 0; j < lengthArray.length; j++){
      it(`has a prefix of ${prefixArray[i]} and a length of ${lengthArray[j]}`, function() {
        detectNetwork(generateNumbers(prefixArray[i], lengthArray[j])).should.equal(networkName);
      });
    }
  }
})

describe('Switch', function() {
  var should = chai.should();
  var prefixArray = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];
  var lengthArray = [16, 18, 19];
  var networkName = "Switch";

  for (let i = 0; i < prefixArray.length; i ++){
    for (let j = 0; j < lengthArray.length; j ++){
      it(`has a prefix of ${prefixArray[i]} and a length of ${lengthArray[j]}`, function () {
        detectNetwork(generateNumbers(prefixArray[i], lengthArray[j])).should.equal(networkName);
      })
    }
  }

})
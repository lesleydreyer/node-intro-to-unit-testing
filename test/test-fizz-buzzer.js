/*write unit tests for the fizzBuzzer function found in fizzBuzzer.js. Be sure to test the normal case on a range of representative inputs, and test for at least one edge case (for instance, non-numeric inputs).*/

// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

  // test the normal cases
  it('if a/15 is 0 remainder return "fizz-buzz"', function() {
    const normalCases = [
        {a: 30, expected: 'fizz-buzz'},
        {a: 45, expected: 'fizz-buzz'},
        {a: 60, expected: 'fizz-buzz'},        
      ];
      // for each set of inputs (a), `fizzbuzz` should
      // produce the expected value
      normalCases.forEach(function(input) {
        const answer = fizzBuzzer(input.a);
        expect(answer).to.equal(input.expected);
      });
    });    


    it('if a/5 is 0 remainder return "buzz"', function() {
        const normalCases = [
            {a: 10, expected: 'buzz'},
            {a: 5, expected: 'buzz'},
            {a: 25, expected: 'buzz'},        
          ];
          normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.a);
            expect(answer).to.equal(input.expected);
          });
        });  


        it('if a/3 is 0 remainder return "buzz"', function() {
            const normalCases = [
                {a: 6, expected: 'fizz'},
                {a: 9, expected: 'fizz'},
                {a: 12, expected: 'fizz'},   
              ];
              normalCases.forEach(function(input) {
                const answer = fizzBuzzer(input.a);
                expect(answer).to.equal(input.expected);
              });
            });  


        it('should return num if not multiple of 3 or 5', function() {
            const normalCases = [
                {a: 2, expected: 2},
                {a: 8, expected: 8},
                {a: 16, expected: 16},   
              ];
              normalCases.forEach(function(input) {
                const answer = fizzBuzzer(input.a);
                expect(answer).to.equal(input.expected);
              });
            });  


            it('should error if not a num', function() {
                const badCases = [
                    [true],
                    [false],
                    ['taco']   
                  ];
                  badCases.forEach(function(input) {
                    expect(function(){
                        fizzBuzzer(input[0], input[1], input[2]);
                    }).to.throw(Error);
                  });
           


  });
});
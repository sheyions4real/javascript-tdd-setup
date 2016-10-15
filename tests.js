'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sum_of_primes.js');

describe("Test that constants are computed properly", function() {
  it("Should return Invalid input when when 0 is passed ", function() {
      assert(
        lib.sumOfPrimes(0)=="Invalid Input"))
      );
    });

  it("Should return Invalid input when when 1 is passed", function() {
      assert(
        lib.sumOfPrimes(1)== "Invalid Input"))
      );
    });

  it("Should return 6 when 3 is passed ", function() {
      assert(
        lib.sumOfPrimes(3)==6))
      );
    });

  it("Should return 10 when 6 is passed ", function() {
      assert(
        lib.sumOfPrimes(6)==10))
      );
    });
  it("Should return Invalid when decimal number is passed ", function() {
      assert(
        lib.sumOfPrimes(11.5)=="A Decimal was passed"))
      );
    });

  it("Should return Invalid when a special character is passed ", function() {
      assert(
        lib.sumOfPrimes(@)=="Invalid Input"))
      );
    });

  it("Should return invalid when a string is passes ", function() {
      assert(
        lib.sumOfPrimes("SomeString")=="A string was passed"))
      );
    });

  it("Should return invalid when -1 is passed ", function() {
      assert(
        lib.sumOfPrimes(-1)=="Invalid Input"))
      );
    });

  it("Should return Invalid input when an array is passed ", function() {
      assert(
        lib.sumOfPrimes(arr)=="Invalid Input"))
      );
    });


});
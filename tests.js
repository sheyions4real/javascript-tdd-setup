'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sum_of_primes.js');

describe("Test that constants are computed properly", function() {
  it("Should return 10 when 0 is passed ", function() {
    assert(
      lib.sumOfPrimes(0)==false))
    );
  });

it("Should return 10 when 1 is passed ", function() {
    assert(
      lib.sumOfPrimes(1)==1))
    );
  });

it("Should return 2 when 2 is passed ", function() {
    assert(
      lib.sumOfPrimes(2)== 2))
    );
  });

it("Should return 6 when 3 is passed ", function() {
    assert(
      lib.sumOfPrimes(3)==6))
    );
  });

it("Should return 6 when 4 is passed ", function() {
    assert(
      lib.sumOfPrimes(4)==6))
    );
  });

it("Should return 10 when 5 is passed ", function() {
    assert(
      lib.sumOfPrimes(5)==10))
    );
  });

it("Should return 10 when 6 is passed ", function() {
    assert(
      lib.sumOfPrimes(6)==10))
    );
  });
it("Should return 10 when 7 is passed ", function() {
    assert(
      lib.sumOfPrimes(7)==17))
    );
  });

it("Should return 10 when 7 is passed ", function() {
    assert(
      lib.sumOfPrimes(7)==17))
    );
  });

it("Should return invalid when a string is passes ", function() {
    assert(
      lib.sumOfPrimes("SomeString")=="Invalid Input"))
    );
  });

it("Should return invalid when -1 is passed ", function() {
    assert(
      lib.sumOfPrimes(-1)=="Should not recieve negative input"))
    );
  });

it("Should return Invalid input when an array is passed ", function() {
    assert(
      lib.sumOfPrimes(arr)=="Invalid Input"))
    );
  });


});
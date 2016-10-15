// The derivative of a function y = f(x) is denoted as df(x)/d(x). For functions ax^n, the derivate is nax^(n-1). Write a function that calculates the coefficient and power of the derivate of a function ax^n where a and n are given.
'use strict'

module.exports = {
  sumOfPrimes: function(a, n) {
   function Prime(val){
   	// test cases
   	if(val<=1){ return "Invalid Input"; }
   	if(typeof val === 'string'){ return "A string was passed"; }
   	if(Array.isArray(val)){ return "An Array was passed"; }
   	if(isNaN(val)){ return "Invalid Input"; }





 	sum=0;
	for(var i=2; i<=val; i++){
		isPrime=true;
		for(var j = 2; j<=Math.sqrt(i); j++){
			if(i%j==0){ isPrime=false; }
		}
		if(isPrime){ 
			sum+=i;
		}
	}


	return sum;
}

  }
}
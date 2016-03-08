/**
 * sumOfAMultiple() sums of the multiples of 3 and 5 for any number passed in
 * @param  {Number} n Number that is to be used for calculating multiples up to that Number
 * @return {Number}
 */
exports.sumOfAMultiple = function( n ) {
  var sum = 0;
  for (var i = 0; i < n; i++){
  	    if ( n === n%3 || n%5 ){
  		sum += i;
  	}
  	}
  	return sum;
};
sumOfAMultiple(10);
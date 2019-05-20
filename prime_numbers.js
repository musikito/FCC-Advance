/**
 * Sum all the prime numbers up to and including the provided number.
 * @param {integer} num 
 */



function sumPrimes(num) {
 
    var sum = 0;
    
    function checkPrime(i){
     for (var k = 2; k < i ; k++){
      if (i % k === 0){
       return false;
      }
     }
     return true;
    }
    
    for (var i = 2; i <= num; i++){
     if (checkPrime(i)){
      sum += i;
      }
     }
    return sum;
    // returns 17 - the correct answer. 
   }
   sumPrimes(10);
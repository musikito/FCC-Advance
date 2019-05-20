function isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}

function sumPrimes(num) {
  
  var total = 0;
  var primes =[];
  
  for(var i = 2; i<=num; i++){
    if(isPrime(i)){
       total = total + i; 
       }
  }
  return total;
}

sumPrimes(10);
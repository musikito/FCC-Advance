/**
 * Return the factorial of the provided integer.
 * @param {*} num 
 */
function factorialize(num) {
    var factorial = 1;
     for(var i = factorial; num > i;num--) {
       factorial = num*factorial;
     }
     return factorial;
   }
   
   console.log(factorialize(5));
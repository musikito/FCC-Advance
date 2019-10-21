/**
 * Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
 * @param {integer} num 
 */

function sumFibs(num){
    //See my Fib founder on github
    
    
    //write a formula for figuring out all fibonacci numbers that is less then the 'num' passed
        var a=0,b=1,c=a+b;
        //initial value for 0+1 in fibonacci sequence
        var fibNumbers = [1];
        
        //create array for all fibonacci numbers less than 'num' and only push them to array if they are odd
        while (c<=num){
            if (c%2!==0){
                fibNumbers.push(c);
            }
            a=b, b=c, c=a+b;
            
        }
        
        console.log("Fibonacci Numbers: ", fibNumbers);
        //store the odd total in a variable and return it
        var sum = fibNumbers.reduce(function (a, b){
                return a+b;
        });
        return (sum);
    }
    
    
    
    sumFibs(1000);
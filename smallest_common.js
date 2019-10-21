
/**
 * Find the smallest common multiple of the provided parameters 
 * that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
 * @param {*} arr 
 * The range will be an array of two numbers that will not necessarily be in numerical order.
 */
function smallestCommons(arr) {
    var range = [];
    for (var i=Math.max(arr[0], arr[1]);i>=Math.min(arr[0], arr[1]);i--){
      range.push(i);
    }
    z=0;
    var lcm = range[0];
    for(var j=1;j<range.length;j++){
        lcm = lcm*range[j]/gcd(lcm, range[j]);
    }
  
    function gcd(x, y){
        if(x%y!==0){
          gcd(y, x%y);
        }
        else {
          z=y;
        }
        return z;
    }
    return lcm;
  
  }
  smallestCommons([13,1]);
function sumAll(arr) {
 var min = Math.min(...arr),
 max = Math.max(...arr),
 sum = 0;
 
 for (var i = min; i <= max; i++){
 sum += i;
 }
 return sum;
}

sumAll([1, 4]);

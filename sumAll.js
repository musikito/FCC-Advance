function sumAll(arr) {
  //store the min BTW the two numbers with deconstruct
  let min = Math.min(...arr);
  //store the min
  let max = Math.max(...arr);
  //TEMP variable to add the numbers
  var sum = 0;
  //loop over the mix and max of numbers and add them
  for (var i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([4, 1]));

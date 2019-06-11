function sumAll(arr) {
  var maxArr = Math.max.apply(0, arr);
  var minArr = Math.min.apply(0, arr);
  var result = [];
  for (var i = minArr; i <= maxArr; i++) {
    result.push(i);
  }
  return result.reduce(function(a, b) {
    return a + b;
  });
}

console.log(sumAll([1, 5]));

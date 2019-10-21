function diffArray(arr1, arr2) {
  var arr1Filtered = arr1.filter(function(value) {
    return arr2.indexOf(value) === -1;
  });

  var arr2Filtered = arr2.filter(function(value) {
    return arr1.indexOf(value) === -1;
  });

  return arr1Filtered.concat(arr2Filtered);
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

function diff(arr1, arr2) {
  //merge both arrays to make it easy to compare
  //can also use the spread operator to concatenate them
  //let newvar = [...arr1, ...arr2]
  var newArr = arr1.concat(arr2);

  function check(item) {
    if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
      return item;
    }
  }
  //use filter to get the new array
  return newArr.filter(check);
}
console.log(diff([1, 2, 3, 5], [1, 2, 3, 4, 5]));
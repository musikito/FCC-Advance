function destroyer(arr) {
  //turn the args into a full array
  var args = [...arguments];
  //remove the first arg
  args.splice(0, 1);
  console.log(args);
  //use of filter to get the elements needed and keep the ones needed
  return arr.filter(function(value) {
    return args.indexOf(value) === -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

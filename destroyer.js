function destroyer(arr) {
 var args = [...arguments];
 args.splice(0,1);
 console.log(args);

 return arr.filter(function (value){
  return args.indexOf(value) === -1;
 });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

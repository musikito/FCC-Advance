function dropElements(arr, func) {
  while(!func(arr[0])){
      arr.shift()
  }
  return arr
}

dropElements([3, 9, 2], function(n) {return n < 3; });

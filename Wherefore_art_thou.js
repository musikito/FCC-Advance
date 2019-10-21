function whatIsInAName(collection, source) {
  var arr = [];
  var result = undefined;
  var keys = Object.keys(source);
  //console.log(keys.length);
  function check(item) {
    console.log(item);
    for (var i = 0; i < keys.length; i++) {
      if (item.hasOwnProperty(keys[i]) && item[keys[i]] == source[keys[i]]) {
        result = true;
      } else result = false;
    }
    return result;
  }
  arr = collection.filter(check);
  return arr;
}

console.log(
  "REsult",
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  )
);

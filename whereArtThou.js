function where(collection, source) {
  var arr = [];
  var keys = Object.keys(source);
  // Filter array and remove the ones that do not have the keys from source.
  arr = collection.filter(function(obj) {
    //Use the Array method every() instead of a for loop to check for every key from source.
    return keys.every(function(key) {
      // Check if the object has the property and the same value.
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });

  return arr;
}

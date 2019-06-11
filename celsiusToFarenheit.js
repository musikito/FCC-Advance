function convertToF(celsius) {
    var fahrenheit = (celsius * (9/5)) + 32;
  
    // Only change code above this line
    if ( typeof fahrenheit !== 'undefined' ) {
    return fahrenheit;
    } else {
      return 'fahrenheit not defined';
    }
  }
  
  convertToF(30);
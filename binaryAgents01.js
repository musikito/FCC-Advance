function binaryAgent(str) {
  // need to split every part at the space
  // and create a new array to iterate trhu
  let strSplit = str.split(" ");
  // create an empty array to hold the actual letters
  let letters = [];
  // using a for each iterate thru all the elements
  // of the splitted array
  strSplit.forEach(element => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
    // push the converted letters to the empty array
    letters.push(String.fromCharCode(parseInt(element, 2)));
  })
  return letters.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

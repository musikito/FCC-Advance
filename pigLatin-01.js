function translatePigLatin(str) {
  // Create variables to be used
  let pigLatin = "";
  //made a regex for the vowels
  let regex = /[aeiou]/gi;
  /**
   * The test() method tests for a match in a string.
   * This method returns true if it finds a match, otherwise it returns false.
   */
  if (regex.test(str) === false) {
    pigLatin = str + "ay";
  } else {
    //if start with a vowel we add way at the end
    if (regex.test(str[0])) {
      pigLatin = str + "way";
    } else {
      //get the beginning of the string
      //The exec() method returns the matched text if it finds a match, otherwise it returns null.
      let strStart = str.indexOf(regex.exec(str)[0]);
      //now extract the start character of the string and added it to the back addin ay
      pigLatin = str.substr(strStart) + str.substr(0, strStart) + "ay";
    }
  }
  return pigLatin;
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("0sdfgsd"));

function telephoneCheck(str) {

// The regular expressions below are used to check for valid US number formats. The first matches ###-###-####, the second matches (###)###-####, the third matches (###) ###-####, the fourth matches ### ### ####, and the fifth matches ##########. All will also match when the country code 1 is placed in front of them.

  const NUMCHECK1 = new RegExp(/^(1)? ?\d{3}-\d{3}-\d{4}$/);

  const NUMCHECK2 = new RegExp(/^(1)? ?\(\d{3}\)\d{3}-\d{4}$/);

  const NUMCHECK3 = new RegExp(/^(1)? ?\(\d{3}\) \d{3}-\d{4}$/);

  const NUMCHECK4 = new RegExp(/^(1)? ?\d{3} \d{3} \d{4}$/);

  const NUMCHECK5 = new RegExp(/^(1)? ?\d{10}$/);

// Checks the telephone number entered against each regex pattern.

  if (NUMCHECK1.test(str) == true) {return true}
  else if (NUMCHECK2.test(str) == true) {return true}
  else if (NUMCHECK3.test(str) == true) {return true}
  else if (NUMCHECK4.test(str) == true) {return true}
  else if (NUMCHECK5.test(str) == true) {return true}
  else {return false};

}

// Change the inputs below to test
telephoneCheck("555-555-5555");

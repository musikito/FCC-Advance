function checkCashRegister(price, cash, cid) {

  let change = [["ONE HUNDRED", 0], ["TWENTY", 0], ["TEN", 0], ["FIVE", 0], ["ONE", 0], ["QUARTER", 0], ["DIME", 0], ["NICKEL", 0], ["PENNY", 0]];

  let finalChange = [];

  let cashOwed = cash - price;

// Finds the sum of our cash-in-drawer(cid), then rounds it to two digits.
  let sumOfCid = Math.floor((cid[0][1] + cid[1][1] + cid[2][1] + cid[3][1] + cid[4][1] + cid[5][1] + cid[6][1] + cid[7][1] + cid[8][1]) * 100) / 100;

// If there is exactly enough money to provide change, the status key is "CLOSED", and the change key is our cash-in-drawer(cid).
  if (sumOfCid === cashOwed) {return {status: "CLOSED", change: cid}};

// If there is not enough money to provide change, the status key is "INSUFFICIENT_FUNDS" and the change key is an empty array.
  if (sumOfCid < cashOwed) {return {status: "INSUFFICIENT_FUNDS", change: []}};

// If there is enough money to provide change with money still left in the drawer, the change is then provided by going down a list of currency units from high to low, pushing them to the change array, and subtracting them from both the cash owed and the cash-in-drawer(cid).

  if (sumOfCid > cashOwed) {
    while (cashOwed >= 100 && cid[8][1] >= 100) {
      cashOwed -= 100;
      change[0][1] += 100;
      cid[8][1] -= 100;
    };
    while (cashOwed >= 20 && cid[7][1] >= 20) {
      cashOwed -= 20;
      change[1][1] += 20;
      cid[7][1] -= 20;
    };
    while (cashOwed >= 10 && cid[6][1] >= 10) {
      cashOwed -= 10;
      change[2][1] += 10;
      cid[6][1] -= 10;
    };
    while (cashOwed >= 5 && cid[5][1] >= 5) {
      cashOwed -= 5;
      change[3][1] += 5;
      cid[5][1] -= 5;
    };
    while (cashOwed >= 1 && cid[4][1] >= 1) {
      cashOwed -= 1;
      change[4][1] += 1;
      cid[4][1] -= 1;
    };
    while (cashOwed >= .25 && cid[3][1] >= .25) {
      cashOwed -= .25;
      change[5][1] += .25;
      cid[3][1] -= .25;
    };
    while (cashOwed >= .1 && cid[2][1] >= .1) {
      cashOwed -= .1;
      change[6][1] += .1;
      cid[2][1] -= .1;
    };
    while (cashOwed >= .05 && cid[1][1] >= .05) {
      cashOwed -= .05;
      change[7][1] += .05;
      cid[1][1] -= .05;
    };
    while (cashOwed >= .01 && cid[0][1] >= .01) {
      cashOwed -= .01;
      change[8][1] += .01;
      cid[0][1] -= .01;

      // The cash owed is rounded on each loop here to account for floating point errors.
      cashOwed = Math.round(cashOwed * 100) / 100
    };

    // Pushes the currency that will actually be provided to the finalChange array to avoid including, for example: ["ONE HUNDRED", 0].
    for (let i = 0; i <= change.length - 1; i++) {
      if (change[i][1] > 0) {
        finalChange.push(change[i]);
      };
    }

    // If the cash owed has been satisfied, the status key is "OPEN" and the change key is our finalChange.
    if (cashOwed == 0) {
    return {status: "OPEN", change: finalChange}
    }

    // If cashOwed ends up not being divisible by the currency units in cash-in-drawer(cid), then the status key is "INSUFFICIENT_FUNDS", and the change key is an empty array.
    else return {status: "INSUFFICIENT_FUNDS", change: []};
    };
  };

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

// Change the inputs below to test
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

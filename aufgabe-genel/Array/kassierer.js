
  const money = [
    20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1,
  ];


function calculateChange(price, amountPaid) {
  
    let change = (amountPaid - price) * 100;

    return money.reduce((prev, curr) => {
      const numOfTimesCurrAmountFitInChange = parseInt(change / curr);
      if (numOfTimesCurrAmountFitInChange !== 0) {
        prev += `${numOfTimesCurrAmountFitInChange} x ${curr / 100}` + " | ";
        change = change % curr;
      }
      return prev;
    }, "");
  }
  console.log(calculateChange(5.18, 20));



  

  // Marvins Lösung

  const moneyTypes = [
    500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01,
];

function calculateChange(price, amountPaid) {
    const change = toCents(amountPaid) - toCents(price);
    let restChange = change;

    let returnable = [];

    moneyTypes.forEach((moneyType) => {
        let moneyTypeInCents = toCents(moneyType);

        const numberOfTimesMoneyTypeFitsInChange = Math.floor(
            restChange / moneyTypeInCents
        );

        if (numberOfTimesMoneyTypeFitsInChange === 0) return;

        returnable.push(
            `${numberOfTimesMoneyTypeFitsInChange} x ${moneyType} €`
        );

        restChange -= numberOfTimesMoneyTypeFitsInChange * moneyTypeInCents;
    });

    return returnable.join(", ");
}

function toCents(euro) {
    return euro * 100;
}

function toEuro(cents) {
    return cents / 100;
}

console.log(calculateChange(3.75, 50)); // returns: 2 x 20 €, 1 x 5 €, 1 x 1 €, 1 x 0,2 €, 1 x 0,05 €
console.log(calculateChange(4.5, 20)); // returns: 1 x 10 €, 1 x 5 €, 1 x 0.5 €
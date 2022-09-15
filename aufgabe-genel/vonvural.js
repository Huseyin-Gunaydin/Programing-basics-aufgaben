// Wie viele Früchte
// Aufgabe;
// Stellen Sie sich vor, Sie haben einen Korb. In diesem Korb sind Früchte. Schreiben Sie eine Funktion, die herausfindet, wie viele von jeder Frucht sich in diesem Korb befinden!
// const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
// // Ergebnis; { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }

const fruitBasket = [
  "banana",
  "cherry",
  "orange",
  "apple",
  "cherry",
  "orange",
  "apple",
  "banana",
  "cherry",
  "orange",
  "fig",
];

const count = fruitBasket.reduce((tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1;
  return tally;
}, {});

console.log(count); // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }

console.log(" ");
console.log("---Vural`s Aufgabe Lösung-2---");
console.log(" ");

const count2 = {};

fruitBasket.forEach((element) => {
  count2[element] = (count2[element] || 0) + 1;
         "banana"           "banana"
});

console.log(count2);



const fruitBasket2 = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

// Ergebnis; { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }

const zahlVonFruechte = (elem) => elem.reduce((prev, curr) => {
    if(prev[curr] === undefined) prev[curr] = 1;
    else prev[curr] += 1

    return prev;
}, {})

console.log(zahlVonFruechte(fruitBasket2));


console.log(' ');
console.log('---Object-----');
console.log(' ');

const car = {type:"Fiat", model:500, color:"white"};

car['deneme'] = 40;


console.log(car);
console.log(car['model']);
console.log(car.type);



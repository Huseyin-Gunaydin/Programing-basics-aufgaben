// # Map, Filter, Reduce
// ​
// #### 1. Gesamtbestellungen abfragen
// ​
// -   Berechne die Gesamtzahl der Bestellungen.
// ​
// ```javascript
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];

const total = orders.reduce((preis, element) => preis + element.amount, 0);

console.log(total);

// ```
// ​
// #### 2. Inkrementieren um 1
// ​
// ```javascript
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];

const Inkrementieren = (element) => element.map((element) => element + 1);

console.log(Inkrementieren(arrayOfNumbers));

// -   Erstellen Sie eine Funktion, die jedes Element in `arrayOfNumbers` um 1 erhöht. Geben Sie das neue Array von modifizierten Elementen zurück.
// ​
// #### 3. Gerade Zahlen filtern
// ​
// -   Erstellen Sie eine Funktion namens filterEvens, die ein Array filtert und nur gerade Zahlen zurückgibt. Die Funktion sollte ein Array von Zahlen als Argument nehmen und keine Schleife verwenden.
// ​
// -   Beispiele:
// ​
// ```javascript
const filterEvens1 = [1, 2, 3, 11, 12, 13]; //returned [2,12]
const filterEvens2 = [22, 2, 31, 110, 6, 13]; //returned [22,2,110,6]

const isGerade = (array) => array.filter((element) => element % 2 === 0);

console.log(isGerade(filterEvens1));

console.log(isGerade(filterEvens2));

// ```
// ​
// #### 4. Freunde filtern
// ​
// -   Erstelle eine Funktion, die ein übergebenes Array nach einem "Suchbefehl" filtert.
// ​
// -   Beispiele
// ​
// ```javascript
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

const filterItems = (array, str) =>
  array.filter((element) => element.includes(str));

console.log(filterItems(friends, "ka"));
console.log(filterItems(friends, "e"));

// ```
// ​
// #### 5. Summe
// ​
// -   Schreiben Sie eine Funktion namens sum, die die Methode reduce verwendet, um ein Array von Zahlen zu summieren.
// ​
// -   Beispiele:
// ​
// ```javascript

const sum1 = [1, 2, 3, 4, 5]; //gibt 15 zurück
const sum2 = [6, 7, 7]; //liefert 20

const summe = (array) =>
  array.reduce((total, element) => {
    return total + element;
  }, 0);

console.log(summe(sum1));
console.log(summe(sum2));





// #### 6. Quadratwurzel

const quadratwurzel = (array) => array.map((element) => Math.sqrt(element));

console.log(quadratwurzel([81, 64, 49, 36]));
console.log(quadratwurzel([64]));
console.log(quadratwurzel([49]));
console.log(quadratwurzel([36]));





let nummers=[1,2,3];


numbers.reduce((box,num)=>console.log(box+num))
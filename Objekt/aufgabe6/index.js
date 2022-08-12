// Objects: Teil 2
// 1. Überprüfe, ob eine Zahl innerhalb eines bestimmten Bereichs liegt. Erstelle eine Funktion isWithinRange, die überprüft, ob eine Zahl innerhalb des Bereichs der Eigenschaften min und max eines Objekts liegt. Nimm an, dass min <= max immer wahr ist.
// Beispiele:
// isWithinRange(4, { min: 0, max: 5 }) ➞ true
// isWithinRange(4, { min: 4, max: 5 }) ➞ true
// isWithinRange(4, { min: 6, max: 10 }) ➞ false
// isWithinRange(5, { min: 5, max: 5 }) ➞ true

//Frage 1

function isWithinRange(num, objekt) {
  if (num >= objekt.min && num <= objekt.max) 
  return true;
  return false;
}

console.log(isWithinRange(4, { min: 0, max: 5 }));
console.log(isWithinRange(4, { min: 4, max: 5 }));
console.log(isWithinRange(4, { min: 6, max: 10 }));
console.log(isWithinRange(5, { min: 5, max: 5 }));

// 2. Scrabble. Erstelle eine Funktion calcMaxScrabbleScore, die bei einem Array von Scrabble-Steinen die maximale Punktzahl zählt, die ein Spieler mit den Steinen in seiner Hand erreichen kann. Beispiel:
// const scrabbleHand = [
//   { tile: "N", score: 1 },
//   { tile: "K", score: 5 },
//   { tile: "Z", score: 10 },
//   { tile: "X", score: 8 },
//   { tile: "D", score: 2 },
//   { tile: "A", score: 1 },
//   { tile: "E", score: 1 }
// ]
// console.log(calcMaxScrabbleScore(scrabbleHand)); ➞ 28

// // Frage 2

const scrabbleHand = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];

function calcMaxScrabbleScore(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
      const element = array[i];
      result += element.score;
  }
  return result;
}

console.log(calcMaxScrabbleScore(scrabbleHand));

// 3. Ist es ein leeres Objekt? Erstelle eine Funktion isEmptyObject, die true zurückgibt, wenn ein Objekt leer ist, und false, wenn nicht.
// Beispiele:
// isEmptyObject({}) ➞ true
// isEmptyObject({a: 1}) ➞ false

//Frage 3

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

console.log(isEmptyObject({})); //➞ true
console.log(isEmptyObject({ a: 1 })); //➞ false

// 4. Buchstaben zählen. Erstelle eine Funktion, die die Anzahl der Vorkommen jedes Buchstabens in einer Zeichenkette zählt. Gib ein Objekt mit Schlüssel-Wert-Paaren von Buchstaben und der Anzahl der Vorkommen für jeden Buchstaben zurück.
// Beispiel:
// countLetters("tree") ➞ {t: 1, r: 1, e: 2}

//Frage 4

function countLetters(str) {
  let result = {};

  const array = str.split("");

  for (let i = 0; i < array.length; i++) {
      if (result[array[i]] === undefined) {
          result[array[i]] = 1;
      } else {
          result[array[i]] += 1;
      }
  }

  return result;
}

console.log(countLetters("text"));

console.log(countLetters("tree"));
console.log(countLetters("computer.com"));

//countLetters("tree") // ➞ {t: 1, r: 1, e: 2}

// 5. Kostenloser Versand. Erstelle eine Funktion, die bestimmt, ob eine Online-Bestellung versandkostenfrei sein soll. Eine Bestellung ist versandkostenfrei, wenn der Gesamtpreis der Artikel 50 € übersteigt.
// Beispiele:
// freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
// freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
// freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false

// Frage 5

function freeShipping(products) {
  let sumOfPrices = 0;
  const objectToArray = Object.values(products);
  for (let i = 0; i < objectToArray.length; i++) {
      sumOfPrices += objectToArray[i];
  }

  return sumOfPrices >= 50;
}

console.log(freeShipping({ Sponge: 3.5, Soap: 5.99 }));
console.log(freeShipping({ "Surround Sound Equipment": 499.99 }));
console.log(
  freeShipping({ Wool: 13.99, "Knitting Needles": 15.5, Bag: 13.99 })
);


// 6. Programmierobjekt.
// const programming = {
//   languages: ["JavaScript", "Python", "Ruby"],
//   isChallenging: true,
//   isRewarding: true,
//   difficulty: 8,
//   jokes: "https://www.quora.com/What-are-the-most-popular-computer-programming-jokes"
// };
// Schreibe einen Befehl, der die Sprache “Go” an das Ende des Arrays “languages” anfügt.
// Ändere die Schwierigkeit auf 7.
// Schreibe eine Anweisung mit dem Schlüsselwort delete, um den Schlüssel jokes aus dem Programmierobjekt zu entfernen.
// Schreibe eine Anweisung, um dem Programmierobjekt einen neuen Schlüssel namens “isFun” mit dem Wert “true” hinzuzufügen.
// Durchlaufe in einer Schleife das Array languages und gib alle Sprachen in console.log aus.
// Gib in einer Schleife alle Schlüssel des Programmierobjekts in console.log ein.
// Verwende eine Schleife, um alle Werte des Programmierobjekts zu protokollieren.
// Füge die Methode worthwhile hinzu, die den Wert “Learning the programming languages: JavaScript, Python, Ruby, Go ist lohnend und herausfordernd”, wenn die Schlüssel “isChallenging” und “isRewarding” den Wert true haben.
// Bonus: Erkläre in einem Kommentar, was gedruckt wird, wenn wir eine Objektmethode über die Konsole protokollieren, ohne sie aufzurufen, und warum.
// Bonus:
// Achte darauf, dass kein anderer Code die Eigenschaften des Objekts löschen oder ändern kann.

//Frage 6

const programming = {
      languages: ["JavaScript", "Python", "Ruby"],
      isChallenging: true,
      isRewarding: true,
      difficulty: 8,
      jokes: "https://www.quora.com/What-are-the-most-popular-computer-programming-jokes",
  
    };

    programming.languages.push("GO");
    programming.difficulty=7;
    delete programming.jokes;
    programming.isFun=true;




for ( let i=0; i<programming.languages.length; i++){
    console.log(programming.languages[i])
};


// Object.keys(programming) geht auch
for (const key in programming) {
  console.log(key);
}

// Object.values(programming) geht auch
for (const key in programming) {
  console.log(programming[key]);
}


programming.worthwhile= function(){
  if(this.isChallenging === true && this.isRewarding === true){
      console.log (`Learning the programming languages: ${this.languages} is rewarding and challenging!`);
  }
};
programming.worthwhile();
console.log(programming.worthwhile);
console.log(freeShipping);



Object.freeze(programming); // Verhindert dass das Objekt verändert wird
programming.banane = "2";
console.log(programming);
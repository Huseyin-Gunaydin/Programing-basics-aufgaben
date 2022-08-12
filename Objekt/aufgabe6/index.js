// Objects: Teil 2
// 1. Überprüfe, ob eine Zahl innerhalb eines bestimmten Bereichs liegt. Erstelle eine Funktion isWithinRange, die überprüft, ob eine Zahl innerhalb des Bereichs der Eigenschaften min und max eines Objekts liegt. Nimm an, dass min <= max immer wahr ist.
// Beispiele:
// isWithinRange(4, { min: 0, max: 5 }) ➞ true
// isWithinRange(4, { min: 4, max: 5 }) ➞ true
// isWithinRange(4, { min: 6, max: 10 }) ➞ false
// isWithinRange(5, { min: 5, max: 5 }) ➞ true

//Frage 1

function isWithinRange(num, { min, maks }) {
  if (num >= min && num <= maks) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isWithinRange(4, { min: 0, maks: 5 });
isWithinRange(4, { min: 4, maks: 5 });
isWithinRange(4, { min: 6, maks: 10 });
isWithinRange(5, { min: 5, maks: 5 });

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

// function calcMaxScrabbleScore(object) {
//     const scoreArr = []
//     for(let i = 0; i < object.length; i++){
//     scoreArr.push(Object.values(object[i]))
//     }
//     const numArr = []
//     for(let j = 0; j < scoreArr.length; j++){
//     numArr.push(scoreArr[j].splice(1, 1))
//     }
//     let sum = 0
//     for(let k = 0; k < numArr.length; k++){
//     sum += parseInt(numArr[k])
//     }
//     return sum;
//     }

//     console.log(calcMaxScrabbleScore(scrabbleHand));

// 3. Ist es ein leeres Objekt? Erstelle eine Funktion isEmptyObject, die true zurückgibt, wenn ein Objekt leer ist, und false, wenn nicht.
// Beispiele:
// isEmptyObject({}) ➞ true
// isEmptyObject({a: 1}) ➞ false

//Frage 3

function isEmptyObject(x) {
  if (Object.entries(x).length === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isEmptyObject({}); //➞ true
isEmptyObject({ a: 1 }); //➞ false

// 4. Buchstaben zählen. Erstelle eine Funktion, die die Anzahl der Vorkommen jedes Buchstabens in einer Zeichenkette zählt. Gib ein Objekt mit Schlüssel-Wert-Paaren von Buchstaben und der Anzahl der Vorkommen für jeden Buchstaben zurück.
// Beispiel:
// countLetters("tree") ➞ {t: 1, r: 1, e: 2}

//Frage 4

let countLetters = (str) => {
  return str.split("").reduce((total, letter) => {
    total[letter] ? total[letter]++ : (total[letter] = 1);
    return total;
  }, {});
};

console.log(countLetters("tree"));
console.log(countLetters("computer.com"));

//countLetters("tree") // ➞ {t: 1, r: 1, e: 2}

// 5. Kostenloser Versand. Erstelle eine Funktion, die bestimmt, ob eine Online-Bestellung versandkostenfrei sein soll. Eine Bestellung ist versandkostenfrei, wenn der Gesamtpreis der Artikel 50 € übersteigt.
// Beispiele:
// freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
// freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
// freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false

// Frage 5

function freeShipping(object) {
  let sumOfShopping = 0;
  const objectToArr = Object.values(object);
  for (let i = 0; i < objectToArr.length; i++) {
    sumOfShopping += objectToArr[i];
  }
  if (sumOfShopping >= 50) {
    console.log(true); 
  } else {
    console.log(false);
  }
}

freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) //➞ false
freeShipping({ "Surround Sound Equipment": 499.99 }) //➞ true
freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) //➞ false




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
      worthwhile: function(){
        if(this.isChallenging === true && this.isRewarding === true){
            console.log (`Learning the programming languages: ${this.languages} is rewarding and challenging!`);
        }
      }
    };

    programming.languages.push("GO");
    programming.difficulty=7;
    delete programming.jokes;
    programming.isFun=true;




for ( let i=0; i<programming.languages.length; i++){
    console.log(programming.languages[i])
};


const values= Object.values(programming);

for ( let i=0; i<values.length; i++){
    console.log(values[i])
};

console.log(programming)
programming.worthwhile()

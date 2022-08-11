// Objects: Teil 1
// Bitte drucke jede deiner Antworten auf der Konsole aus.
// 1. Objekt Person. Erstelle ein Objekt namens person. Führe eine Schleife durch das Objekt und drucke sowohl die Eigenschaft als auch den Wert der Propery aus.
// 2. Get Values. Erstelle eine Funktion, die ein Array mit allen Werten der Eigenschaften eines Objekts zurückgibt.
// Beispiele:
// getObjectValues({
//   choice1: "tea",
//   choice2: "coffee",
//   choice3: "milk"
// })
// Erwartete Ausgabe:
// ["tea", "coffee", "milk"]
// 3. Füge eine Methode hinzu. Erstelle ein Objekt und füge eine Methode zu diesem Objekt hinzu, die die Werte der Objekte in einer Zeichenkette ausgibt.
// Beispiel
// let person = {
//   firstName: "Michael",
//   lastName: "Smith",
//   job: "driver",
//   age: 20,
//   city: "Paris"
// }
// Beispiel für die erwartete Ausgabe “Michael Smith is a 20 year old driver in Paris”.
// Bonusfragen
// 1. Konvertiere Schlüssel und Werte in ein Array. Erstelle eine Funktion, die ein Objekt in ein Array aus Schlüsseln und Werten umwandelt.
// Beispiele:
// objectToArray({
//   A: 1,
//   B: 2,
//   C: 3
// })
// Erwartete Ausgabe:
// [["A", 1], ["B", 2], ["C", 3]]
// objectToArray({
//   cats: 1,
//   dogs: 2,
//   turtles: 4
// })
// Erwartete Ausgabe:
// [["cats", 1], ["dogs", 2], ["turtles", 4]]
// 2. Eigenschaften auflisten. Erstelle eine Funktion, die ein Array von Eigenschaften eines Javascript-Objekts zurückgibt.
// Beispiel
// let student = {
//   name: "Mike",
//   class: "4A"
//   course: "English"
// }
// Erwartete Ausgabe:
// ["name", "class", "course"]
// 3. Verschmelzen. Erstelle eine Funktion, die zwei Objekte als Parameter nimmt und sie zu einem neuen Objekt zusammenführt.
// Beispiel
// let first = {firstName: "John"}
// let last = {lastName: "Smith"}
// Expected output:
// {firstName: "John", lastName: "Smith"}
// Extra Credit: Was passiert, wenn du zwei Objekte mit denselben Eigenschaftswerten zusammenführst? Erwartet ihr beim Zusammenführen dieser beiden Objekte, dass ihr eines oder beide der ursprünglichen Objekte verändert? Warum oder warum nicht? Kommentiere deine Antworten.
// 4. Tausche Schlüssel und Werte. Erstelle eine Funktion, um eine Kopie eines Objekts zu erhalten. Die Kopie muss die Schlüssel und Werte vertauschen.
// Beispiel:
// let person = {
//   name: "John",
//   job: "teacher"
// }
// Erwartete Ausgabe:
// {John: "name", teacher: "job"}
// 5. Rückgabe von Schlüsseln und Werten. Schreibe ein Programm, das ein Objekt annimmt und ein Array zurückgibt, das zwei Arrays enthält: eines für die Schlüssel des Objekts und das andere für die Werte des Objekts.
// Beispiele:
// { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
// {key: true} ➞ [["key"], [true]]
// (edited)

//frage 1
const person = {
  vorname: "Hüseyin",
  nachname: "Günaydin",
  alter: 37,
  stadt: "Berlin",
};
for (property in person) {
  console.log(property);
  console.log(person[property]);
}

// //Frage 2
const getObjectValues = {
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk",
};
function propertyValues() {
  console.log(Object.values(getObjectValues));
}
propertyValues();

//Frage 3

let person1 = {
  firstName: "Michael",
  lastName: "Smith",
  job: "driver",
  age: 20,
  city: "Paris",
  info: function () {
    return `${this.firstName} ${this.lastName} ist ein ${this.age}-jähriger ${this.job} in ${this.city}`;
  },
};
console.log(person1.info());

//Bonus Frage1

let objectToArray = {
  A: 1,
  B: 2,
  C: 3,
};

let objectToArray1 = {
  cats: 1,
  dogs: 2,
  turtles: 4,
};

function array(x) {
  var result = Object.entries(x);
  return result;
}
console.log(array(objectToArray));
console.log(array(objectToArray1));

//Bonus Frage2
let student = {
  name: "Mike",
  class: "4A",
  course: "English",
};

function Objektkeys() {
  console.log(Object.keys(student));
}
Objektkeys();

//Bonus frage 3
let first = { firstName: "John" };
let last = { lastName: "Smith" };

function zusammenführt(obj1, obj2) {
  var result = Object.assign(obj1, obj2);
  return result;
}
console.log(zusammenführt(first, last));

//Bonus frage 4

let person3 = {
  name: "John",
  job: "teacher",
};

function swapKeysValues(object) {
  const newProperty = {};
  for (const key in object) {
    newProperty[object[key]] = key;
  }
  return newProperty;
}

console.log(swapKeysValues(person3));




//Bonus frage 5
const object5 = {
    a: 1,
    b: 2,
    c: 3,
  };

function x(x) {

  const keys = Object.keys(x);
  const value = Object.values(x);

  return [keys, value];
}

console.log(x(object5));

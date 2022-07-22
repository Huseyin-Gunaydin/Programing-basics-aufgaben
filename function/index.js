/**
 * Funktionen
 *
 * Was sind Funktionen?
 *
 * Funktionen sind Code-Abschnitte die man aufrufen kann wenn man sie ausführen möchte.
 * Man verhindert also dass man den selben Code mehrmals schreiben muss.
 *
 *
 * Wie sehen Funktionen aus?
 */

console.log("1");

// Funktionsaufruf
nameDerFunktion();

// Funktionsdeklaration
function nameDerFunktion() {
  // Der Code zwischen den geschweiften Klammern ist in der Funktion
  console.log("In der Funktion123");
}

console.log("2");

// Funktionsaufruf
nameDerFunktion();

console.log("3");

console.log("4");

// Funktionsaufruf
nameDerFunktion();

function printGreeting() {
  let myFirstName = "Hüseyin";
  let myTrimmedString = myFirstName.trim();
  let myLastName = "Günaydin";
  let greeting = "Hello " + myTrimmedString + " " + myLastName;
  return greeting;
}
let greeting = printGreeting();
console.log(greeting);

console.log(printGreeting());

// let printGreetingArrow= (firstName, lastName)=>{
//   if(typeof firstName !=="string" || typeof lastName !== "string"){
//   return "Falsch Parameter";
//   }
// return "Hallo " + firstName.trim() + " " + lastName.trim();
// };

// console.log(printGreetingArrow(" Hüseyin "," Günaydin "))

let printGreetingArrow = (firstName, lastName) => {
  return typeof firstName !== "string" || typeof lastName !== "string"
    ? "Falsch Parameter"
    : `Hallo ${firstName.trim()}  ${lastName.trim()}`;
};

console.log(printGreetingArrow(" Hüseyin ", " Günaydin "));

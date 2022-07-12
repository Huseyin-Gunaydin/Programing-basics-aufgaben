// Wir haben die folgende Funktion erhalten, die wir für zwei Aufträge verwenden wollen.
// Die Funktion selbst dürfen wir nicht verändern, aber beliebig oft ausführen.

// Wichtig:
// Unsere zwei Aufträge sollen mit beliebig vielen Zufallszahlen funktionieren.
// Wir müssen daher darauf achten, dass unser Algorithmus mit unterschiedlichen Mengen arbeiten kann.

function getRandomNumbers(amount) {
  const numbers = Array();

  for (let i = 0; i < amount; i++) {
    numbers.push(parseInt(Math.random() * 100));
  }

  return numbers;
}

// Beispiel: gib 10 Zufallszahlen aus und speichere sie in der Variable randomNumbers
const randomNumbers = getRandomNumbers(10);
console.log(randomNumbers);

// --------------------------------------------------------------------------

// Frage1

let a = [];
// for(let i in randomNumbers)  (let i=0; i<randomNummers.length; i++)
for (let i of randomNumbers) {
  if (randomNumbers[i] < 50) {
    a.push(randomNumbers[i]);
  }
}
console.log(` Frage 1 = Es gibt ${a.length} Zahlen unter 50.`);

//Frage 2

let unter50 = Array();
let große50 = Array();
for (let i = 0; i < randomNumbers.length; i++) {
  if (randomNumbers[i] < 50) {
    unter50.push(randomNumbers[i]);
  } else {
    große50.push(randomNumbers[i]);
  }
}
console.log(" Frage 2 = Zahlen unter 50", unter50);
console.log(" Frage 3 = Zahlen große und gleich 50", große50);

// 1. Gib die Anzahl der Zahlen unter 50 aus.
// Gib zur Kontrolle auch das Array der Zufallszahlen aus.

// Beispiel:
// getRandomNumbers(5) => [1, 59, 40, 50, 99]
// Ausgabe:
// Es gibt 2 Zahlen unter 50.

// Teste deinen Algorithmus mit den Anzahlen 10, 20, 100 und beliebig vielen weiteren.

// --------------------------------------------------------------------------

// 2. Gib zwei Arrays aus: Eines mit den Zahlen unter 50, und eines mit den Zahlen größer oder gleich 50.
// Gib zur Kontrolle auch das Array der Zufallszahlen aus.

// Beispiel:
// getRandomNumbers(5) => [1, 59, 40, 50, 99]
// Ausgabe:
// Zahlen unter 50: [1, 40]
// Zahlen größer oder gleich 50: [59, 50, 99]

// Teste deinen Algorithmus mit den Anzahlen 10, 20, 100 und beliebig vielen weiteren.

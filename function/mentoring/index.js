function printGreeting(firstName, lastName) {
    if (typeof firstName !== "string" || typeof lastName !== "string") {
      return "Falsche Parameter";
    }
    return "Hello " + firstName.trim() + " " + lastName.trim();
  }
  
  const printGreetingArrow = (firstName, lastName) => {
    if (typeof firstName !== "string" || typeof lastName !== "string") {
      return "Falsche Parameter";
    }
    return "Hello " + firstName.trim() + " " + lastName.trim();
  };
  
  console.log(printGreeting("  Ralf ", "Siewert"));
  console.log("Other code ...");
  console.log(printGreetingArrow("  Ella ", "Rotary"));
  console.log("Other code ...");
  console.log(printGreeting("  Muhannad ", "Lingoda"));
  
  function add(a, b) {
    return a + b;
  }
  const addArrow = (a, b) => a + b;
  
  console.log(addArrow(4, 2));



  /*
  # Mentoring 22.07.2022
## Themen
- Functions
  - Block von Code, den man an mehreren Stellen im Programm aufrufen kann
  - Funktionen können Werte an das Programm zurückgeben, die dann dort weiter verwendet werden (`return`)
  - **WICHTIG**: `return` beendet die Funktion unmittelbar, Code nach `return` wird nicht mehr ausgeführt
  - Wenn die Funktion kein `return` - Statement enthält, gibt sie standardmäßig `undefined` zurück
  - Variablen, die innerhalb einer Funktion deklariert werden, sind außerhalb der Funktion nicht sichtbar (`scope`)
  - Man kann Funktionen Parameter übergeben, um sie mit verschiedenen Werten ("Argumenten") aufzurufen.
  - Arrow-Functions sind eine andere Schreibweise für Funktionen:
    - `function add(a,b){return a+b;}`
    - `const add=(a,b)=>{return a+b;}`
    - Schnellschreibweise für Arrow-Functions, wenn die Funktion nur einen einzigen Ausdruck als `return` hat:
      - `const add=(a,b)=> a+b`
    - Es gibt einen technischen Unterschied zwischen Standard-Funktionen und Arrow-Functions bezüglich des `this` - Keywords.
      Das ist momentan für uns noch nicht relevant, bei Interesse kann man das z.B. [hier nachlesen](https://dev.to/bhagatparwinder/arrow-functions-this-keyword-350j)
- Schleifen
  - `for` loop
  - `for of` `for in`
  - `while` `do while`

  */




const revenues = [
    ["North", 100000, 200000, 150000, 300000],
    ["South", 90000, 210000, 80000, 240000],
  ];
  
  for (let i = 0; i < revenues.length; i++) {
    console.log(revenues[i][0]);
    console.log("------------");
    let sum = 0;
    for (let j = 1; j < revenues[i].length; j++) {
      console.log(revenues[i][j]);
      sum += revenues[i][j];
    }
    console.log("Gesamtsumme:", sum);
  }

  console.log("for");
console.log("------------");

for (let i = 0; i < 10; i++) {
  console.log("Test", i);
}
console.log("while");
console.log("------------");

let i = 10;
while (i < 10) {
  console.log("Test", i);
  i++;
}
console.log("do while");
console.log("------------");

i = 10;
do {
  console.log("Test", i);
  i++;
} while (i < 10);


const myNumbers = [1, 4, 7];
const myOtherNumbers = [3, 8, 4, 9, 12, 100];

for (let i = 0; i < myNumbers.length; i++) {
  console.log("Zahl an der Stelle", i, "ist", myNumbers[i]);
}

let sum = 0;
for (let i = 0; i < myNumbers.length; i++) {
  sum += myNumbers[i];
}
console.log("Die Summe aller Zahlen im Array ist", sum);
console.log(
  "Die Durchschnitt aller Zahlen im Array ist",
  sum / myNumbers.length
);
sum = 0;
for (let i = 0; i < myNumbers.length; i++) {
  sum += myNumbers[i] * myNumbers[i];
}

console.log("Die Summe der Quadrate aller Zahlen im Array ist", sum);

// Eine Funktion, die ein Array mit Zahlen übergeben bekommt und den Durchschnitt zurückgibt
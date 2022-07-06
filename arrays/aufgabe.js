//Frage 1
const euroCities=["Paris", "Londra", "Valletta", "Prag", "Roma"];
console.log(euroCities)

const secondCity = euroCities[1];
console.log(secondCity);


//Frage2
const eintrag = euroCities.unshift("Berlin");
console.log(euroCities);

//Frage 3
const laenge =euroCities.length;
console.log(laenge);


//Frage 4

const entferneletzte = euroCities.pop();
console.log(euroCities);

//Frage 5 

const neueCity = ["Budapeste"];
const kombinieren = euroCities.concat(neueCity);
console.log(kombinieren);

//Frage 6 
const asianCities= ["Tokyo", "Bangkok", "Abu Dhabi", "Jakarta", "Dubai"];
console.log(asianCities);

//Frage 7
const WorldCities = euroCities.concat(asianCities);
console.log(WorldCities);

//Frage 8
const reverse = WorldCities.reverse();
console.log(reverse);

//Frage 9

const entfern = euroCities.splice(2,1);
console.log(euroCities);

//Frage 10
console.log(asianCities);
const speichere = asianCities.slice(1,4); 
console.log(speichere);

//Frage 11
console.log(WorldCities);
const  verendert = WorldCities.splice(2,1, "Toronto");
console.log(WorldCities);




//Frage 12
console.log(WorldCities);
const frage12 =WorldCities.splice(1,0, "Washington");
console.log(WorldCities);

//Frage 13

console.log(WorldCities.join(" "));




//bonus
let hellowelt = ["H", "e", "l", "l", "o", "W", "e", "l", "t"];
     console.log(hellowelt.reverse());



     let hallo="Hello World";
     let reverseHallo=[...hallo].reverse().join('""');
     console.log(reverseHallo);



// //**Bonus
// let halloWelt = "HalloWelt";
// let neueHalloWelt="";

// for(let i=halloWelt.length -1; i>=0; i--){
//     neueHalloWelt+=halloWelt[i];
// }
// console.log(neueHalloWelt);



// Array wird verwendet, um mehrere Variablen desselben Typs zu definieren.

// Wenn wir kein Array erstellen, müssen wir viele neue Variablen erstellen. Wir erstellen eine Variable mit Array.


// Es wird verwendet, um auf Daten des gleichen Typs mit einem einzigen Namen zuzugreifen. Alle Elemente eines Arrays werden nacheinander im Speicher abgelegt. Mithilfe von Arrays kann auf mehrere Variablen mit demselben Namen zugegriffen und diese bearbeitet werden.



// Mit Array-Methoden können wir eine Menge Dinge tun.

// Die pop() Methode entfernt das letzte Element eines Arrays und gibt dieses zurück. Diese Methode ändert die Länge des Arrays.
// schift= Mit "shift" können wir das erste Element löschen.


// Die Methode Array. shift() entfernt das erste Element aus einem Array. Rückgabewert ist das gerade entfernte Element oder undefined ,wenn das Array keine Elemente enthielt.

// Die Methode join verbindet alle Elemente eines Arrays zu einer Zeichenkette. Sie erwartet einen Trennungstext als Parameter: eine Zeichenfolge, die beim Verbinden der Elemente zu einer Zeichenkette immer zwischen zwei Elemente geschrieben wird.

// array. push () fügt ein oder mehrere Elemente am Ende des Arrays ein und gibt die neue Länge des Arrays zurück. Wenn push mehrere Elemente einfügt, wird jedes dieser Elemente in der Reihenfolge eingefügt, in der es im Aufruf notiert ist.


// Array-Elemente mit der sort() -Methode in Java sortieren
// Hier verwenden wir die Methode sort() der Klasse Arrays , um die Elemente zu sortieren. Diese Methode sortiert die Elemente in aufsteigender Reihenfolge

// array. concat fügt zwei oder mehr Arrays zu einem neuen Array zusammen. concat() ist nicht destruktiv: Das neue Array wird zurückgegeben und die Original-Arrays bleiben erhalten.




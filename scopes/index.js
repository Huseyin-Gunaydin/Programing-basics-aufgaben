var name1 = "Hüseyin"; // Global
const stadt = "Berlin";

function text() {
  var name1 = "Vural";
  var age = 30;
  console.log("function scope: ", name1, age);
}
console.log(name1);
text();



// console.log(age);   nicht global



if (true) {
  let name1 = "Rahman";
  let nachname = "Günaydin";
  // var name1 ="Rahman";
  console.log(name1);
  const stadt = "Istanbul";
  console.log(stadt);
}

console.log(stadt)

// console.log(name1, stadt);




// console.log(nachname);     nachname if icinde tanimlandigi icin disaridan cagiramayiz.



//Fonktionlar kendi scopes alanlarini olustururlar. Block icinde yeni bir scope olusmaz.
//Funktionen erstellen ihre eigenen "scopes" Felder. Innerhalb des Blocks wird kein neuer scope erstellt.

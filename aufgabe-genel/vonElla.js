// # Herausforderungszeit
// ​
// ## Zählen Sie die Anzahl der Duplikate
// ​
// 1.  Schreiben Sie eine Funktion `duplikate`, die die Anzahl unterschiedlicher alphabetischer Zeichen und numerischer Ziffern ohne Berücksichtigung der Groß-/Kleinschreibung zurückgibt, die mehr als einmal in der Eingabezeichenfolge vorkommen. Es kann davon ausgegangen werden, dass die Eingabezeichenfolge nur Buchstaben (sowohl Groß- als auch Kleinbuchstaben) und numerische Ziffern enthält.
// ​
// ## Beispiel
// ​
// ```js
// duplikate("abcde"); // → 0
// duplikate("aabbcde"); // → 2: a, b
// duplikate("aabBcde"); // → 2: a, (b,B)
// duplikate("aA11"); // → 2: a, 1
// duplikate("aabbccdd"); // → 4: a, b, c, d
// duplikate("aabbb"); // → 2: a, b
// ```

                   

function duplikate(str) {
  const arrFromStr = str.toLowerCase().split("").sort();
  const newArr = [];
  arrFromStr.forEach((elem) => {
    if (arrFromStr.indexOf(elem) !== arrFromStr.lastIndexOf(elem)) {
      newArr.push(elem);
    }
  });
  if (newArr.length === 0) return 0;
  const filteredArr = [];
  console.log(newArr)
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] != newArr[i + 1]) filteredArr.push(newArr[i]);
  }
  return `${filteredArr.length}: ${filteredArr.join(", ")}`;
}

// duplikate("abcde"); // → 0
// duplikate("aabbcde"); // → 2: a, b
// duplikate("aabBcde"); // → 2: a, (b,B)
// duplikate("aA11"); // → 2: a, 1
// duplikate("aabbccdd"); // → 4: a, b, c, d
// duplikate("aabbb"); // → 2: a, b

// function duplikate(text){
//   return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
// }

console.log(duplikate("abcde")); // → 0
console.log(duplikate("aabbcde")); // → 2: a, b
console.log(duplikate("aabBcde")); // → 2: a, (b,B)
console.log(duplikate("aA11")); // → 2: a, 1
console.log(duplikate("aabbccddee")); // → 4: a, b, c, d
console.log(duplikate("1caabbbc1c")); // → 2: a, b




const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.indexOf('Dodo'));

console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// expected output: 1
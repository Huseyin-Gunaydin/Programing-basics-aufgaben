 function colorPatternTimes(array) {
  let sekunden =0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] != array[i - 1]) {
      sekunden++;
    }
  }
  return sekunden + array.length * 2;
}

console.log(colorPatternTimes(["Red", "Blue", "Red", "Blue", "Red"])); // return 14
// Es gibt 5 Farben, also dauert es 10 Sekunden, jede Farbe zu färben (2 x 5 = 10).
// Man muss die Stifte 4 Mal wechseln und braucht dafür 4 Sekunden (1 x 4 = 4).
// 10 + 4 = 14
console.log(colorPatternTimes(["Blue"])); // return 2
console.log(colorPatternTimes(["Red", "Yellow", "Green", "Blue"])); // return 11
console.log(colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"])); // return 13


/* function colorPatternTimes(array) {
  sekunden = 0;

  if (array.length === 1) {
    sekunden += 2;
  }

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length ; j++) {
      if (array[i] != array[j]) {
        sekunden += 3;
        break;
      }
      if (array[i] == array[j]) {
        sekunden += 2;
        break;
      }
    }
  }
  return sekunden;
}

console.log(colorPatternTimes(["Red", "Blue", "Red", "Blue", "Red"])); // return 14
// Es gibt 5 Farben, also dauert es 10 Sekunden, jede Farbe zu färben (2 x 5 = 10).
// Man muss die Stifte 4 Mal wechseln und braucht dafür 4 Sekunden (1 x 4 = 4).
// 10 + 4 = 14
console.log(colorPatternTimes(["Blue"])); */

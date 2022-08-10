// Aufgabe 3 (Symmetrischer Unterschied)
// Implementiere eine Funktion mit dem namen symmetricDifference(), die zwei Arrays als Parameter erhält und ein Array mit deren symmetrischer Differenz zurückgibt. Das zurückgegebene Array darf nur eindeutige Werte enthalten (keine Duplikate).
// Beispiel:
// symmetricDifference([1, 2], [ ]) sollte [1, 2] zurückgeben
// symmetricDifference([1, 2], [1]) sollte [2] zurückgeben
// symmetricDifference([1, 2], [1, 3]) sollte [2, 3] zurückgeben
// symmetricDifference([1, 2, 3], [5, 2, 1, 4]) sollte [3, 4, 5] zurückgeben
// symmetricDifference([1, 2, 3, 3], [5, 2, 1, 4]) sollte [3, 4, 5] zurückgeben
// symmetricDifference([1, 2, 3], [5, 2, 1, 4, 5]) sollte [3, 4, 5] zurückgeben

function symmetricDifference(arr1, arr2) {
  const diffArr1Arr2 = [];
  const diffArr2Arr1 = [];

  // Diff Arr1Arr2
  for (let i = 0; i < arr1.length; i++) {
    let isElementInArray = false;
    const elem1 = arr1[i];

    for (let j = 0; j < arr2.length; j++) {
      const elem2 = arr2[j];
      if (elem1 === elem2) {
        isElementInArray = true;
      }
    }

    if (isElementInArray === false) {
      diffArr1Arr2.push(elem1);
    }
  }

  // Diff Arr2Arr1
  for (let i = 0; i < arr2.length; i++) {
    let isElementInArray = false;
    const elem2 = arr2[i];

    for (let j = 0; j < arr1.length; j++) {
      const elem1 = arr1[j];
      if (elem1 === elem2) {
        isElementInArray = true;
      }
    }

    if (isElementInArray === false) {
      diffArr2Arr1.push(elem2);
    }
  }

  const diffBoth = [...diffArr1Arr2, ...diffArr2Arr1];
  let result = [];

  for (let i = 0; i < diffBoth.length; i++) {
    let currentValue = diffBoth[i];
    if (!result.includes(currentValue)) {
      result.push(currentValue);
    }
  }

  //console.log(diffArr1Arr2, diffArr2Arr1);
  console.log(result);
}

symmetricDifference([1, 2], []); // sollte [1, 2] zurückgeben
symmetricDifference([1, 2], [1]); // sollte [2] zurückgeben
symmetricDifference([1, 2], [1, 3]); // sollte [2, 3] zurückgeben
symmetricDifference([1, 2, 3], [5, 2, 1, 4]); // sollte [3, 4, 5] zurückgeben
symmetricDifference([1, 2, 3, 3], [5, 2, 1, 4]); // sollte [3, 4, 5] zurückgeben
symmetricDifference([1, 2, 3], [5, 2, 1, 4, 5]); // sollte [3, 4, 5] zurückgeben

function getAllFibonacciNumbersBelow(num) {
  const arrNum = [0, 1];
  for (let i = 0; i < num; i++) {
    if (arrNum[arrNum.length - 1] + arrNum[arrNum.length - 2] < num) {
      arrNum.push(arrNum[i] + arrNum[i + 1]);
    }
  }
  return arrNum;
}

console.log(getAllFibonacciNumbersBelow(10));
console.log(getAllFibonacciNumbersBelow(50));
console.log(getAllFibonacciNumbersBelow(144));

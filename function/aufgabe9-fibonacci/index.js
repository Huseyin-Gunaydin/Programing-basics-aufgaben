// Aufgabe 4 (Fibonacci Zahlen)
// Einleitung:
// Die Fibonacci Zahlen sind eine Folge aus Zahlen die in der Mathematik sehr beliebt sind. Jede Zahl der Folge ist die Summe der zwei vorherigen Zahlen. Die ersten 20 Fibonacci Zahlen sehen so aus: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181
// 1 + 2 = 3
// 13 + 21 = 34
// 233 + 377 = 610
// Und so weiter…

// Teil A (leicht):
// Schreibe eine Funktion mit dem namen getNextFibonacciNumber
// Die Funktion erhält zwei Parameter
// prevNum1 eine number
// prevNum2 eine number
// Die Funktion gibt eine number zurück
// getNextFibonacciNumber gibt die nächste Fibonacci Zahl der Folge zurück.
// Beispiel:
// getNextFibonacciNumber(5,8) -> 13
// getNextFibonacciNumber(0,1) -> 1
// getNextFibonacciNumber(21,34) ->55

function getNextFibonacciNumber(prevNum1, prevNum2) {
    let result = prevNum1 + prevNum2;
    return result;
}

console.log(getNextFibonacciNumber(5, 8));
console.log(getNextFibonacciNumber(0, 1));
console.log(getNextFibonacciNumber(21, 34));

// Teil B (mittel):
// Schreibe eine Funktion mit dem namen getAllFibonacciNumbersBelow
// Die Funktion erhält einen Parameter
// num eine number
// Die Funktion gibt ein Array zurück
// getAllFibonacciNumbersBelow gibt ein Array aller Fibonacci Zahlen unter dem übergebenen Parameter num zurück
// Beispiel:
// getAllFibonacciNumbersBelow(10) -> [0, 1, 1, 2, 3, 5, 8]
// getAllFibonacciNumbersBelow(50) -> [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// getAllFibonacciNumbersBelow(144) -> [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

function getAllFibonacciNumbersBelow(num) {
    const result = [0, 1];
    while (result[result.length - 1] < num - result[result.length - 2]) {
        const sum = getNextFibonacciNumber(
            result[result.length - 1],
            result[result.length - 2]
        );
        result.push(sum);
    }
    return result;
}

console.log(getAllFibonacciNumbersBelow(144));

// Zweite Idee

function getAllFibonacciNumbersBelow2(num) {
    arr = [];

    do {
        arr.length === 0
            ? arr.push(0, 1)
            : arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    } while (arr[arr.length - 2] + arr[arr.length - 1] < num);

    return arr;
}

console.log(getAllFibonacciNumbersBelow2(144));
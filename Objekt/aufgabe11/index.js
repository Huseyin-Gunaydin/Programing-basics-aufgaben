// Es ist Montag. Du bist nach einem großartigen Wochenende zurück im Büro, aber dort erwartet dich eine schlechte Nachricht: Fantasia ist krank und die Deadline des Projekts rückt immer näher! Sie hat dir drei Funktionen überlassen, die Benennung ist aber nicht wirklich hilfreich und du musst nun herausfinden, ob und wie sie benutzt werden können.
// - Teste die Funktionen
// - Finde heraus, was sie tun und vor allem: wie sie es tun
// - Schreibe Kommentare in den Code
// - Finde passende Namen für Variablen
// - Bonus: Bestimme die Komplexität der Funktionen
// - Bonus: Gibt es Unterschiede, wenn bestimmte Argumente übergeben werden?

const array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

let counter= 0;

function functionA(array) {
    for (let i = 0; i < array.length; i++) {
        counter++;
        for (let j = 0; j < array.length-1-i; j++) {
            counter++;
            const a = array[j];
            const b = array[j + 1];
            if (a > b) {
                array[j] = b;
                array[j + 1] = a;
                counter++;
            
            }
         
        }
    }
    return array;
}
console.log(functionA(array))



function functionB(array) {
    let x;
    for (let i = 0; i < array.length; i++) {
        x = i;
        for (let j = i; j < array.length; j++) {
            if (array[x] > array[j]) {
                x = j;
            }
        }
        if (i !== x) {
            const a = array[i];
            const b = array[x];
            array[i] = b;
            array[x] = a;
        }
        counterB++;
    }
    return array;
}

//console.log(functionB(array))

function functionC(array) {
    let x;
    let counterB= 0;
    let counterC= 0;
    for (let i = 1; i < array.length; i++) {
        let j = i;
        x = array[i];
        while (j > 0 && array[j - 1] < x) {
            array[j] = array[j - 1];
            j--;
        }
         counterC++;
        array[j] = x;
    }
   
    return array;
}

//console.log(functionC(array))

console.log(`Array length: ${array.length}, FunctionC-Counter: ${counter}`);
//console.log(`Array length: ${array.length}, FunctionC-Counter: ${counterB}`);
//console.log(`Array length: ${array.length}, FunctionC-Counter: ${counterC}`);
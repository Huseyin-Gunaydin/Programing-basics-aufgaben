// Aufgabe 2 (Passwort Generator)
// Implementiere eine Funktion mit dem Namen createPassword welche ein zufällig erzeugtes Passwort zurückgibt.
// Die Funktion gibt einen string zurück
// Die Funktion erhält 4 Parameter
// 1. length, eine number, gibt die Länge des Passworts an
// 2. useSmallLetters, ein boolean, gibt an ob das Passwort kleine Buchstaben von a-z enthalten soll
// 3. useCapitalLetters, ein boolean, gibt an ob das Passwort große Buchstaben von A-Z enthalten soll
// 4. useSpecialCharacters, ein boolean, gibt an ob das Passwort Sonderzeichen wie @ ! $ % & * enthalten soll.
// —--


function createPassword(
    length,
    useSmallLetters,
    useCapitalLetters,
    useSpecialCharacters
) {
    const smallLetters = "abcdefghijklmnopqrstuvwxyz";
    const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialCharacters = "@!$%&*";
    const numbers = "1234567890";

    let possibleCharacters = numbers;

    if (useSmallLetters) {
        possibleCharacters += smallLetters;
    }
    if (useCapitalLetters) {
        possibleCharacters += capitalLetters;
    }
    if (useSpecialCharacters) {
        possibleCharacters += specialCharacters;
    }
    if (useSpecialCharacters) {
        possibleCharacters += specialCharacters;
    }

    let password = "";

    for (let i = 0; i < length; i++) {
        password +=
            possibleCharacters[
                Math.floor(Math.random() * possibleCharacters.length)
            ];
    }

    return password;
}

console.log(createPassword(20, false, true, false));

function createPasswordFromWords(length, useAnimals, useCities) {
    const plants = ["Tree", "Cactus", "Bush"];
    const animals = ["Cat", "Dog", "Bird"];
    const cities = ["Berlin", "Rome", "NewYork"];

    let possibleWords = plants;

    if (useAnimals) {
        possibleWords = [...possibleWords, ...animals];
    }
    if (useCities) {
        possibleWords = [...possibleWords, ...cities];
    }

    let password = [];

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * possibleWords.length);

        password.push(possibleWords[randomIndex]);
    }

    return password.join("");
}

console.log(createPasswordFromWords(10, true, true));
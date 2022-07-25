// Add answers here
// Füge deine Funktionen hier ein

function nameOfCity(city) {
    const citySmall = city.toLowerCase();
    if (citySmall.indexOf("new") === 0 || citySmall.indexOf("los") === 0) {
        console.log(city);
        return true;
    }
    console.log("The city name does not begin with Los or New");
    return false;
}

function isDivisible(number) {
    return number % 100 === 0;
}

function missingAngle(angle1, angle2) {
    const angle3 = 180 - Math.abs(angle1) - Math.abs(angle2);
    if (angle3 < 90) return "acute";
    if (angle3 === 90) return "right angle";
    return "obtuse";
}

function isRaining(isItRaining) {
    return isItRaining
        ? "wet day - you need an umbrella!"
        : "dry day - leave your umbrella at home!";
}

function geometricalSequence() {
    const result = [];
    for (let i = 0; i < 9; i++) {
        result.push(Math.pow(2, i));
    }
    return result.join(" ");
}

function multiplesOfThree() {
    let nums = "";
    for (let i = 1; i <= 5; i++) {
        nums += `${3 * i} `;
    }
    return nums;
}

function powerOf(num) {
    // Math.pow(2,10) === 2^10
    return Math.pow(num, num);
}

function vowelCount(text) {
    const vowels = "aeiou";
    textSmall = text.toLowerCase();
    let numberOfVowels = 0;
    for (let i = 0; i < textSmall.length; i++) {
        const currentLetter = textSmall[i];
        if (vowels.indexOf(currentLetter) != -1) {
            numberOfVowels++;
        }
    }
    return numberOfVowels;
}

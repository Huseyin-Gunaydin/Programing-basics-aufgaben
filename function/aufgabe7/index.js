


const cards = ["2 Pik","3 Pik","4 Pik","5 Pik","6 Pik", "7 Pik", "8 Pik", "9 Pik", "10 Pik", "Bube Pik", "Dame Pik", "König Pik", "Ass Pik", "2 Kreuz","3 Kreuz","4 Kreuz","5 PKreuzik","6 Kreuz", "7 Kreuz", "8 Kreuz", "9 Kreuz", "10 Kreuz", "Bube Kreuz", "Dame Kreuz", "König Kreuz", "Ass Kreuz", "2 Karo","3 Karo","4 Karo","5 Karo","6 Karo", "7 Karo", "8 Karo", "9 Karo", "10 Karo", "Bube Karo", "Dame Karo", "König Karo", "Ass Karo", "2 Herz","3 Herz","4 Herz","5 Herz","6 Herz", "7 Herz", "8 Herz", "9 Herz", "10 Herz", "Bube Herz", "Dame Herz", "König Herz", "Ass Herz"]


const array = [];
function shuffleCards(Card) {
    for (let i = Card.length + 1; i > 0; i--) {
            const indexNo = parseInt(Math.random()*(Card.length));
            array.push(Card.splice(indexNo, 1).join(""));
        };
        return array;
};
console.log(shuffleCards(cards));



function getCard(Card) {
    const array = [];
    for (let i = Card.length + 1; i > 0; i--) {
        if(Card.length > 0){
            const indexNo = parseInt(Math.random()*(Card.length));
            var newCard = Card.splice(indexNo, 1).join("");
            array.push(newCard)
            console.log(newCard);
        } else {
            console.log({cards});
            return "Der Stapel ist leer";
        };
    };
};
console.log(getCard(array));






const capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const smallLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacters = ["@", "!", "$", "%", "&", "*"];
const allCharacters = (capitalLetters + smallLetters + numbers + specialCharacters).replaceAll(/,/g, '');
console.log(allCharacters);
console.log(allCharacters.length);
function createPassword(myPass){
    const myPassword = [];
    for(let i=0; i < 5; i++){
        myPassword.push(myPass[parseInt(Math.random()*(myPass.length))]);
    };
    myPassword.splice(myPass[parseInt(Math.random()*(myPass.length))], 1, capitalLetters[parseInt(Math.random()*(capitalLetters.length))],smallLetters[parseInt(Math.random()*(smallLetters.length))], numbers[parseInt(Math.random()*(numbers.length))], specialCharacters[parseInt(Math.random()*(specialCharacters.length))]);
    return myPassword.join("");
};
console.log(createPassword(allCharacters));








// function diffy(a, b) {
//     return [
//     ...a.filter((x) => !b.includes(x)),
//     ...b.filter((x) => !a.includes(x)),
//     ];
//     } 


//     const symmetricDiff2 = (arg1, arg2) => {
//         arg1 = [...new Set([...arg1])];
//         arg2 = [...new Set([...arg2])];
//         const arg3 = arg1.concat(arg2);
//         return arg3.filter(
//         (item) => !(arg3.indexOf(item) !== arg3.lastIndexOf(item))
//         );
//         }; 
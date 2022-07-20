


const cards = ["2 Pik","3 Pik","4 Pik","5 Pik","6 Pik", "7 Pik", "8 Pik", "9 Pik", "10 Pi", "Bube ", "Dame ", "König", "Ass P", "2 Kre","3 Kre","4 Kre","5 PKr","6 Kre", "7 Kre", "8 Kre", "9 Kre", "10 Kr", "Bube ", "Dame ", "König", "Ass K", "2 Kar","3 Kar","4 Kar","5 Kar","6 Kar", "7 Kar", "8 Kar", "9 Kar", "10 Ka", "Bube ", "Dame ", "König", "Ass K", "2 Her","3 Her","4 Her","5 Her","6 Her", "7 Her", "8 Her", "9 Her", "10 He", "Bube ", "Dame ", "König", "Ass H"]


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





function diffy(a, b) {
    return [
    ...a.filter((x) => !b.includes(x)),
    ...b.filter((x) => !a.includes(x)),
    ];
    } 


    const symmetricDiff2 = (arg1, arg2) => {
        arg1 = [...new Set([...arg1])];
        arg2 = [...new Set([...arg2])];
        const arg3 = arg1.concat(arg2);
        return arg3.filter(
        (item) => !(arg3.indexOf(item) !== arg3.lastIndexOf(item))
        );
        }; 
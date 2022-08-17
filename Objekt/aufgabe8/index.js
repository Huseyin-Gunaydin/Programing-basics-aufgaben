

// 1

let zahlen = [1, 2, 3];
let zahlen2 = [4, 4, 4, 4];

const doubleValues = (arr) => {
    return arr.map((element) => element * 2);
};

console.log(doubleValues(zahlen));
console.log(doubleValues(zahlen2));

// 2

const zahlen3 = [1, 2, 3, 4, 5];
function onlyEvenValues(arr) {
    let evenArray = [];
    arr.forEach(function (element) {
        if (element % 2 === 0) evenArray.push(element);
    });
    return evenArray;
}
console.log(onlyEvenValues(zahlen3));

// Variante mit filter

const zahlenArray = [1, 2, 3];

function getEvenNumbers(arr) {
    return arr.filter((element) => element % 2 === 0);
}

console.log(getEvenNumbers(zahlenArray));

// 3

const showFirstAndLast = (arr) => {
    return arr.map((element) => {
        return element[0] + element[element.length - 1];
    });
};

console.log(showFirstAndLast(["colt", "matt", "tim", "udemy"]));

const showFirstAndLast2 = ["colt", "matt", "tim", "udemy"];
console.log(showFirstAndLast2.map((x) => x[0] + x.slice(-1)));

// 4


function vowelCount(str) {
    const vowels = "aeiou";
    const result = {};
    str.toLowerCase()
        .split("")
        .forEach((element) => {
            if (vowels.includes(element) && result[element] === undefined) {
                result[element] = 0;
            }
            if (vowels.includes(element)) {
                result[element] += 1;
            }
        });
    return result;
}

console.log(vowelCount("ssss"));






function addUp(zahl) {
    let sum = 0;
    for (let i = 0; i <= zahl; i++) {
        sum += i;
    }
    return sum;
}

console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));













// const addUp = (nummer) => {
//      let a = 0;
//     for (let i = 0; i <= nummer; i++) {
//       a += i;
//      }
//      return a;
//   };
  



  console.log(addUp(1));
  console.log(addUp(2));
  console.log(addUp(3));
  console.log(addUp(4));
  console.log(addUp(13));
  console.log(addUp(600));



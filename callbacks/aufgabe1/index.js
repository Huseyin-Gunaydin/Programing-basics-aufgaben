function greetMessage(callback) {
  console.log("Guten Morgen", callback);
}

greetMessage("John"); // drucke "Guten Morgen, John"




function greetUsers(arr, fn) {
  const greeting = arr.forEach((element) => {
    fn(element);
  });
  return greeting;
}




greetUsers(["John", "Peter", "Mark"], greetMessage);
// // "Guten Morgen, John"
// // "Guten Morgen, Peter"
// // "Guten Morgen, Markus"

const array = [1, 2, 3, 4];
const getSquaredNumber = (zahl) => console.log(zahl * zahl);

const getSquaredNumbersFromArray = (arr, fn) => {
  return arr.forEach(fn);
};

//getSquaredNumber(2); // 4
getSquaredNumbersFromArray(array, getSquaredNumber); // 1, 4, 9, 16

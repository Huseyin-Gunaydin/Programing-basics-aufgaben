var array = [5, 9, 12, 7],
  summe = array.reduce(function (prev, akt) {
    return (prev += akt);
  }, 0);

console.log(summe);



const numbers = [11, 12, 13, 14, 15, 16, 17, 18];
const sum = numbers.reduce(function (accumulator, currentNumber) {

return accumulator + (currentNumber%2)
},0);
console.log(sum);





const arrForReduce = [31, 42, 53];
const total = arrForReduce.reduce(function (accumulator, value) {
  return accumulator + value;
});
console.log(total); 





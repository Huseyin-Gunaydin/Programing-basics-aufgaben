// const array = [1, 2, 3, 4, 5, 6];

// function getSumOfArray(array) {
//   console.log(getSumOfArray(array, array.length - 1) + array[array.length - 1]);
// }

// getSumOfArray(array); // 21

const array = [1, 2, 3, 4, 5, 6];
const length = array.length;
function getSumOfArray(array, length) {
  if (length <= 0) return 0;

  return getSumOfArray(array, length - 1) + array[length - 1];
}
console.log(getSumOfArray(array, length)); // 21

function getSumOfArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + getSumOfArray(arr.slice(1));
}
console.log(getSumOfArray(array));

const hello = "hello world";
function reverse(str) {
  if (str === "") {
    return "";
  } else {
    return reverse(str.substring(1)) + str.charAt(0);
  }
}

console.log(reverse(hello)); // dlrow olleh

function reverse(str) {
  if (str.length === 1) return str;
  return reverse(str.slice(1)) + str[0];
}
console.log(reverse(hello));

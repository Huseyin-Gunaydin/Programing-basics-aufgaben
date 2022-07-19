
const text1= "Hüseyin";
const text2= "Hüseyin Günaydin";
const text3= "Hüseyin Günaydin Berlin";

const lägstenstring = (a,b,c) => (a, b, c);


console.log(lägstenstring(text1, text2, text3));









function reverseWords(str) {
    let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
    return reverseWordArr.join(" ");
  }

  console.log(reverseWords("Hüseyin Günaydin"));



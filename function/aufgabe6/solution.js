
const text1= "Hüseyin ldkjfdkjsl dkjsfkjads akjdshfkjadsh jakdshfkjadsh akjsdhkjfhadskj adnskjfhnadskjn";
const text2= "Hüseyin Günaydin Kirsehir Ankara Berlin";
const text3= "Hüseyin Günaydin Berlin";

function theLongestString(str1, str2, str3){
  if(str1.lenght > str2.lenght && str1.lenght > str3.lenght){
    return "text1";
  } else if(str2.lenght > str1.lenght && str2.lenght > str3.lenght){
    return "text2";
  } 
}
console.log(theLongestString(text1, text2, text3));


// console.log(lägstenstring(text2, text3, text1));

//------------------------------------

// function reverseWords(str) {
//     let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
//     return reverseWordArr.join(" ");
//   }
//   console.log(reverseWords("the quick brown fox jumps over the lazy dog""));


// function myFunction (string){
//   return string.split("").reverse().join("").split(" ").reverse().join(" ");
// }
// console.log(myFunction("the quick brown fox jumps over the lazy dog"));




//-----------------------------------------------

//------------------------------------------
// function count(str, find) {
//   console.log (str.split(find));
//   return str.split(find).length-1;
// }
// console.log(count("Hüseyin", "Hüseyin"));


// function searchWord(word){
//   const arrayText = text2.split(" ");
// return arrayText.filter(countOfWord => countOfWord === word).length;
// }
// console.log(searchWord("Hüseyin"));

// function numTimesWordRepeated(){
//   const str = "Hüseyin, Günaydin, Kirsehir, Hüseyin, ankara, ankara";
//   const char = {};
//   const arr = str.split(" ");

//   for (let word of arr){
//     if (!char [word]){
//       char[word]=1;
//     }
//     else{
//       char[word]++;
//     }
//   }
//   return char;
// }
// console.log(numTimesWordRepeated());
//------------------------------------------
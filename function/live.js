













// let a =0;
// function countUp(){
//     a++;
//   return a;
// }

// console.log(countUp());


// console.log(countUp());
// console.log(countUp());
// console.log(countUp());
// console.log(countUp());
// console.log(countUp());
// console.log(countUp());
// console.log(countUp());
// console.log(countUp());


// const text = "a a a a a a a a a a. b b b b b b b b b b b . c c c c c c c c c c c c "; 
// const words= text.split(" ");
// const trimmedWords = words.slice(0, 10);
//  if ( words.length > 30) console.log("zu lang!");
//  const trimmedText = trimmedWords.join(" "); 

//  console.log(trimmedText);




 
let myVariable= "a a a a a a a a a a. b b b b b b b b b b b . c c c c c c c c c c c c. d d d"; 
myVariable = myVariable.split(" ");
myVariable = myVariable.slice(0, 10);
console.log(myVariable);
myVariable= myVariable.join(" ");
console.log(myVariable);
if(myVariable.length>30) console.log("zu lang!");
// myVariable=null;

console.log(myVariable);






const numbers = [12, 5, 8, 130, 44]

const result= numbers.filter(function(number){
    return number > 10;

})


console.log(result);


const result1= numbers.filter(number => number >10)
console.log(result1);


const result2= numbers.sort(function(a, b){return a-b});
console.log(result2)



//const names=["tayfun", "cem", "ece", "burak", "gül", "mehmet", "nese"]
//console.log(names.filter(name => name.length<=4));





const users = [
    {
        name: "Tayfun",
        age:27
    }, 
    {
        name: "Mehmet",
        age:27
    }, 
    {
        name: "Gökhan",
        age:32
    }, 
]

console.log (users.filter(user=> user.age===27));


const names=["tayfun", "cem", "ece", "burak", "gül", "mehmet", "nese"]
const result3 = names.filter(name=>name.includes("ce"));
console.log(result3)







const ad=("Hüseyin");
const myArray = [...ad];
console.log(myArray)
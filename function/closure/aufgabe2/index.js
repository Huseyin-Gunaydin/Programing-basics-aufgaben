
function makePlusFunction(num){
const plus = (num1)=>{
    return num1 + num
}
return plus;
}



const plusFive = makePlusFunction(5);

//const plusFive = makePlusFunction(5); yapmadan asagidaki gibi yapabiliriz. ilk parametre  ilk funcktion icin 2. parametre ise icerideki function icin 


//console.log(makePlusFunction(5)(2)); // returns 7      
//console.log(makePlusFunction(5)(-8)); // returns -3

console.log(plusFive(2)); // returns 7
console.log(plusFive(-8)); // returns -3


const plusTen = makePlusFunction(10);
console.log(plusTen(0)); // returns 10
console.log(plusTen(188)); // returns 198




  


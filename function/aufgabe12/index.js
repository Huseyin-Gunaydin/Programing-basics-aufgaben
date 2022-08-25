
function countTrue(arr){
    let result =0;
    arr.forEach(element => {
    if(element === true){
        result++;
    }

});
return result;
}

console.log(countTrue([true, false, false, true, false])); // ➞ 2
console.log(countTrue([false, false, false, false])); // ➞ 0
console.log(countTrue([])); // ➞ 0






function numInStr (arr){
return arr.filter((element)=>{
    if(
    element.includes("0")||
    element.includes("1")||
    element.includes("2")||
    element.includes("3")||
    element.includes("4")||
    element.includes("5")||
    element.includes("6")||
    element.includes("7")||
    element.includes("8")||
    element.includes("9")
    ){
        return true
    }else {
        return false
    }
})
}


console.log( numInStr(["1a", "a", "2b", "b"])); // ➞ ["1a", "2b"]
console.log( numInStr(["abc", "abc10"])); // ➞ ["abc10"]
console.log( numInStr(["abc", "ab10c", "a10bc", "bcd"])); // ➞ ["ab10c", "a10bc"]
console.log( numInStr(["this is a test", "test1"])); // ➞ ["test1"]



function maxItems (preisProStueck, geld){
    const a = preisProStueck.sort((a,b)=>a-b)
    const stueck=[];
    for(let i=0; i<=a.length; i++){
        geld = geld - a[i] 
        if(geld > 0){
            stueck.push(a[i])
            }
    }
    if(stueck.length==0){
        return "nicht genug Geld!"
    }
    return `${stueck.length} Artikel können erworben werden und`;
    
}
console.log(maxItems(["1", "1", "2"], "3")); // ➞ 2
console.log(maxItems(["10", "7", "2", "60"], "20")); // ➞ 3
console.log(maxItems(["15", "5", "30", "30", "10"], "2")); // ➞ "Nicht genug Geld!"






// function maxItems(price, money) {
//     const sortedPrice = price.sort((a, b) => a - b)
//     const myArray = []
//     for(let i = 0; i < sortedPrice.length; i++){
//         money = money - sortedPrice[i]
//         if(money > 0){
//             myArray.push(sortedPrice[i])
//         }
//     }
//     if(myArray.length === 0) {
//         return "Nicht genug Geld!"
//     }; return myArray.length
// }
// console.log(maxItems(["10", "7", "2", "60"], "20"));
// console.log(maxItems(["1", "1", "2"], "3"));
// console.log(maxItems(["15", "5", "30", "30", "10"]));
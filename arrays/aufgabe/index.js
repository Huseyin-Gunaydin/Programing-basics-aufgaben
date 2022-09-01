
const canNest =(a,b)=>{
if(Math.min(...a)> Math.min(...b)&& Math.max(...b)>Math.max(...a)){
    return true;
}
    return false;
}
console.log(canNest([1, 2, 3, 4], [0, 6])) // ➞ true
console.log(canNest([3, 1], [4, 0])) // ➞ true
console.log(canNest([9, 9, 8], [8, 9])) //➞ false
console.log(canNest([1, 2, 3, 4], [2, 3])) //➞ false






const canNest1 = (a,b) => {
    const x = a.sort();
    const y = b.sort();
    
    if(x[0] > y[0] && x[x.length-1] < y[y.length-1]){
    return true;
    } else return false;
    } 
console.log(canNest1([1, 2, 3, 4], [0, 6])) // ➞ true
console.log(canNest1([3, 1], [4, 0])) // ➞ true
console.log(canNest1([9, 9, 8], [8, 9])) //➞ false
console.log(canNest1([1, 2, 3, 4], [2, 3])) //➞ false

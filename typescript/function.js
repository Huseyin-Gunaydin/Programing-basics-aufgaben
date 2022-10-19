/* function getAverage(a:number,b:number,c?:number):string{
let total= a+b;
let count = 2;

if(typeof c !== undefined){
    total +=c;

}
    const result=total/count
    return "result :" + result
}

getAverage(10 , 20, 30)

getAverage(10 , 20) */
/*
function getAverage(...a:number[]):string{
let total= 0;
let count = 0;
for (let i=0; i<a.length; i++){
    total+=a[i];
    count++
}
    const result=total/count
    return "result :" + result
}

getAverage(10 , 20, 30)

getAverage(10 , 20)

*/
var getAverage = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var total = 0;
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        total += a[i];
        count++;
    }
    var result = total / count;
    return "result :" + result;
};
console.log(getAverage(10, 20, 30));
console.log(getAverage(10, 20));

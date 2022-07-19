
const text1= "Hüseyin";
const text2= "Hüseyin Günaydin";
const text3= "Hüseyin Günaydin Berlin";

const lägstenstring = (a,b,c) => (a, b, c);


console.log(lägstenstring(text1, text2, text3));




function a(text){
     
    const arr = text.split(" ");
    let neueWord="";
    for(let i=arr.length; i<arr.length; i++){

        for(let j=arr[i].length-1; j>=0; j--)
        neueWord += arr[i][j];
        



    }
    return arr;


}
console.log(a("Hüseyin Günaydin"));


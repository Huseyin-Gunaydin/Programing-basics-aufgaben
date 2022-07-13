
 function istGeradeZahl(zahl){
    if (Math.abs(zahl%2===0)){
        console.log(true)
    }
    else{
        console.log(false)
    }
 }

console.log(istGeradeZahl(3));
console.log(istGeradeZahl(10));
console.log(istGeradeZahl(7));
console.log(istGeradeZahl(40));





function istGeradeZahl(zahl){
    const Boolean = Math.abs(zahl % 2 === 0);
    return Boolean;
}

console.log(istGeradeZahl(3));
console.log(istGeradeZahl(10));
console.log(istGeradeZahl(7));
console.log(istGeradeZahl(40));
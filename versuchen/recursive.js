// function faktoriel(nummer){
//     var fakto = 1;
//     for(let i=1; i<=nummer; i++){
//       fakto=fakto*i
//     }
//     return fakto;
// }
// console.log(faktoriel(5));


setTimeout(()=>{
  console.log("Beginn nach 2 Sekunden")
}, 2000);




function getFacultyOf(nummer) {
  if (nummer == 1 || nummer == 0) {
    return 1;
  }
  return nummer * getFacultyOf(nummer - 1);
}
console.log(getFacultyOf(5));






// getFacultyOf(5)

//     5*getFacultyOf(4)
//         4*getFacultyOf(3)
//             3 *getFacultyOf(2)
//                 2*getFacultyOf(1)

function addiere1(zahl) {
  console.log(zahl);
  addiere1(zahl + 1);
}
addiere1(1);





function addiere1(zahl) {
  console.log(zahl);
  getFacultyOf (zahl + 1);
}
addiere1(100);




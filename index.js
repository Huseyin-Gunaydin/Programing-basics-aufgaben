let array =[ 1, 2,3,4,5,6,7,8,9,10,12,14,15,16,17,21]
let result1= array.filter((piece)=> {
    if(piece % 3==0){
        return piece
    }

});
console.log(result1);



const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length < 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]



function isBigEnough(value) {
    return value >= 10;
  }
  
  let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

  console.log(isBigEnough())
function breakChocolate(n,m) {
    if(n===0||m===0){
     return 0;
    }
    else
    return Math.abs(n*m) -1;
  }

  console.log(breakChocolate(0,5))
  console.log(breakChocolate(5,5))
console.log(breakChocolate(1,1))
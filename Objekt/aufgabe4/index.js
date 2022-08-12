// Dein eigenes Math Objekt.
// Erstelle ein neues Objekt und lege es in einer Variable mit dem namen MyMath ab.
// Das Objekt soll die Methoden ceil, floor, pow, sqrt und abs des Math Objekts besitzen.
// Die Methoden sollen sich genau so verhalten wie die echten Math Methoden.
// Beispiel:
// MyMath.ceil(2.4) // Gibt 3 zurück
// MyMath.floor(2.4) -> // Gibt 2 zurück
// MyMath.pow(2,3) ->// Gibt 8 zurück
// MyMath.sqrt(16) -> // Gibt 4 zurück
// MyMath.abs(-1) -> // Gibt 1 zurück
// MyMath.abs(1) -> // Gibt 1 zurück



// const MyMath ={s

    
// ceil: function(num){
// console.log(Math.ceil(num))
// },
// floor: function(num){
//     console.log(Math.floor(num));
// },
// pow: function(num1, num2){
//     console.log(Math.pow(num1, num2));
// },
// sqrt: function(num){
//     console.log(Math.sqrt(num));
// },
// abs: function(num){
//     console.log(Math.abs(num));
// },
// }


// MyMath.ceil(2.4) // Gibt 3 zurück
// MyMath.floor(2.4)  // Gibt 2 zurück
// MyMath.pow(2,3) // Gibt 8 zurück
// MyMath.sqrt(16)  // Gibt 4 zurück
// MyMath.abs(-1)  // Gibt 1 zurück
// MyMath.abs(1)  // Gibt 1 zurück


const MyMath2 ={
    ceil: function(num){
    console.log(+(num.toFixed(0))+1);
    },

    floor: function(num){
        console.log(+(num.toFixed(0)));
    },

    pow: function(num1, num2){
      let result= 1;
        for (let i=0; i<num2; i++){
            result *= num1;
        }
        console.log(result)
    },

    sqrt: function(num){
        var Mysqrt = 1,
          i = 0;
        while (true) {
          i = i + 1;
          Mysqrt= (num / Mysqrt + Mysqrt) / 2;
          if (i == num+ 1) {
            break;
          }
        }
        console.log(Mysqrt);
      },

    abs: function(num){
    if( num<0 ){
       console.log(num*-1);
    }
    else{
        console.log(num);
    }
   },
};


    MyMath2.ceil(2.4) // Gibt 3 zurück
    MyMath2.floor(2.4)  // Gibt 2 zurück
    MyMath2.pow(2,3) // Gibt 8 zurück
    MyMath2.sqrt(16) // Gibt 4 zurück
    MyMath2.abs(-1)  // Gibt 1 zurück
    MyMath2.abs(1)  // Gibt 1 zurück



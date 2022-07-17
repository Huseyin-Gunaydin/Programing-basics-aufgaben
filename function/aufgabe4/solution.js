console.log("-----------------------Frage1------------------------------")


function frage1(text){
    if(typeof text !== "string"){
        return "Invalides Argument! Es muss ein String übergeben  werden!"
    }
    const array= text.split(" ");
    for(i=0; i<array.length; i++){
        array[i]= array[i][0].toUpperCase() + array[i].slice(1);
    };
    return array.join(" ");
}
console.log(frage1("hüseyin günaydin berlin"));

console.log("-----------------------Frage2------------------------------")

function frage2(text){
    if(typeof text !== "string"){
        return "Invalides Argument! Es muss ein String übergeben  werden!"
    }
   let  array= text.split(" ");
        array = array.slice(0,29) + "...";
        return array;
    }

console.log(frage2("hüseyin günaydin berlin hüseyin günaydin berlin hüseyin günaydin berlin hüseyin günaydin berlin hüseyin günaydin berlin hüseyin günaydin berlin hüseyin günaydin berlin hüseyin günaydin berlin hüseyin günaydin berlin hüseyin günaydin berlin hüseyin günaydin berlin hüseyin günaydin berlin hüseyin günaydin berlin hüseyin günaydin berlin hüseyin günaydin berlin hüseyin günaydin berlin hüseyin günaydin berlin hüseyin günaydin berlin"));

console.log("-----------------------Frage3------------------------------")


function frage3(text){
    if(typeof text !== "string"){
        return "Invalides Argument! Es muss ein String übergeben  werden!"
    }
    let  array= text.split(" ");
    for(i=0; i<array.length; i++){
        array[i]= array[i][0].toUpperCase() + array[i].slice(1);
    };
    array = array.slice(0,29).join(" ") + "...";

    return array;
}
console.log(frage3("hüseyin günaydin berlin hüseyin günaydin berlin hüseyin günaydin berlin hüseyin günaydin berlin hüseyin günaydin berlin hüseyin günaydin berlin hüseyin günaydin berlin hüseyin günaydin berlin hüseyin günaydin berlin hüseyin günaydin berlin hüseyin günaydin berlin hüseyin günaydin berlin hüseyin günaydin berlin hüseyin günaydin berlin hüseyin günaydin berlin hüseyin günaydin berlin hüseyin günaydin berlin hüseyin günaydin berlin"));




 


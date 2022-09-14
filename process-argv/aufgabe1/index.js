console.log("----------------Umgebung1---------------")

function node(){
    return process.version

}
console.log(node())

console.log("----------------Umgebung2---------------")

function os(){
    return process.platform

}
console.log(os())


console.log("----------------Umgebung3---------------")

function directory(){
   // return process.cwd()
   return process[1]
}
console.log(directory())


console.log("----------------Umgebung4---------------")

/* function all(a, b, c){
    return a + b + c
}
console.log(node(), os(), directory())
 */

function all(){
    return process.version + " " + process.platform + " " + process.cwd() 
}
console.log(all())



console.log("----------------Zeit1---------------")

function aktuelleUhrZeit(){
    const datum = new Date();
    const uhr = datum.getHours();
    const minute = datum.getMinutes();
    const seconds = datum.getSeconds();
    return `${uhr}:${minute}:${seconds}`
}

if(process.argv[2]=== "time" && process.argv.length === 3){
    console.log(aktuelleUhrZeit())
}



console.log("----------------Zeit2---------------")

function datum(){
    const datum = new Date();
    const day = datum.getDate();
    const monat = datum.getMonth() + 1;
    const jahr = datum.getFullYear();
    return `${day}/${monat}/${jahr}`
}

if(process.argv[2]=== "datum" && process.argv.length === 3 ){
    console.log(datum())
}

console.log("----------------Zeit3---------------")

if(process.argv[2]=== "time" && process.argv[3]=== "datum" ){
    console.log(aktuelleUhrZeit() + " - " + datum())
}

/* if(process.argv[2]=== "allTime"){
    console.log(aktuelleUhrZeit() + " - " + datum())
} */

console.log("----------------Countdown---------------")

/* 
/* 
const stop= setInterval(countDown, 1000);

let time = 30;
function countDown(){
    console.log(time);
    time--;
    if(time === 0)clearInterval(stop);
    
   
}

if(process.argv[2] === "countDown") countDown();

 */
 


const stop= setInterval(countDown, 1000);

const startingMinutes= 10;
let time = startingMinutes * 60;
function countDown(){
   const minutes= Math.floor(time/60)
   let seconds= time % 60;
   seconds = seconds < 10 ? "0" + seconds : seconds;
   console.log(`${minutes}:${seconds}`)
   time --
   if(time === 0)clearInterval(stop);
}
if(process.argv[2] === "countDown") countDown();


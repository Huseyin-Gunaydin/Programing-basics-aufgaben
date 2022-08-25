// function logInfo(message){
//     console.log(Date.now(), `[INFO]`, message)
// }

// function logWarning(message){
//     console.log(Date.now(), `[WARNING]`, message)
// }

// function logError(message){
//     console.log(Date.now(), `[ERROR]`, message)
// }

// function logger(logLevel){
//    const logMessage = (message) =>{
//         console.log(Date.now(), `[${logLevel}]`, message);
//     }
//     return logMessage
// }

// const logInfo = logger ("INFO")
// const logWarning = logger ("WARNING")
// const logError = logger ("ERROR")

// console.log({logInfo, logWarning, logError})




// logInfo ("setup successful");
// logInfo ("mail sent");
// logWarning ("low storage warning");
// logError ("user could not be created");


// console.log("----")

// function aoterFunction(param){
//     const innerFunction = (message)=>{
//         console.log(messega, param)
//     }
//     return innerFunction;
// }
// const sayYay = aoterFunction("Wuhu")




// const person1 = {
//     id: 1,
//     name: "Dominik",
//     greet (){
//         console.log(`Hallo,ich bin ${this.name}!`);
//     },
// };     


// const person2= {
//     id: 2,
//     name: "Edwin",
//     greet (){
//         console.log(`Hallo,ich bin ${this.name}!`);
//     },
// }; 
// person1.greet();
// person2.greet();

// const sayHallo1 = person1.greet;
// sayHallo1.bind(person1)(); 

// const sayHallo2 = person2.greet;
// sayHallo1.bind(person2)(); 




const a= new Date()
console.log(a.getDay())
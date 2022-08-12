
//Aufgabe 1
const  euroCountries =["Berlin", "Paris"];
const  asianCountries =["Kahire"];

const verbindenCountries =euroCountries.concat(asianCountries);
console.log(verbindenCountries)




//Aufgabe 2
const copy = [...euroCountries];
console.log(copy)


//Aufgabe 3
const nummer = [10,2,3,40,5,6];

function findenmaxnummer (){
    return Math.max(...nummer)
}
console.log(findenmaxnummer(nummer))


//Aufgabe 4

function findenminnummer (){
   console.log(Math.min(...nummer))
}
findenminnummer(nummer)

//Aufgabe 5
const person = {name: "John"}
const job = {role: "Teacher"}


const employee =  {...person, ...job}
console.log(employee);

employee.name = "Hüseyin";
employee.role = "Webentwickler"

console.log(employee);
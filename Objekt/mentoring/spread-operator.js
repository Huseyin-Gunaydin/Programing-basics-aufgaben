let person = {
  firstName: "Ralf",
  lastName: "Siewert",
};

let address = {
  firstName: "Paul",
  city: "Bonn",
  street: "Teststr. 1",
};

let mergedPerson = {
  firstName: "Sonja",
  ...address,
  ...person,
};

console.log(mergedPerson);

let numbers = [1, 2, 3, 4];
let mergedNumbers = [...numbers, 5, 6];
console.log(mergedNumbers);

console.log("Ralf", "Siewert", "sdfjhkgsdfkgu");
let data = ["Ralf", "Siewert", "sdfjhkgsdfkgu"];
console.log(data);
console.log(...data);

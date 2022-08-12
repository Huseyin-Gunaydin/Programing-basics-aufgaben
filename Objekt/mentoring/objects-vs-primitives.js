let person = {
    firstName: "Ralf",
    lastName: "Siewert",
    address: {
      city: "Bonn",
      street: "Teststr. 1",
    },
    hobbies: ["Piano"],
  };


  
  //let person2 = person;
 let person2 = { ...person };
  
  // lastName changes ONLY in person2 because it's a primitive data type (string)
  person2.lastName = "Müller";
  
  // address.city changes in BOTH person AND person2, because address is an object and not a primitive data type
  person2.address.city = "Berlin";
  // The same is true for arrays which are also not primitive data types
  person2.hobbies.push("Chess");
  
  console.log("person:", person);
  console.log("person2:", person2);


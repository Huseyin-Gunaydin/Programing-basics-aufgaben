
let ralf = {
    firstName: "Ralf",
    lastName: "Siewert",
    hobbies: ["Piano", "Chess"],
    age: 54,
    password: "very-secret",
  };
  
  let sonja = {
    name: "Sonja Siewert",
    address: { city: "Bonn" },
    password: "pssst!",
  };
  
  function personWithoutSecrets(person) {
    const { password, ...rest } = person;
    console.log(rest);
  }
  
  personWithoutSecrets(ralf);
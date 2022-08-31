  const person1 = {
  id: 1,
  name: "Dominik",
  greet() {
    console.log(`Hallo,ich bin ${this.name}!`);
  },
};

const person2 = {
  id: 2,
  name: "Edwin",
  greet() {
    console.log(`Hallo,ich bin ${this.name}!`);
  },
};
person1.greet();
person2.greet();

const sayHallo1 = person1.greet;
sayHallo1.bind(person1)();

const sayHallo2 = person2.greet;
sayHallo1.bind(person2)();



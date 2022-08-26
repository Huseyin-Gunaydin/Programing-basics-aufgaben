function CounterClosure() {
  let counter = 0;
  return () => {
    return ++counter;
  };
}

// class equivalent
class CounterClass {
  #counter = 0;
  constructor() {}
  count() {
    this.#counter++;
    return this.#counter;
  }
  reset() {
    this.#counter = 0;
  }
}

const count = CounterClosure();
console.log(count());
console.log(count());
console.log(count());
console.log(count());

const count2 = new CounterClass();
console.log(count2.count());
console.log(count2.count());
console.log(count2.count());
console.log(count2.count());

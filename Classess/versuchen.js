


class person {
  constructor(name, nachname, geburtsjahr) {

    this.name = name;
    this.nachname = nachname;
    this.geburtsjahr = geburtsjahr;
  }
  wiealt() {
    let datum = new Date().getFullYear();
    return datum - this.geburtsjahr;
  }
}



class student extends person {
  constructor(name, nachname, geburtsjahr, beruf) {
   super(name, nachname, geburtsjahr);
    this.beruf = beruf;
  }
}





const huseyinGunaydin = new person("Hüseyin", "Günaydin", 1985);
let sahis = new student("Hüseyin", "Günaydin", 1985, "Webentwickler");

console.log(huseyinGunaydin);
console.log(huseyinGunaydin.wiealt())
console.log(sahis);
console.log(sahis.wiealt())



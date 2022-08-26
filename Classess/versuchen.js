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

class ogrenci extends person {
  constructor(name, nachname, geburtsjahr, beruf) {
   super(name, nachname, geburtsjahr);
    this.beruf = beruf;
  }
}

const huseyinGunaydin = new person("Hüseyin", "Günaydin", 1985);
let sahis = new ogrenci("Hüseyin", "Günaydin", 1985, "Webentwickler");

console.log(huseyinGunaydin);
console.log(huseyinGunaydin.wiealt())

console.log(sahis);
console.log(sahis.wiealt())


function findUppercase(str) {
  if(str.length === 0) return "Es gibt keine große Buchstaben."

  if(str.charAt(0) === str.charAt(0).toUpperCase()) {
      return str.charAt(0)
  } else {
      return findUppercase(str.substring(1));
  }
  
}

console.log(findUppercase("asHZdkjfalajdjfald"));
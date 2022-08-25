class person { 
    constructor(name, nachname, geburtsjahr){
        this.name=name;
        this.nachname=nachname;
        this.geburtsjahr=geburtsjahr;
    }
    wiealt(){
        let datum = new Date().getFullYear();
        return datum-this.geburtsjahr;
    }
}



class Huso extends person {
    constructor(name, nachname, geburtsjahr, )
        super


}

const huseyinGunaydin = new person ("Hüseyin", "Günaydin", 1985, beruf);

console.log(huseyinGunaydin);
console.log(huseyinGunaydin.wiealt())

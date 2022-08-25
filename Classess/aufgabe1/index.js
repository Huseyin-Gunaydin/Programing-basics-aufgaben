class Yacht {
    constructor (farbe, gewichtInKg, ps, name, schlafzimmer, badezimmer, hatEinBeiboot){
        this.farbe = farbe;
        this.gewichtInKg= gewichtInKg;
        this.ps = ps;
        this.name=name;
        this.schlafzimmer=schlafzimmer;
        this.badezimmer=badezimmer;
        this.hatEinBeiboot=hatEinBeiboot;
       
    }
    start(){
        console.log(`Die Yacht ${this.name} ist gestartet`);
    }
    anlagen(){
        console.log(`Die Yacht ${this.name} legt an`)
    }
    ablagen(){
        console.log(`Die Yacht ${this.name} legt ab`)
    }
}

const myYacht = new Yacht ("blau", 12500, 100, "Pegasus", 2, 1, true);

console.log(myYacht);

myYacht.start();
myYacht.ablagen();
myYacht.ablagen();
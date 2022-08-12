// Aufgabe 1:
// Erstelle das folgende Objekt:
// const student = {
// firstName: "John",
// lastName: "Smith",
// class: 12 };
// Erstelle eine Methode, die das Folgende ausgibt:
// "John smith is a student in class 12"


const student = {
    firstName: "John",
    lastName: "Smith",
    class: 12,
    info : function(){
    
        return `${this.firstName} ${this.lastName} is a student in class ${this.class}`;
        
    },
    };
    
    student.info()

//Aufgabe 2
// Erstelle ein person object. Füge den Vor- und Nachnamen, das Alter, den Beruf, die Stadt usw. der Person hinzu. Erstelle eine Methode, um Daten aus dem Objekt zu drucken, z.B. “John Smith is a 41 year old engineer living in France”.
// Bonus
// Schreibe eine Methode, um die Länge des person objects zu ermitteln.




const Hüseyin = {
    vorname : "Hüseyin",
    nachname : "Günaydin",
    alter : 37,
    beruf : "Web Entwickler",
    stadt : "Berlin",
    printInfo :function (){
        console.log(`${this.vorname} ${this.nachname} ist ein ${this.alter}-jähriger ${this.beruf}, der in ${this.stadt} lebt“`);
    },
    getObjectLenght: function (){
        return Object.keys(this).length;
    }
}
Hüseyin.printInfo()
console.log(Hüseyin.getObjectLenght());




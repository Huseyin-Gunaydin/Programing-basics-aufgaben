class Product{
    constructor(name, price){
        this.name=name;
        this.price=price;
    }

    toText(){
        console.log(`${this.name}, ${this.price}€. Enthält ${this.price * 0.19}€ MwSt.`)
    }
    containedVAT(){
        console.log(`${this.price * 0.19}€ MwSt.`)

    }
}

const trainingsanzug = new Product("Adidas Trainingsanzug", 150);
const schuhe = new Product("Puma Laufschuhe", 80);
const socken = new Product("Sockenset", 5);

console.log(trainingsanzug)
console.log(schuhe)
console.log(socken)

trainingsanzug.toText();
trainingsanzug.containedVAT();




class Cart {
    constructor(){
        this.products=[];

    }

    addProduct(shoppedProduct){

    }
}


const kart = new Cart();

kart.friends.push=["Vural", "Rahman"]

console.log(kart.friends)
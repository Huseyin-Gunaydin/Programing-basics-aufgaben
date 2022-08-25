class Product{
    constructor(name, price){
        this.name=name;
        this.price=price;
    }

    toText(){
       return`${this.name}, ${this.price}€. Enthält ${this.price * 0.19}€ MwSt.`
    }
    containedVAT(){
        return `${this.price * 0.19}€ MwSt.`

    }
}


class Cart {
    constructor(){
        this.products=[];
    }

    addProduct(shoppedProduct){
        if(!(shoppedProduct instanceof Product)){
            return `Dieses Produkt ist in unserem Shop nicht verfügbar!`
        }
        this.products.push(shoppedProduct);
        return `Ihr Warenkorb enthält jetzt ${this.products.length} Produkt(e)`;
    }
    getProductInfoCart() {
        this.products.forEach((product) => {
            console.log(product.toText());
        });
    }
    getTotalItemsPrice() {
        const totalPrice = this.products.reduce((prev, curr) => {
            return prev + curr.price;
        }, 0);
        return `Der Gesamtbetrag für ${this.products.length} Artikel in Ihrem Warenkorb beträgt ${totalPrice} €.`;
}
}


const trainingsanzug = new Product("Adidas Trainingsanzug", 150);
const schuhe = new Product("Puma Laufschuhe", 80);
const socken = new Product("Sockenset", 5);


const cart = new Cart();
console.log(cart.addProduct(trainingsanzug));
console.log(cart.addProduct(schuhe));
console.log(cart.addProduct(socken));
cart.getProductInfoCart();
console.log(cart.getTotalItemsPrice());


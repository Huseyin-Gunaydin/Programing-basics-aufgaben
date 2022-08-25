class bankkonto {
    constructor(kontostand, iban, bankname , kontoinhaber){
        this.kontostand=kontostand;
        this.iban=iban;
        this.bankname=bankname;
        this.kontoinhaber=kontoinhaber;
    }
    abheben(betrag){
        if(betrag > this.kontostand){
        console.log(`${betrag}€ konnte nicht abgehoben werden.`);
        return
    }
    this.kontostand = this.kontostand - betrag;
        console.log(`${betrag}€ wurde erfolgreich abgehoben. Der neue Kontostand ist ${this.kontostand}€`);

}
    einzahlen(betrag){
        this.kontostand=this.kontostand+betrag;
        console.log(`${betrag}€ wurde erfolgreich eingezahlt. Der neue Kontostand ist ${this.kontostand}€`)
    }
    zeigInfo(){
        console.log(`Dies ist eine Konto der ${this.bankname} Bank. Die IBAN dieses Kontos lautet ${this.iban}.`);
    }
}
const huseyinBankKonto = new bankkonto(5000, "DE50 1000 0000 0000 0000", "Berliner Sparkasse", "Hüseyin Günaydin");
console.log(huseyinBankKonto);


huseyinBankKonto.abheben(6000);
huseyinBankKonto.einzahlen(1000);
huseyinBankKonto.einzahlen(10000);
huseyinBankKonto.zeigInfo();


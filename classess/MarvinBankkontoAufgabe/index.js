const datum = new Date();
const day = datum.getDate();
const monat = datum.getMonth() + 1;
const jahr = datum.getFullYear();
const uhr = datum.getHours();
const minute = datum.getMinutes();

class bankkonto {
  constructor(kontostand, iban, bankname, kontoinhaber) {
    this.kontostand = kontostand;
    this.iban = iban;
    this.bankname = bankname;
    this.kontoinhaber = kontoinhaber;
  }

  abheben(betrag) {
    if (betrag > this.kontostand) {
      console.log(`${betrag}€ konnte nicht abgehoben werden.`);
      return;
    }
    this.kontostand = this.kontostand - betrag;
    console.log(
      `${day}.${monat}.${jahr} ${uhr}:${minute}Uhr - ${betrag}€ wurde erfolgreich abgehoben. Der neue Kontostand ist ${this.kontostand}€`
    );
  }
  einzahlen(betrag) {
    this.kontostand = this.kontostand + betrag;
    console.log(
      `${datum.toLocaleString()}Uhr - ${betrag}€ wurde erfolgreich eingezahlt. Der neue Kontostand ist ${
        this.kontostand
      }€`
    );
  }
  zeigInfo() {
    console.log(
      `Dies ist eine Konto der ${this.bankname} Bank. Die IBAN dieses Kontos lautet ${this.iban}.`
    );
  }
}
const huseyinBankKonto = new bankkonto(
  5000,
  "DE50 1000 0000 0000 0000",
  "Berliner Sparkasse",
  "Hüseyin Günaydin"
);
console.log(huseyinBankKonto);

huseyinBankKonto.abheben(200);
huseyinBankKonto.einzahlen(1000);
huseyinBankKonto.einzahlen(100);
huseyinBankKonto.zeigInfo();

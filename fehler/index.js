

// aufgabe
// Du bist Senior Developer in einer kleinen Firma. Deine einzige Kollegin heißt Fantasia.
// Kurz vor ihrem Urlaub hat sie dir folgenden Code hinterlassen der jetzt dringend veröffentlicht werden muss.
// /**
// * Author: Fantasia
// * Projekt: Bankanbindung Sparkasse
// * Subprojekt: Senden einer Überweisung
// * Company: tranzfer
// */
// const API_URL = "api.sparkasse.de/v3/accounts";
// const API_key = "lwqdjOI987HHUIaihjaskdh";
// const TRANZFER_CUSTOMER_ID = "tranzfer-009';
// const bankname = "Sparkasse";
// console.log"Initialisiere Verbindung...");
// consolelog("Verbindung mit "bankname + " hergestellt");
// let 1kunde = "Jan Müller"
// let 2kunde = "Martina Stein";
// let iban1 = "1234 0000 9908 9999";
// let iban1 = "1222 0000 9908 9999";
// letbetrag = 23..3;
// console.log("Starte Überweisung");
// console.log(`Von "${kunde1}" IBAN: "${iban1}");
// console.log(`Nach "${kunde2}" IBAN: "${iban2}"`);
// console.log(`Sende Betrag ${betrag}€`);
// console.log("Überweisung erfolgreich");
// / Transaktionsdauer erfassen
// bankname = "Sparkasse Berlin";
// const transaktionsDauer;
// transaktionsDauer = 100;
// console.log("Beende Verbindung...");
// console.log('Verbindung mit ' + bankname + " beendet");
// console.log("Dauer der Transaktion " + transaktionsDauer + "s");








/**Anführungszeichen ist Falsch**/
const API_URL = "api.sparkasse.de/v3/accounts";
/**Muss großgeschreiben werden**/
const API_KEY = "lwqdjOI987HHUIaihjaskdh";
/**Anführungszeichen ist Falsch**/
const TRANZFER_CUSTOMER_ID = "tranzfer-009";
// "Name" muss mit einem Großbuchstaben beginnen**//
var bankName = "Sparkasse";
/**man muss Klammer auf sein**/
console.log("Initialisiere Verbindung...");

//**console.log geschrieben werden soll.  + muss vor "bankname" geschrieben werden. N von "bankName" sollte groß geschrieben werden**//
console.log("Verbindung mit" + bankName + "hergestellt");

//**muss mit 1 Buchstabe geschrieben werden,   K von "Kunde" sollte Groß sein,  man soll ein Semikolon am Ende setzen  und Anführungszeichen ist Falsch **//
let kunde1 = "Jan Müller";
//**muss mit 1 Buchstabe geschrieben werden,   K von "Kunde" sollte Groß sein,  man soll ein Semikolon am Ende setzen  und Anführungszeichen ist Falsch **//
let kunde2 = "Martina Stein";
//**Anführungszeichen sollten entfernt werden und Zwischen den Zahlen dürfen keine Leerzeichen stehen.**/
let iban1 = 1234000099089999;
//**Da dies zuvor der Variablenname war, sollte ein anderer Variablenname vergeben werden.**//
let iban2 = 1222000099089999;

//**Zwischen „let“ und „betrag“ muss ein Leerzeichen stehen,   man soll einen einzelnen Punkt machen, keinen doppelten Punkt.**//
let betrag = 23.3;

//**Keine Fehler**//
console.log("Starte Überweisung");

//**Wir sollten wie im ersten Bass Anführungszeichen am Ende setzen.**//
console.log(`Von “${kunde1}” IBAN: “${iban1}“`);

//**Keine Fehler**//
console.log(`Nach “${kunde2}” IBAN: “${iban2}“`);

//**Wir sollten es in Anführungszeichen vor das Dollarzeichen und vor das Eurozeichen setzen.**//
console.log(`Sende Betrag "${betrag}" €`);

//**Keine Fehler**//
console.log("Überweisung erfolgreich");

//um etwas zu komentieren, sollten 2 slach am Anfang gestellt werden
// Transaktionsdauer erfassen

//**Wir können es nicht ändern, weil bankName oben const ist.  statt const sollten wir "var" oder "let" machen**//
bankName = "Sparkasse Berlin";
console.log(bankName);

//****//
const transaktionsDauer = 100;
console.log("Beende Verbindung...");

//**N von "bankName" sollte groß geschrieben werden**//
console.log("Verbindung mit " + bankName + " beendet");
console.log("Dauer der Transaktion " + transaktionsDauer + "s");

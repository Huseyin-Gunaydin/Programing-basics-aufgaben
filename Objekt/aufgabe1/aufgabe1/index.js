
// Um Newsletter zu versenden, benötigen wir einige Daten unserer User. Am wichtigsten ist natürlich die Email-Adresse, aber auch Vor- und Nachnamen für die Anrede sollen gespeichert werden. Noch dazu kann jeder User eine Liste mit Interessensgebieten angeben (Musik, IT, Sport...), um spezielle Newsletter zu erhalten.
// 1. Erstelle eine Übersicht mit unseren Usern. Wende hier dein Wissen über Objekte an, um eine möglichst effiziente Datenstruktur zu erreichen.
// 2. Beim Aufruf des Skripts soll eine Ausgabe erzeugt werden, die in etwa so aussieht:
// "Peter Müller ist mit der Adresse petermueller@web.de registriert und erhält Newsletter zu den Themen Sport und Kochen.
// Sarah Schmidt ist mit der Adresse sarah@schmidt.de registriert und erhält Newsletter zu den Themen Musik, IT und Reisen.
// Zusatzaufgaben:
// 3. Berücksichtige den Fall, dass ein User kein Interessensgebiet angegeben hat und formuliere die Ausgabe hierfür passend um.
// 4. Nimm noch ein Registrierungsdatum mit auf und lass es ebenfalls ausgeben ("... ist mit der Adresse x seit y registriert...")



// Raja Underwood,pellentesque.tincidunt.tempus@outlook.org, Musik | IT | Sport,
// Owen Bennett,aliquet@protonmail.net, Programmieren | Nachrichten | Aktien,
// Amery Conway,erat.neque.non@google.ca, Reisen | Festivals,
// Lillian Clay,adipiscing.elit@aol.couk, Autos | IT,
// Nicholas Berg,nullam.feugiat@yahoo.net, Essen


const KundeA = {
    vorname : "Raja",
    nachname : "Underwood",
    email : "pellentesque.tincidunt.tempus@outlook.org",
    registiereungsdatum :2010,
    interessensGebieten : ["Musik", "IT", "Sport"]
};


const KundeB = {
    vorname : "Owen",
    nachname : "Bennett",
    email : "aliquet@protonmail.net",
    registiereungsdatum :2011,
    interessensGebieten : ["Programmieren", "Nachrichten", "Aktien"]
};


const KundeC = {
    vorname : "Amery",
    nachname : "Conway",
    email : "erat.neque.non@google.ca",
    registiereungsdatum :2012,
    interessensGebieten : ["Reisen", "Festivals"]
};


const KundeD = {
    vorname : "Lillian",
    nachname : "Clay",
    email : "adipiscing.elit@aol.couk",
    registiereungsdatum :2013,
    interessensGebieten : ["Autos", "IT"]
};


const KundeE = {
    vorname : "Nicholas",
    nachname : "Berg",
    email : "nullam.feugiat@yahoo.net",
    registiereungsdatum :2014,
    interessensGebieten : ["Essen"]
};

const KundeF = {
    vorname : "Hüseyin",
    nachname : "Günaydin",
    email : "gunaydinhuseyin1453@gmail.com",
    registiereungsdatum :2015,
    interessensGebieten : null,
};

const kunden = [KundeA, KundeB, KundeC, KundeD, KundeE, KundeF]
for (let i in kunden){
    if(kunden[i].interessensGebieten === null){
        console.log(`${kunden[i].vorname} ${kunden[i].nachname} ist mit der Adresse ${kunden[i].email} seit ${kunden[i].registiereungsdatum} registiert und hat keine Interessensgebiete.`);
        console.log("----------------------------------------------------------------------")
    } else {
        console.log(`${kunden[i].vorname} ${kunden[i].nachname}  ist mit der Adresse ${kunden[i].email} seit ${kunden[i].registiereungsdatum}  registiert und erhält Newsletter zu den Themen ${kunden[i].interessensGebieten}`);
        console.log("----------------------------------------------------------------------")
    }
}

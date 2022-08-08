
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

const arr = [KundeA, KundeB, KundeC, KundeD, KundeE, KundeF]
for (let i in arr){
    if(arr[i].interessensGebieten === null){
        console.log(`${arr[i].vorname} ${arr[i].nachname} ist mit der Adresse ${arr[i].email} seit ${arr[i].registiereungsdatum} registiert und hat keine Interessensgebiete.`);
        console.log("----------------------------------------------------------------------")
    } else {
        console.log(`${arr[i].vorname} ${arr[i].nachname}  ist mit der Adresse ${arr[i].email} seit ${arr[i].registiereungsdatum}  registiert und erhält Newsletter zu den Themen ${arr[i].interessensGebieten}`);
        console.log("----------------------------------------------------------------------")
    }
}
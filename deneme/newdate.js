let simdi = new Date();


//Get Methods

sonuc = simdi;
sonuc = simdi.getDate();
sonuc = simdi.getDay();
sonuc = simdi.getFullYear();
sonuc = simdi.getHours();
sonuc = simdi.getTime();


//Set Methods

simdi.setFullYear(2025);
simdi.setMonth(5);
simdi.setDate(4);


sonuc = simdi;

let dogumTarihi = new Date(1985, 1, 25);

sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();


let milisecond = simdi-dogumTarihi;
let second = milisecond / 1000;
let minute = second / 60;
let hour = minute /60;
let day = hour /24;
let month = day / 30;
let year = month /12;


sonuc=year;
console.log(sonuc);
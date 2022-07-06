

//1- "Elma, Armut, Muz, Cilek" elemanlarina sahip bir dizi olusturunuz.
let meyveler = ["Elma", "Armut", "Muz", "Cilek"];

//2-Dizi kac elemanlidir?
console.log(meyveler.length);

//3-Dizinin ilk ve son elemani nedir?
console.log(meyveler[0]);
console.log(meyveler[meyveler.length-1]);

//4-elma dizinin bir elemanimidir?
console.log(meyveler.includes("Elma"));
console.log(meyveler.indexOf("Elma"));

//5- Kiraz meyvesini listenin sonune ekleyiniz.
meyveler[meyveler.length] = "Kiraz";  //böylede sonuna eleman ekleyebiliriz.
console.log(meyveler.push("Kiraz"));

//6-dizinin son iki elemanini siliniz.
//  meyveler.pop();
//  meyveler.pop();
 meyveler.splice(meyveler.length-2,2); //böylede yapabiliriz-


 console.log(meyveler);
//7-Asagidaki bilgileri dizi icerinde saklayiniz ve her ögrecinin yasini ve not ortakalamasini hesaplayiniz.

// ogrenci 1: Yigit Bilgi 2010 (70,60,80)
// ogrenci 2: Ada Bilgi 2012 (80,80,90)
// ogrenci 3: Ahmet Turan 2009 (60,60,70)


let ogr1=["Yigit", "Bilgi", 2010, [70, 60, 80]]; 
let ogr2=["Ada", "Bilgi", 2012, [80, 80, 90]]; 
let ogr3=["Ahmet", "Turan", 2009, [60, 60, 70]]; 

let ogrenciler=[ogr1, ogr2, ogr3];
let yigit_yas = new Date().getFullYear() - ogrenciler[0][2];
let Ada_yas = new Date().getFullYear() - ogrenciler[1][2];
let Ahmet_yas = new Date().getFullYear() - ogrenciler[2][2];



let yigit_not = (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / 3;
let Ada_not = (ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) / 3;
let Ahmet_not = (ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2]) / 3;



console.log(yigit_yas, Ada_yas, Ahmet_yas);

console.log(yigit_not.toFixed(1), Ada_not.toFixed(1), Ahmet_not.toFixed(1));





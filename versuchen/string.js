// var a = 33;
// var b = 33;
// var c = 33;

// if(a>10 && a<50){
//     console.log("sayi 10-50 arasindadir.")
// }
// else{
//     console.log("sayi 10-50 arasinda degildir.")
// }

// if(a%2==1 && a>0 ){
//     console.log("girilen sayi pozitik tek sayidir.")
// }
// if(a%2==0 && a>0 ){
//     console.log("girilen sayi pozitik cift sayidir.")
// }

// if ( a>b && a>c) {
//     console.log("a en büyüktür.");
// } else if ( b>a && b>c) {
//     console.log("b en büyüktür.");
// } else if ( c>a && c>b) {
//     console.log("c en büyüktür.");
// } else{
//     console.log("sayilar esit")
// }

// var vize1=10;
// var vize2=10;
// var final=70;

// // if( (vize1+vize2)/2 *0.4 + final*0.6 >=50 ) {
// console.log("ortalama 50 ya da 50 üstünde gectiniz");
//  }
//  else{
//     console.log("kaldiniz");
//  }

//  if( (vize1+vize2)/2 *0.4 + final*0.6 >=50 && final>=50) {
//     console.log("gectiniz");
//      }
//      else{
//         console.log("kaldiniz");
//      }

// if( (vize1+vize2)/2 *0.4 + final*0.6 >=50 || final>=70) {
//     console.log("gectiniz");
//      }
//      else{
//         console.log("kaldiniz");
//      }

// let url="https://www.huseyingunaydin.com/";
// let kursAdi="Komple Uygulamali Web Gelistirme Egitimi";
// let sonuc;

// // sonuc = url.length;
// // sonuc = kursAdi.split(" ").length;
// // sonuc=url.startsWith("https")
// // sonuc=kursAdi.includes("Egitimi");

// kursAdi = kursAdi.toLowerCase();
// kursAdi = kursAdi.replace(/ /g , "-");

// sonuc = `${url}${kursAdi}`;
// console.log(sonuc)

// const a = "abc";
// const b = 1;
// if (a == true){
//     console.log("hallo 1");
// }else{
//     console.log("tschüss 1!");
// }

// if (!a){
//     console.log("hallo ");
// }else{
//     console.log("tschüss !");
// }

// if (!!a==true){
//     console.log("hallo 2");
// }else{
//     console.log("tschüss 2!");
// }

// const text = "Hüseyin Günaydin";

// const color = "rgb(255, 127, 0)";
// console.log(
//   "rot: ",
//   color.substring(4, 7),
//   "grün: ",
//   color.substring(8, 10),
//   "grün: ",
//   color.substring(11, 12)
// );

// console.log(
//   `rot: ${color.substring(4, 7)}, grün: ${color.substring(
//     8,
//     10
//   )}  blau: ${color.substring(11, 12)}`
// );
// console.log(text);

// const rot = color.substring(4, 7);
// const gruen = color.substring(8, 10);
// const blau = color.substring(11, 12);

// console.log(
//   `rot : ${color.substring(4, 7)}, grün : ${color.substring(
//     8,
//     10
//   )}, blau : ${color.substring(11, 12)}`
// );
// console.log(`rot: ${rot}, grün: ${gruen}, blau: ${blau}`);

// const text = "Hüseyin Günaydin";
// const word = "Hüseyin";
// const isInText= text.includes(word);

// console.log(isInText);

// console.log(text.includes(word));

// if (isInText){
//     console.log("Willkommen!");
// }else {
//     console.log("Ich kenne dich nicht");
// }

// const color="rgb(20, 100, 0)";
// //erhöhe den Rot-Kanal um 100 und gib nur den Rot-Kanal aus

// //1. rot extrahieren
// const rot = color.substring(4,6);
// const rotNummer = parseInt(rot);

// //2. Rot extrahieren
// const hellrot = rotNummer +100;

// //3. rot extrahieren
// console.log(hellrot);

// console.log("Hallo"+" "+"Welt" + "!");

// const wierdNummer ="1234567";
// console.log(wierdNummer);
// console.log(+wierdNummer);

// const testblau = 205;
// console.log(testblau.toString(2));

// // const testgruen = 0xDF;
// // console.log(testgruen);












// Für die folgenden Aufgaben kannst du dir Funktionen wie toString(), toFixed(), substring() und weitere zur Hilfe nehmen.
// Wichtig: Die Ausgabe soll stets ein String sein. Der String soll so geformt sein, dass er bspw. in CSS als Farbe benutzt werden kann (RGB: rgb(000, 000, 000), HEX: #000000,...).

// Verändere die Farbtöne wie angegeben.

// 1. rgb(247, 101, 101) => Rot um 80 verringern

// const color = "rgb(247, 101, 101)";
// const rot = color.slice(4,7);
// const gruen = color.slice(9,12);
// const blau = color.slice(14,17);

// const rotNummer = parseInt(rot)-80;
// console.log(rotNummer);
// console.log(`RGB(${rotNummer},${gruen},${blau})`);



// 2. rgb(21, 35, 112) => Blau um 100 und Grün um 75 erhöhen
// const color = "rgb(21, 35, 112)";
// const rot = color.substring(4,6);
// const gruen= color.substring(8,11)
// const blau = color.substring(12,16);
// const rotNummer = parseInt(rot);
// const blauNummer = parseInt(blau)+100;
// const gruenNummer = parseInt(gruen)+75;
// console.log(rotNummer);
// console.log(gruenNummer );
// console.log(blauNummer );
// console.log(`RGB(${rotNummer},${gruenNummer},${blauNummer})`);

// 3. rgb(167, 249, 85) => Rot und Blau auf ein Viertel reduzieren

// const color = "rgb(167, 249, 85)";
// const rot = color.substring(4,7);
// const gruen = color.substring(9,12)
// const blau= color.substring(14,16)
// const rotNummer = rot*0.25;
// const gruenNummer=parseInt(gruen);
// const blauNummer = blau*0.25;

// const totalRot = parseInt(rotNummer);
// const totalBlau = parseInt(blauNummer);

// console.log(`RGB(${totalRot},${gruenNummer},${totalBlau})`);

// Gib nun die folgenden Farben in den gewünschten Formaten aus.

// 1. rgb(127, 255, 100) => HEX


// const rot =127;
// const gruen =255;
// const blau =100;
// console.log(`#${rot.toString(16)}${gruen.toString(16)}${blau.toString(16)}`);


// 2. #E23F76 => RGB
// const rot= 0xE2;
// const gruen =0x3F;
// const blau =0x76;
// console.log(`RGB (${rot}, ${gruen}, ${blau})`);

// 3. rgb(229, 13, 218) => HEX

// const rot= 229;
// const gruen =13;
// const blau =218;
// console.log(`#${rot.toString(16)}${gruen.toString(16).padStart(2, "0")}${blau.toString(16)}`);




// 4. #02D633 => RGB



// const rot= 0x02;
// const gruen = 0xD6;
// const blau = 0x33;
// console.log(`RGB(${rot}, ${gruen}, ${blau})`);














// Und jetzt machen wir beides gleichzeitig: Farbton verändern und in andere Formate ausgeben.

// 1. rgb(71, 171, 247) => Rot um 100 erhöhen und in HEX ausgeben

// const rot =71+100;
// const gruen=171;
// const blau=247;
// console.log(`#${rot.toString(16)}${gruen.toString(16)}${blau.toString(16)}`);

// 2. rgb(59, 31, 242) => Blau um 200 und Grün um 31 verringern und in HEX ausgeben

// const rot =59;
// const gruen=31-31;
// const blau=242-200;
// console.log(`#${rot.toString(16)}${gruen.toString(16)}${blau.toString(16)}`);

// 3. #6BFF95 => Rot auf 255 und Blau auf 0 setzen und in RGB ausgeben
// const rot= 255;
// const gruen =0xff;
// const blau =0;
// console.log(`RGB(${rot}, ${gruen.toString()}, ${blau})`);

// 4. #234042 => Alle drei Kanäle um 50% erhöhen und in RGB ausgeben

// const rot= 0x23 *1.5;
// const gruen =0x40*1.5;
// const blau =0x42*1.5;
// const rotH=parseInt(rot);

// console.log(`RGB(${rotH}, ${gruen}, ${blau})`);

// 5. rgb(165, 21, 50) => Rot und Blau auf ein Viertel reduzieren und in HEX ausgeben

// const rot = 165 * 0.75;
// const gruen = 21;
// const blau = 50 * 0.75;

// const rotH = parseInt(rot);
// const gruenH = parseInt(gruen);
// const blauH = parseInt(blau);



// console.log(`#${rotH.toString(16)}${gruenH.toString(16)}${blauH.toString(16)}`);

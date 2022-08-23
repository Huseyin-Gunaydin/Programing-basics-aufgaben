// // const isim= "Mehmet";
// // const yas= 35;

// // const kullanici_objesi={isim, yas};

// // console.log(kullanici_objesi);

// // function Sayac({baslangicDegeri, adim}){
// //     const [sayac, setSayac] = useCounter({baslangicDegeri, adim})

// //     return <button onClick={setSayac}>{sayac}</button>
// // }

// // function topla(sayi1, sayi2) {
// //   return sayi1 + sayi2;
// // }
// // console.log(topla(3, 2));

// // const toplam =(sayi1, sayi2)=> sayi1+sayi2

// // console.log(toplam(3,5))

// let kullanici = {
//   isim: "Ahmet",
//   yas: 45,
//   adres: "Berlin",
//   memleket: "Istanbul",
//   meslek: "Webentwickler",
// };
// const { memleket, ...rest } = kullanici;
// console.log(memleket);
// console.log(rest);

// function kulllaniciGoster({ isim, yas }) {
//   return `${isim} isimli kullanici ${yas} yasindadir.`;
// }
// console.log(kulllaniciGoster(kullanici));

// const sayilar = [1, 2, 3, 4, 5];

// const [bir, iki, üc, dort, bes] = sayilar;
// console.log(bir, iki, üc, dort, bes);
// const [birincieleman, ...restt] = sayilar;
// console.log(birincieleman);
// console.log(birincieleman, restt);

// kullanici = { ...kullanici, memleket: "kirsehir" };
// console.log(kullanici);

// const urunler = [
//   { id: 1, name: "kalem", fiyat: 5 },
//   { id: 2, name: "Defter", fiyat: 10 },
//   { id: 3, name: "Silgi", fiyat: 2 },
//   { id: 4, name: "Kalemtras", fiyat: 7 },
// ];

// // dizide,  yazdigimiz kosulu saglayen dizi icindeki ilk buldugu elemani gösterir. ve yazdirir. sonrasina bakmaz.

// console.log(
//   "Find: ",
//   urunler.find((urun) => urun.fiyat > 5)
// );

// //dizide yazdigimiz kosulu saglayan eleman bulunuyorsa true döndürüyor ya da false döndürüyor.
// console.log(
//   "Some: ",
//   urunler.some((urun) => urun.fiyat <= 1)
// );

// //dizide yazdigimiz kosulu bütün elemanlar sagliyor mu saglamiyor mu diye bakar. Eger sagliyorsa true döndürür. saglamiyorsa false döndürür.

// console.log(
//   "Every: ",
//   urunler.every((urun) => urun.fiyat > 1)
// );

// //filter

// console.log(urunler.filter((urun) => urun.fiyat > 5));

// console.log(
//   urunler
//     .filter((urun) => urun.fiyat > 5)
//     .map((urun) => `${urun.name} fiyati 5 ten büyüktür.`)
// );

// // reduce verilen dizinin elemanlari üzerinden colback functioun u uyguluyor. bu function u dödnürdügü sonuc her döndürmede hatirlaniyor. ve bir sonraki döndürülen sonuc bir öncekine ekleniyor. 

// const toplamUrunFiyati = urunler.reduce((toplam, urun) => (toplam += urun.fiyat),
// 0
// );

// console.log(toplamUrunFiyati)

// const toplamString = urunler.reduce((toplam, urun) => (toplam= `${toplam} ${urun.name}`),
// "Ürün Isimleri: "
// );

// console.log(toplamString)


const names=["Sören", "Edgar", "Richard", "Ian", "Justin", "Tom"];

let counter= 0;

// names.forEach(greet);

// function greet(name){
//   console.log(`Hi, ich bin ${name}!`);

// }

console.log("---");

names.forEach(greetA11);

function greetA11(myName){
  console.log(`Hi, ich bin ${myName}!`);
  names.forEach(name => sayHelloTo(name, myName))
  counter ++;

}

function sayHelloTo(name, myName){
  if(name===myName) return;
  console.log(`-Hello ${name}!`);
  counter ++;
}

console.log({length: names.length, counter})
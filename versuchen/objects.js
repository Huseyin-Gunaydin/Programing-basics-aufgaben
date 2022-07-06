// let kullaniciA = {
//     "ad":"Hüseyin",
//     "soyad":"Günaydin",
//     "yas":38,
//     "adres":{
//         "sehir":"Berlin",
//         "ilce":"Pankow"
//     },
//     "hobiler":["siname", "spor"],
// }

// let kullaniciB = {
//     "ad":"Hüseyin",
//     "soyad":"Günaydin",
//     "yas":38,
//     "adres":{
//         "sehir":"Berlin",
//         "ilce":"Pankow"
//     },
//     "hobiler":["siname", "spor"],
// }

// let kullanicilar = [
//     kullaniciA,
//     kullaniciB
// ]

// let sonuc;

// sonuc = kullaniciA.ad;
// sonuc = kullaniciA.soyad;
// sonuc = kullaniciA.yas;
// sonuc = kullaniciA.adres.sehir;
// sonuc = kullaniciA.adres.ilce;
// sonuc = kullaniciA.hobiler[0];
// sonuc = kullaniciA.hobiler[1];

// console.log(sonuc);

let siparis_1 = {
  siparisId: 101,
  siparisTarihi: "30.12.2022",
  odemeSekli: "kredi karti",
  kargoAdresi: "Berlin",
  satinAlinanUrunler: [
    {
      urunId: "5",
      urunBasligi: "Iphone 13 Pro",
      urunUrl: "http://abc.com/iphone-13-pro",
      urunFiyati: 22000,
    },
    {
      urunId: "6",
      urunBasligi: "Iphone 13 Pro Max",
      urunUrl: "http://abc.com/iphone-13-pro",
      urunFiyati: 25000,
    },
  ],
};

let siparis_2 = {
  siparisId: 102,
  siparisTarihi: "30.12.2022",
  odemeSekli: "kredi karti",
  kargoAdresi: "Berlin",
  satinAlinanUrunler: [
    {
      urunId: "6",
      urunBasligi: "Iphone 13 Pro Max",
      urunUrl: "http://abc.com/iphone-13-pro",
      urunFiyati: 25000,
    },
  ],
};

let siparisler = [siparis_1, siparis_2];

let siparis1toplamOdeme =
  (siparisler[0].satinAlinanUrunler[0].urunFiyati +
    siparisler[0].satinAlinanUrunler[1].urunFiyati) *
  1.18;
let siparis2toplamOdeme = siparisler[0].satinAlinanUrunler[0].urunFiyati * 1.18;

let toplam_siparis = siparis1toplamOdeme + siparis2toplamOdeme;
console.log(siparis1toplamOdeme);
console.log(siparis2toplamOdeme);
console.log(toplam_siparis);

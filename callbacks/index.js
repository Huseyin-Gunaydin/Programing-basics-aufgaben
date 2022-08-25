// setTimeout(()=>{
//     console.log("Beginn nach 2 Sekunden")
// }, 2000);

// const meyveler = ["elma", "Armut", "Üzüm", "kivi", "Muz"];

// const meyve=meyveler.filter((meyve)=>{
//     return meyve.length===4
// });
// console.log(meyve);

// const yaz=(isim, soyisim,callback)=>{
//     console.log(`${isim} ${soyisim}`);
//     const veri={
//         adres:"Berlin",
//         tarih: new Date(),
//     }
//     callback(veri)
// }
// yaz("Hüseyin","Günaydin",(veri)=>{console.log(veri)})

function example(callback) {
  callback();
}

function callback() {
  console.log("Hallo aus dem Callback");
}
example(callback);

example(() => {
  console.log("Hallo aus der Arrow funktion");
});

example(function () {
  console.log("hallo aus der anonymen Funktion");
});

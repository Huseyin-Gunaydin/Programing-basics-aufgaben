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

// function example(callback) {
//   callback();
// }

// function callback() {
//   console.log("Hallo aus dem Callback");
// }
// example(callback);

// example(() => {
//   console.log("Hallo aus der Arrow funktion");
// });

// example(function () {
//   console.log("hallo aus der anonymen Funktion");
// });

function frageAPIan(beiErfolg, beiFehler) {
  const erfolgreich = true;
  const daten = [];
  const fehler = {};

  if (erfolgreich) {
    beiErfolg(daten);
  } else {
    beiFehler(fehler);
  }
}

function datenVerarbeiten(daten) {
  console.log(daten);
  daten.map((datensatz) => ({ ...datensatz, neueProperty: 1 }));
}
function fehlerBehandeln(fehler) {
  console.log("Fehler:", fehler);
}

frageAPIan(datenVerarbeiten, fehlerBehandeln);

function frageAPIan2() {
  const erfolgreich = true;
  const daten = [];

  if (erfolgreich) {
    console.log(daten);
    daten.map((datensatz) => ({ ...datensatz, neueProperty: 1 }));
  } else {
    console.log("Fehler");
  }
}

frageAPIan2();

const student = {
  examResult: function () {
    return `${this.name} ${this.grade}`;
  },
};

const student1 = {
  name: "Hüseyin",
  grade: 90,
};

const student2 = {
  name: "Vural",
  grade: 100,
};

console.log(student.examResult.call(student1));
console.log(student.examResult.call(student2));

const books = [
  { name: "1", autor: "A" },
  { name: "2", autor: "B" },
  { name: "3", autor: "C" },
];

const listBooks = () => {
  books.map((book, index) => {
    console.log(book, index);
  });
};

const addNewBook = (newbook, callback) => {
  books.push(newbook);
  callback();
};

addNewBook({ name: "4", autor: "D" }, listBooks);

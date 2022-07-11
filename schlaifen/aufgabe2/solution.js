//Aufgabe 3

const cost = [2.39, 13.99, 4.19, 59.99, 1.99];
const productNames = ["Zahncreme", "Tofu", "Müsli", "Toaster", "Kaugummi"];

const Max = Math.max(...cost);
console.log(`Das teuerste Preis: ${Max}`);
console.log(`Das teuerste Produkt ist: ${productNames[cost.indexOf(Max)]}`);

const Min = Math.min(...cost);
console.log(`Das billigste Preis: ${Min}`);
console.log(`Das billigste Produkt ist: ${productNames[cost.indexOf(Min)]}`);

let totalPreis = 0;
for (let i = 0; i < cost.length; i++) {
  totalPreis += cost[i];
}
console.log(`Alle 5 Produkte zusammen kosten: ${totalPreis.toFixed(2)}`);

/********Bonus***********/

const amounts = [4, 1, 2, 1, 3];
let totalAmount = 0;
let totalPreisAmounts = 0;

for (let i = 0; i < cost.length; i++) {
  totalAmount += amounts[i];
  totalPreisAmounts += cost[i] * amounts[i];
}
console.log("totalAmount:", totalAmount);
console.log("totalPriceByAmount:", totalPreisAmounts);

// let teuerste = cost[0];
// let guenstigste = cost[0];
// let summe = 0

// for(let i =0; i < cost.length; i++){

//     if(cost[i]>teuerste)
//     {
//        teuerste=cost[i];
//     }
//     if (guenstigste > cost[i]) {
//         guenstigste = cost[i];
//     }
//     summe += cost[i];
// }

// console.log(
//     `Das teuerste Produkt ist: ${productNames[cost.indexOf(teuerste)]}`);
//   console.log(
//     `Das günstigste Produkt ist: ${productNames[cost.indexOf(guenstigste)]}
//   `);
//   console.log(`Die Summe aller Produkte ist: ${summe}€`);

// var teuerste=0;
// for(var i=0; i<cost.length; i++){s teuerste Produkt ist: Toaster
//     {
//        teuerste=cost[i];
//     }
// }
// console.log(teuerste);

// let result=0;
// for (let i=0; i<cost.length; i++){
//     result=result+cost[i];
// }
// console.log(result.toFixed(2));

/**
 * Arrays
 *
 * Arrays sind Datentypen in denen man mehrere andere Datentypen speichern kann
 *
 * Vergleichbar ist ein Array mit einem Zug
 * Und das kommt auch nicht von irgendwo her, es sieht nämlich ein bisschen so aus. Mit Fantasie:
 *
 * ["lok", "getreide","autos","benzin"]
 *
 * Wie man sieht erstellt man Arrays mit eckigen Klammern. Und die Elemente darin sind mit Kommas getrennt.
 */

 const zug = ["lok", "getreide", "autos", "benzin"];
 console.log(zug);
 
 /**
  * Wozu brauch man Arrays?
  * Es gibt mehrere Gründe
  *
  * - Man hat viele Daten. Zum Beispiel hunderte Instagram Follower die man effizient übertragen und verarbeiten will
  *
  * Beispiel: Einen Zug kann man einfach von vorne nach hinten abgehen und sieht dann was er transportiert.
  *
  * - Man hat eine unbekannte anzahl an Daten. Der Vorteil vom Array gegenüber einfachen Variablen ist: Man kann einfach Elemente anhängen oder wieder wegnehmen
  *
  * Info: Die größten zwei "Unbekannten-Verursacher" beim Programmieren sind Server-Abfragen und Nutzereingaben
  *
  * Beispiel: Ein Zug kann eine unbekannte anzahl an Waggons haben.
  * Eine Woche fährt der ICE733 mit 8 Waggons und in der nächsten nur mit 6. Es ist und bleibt aber der ICE733
  *
  *
  */
 
 // Viele Daten
 const alleSchuelerGeburtsjahre = [
     "1998",
     "1999",
     "1998",
     "1998",
     "1998",
     "1998",
     "1993",
     "1998",
     "1998",
     "1995",
     "1998",
     "1998",
     "1998",
 ];
 console.log(alleSchuelerGeburtsjahre);
 
 // Unbekannte Anzahl
 const telefonbuch = ["+49123343", "+491232137"];
 console.log(telefonbuch);


 var sayi = [15, 40, 59, 110, 40, 125, 150];

 function nummer (sayi){
    return sayi <= 100;
 }
 console.log(sayi.filter(nummer))



 var array = [10, 20, 30, 40, 5]; 
  
 var found = array.filter(function (element) { 
     return element > 20; 
 }); 

 console.log(found); 



var bul = array.filter(function(sayi){
    return sayi % 2 == 0
})
console.log(bul)



let array3 = [1,2,3,4,5,6,7,8,9,10,12,14,15,16,17,21]
 let result3 = array3.filter((piece)=>{
    return piece >= 10
 })
 console.log(result3);



 let array5 = Array.from({length:4}, function (value, index){
    return index*5
 })
 console.log(array5)




 let total = [ 1,3,5,7,9];
 let result2= total.reduce(( a, b)=>{
    return a+b
 })
 console.log(result2)



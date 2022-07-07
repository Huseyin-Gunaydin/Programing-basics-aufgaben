var isim = "Ahmet"; //global scope
const adres="Istanbul";


//Functionlar kendi scope alanlarini olusturur.
function yazdir(){
    var isim="ayse";
    var yas=30;
    console.log(isim, yas);
}


// if ve for blocklari icerisinde yeni bir scope olusmaz.Degiskenler global scope oluyor. function gibi algilanmiyor. 
if(true){     
    let isim = "zeynep";
    console.log(isim, adres);
}

console.log(isim);
yazdir();


// console.log(yas); //hata verir cünkü globalde yas tanimlanmamis. function icindeki degiskenlere sadece function icinde ulasabiliriz.
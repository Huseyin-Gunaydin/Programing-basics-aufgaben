// 1- kendisine gänderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yapiniz.

function kelimeYazdir(kelime, adet){
    for(let i=0; i < adet; i++){
        console.log(kelime);
    }
}
kelimeYazdir("Merhaba", 10);



//2- Dikdörtgenin alan ve cevresini hesaplayan fonksizonu yazinit.

function alanCevreHesapla (kisa, uzun){
    let alan = kisa * uzun;
    let cevre = (kisa+uzun)*2;
    return `alan: ${alan} cevre: ${cevre}`;

}

let sonuc = alanCevreHesapla(7,10);
console.log(sonuc);


//3- yazi tura uygulamasini fonksiyon kullaanrak yapiniz.

function yaziTuraAt(){
    let random =Math.floor(Math.random()*100+1);
    console.log(random);
    if(random<=50){
        console.log("yazi geldi");
    }else{
        console.log("tura geldi");
    }
}

yaziTuraAt();
yaziTuraAt();
yaziTuraAt();
yaziTuraAt();
yaziTuraAt();
yaziTuraAt();


//4-Kendisine glnderilen bir sayinin tam bölenlerini dizi seklinde döndüren fonksiyonu yaziniz.
// A sayısının pozitif tam bölenlerinin sayısı = (a + 1)(b + 1)(c + 1) dir.
function tamBolenler(sayi){
    let sayilar = [];
    for (i=2; i<sayi; i++){
        if(sayi % i == 0 ){
            sayilar.push(i);

        }
      
    }
    return sayilar;
}
console.log(tamBolenler(10));
console.log(tamBolenler(2000));



//5- degisken sayida parametre alan toplam isminde bir fonksiyon tanimlayiniz.

//Bu sekilde yapabiliyoruz ancak her seferinde düzelmemiz gerekir kac tane sayi gelecegini bilmiyoruz.
// function toplam (a, b){
//     return a + b ;
// }

// console.log(toplam(2,2));


// //Bizim görmedigimiz tanimlanan bir arguments objesi var.
// function toplam (){
//  console.log(arguments);
// }
// console.log(toplam(2,5,7,10));





function toplam (){
    let sonuc=0;
    for(let i=0; i<arguments.length; i++){
        sonuc+=arguments[i];
    }
    return sonuc;
}

console.log(toplam(2,5,7,10,15,1,2,3,4,5,6,7));
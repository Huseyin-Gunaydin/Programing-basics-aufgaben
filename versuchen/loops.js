

// for (let i=0; i<10; i++){
//     console.log(i +".sayi  = " + i);
// }


// let toplam=0;

// for (let i=0; i<=10; i++){
//     toplam +=i;
//     // console.log(toplam);

// }

// console.log(toplam );


// let sayilar = [1, 2, 3, 4, 5, 6];
// for(let i=0; i<sayilar.length; i++){
//     console.log(sayilar[i])
// }


///Index numarasi ile toplama
// let sayilar = [1, 2, 3, 4, 5, 6]; 
// let toplam=0;
// for(let i in sayilar){
//   toplam+= sayilar[i];
// }
// console.log(toplam);



// let sayilar = [1, 2, 3, 4, 5, 6];
// let toplam=0;
//  for(let sayi of sayilar){
//     toplam +=sayi;
//  }
// console.log(toplam);


// let user = {
//     "name":"Hüseyin Günaydin",
//     "username":"huso",
//     "password":"123456",
//     "email":"Huseyingunaydin@gmail.com"
// }


// for (let i in user){
//     // console.log(i);
//     console.log(user[i]);
// }




// let sayilar = [1,5,7,15,3,25,8,2,4];

//1-Sayilar listesindeki her bur ekemanin karesini yazdirirniuz.
// for(let i=0; i<sayilar.length; i++){
//     console.log(sayilar[i]*sayilar[i]);
// }



//2-Sayilar listesindeki hangi sayilar 5 in katidir?
// for(let i=0; i<sayilar.length; i++){
//     if(sayilar[i]%5 == 0){
//         console.log(sayilar[i]+ "-----5 in katidir");
//     }
// }



// 3-Sayilar listesindeki cift sayilarin toplamini bulunuz.
// toplam=0;
// for (let i=0; i<sayilar.length; i++){
//     if(sayilar[i]%2 ==0){
//         toplam +=sayilar[i]
//     }
// }
// console.log(toplam);


// let urunler = ["iphone 12","samsung s22", "iphone 13","samsung s23", "samsung s20"];

//4- Urunler listesindeki tüm ürünleri büyük harfle yazdiriniz.

// for(let urun of urunler){
//     console.log(urun.toUpperCase());
// }


//5-urunler listesinde icinde samsung gecen kac ürün vardir?
// let adet =0;

// for (let urun of urunler){
//     if (urun.includes("samsung")){
//         adet++;
//     }
// }
// console.log(adet);

// let ogrenciler= [
// {"ad":"yigit", "soyad":"bilgi","notlar": [60,70,60]},
// {"ad":"ada", "soyad":"bilgi","notlar": [80,70,80]},
// {"ad":"ahmet", "soyad":"turan","notlar": [10,10,60]}
// ];

// //ogrenciler listesindeki her ögrecinin not ortalamasini ve basari durumlarini yazdiriniz.
// for(let ogrenci of ogrenciler){
//     let not_toplam=0;
//     let ortalama=0;
//     let adet =0;
//    for (let not of ogrenci.notlar){
//     not_toplam+=not;
//     adet++;
//    }
//    ortalama=not_toplam/ adet;
//    console.log(`${ogrenci.ad} ${ogrenci.soyad} isimli ögrencinin not ortalamasi : ${ortalama}.`)
//    if(ortalama>=50){
//     console.log("basarili");
//    }else{
//     console.log("basarisiz");
//    }
// }




//tüm ögrencilerin not ortalamasi kactir.



// let toplam=0;
// for(let i=0; i<10; i++){
//     toplam= toplam+i;
//     console.log(i+"-----"+toplam);
// }



let b = {
    one: {
      a: 1,
      b: 2,
      c: 3
    },
    two: {
      a: 4,
      b: 5,
      c: 6
    },
    three: {
      a: 7,
      b: 8,
      c: 9
    }
  };
  
  let myKeys = Object.keys(b);
  
  for (item of myKeys) {
    //print the key
    console.log('Key', item)
    
    //print the value (which will be another object)
    console.log('Value', b[item])
    
    //print the nested value
    console.log('Nested value', b[item]['a'])
  }
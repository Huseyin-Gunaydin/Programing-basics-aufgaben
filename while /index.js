let a= 0;

while(a<10){
    console.log(a);
    a++
}


var toplam=0;
var say=1;
var sayi;

while(sayi!=0){
    sayi=prompt(say+".sayi giriniz");
    toplam=toplam +Number(sayi);
    say++
}
console.log(say+"sayinin toplami"+toplam);
// 1- Belirlediğimiz sayı aralığında rasgele sayı üreten fonksiyonu yazınız
// örnek :  console.log(rasgele(1,10)) -> 1 ile 10 arasında rasgele sayı üretir.

// Cevap-1 

// let minimum = 9;
// let maximum = 65;

// function rastgele(minimum,maximum){
//     return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
// }
// let sonuc = rastgele(minimum,maximum)
// console.log(sonuc)


// 2- Elimizdeki people dizisiyle people2 yi oluşturalım.
// let people = ["Greg", "Mary", "Devon", "James"];
// console.log(people2)  -> ["Greg", "Elizabeth", "Mary", "Artie", "James"]

// Cevap-2

// let people = ["Greg", "Mary", "Devon", "James"];
// let people2 = people.slice();
// people2.splice(1,4, "Elizabeth", "Mary", "Artie", "James");

// console.log(people2);


// 3- 
// function dönüştürücü(text1) text1= mustafa_selman@gmail.com -> Mustafa Selman
// function dönüştürücü(text2) text1= mehmet_colak@hotmail.com -> Mehmet Colak
// function dönüştürücü(text3) text1= yasin_sezer@yandex.com -> Yasir Sezer
// bu üç veriyi de yanda yazılan çıktılara dönüştüren fonksiyonu yazın. (üç ayrı fonksiyon değil tek fonksiyon istiyoruz.)

// Cevap-3 

// function donusturucu(email) {
//     let [ad, soyad] = email.split('@')[0].split('_');
//     return [ad.toUpperCase()[0] + ad.slice(1), soyad.toUpperCase()[0] + soyad.slice(1)];
//   }
  
//   let text1 = "mustafa_selman@gmail.com";
//   let text2 = "mehmet_colak@hotmail.com";
//   let text3 = "yasin_sezer@yandex.com";
  
//   console.log(donusturucu(text1));
//   console.log(donusturucu(text2));
//   console.log(donusturucu(text3));


// 4- let sayilar = [12,34,2,3,67,66,5,24]
// function maxSecond(sayilar) -> elimizdeki dizinin en büyük ikinci değerini veren fonksiyon
// function minSecond(sayilar) -> elimizdeki dizinin en küçük ikinci değerini veren fonksiyon
// yukarıdaki fonksiyonları oluşturunuz.
// tüm soruların cevabını tek proje olarak github a yükleyip paylaşmanızı istiyorum.



// cevap-4

// let sayilar = [12, 34, 2, 3, 67, 66, 5, 24];
// sayilar.sort((a, b) => a - b);


// let enBuyukIkinci = sayilar[sayilar.length - 2];
// let enKucukIkinci = sayilar[1];

// console.log("En büyük ikinci değer:", enBuyukIkinci);
// console.log("En küçük ikinci değer:", enKucukIkinci);














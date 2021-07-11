/*
Açıklama:

Aşağıda bir kitaplık(Bookshelf) class'ının temel bir hali verilmiştir.
1) Ogrendiginiz bilgilere dayanarak, getFavoriteBooks, loadBooks metodlarını bu class içine taşıyınız.
Ipucu: this

2) benimKitapligim adinda yeni bir değiskene Bookshelf class'inin bir instance'ini oluşturunuz. Bu instance olusmasi aninda apiURL'in class'a gecmesini saglayiniz.
Ipucu: constructor, new keyword

3) class instance'i olustugu anda loadBooks metodu, getBooksFromFakeAPI metodunu benimKitapligim degiskeninin olusturuldugu zaman verilen apiURL ile cagirmali ve oradan donen kitapları class'da bir değişkende tutmalı.

4) isFavoriteBook kitabı kitap adında "JS" geçiyorsa true dönmeli.
Ipucu: Coercion
5) benimKitapligim degiskeni olustuktan sonra sirasıyla hemen ve 3 sn sonra olmak uzere benimKitapligim.getFavoriteBooks cagrilmali.
Ipucu: setTimeout 
6) getFavoriteBooks cagrildigi zaman eger kitaplar yuklenmedi ise console.log ile "Kitaplar yuklenmedi" yazmalı

7) getFavoriteBooks cagrildigi zaman eget kitaplar yuklendi ise console.log ile favori kitaplarınız; diyip içinde "JS" geçen kitapları yazmalı.


*/

class Bookshelf {
    isFavoriteBook(bookName) {
        // Kitabın içinde "JS" geçiyorsa favoridir.
    }

}


function getFavoriteBooks() {
    console.log('favori kitaplarınız;');
}

function loadBooks() {

}

// benimkitapligim = ...
// benimkitapligim.getFavoriteBooks()
setTimeout(function() { benimkitapligim.getFavoriteBooks() }, 301);
var apiURL = 'somefake.url/getBooks';

/* Lütfen buradan aşağısını değiştirmeyin  */
function getBooksFromFakeAPI(apiURL, onBooksLoad) {
    setTimeout(function() {
        onBooksLoad([
            "Otostopçunun galaksi rehberi",
            "Albaya mektup yok",
            "You don't know JS",
            "JS: the good parts",
            42, // Lets imagine we have corrupted data in back-end
            false // Lets imagine we have corrupted data in back-end
        ]);
    }, 300);
}
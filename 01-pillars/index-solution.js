class Bookshelf {
    constructor(apiUrl) {
        this.apiURL = apiUrl;
        this.books = [];
        this.loadBooks();
    }

    isFavoriteBook(bookName) {
        // Kitabın içinde "JS" geçiyorsa favoridir.
        return String(bookName).includes('JS');
    }

    getFavoriteBooks() {
        const length = this.books.length;
        if (length === 0) {
            console.log('Kitaplar henuz yuklenmedi.');
            return [];
        }
        console.log('Favorite kitaplariniz;')

        const favoriteBooks = this.books.filter((currentBookName) =>  this.isFavoriteBook(currentBookName));
        favoriteBooks.forEach((favoriteBookName) => { console.log(favoriteBookName); });
        return favoriteBooks;
    }

    loadBooks() {
        getBooksFromFakeAPI(this.apiURL, (books) => {
            this.books = books;
        });
    }
}

const BILIM_KURGU_KITAPLARI_API = 'somefake.url/getBooks';
// const BILISIM_KITAPLARI_API = 'somefake.url/getBooks';
const benimKitapligim = new Bookshelf(BILIM_KURGU_KITAPLARI_API);
benimKitapligim.getFavoriteBooks();
setTimeout(() => {
    benimKitapligim.getFavoriteBooks();
}, 301);


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
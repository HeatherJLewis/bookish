class Book {
    constructor(bookId, title, author, isbn, barcode) {
        this.bookId = bookId,
        this.title = title,
        this.author = author,
        this.isbn = isbn,
        this.barcode = barcode
    }
}

module.exports = {
    Book
}
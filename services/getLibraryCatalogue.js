const { databaseConnection } = require("../databaseConnection")
const { Book } = require("./book");

const getLibraryCatalogue = (request, response, next) => {
    databaseConnection.any('select * from books')
    .then(data => {
        const listOfBooks = data.map(book => {
            return new Book(book.bookid, book.title, book.author, book.isbn, book.barcode);
        })
        response.send(listOfBooks);
    })
    .catch(error => {
        console.log('ERROR:', error);
    })
    // .finally(databaseConnection.$pool.end);
}

module.exports = {
    getLibraryCatalogue
}
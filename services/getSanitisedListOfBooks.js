const { databaseConnection } = require("../databaseConnection")
const { Book } = require("./book");

const getSanitisedListOfBooks = (response, sqlQueryString, namedParameters) => {
    databaseConnection.any(sqlQueryString, namedParameters)
    .then(data => {
        const listOfBooks = data.map(book => {
            return new Book(book.bookid, book.title, book.author, book.isbn, book.barcode);
        })
        response.send(listOfBooks);
    })
    .catch(error => {
        console.log('ERROR:', error);
    })
}

module.exports = {
    getSanitisedListOfBooks
}

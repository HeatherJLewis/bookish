const { databaseConnection } = require("../databaseConnection")
const { Book } = require("./book");

const getAllBooksQueryString = 'SELECT * FROM books WHERE author=${author}'

const getAllBooksForAGivenAuthor = (request, response, next) => {
    const namedParameters = {
        author: request.query.author,
    };

    databaseConnection.any(getAllBooksQueryString, namedParameters)
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
    getAllBooksForAGivenAuthor
}
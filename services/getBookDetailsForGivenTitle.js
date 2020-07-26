const { databaseConnection } = require("../config/pgPromiseDbConnection")
const { Book } = require("./book");

const getAllBooksQueryString = 'SELECT * FROM books WHERE title=${title}'

const getBookDetailsForGivenTitle = (request, response, next) => {
    const namedParameters = {
        title: request.query.title,
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
}

module.exports = {
    getBookDetailsForGivenTitle
}
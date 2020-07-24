const { databaseConnection } = require("../databaseConnection")
const jwtDecode = require('jwt-decode')
const { Book } = require("./book");

const getAllBooksForUser = (request, response, next) => {
    const { username } = jwtDecode(request.headers.authorization)
    databaseConnection.any(`SELECT * FROM books
    INNER JOIN copiesofbooks ON bookid = id
    INNER JOIN users ON username = '${username}';`, [true])
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
    getAllBooksForUser
}
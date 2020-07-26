const jwtDecode = require('jwt-decode')
const { databaseConnection } = require("../config/pgPromiseDbConnection")
const { Book } = require("./book");

const getAllBooksQueryString = 'SELECT * FROM users INNER JOIN copiesofbooks ON userid = users.id INNER JOIN books ON books.id = bookid WHERE username=${username};'

const getAllBooksForUser = (request, response, next) => {
    const { username } = jwtDecode(request.headers.authorization)
    const namedParameters = {
        username,
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
    getAllBooksForUser
}
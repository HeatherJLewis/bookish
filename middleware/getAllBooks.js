const { databaseConnection } = require("../databaseConnection")

const getAllBooks = (request, response, next) => {
    databaseConnection.any('select * from books', [true])
    .then(data => {
        response.send(data);
    })
    .catch(error => {
        console.log('ERROR:', error);
    })
    .finally(db.$pool.end);
}

module.exports = {
    getAllBooks
}
const { Books } = require('./models')
const { response } = require('express')

const forAllBooks = (request, response) => {
    Books.findAll()
    .then(books => {
        response.send(books)
        console.log(books)

    })
    .catch(error => console.log(error))}

module.exports = {
    forAllBooks
}
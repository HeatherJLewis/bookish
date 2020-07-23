const express = require('express')
const { getAllBooks } = require('../services/getAllBooks');

const books = express.Router()

books.get('/', getAllBooks)

books.post('/', (request, response) => {
    response.send("You have added a book")
})

books.get('/title', (request, response) => {
    response.send("This is the title of your book")
})

books.get('/author', (request, response) => {
    response.send("This is the author of your book")
})

module.exports = books;
const express = require('express')
const passport = require('passport');
const { getBookDetailsForGivenTitle } = require('../services/getBookDetailsForGivenTitle');
const { getAllBooksForAGivenAuthor } = require('../services/getAllBooksForAGivenAuthor');
const getBookInformation = require('../services/getBookInformation');

const books = express.Router()

books.get('/', passport.authenticate("jwt", { session : false }), getBookInformation.forAllBooks)

books.post('/', (request, response) => {
    response.send("You have added a book")
})

books.get('/title', passport.authenticate("jwt", { session : false }), getBookDetailsForGivenTitle )

books.get('/author', passport.authenticate("jwt", { session : false }), getAllBooksForAGivenAuthor)

module.exports = books;
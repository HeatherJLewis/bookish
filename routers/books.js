const express = require('express')
const passport = require('passport');
const getBookInformation = require('../services/getBookInformation');

const books = express.Router()

books.get('/', passport.authenticate("jwt", { session : false }), getBookInformation.forAllBooks)

books.post('/', (request, response) => {
    response.send("You have added a book")
})

books.get('/title', passport.authenticate("jwt", { session : false }), getBookInformation.forAGivenTitle )

books.get('/author', passport.authenticate("jwt", { session : false }), getBookInformation.forAGivenAuthor)

module.exports = books;
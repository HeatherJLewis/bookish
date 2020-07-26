const { Books } = require('./models')
const { response } = require('express')

const forAllBooks = (request, response) => {
    Books.findAll()
    .then(books => {
        response.send(books)
    })
    .catch(error => console.log(error))};

const forAGivenTitle = (request, response) => {
    Books.findAll(
        {where: {title : request.query.title}}
    )
    .then(books => {
        response.send(books)
    })
    .catch(error => console.log(error))};

const forAGivenAuthor = (request, response) => {
    Books.findAll(
        {where: {author : request.query.author}}
    )
    .then(books => {
        response.send(books)
    })
    .catch(error => console.log(error))};

module.exports = {
    forAllBooks,
    forAGivenTitle,
    forAGivenAuthor
}
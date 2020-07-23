const express = require('express');

const user = express.Router()

user.get('/', (request, response) => {
    response.send("Hello Bob")
})

user.get('/loans', (request, response) => {
    response.send("These are your loaned books")
})

module.exports = user;
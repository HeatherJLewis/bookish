const express = require('express');
const passport = require('passport');
const jwtDecode = require('jwt-decode')
const user = express.Router()

user.get('/', (request, response) => {
    response.send("Hello Bob")
})

user.get('/loans', passport.authenticate("jwt", { session : false }), (request, response) => {
    const { username } = jwtDecode(request.headers.authorization)

    response.send(`Hello loaned books for ${username}`)
})

module.exports = user;
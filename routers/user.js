const express = require('express');
const passport = require('passport');
const jwtDecode = require('jwt-decode');

const {getAllBooksForUser} = require('../services/getAllBooksForUser');

const user = express.Router()

user.get('/', passport.authenticate("jwt", { session : false }), (request, response) => {
    const { username } = jwtDecode(request.headers.authorization)
    response.send(`Welcome ${username}`)
})

user.get('/loans', passport.authenticate("jwt", { session : false }), getAllBooksForUser)

module.exports = user;
const express = require('express');
const passport = require('passport');
const {getAllBooksForUser} = require('../services/getAllBooksForUser');

const user = express.Router()

user.get('/', passport.authenticate("jwt", { session : false }), (request, response) => {
    response.send("Hello Bob")
})

user.get('/loans', passport.authenticate("jwt", { session : false }), getAllBooksForUser)

module.exports = user;
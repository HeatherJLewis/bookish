const express = require('express');
const jwt = require('jsonwebtoken');
const { privateKey } = require('../apiCredentials');
const {checkForUser} = require('../services/checkForUser');

const session = express.Router();

session.get('/', (request, response) => {
    response.send("Welcome to your library")
})

session.get("/login", (request, response) => {
    response.send("Please enter your username and password")
})

session.post("/login", checkForUser, (request, response) => {
    const token = jwt.sign(request.body, privateKey, { expiresIn: '1800s' })
    response.header('Authorization', 'Bearer ' +token);
    response.send(`You are logged in ${request.body.username}`)
})

module.exports = session;
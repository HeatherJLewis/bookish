const express = require('express');
const jwt = require('jsonwebtoken');
const { privateKey } = require('../apiCredentials')

const session = express.Router();

session.get('/', (request, response) => {
    response.send("Welcome to your library")
})

session.get("/login", (request, response) => {
    response.send("Please enter your username and password")
})

session.post("/login", (request, response) => {
    const token = jwt.sign(request.body, privateKey)
    response.cookie('ckns_jwt', token);
    response.send("You are logged in")
})

module.exports = session;
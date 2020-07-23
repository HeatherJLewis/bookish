const express = require('express');

const session = express.Router()

session.get('/', (request, response) => {
    response.send("Welcome to your library")
})

session.get("/login", (request, response) => {
    response.send("Please enter your username and password")
})

session.post("/login", (request, response) => {
    response.send("You have logged in")
})

module.exports = session;
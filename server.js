const express = require("express");
const apiCredentials = require('./apiCredentials');
const pgp = require('pg-promise')();

const connection = {
    host: 'localhost',
    port: 5432,
    database: apiCredentials.database,
    user: 'postgres',
    password: apiCredentials.password,
    max: 30
};

const db = pgp(connection);
const app = express();
const PORT = 3000;

app.get("/", (request, response)=> {
    db.any('select * from books', [true])
    .then(data => {
        response.send(data);
    })
    .catch(error => {
        console.log('ERROR:', error);
    })
    .finally(db.$pool.end);
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
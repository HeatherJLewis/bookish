const express = require('express')
const { databaseConnection } = require("./databaseConnection")

const router = express.Router()

router.get('/', (request, response, next) => {
    databaseConnection.any('select * from books', [true])
    .then(data => {
        response.send(data);
    })
    .catch(error => {
        console.log('ERROR:', error);
    })
    .finally(databaseConnection.$pool.end);
})

module.exports = router;
const { databaseConnection } = require("../databaseConnection")

const checkForUser = (request, response, next) => {
    databaseConnection.any(`SELECT EXISTS(SELECT * FROM users WHERE username='${request.body.username}' AND userpassword='${request.body.password}');`, [true])
    .then(data => {
        if(!data[0].exists){

            response.send("No access allowed")
        }
        next()
        }
    )
    .catch(error => {
        console.log('ERROR:', error);
    })
}

module.exports = {
    checkForUser
}
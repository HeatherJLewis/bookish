const { databaseConnection } = require("../config/pgPromiseDbConnection")

const checkForUser = (request, response, next) => {
    const namedParameters = {
        username: request.body.username,
        userpassword:request.body.password
    };

    databaseConnection.any('SELECT EXISTS(SELECT * FROM users WHERE username=${username} AND userpassword=${userpassword});', namedParameters)
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
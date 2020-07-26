const { Sequelize } = require('sequelize');
const { password } = require('../apiCredentials');

const sequelizeDatabaseConnection = new Sequelize('bookish', 'postgres', password, {
    host: 'localhost',
    dialect: 'postgres'
    }
);

// Test Connection:
sequelizeDatabaseConnection
.authenticate()
.then(() => {console.log("Success!");})
.catch((err) => {console.log(err);});

module.exports = {
    sequelizeDatabaseConnection
}
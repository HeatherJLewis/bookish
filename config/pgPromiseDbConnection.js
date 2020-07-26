const apiCredentials = require('../apiCredentials');
const pgp = require('pg-promise')();

const connection = {
    host: 'localhost',
    port: 5432,
    database: apiCredentials.database,
    user: 'postgres',
    password: apiCredentials.password,
    max: 30
};

const databaseConnection = pgp(connection);

module.exports = {
    databaseConnection
}
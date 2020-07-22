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

db.any('select * from books', [true])
    .then(data => {
        console.log('DATA:', data);
        return response.data = data;
    })
    .catch(error => {
        console.log('ERROR:', error);
    })
    .finally(db.$pool.end);


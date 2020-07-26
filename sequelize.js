const { Sequelize } = require('sequelize');
const { sequelizeDatabase } = require('./config/sequelize');
// const sequelize = require('./config/sequelize');
const { user, password } = require('./apiCredentials');

const database = new Sequelize('bookish', 'postgres', password, {
    host: 'localhost',
    dialect: 'postgres'
  });

// database = sequelizeDatabase()

// Test Connection:
  database
    .authenticate()
    .then(() => {console.log("Success!");})
    .catch((err) => {console.log(err);});

// Create a model for each table
const Books = database.define('books', {
    title: {
        type: Sequelize.STRING
    },
    author: {
        type: Sequelize.STRING
    },
    isbn: {
        type: Sequelize.STRING
    },
    barcode: {
        type: Sequelize.STRING
    }
})

Books.findAll()
    .then(books => {
        console.log(books);

    })
    .catch(error => console.log(error))



const { Sequelize } = require('sequelize');
const { sequelizeDatabaseConnection } = require('../config/sequelizeDbConnection');

const database = sequelizeDatabaseConnection;

const Books = database.define('books', {
    title: {
        type: Sequelize.STRING
    },
    author: {
        type: Sequelize.STRING
    // },
    // isbn: {
    //     type: Sequelize.STRING
    // },
    // barcode: {
    //     type: Sequelize.STRING
    }
})

const Users = database.define('users', {
    firstname: {
        type: Sequelize.STRING
    },
    surname: {
        type: Sequelize.STRING
    },
    username: {
        type: Sequelize.STRING
    },
    userpassword: {
        type: Sequelize.STRING
    }
})

const CopiesOfBooks = database.define('copiesofbooks', {
    bookid: {
        type: Sequelize.INTEGER
    },
    userid: {
        type: Sequelize.INTEGER
    },
    dateofreturn: {
        type: Sequelize.INTEGER
    }
})


module.exports = {
    Books,
    Users,
    CopiesOfBooks
}
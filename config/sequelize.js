const { Sequelize } = require('sequelize');
const { password } = require('../apiCredentials');


const sequelizeDatabase = () => {
    const sequelizeDatabase = new Sequelize('bookish', 'postgres', password, {
        host: 'localhost',
        dialect: 'postgres'
      });

      return sequelizeDatabase
}

module.exports = {
    sequelizeDatabase
}
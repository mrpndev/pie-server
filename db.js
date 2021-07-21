const {Sequelize} = require('sequelize');

const db = new Sequelize(process.env.DB_CONNECTION_STRING);
// Variable_Name = database://user:password@host:port/dbname

module.exports = db;
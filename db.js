const Sequelize = require("sequelize")

const sequelize = new Sequelize("postgres://postgres:dbLocal@localhost:5432/pieserver")
// dbType://user:password@ipAddress:port/dbName

module.exports = sequelize
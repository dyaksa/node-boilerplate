'use strict'

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const baseName = path.basename(__filename)
const environment = require('../../config/environment')
const db = {}

const host = environment.database.host
const port = environment.database.port
const dbName = environment.database.name
const username = environment.database.username
const password = environment.database.password
const dialect = environment.database.dialect

const sequelize = new Sequelize(dbName, username, password, {
  host: host,
  port: port,
  dialect: dialect,
})

db.sequelize = sequelize
db.Sequelize = Sequelize

db.books = require('./models/book.model')(sequelize, Sequelize)

module.exports = db

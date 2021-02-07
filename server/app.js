const express = require('express')
const router = require('./routes')
const db = require('./models')
const app = express()

global.__basedir = __dirname = "/.."

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', router)

// db.sequelize.sync()

module.exports = app
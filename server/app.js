const express = require('express');
const router = require('./routes');
const cors = require('cors')
const db = require('./models');
const app = express();

global.__basedir = __dirname;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

// db.sequelize.sync()

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

module.exports = app;
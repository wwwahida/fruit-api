const fs = require('fs')
require('dotenv').config()

const sql = fs.readFileSync(__dirname + '/setup.sql').toString()

const db = require('./db')

db.query(sql)
    .then(data => console.log('set-up complete'))
    .catch(error => console.log(error))


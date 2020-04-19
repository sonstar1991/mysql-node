
const dotenv = require("dotenv");
dotenv.config();
const express = require('express')
const bodyParser = require("body-parser");


const routes = require('./routes')
const app = express()




const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'node-api',
  port:'8888'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()


app.use('/', routes)





app.use((err, req, res, next) => {
    res.json(err);
  });
  
  //testing default routes
  app.get("/", (req, res) => {
    res.status(200).send("default");
  });



  
  module.exports = app;
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes')
const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes)
const port = process.env.PORT;

app.listen(port, ()=> 
console.log(`Movie Web App port is ${process.env.PORT}`))
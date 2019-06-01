const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => res.send('Nukr is working'))

app.use('/', routes)

var server = app.listen(300, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Movies Web App listening at http://%s:%s", host, port)
})
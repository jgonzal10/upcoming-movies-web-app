const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const routes = require('./routes')
const { PORT } = require('./config')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../movieswebapp/dist/movieswebapp')));
}

app.use('/api', routes)

const port = PORT || 3000;

app.listen(port, ()=> 
console.log(`Movie Web App port is ${port}`))
require('dotenv').config()
const express = require('express')
const http = require('http')

const app = express()
const connectToDatabase = require('./db')
const Note = require('./Note')

app.get('/', async (req, res) => {
   res.send('Hello World from ' + os.hostname())
})

http.createServer(app).listen(process.env.PORT || 8000)


const express = require('express')
const cors = require('cors')
const router = require('./routes/route')
const db = require('./db/connection')
require('dotenv').config({path: "./config.env"})

const app = express()


const port = process.env.PORT || 5000



// use middlewares
app.use(cors())
app.use(express.json())

// db connection
db()

// using routes
app.use('/', router)


app.listen(port, () => {
    console.log('server started on port: ', port);
})
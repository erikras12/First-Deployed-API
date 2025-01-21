const express = require('express')
const logger = require('./logger')
const cors = require('cors')
const app = express()


// Middleware
app.use(cors())
app.use(express.json())
app.use(logger) //without first route argument (func runs everywhere)

const fruitsRouter = require('./routes/fruits')


app.get('/',(req,res)=>{
    res.send('hello')
})

app.use('/fruits',fruitsRouter)

module.exports = app
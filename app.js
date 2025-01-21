const express = require('express')
const logger = require('./logger')
const app = express()




app.use(express.json())
app.use(logger) //without first route argument (func runs everywhere)

const fruitsRouter = require('./routes/fruits')


app.get('/',(req,res)=>{
    res.send('hello')
})

app.use('/fruits',fruitsRouter)

module.exports = app
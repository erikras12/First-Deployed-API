require('dotenv').config()
const app = require('./app')
const port = process.env.PORT
//SERVER NEEDS TO BE RESTARED IF A CHANGE IN ENV IS MADE

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
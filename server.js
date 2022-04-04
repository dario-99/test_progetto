const express = require('express')
const app = express();
const test = require('./route/test')
const port = 3000

//listen
app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })

//middleware
app.use(express.json());

//set Render
app.set('view engine', 'ejs')

//Test Route
app.use('/test',test)
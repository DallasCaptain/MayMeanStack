//required modules
const express = require('express')
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/cradletogravedb", {useNewUrlParser: true})

//settings
const app = express()
app.use(express.static(__dirname +'/something/dist/something'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//importing routes
require('./server/config/routes.js')(app)

app.listen(8000,() => {
    console.log('started server on port 8000')
})
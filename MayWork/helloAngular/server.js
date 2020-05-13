const express = require('express')
//const mongoose = require('mongoose')
//const session = require('express-session')


const app = express()
//mongoose.connect("mongodb://localhost/mongooseFun", {useNewUrlParser: true})

app.use(express.static(__dirname +'/public/dist/public'))
//app.set('view engine', 'ejs')
//app.set('views', __dirname + '/views')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use(session({
//     secret: 'I solemnly swear i am upto no good',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 50000 }
// }))

require('./server/config/routes.js')(app)

app.listen(8000,() => {
    console.log('started server on port 8000')
})
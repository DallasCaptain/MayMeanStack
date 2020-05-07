const express = require('express')


const app = express()
app.use(express.static(__dirname +'/static'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')


app.get('/', (req,res) => {
    res.send('Hello From the / route')
})

app.get('/home', (req,res) => {
    res.render('home')
})

app.listen(8000,() => {
    console.log('started server on port 8000')
})
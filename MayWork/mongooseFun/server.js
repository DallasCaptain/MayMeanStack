const express = require('express')
const mongoose = require('mongoose')
//const bodyParser = require('body-parser')


const app = express()
mongoose.connect("mongodb://localhost/mongooseFun", {useNewUrlParser: true})

//models go here

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const User = mongoose.model('User', UserSchema)

app.use(express.static(__dirname +'/static'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req,res) => {
    User.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
})

app.get('/home', (req,res) => {
    res.render('new.ejs')
})

app.get('/users/:id', (req,res) =>{
    //console.log(req.params.id)
    User.findOne({_id:req.params.id})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})

app.get('/users/:id/edit', (req,res) =>{
    //console.log(req.params.id)
    User.findOne({_id:req.params.id})
    .then(data => {
        res.render('edit.ejs',data)
    })
    .catch(err => {
        res.json(err)
    })
})

app.post('/users/:id',(req,res) =>{
    User.findOne({_id:req.params.id})
    .then(user =>{
        user.name = req.body.name
        user.age = req.body.age
        user.save()
            .then(updatedUser => {
                res.redirect('/users/'+updatedUser._id)
            })
    })
    .catch(err => {
        console.log('Error saving user:', err)
    })
})
app.post('/users', (req,res) =>{
    const user = new User();
    user.name = req.body.name
    user.age = req.body.age
    user.save() //{name:from the form,age:from the form}
        .then(newUser => {
            console.log('We created:', newUser)
        })
        .catch(err => {
            console.log('Error saving user:', err)
        })
    res.redirect('/')
})

app.get('/users/:id/destroy', (req,res)=>{
    User.remove({_id:req.params.id})
    .then(()=>{
        res.redirect('/')
    })
    .catch(err => {
        console.log('Error saving user:', err)
    })
})

app.listen(8000,() => {
    console.log('started server on port 8000')
})
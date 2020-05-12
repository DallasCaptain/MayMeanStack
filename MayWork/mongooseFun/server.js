const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const bcrypt = require('bcrypt')
//const bodyParser = require('body-parser')



const app = express()
mongoose.connect("mongodb://localhost/mongooseFun", {useNewUrlParser: true})

const {User,Pants} = require('./server/models/users')


app.use(express.static(__dirname +'/static'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: 'I solemnly swear i am upto no good',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 50000 }
}))



app.get('/', (req,res) => {
    User.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
})

app.get('/login', (req,res)=>{
    res.render('login.ejs')
})

app.post('/sessions', (req,res)=>{
    
    //bcrypt.compare


    User.findOne({name:req.body.name})
    .then(user =>{
        bcrypt.compare(req.body.password,user.password)
        .then(result =>{
            if(result){
                req.session.name = user.name
                res.redirect('/foreach')
            }
            else{
                console.log('failed login attempt')
                res.redirect('/login')
            }
            
            
        })

    })
    .catch(err =>{
        console.log('err:',err)
        res.redirect('/login')
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
    //create pants first
    const newpants = new Pants();
    newpants.color = req.body.color
    newpants.material = req.body.material
    newpants.save()
        .then(pants =>{
            //then create users
            const user = new User();
            user.name = req.body.name
            user.age = req.body.age
            //bring in bcrypt to create a secure hash
            bcrypt.hash(req.body.password, 10)
            .then(hashed_password =>{
                user.password = hashed_password
                //add pants to the user before saving
                user.pants.push(pants)
                user.save() //{name:from the form,age:from the form}
                    .then(newUser => {
                        console.log('We created:', newUser)
                        res.redirect('/')
                })
            })
        })
    
        .catch(err => {
            console.log('Error saving user:', err)
            res.redirect('/')
        })
    
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


app.get('/foreach',(req,res)=>{
    User.findOne({name:req.session.name})
    .then(currentUser =>{
        if( currentUser == null){
            currentUser = {name:'PleaseLogin'}
        }
        console.log('current user is :', currentUser)
        User.find()
            .then(users =>{
                res.render('foreach.ejs', {users:users,currentUser:currentUser})
            })
            .catch(err => {
                console.log('Error saving user:', err)
            })
    })
    

    
})


app.get('/api/v1/users',(req,res)=>{
    User.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
})
app.post('/api/v1/users', (req,res)=>{
    console.log('recieved api request for new user')
    const newpants = new Pants();
    newpants.color = req.body.color
    newpants.material = req.body.material
    newpants.save()
        .then(pants =>{
            //then create users
            const user = new User();
            user.name = req.body.name
            user.age = req.body.age
            //bring in bcrypt to create a secure hash
            bcrypt.hash(req.body.password, 10)
            .then(hashed_password =>{
                user.password = hashed_password
                //add pants to the user before saving
                user.pants.push(pants)
                user.save() //{name:from the form,age:from the form}
                    .then(newUser => {
                        //console.log('We created:', newUser)
                        res.json(newUser)
                })
            })
        })
    
        .catch(err => {
            //console.log('Error saving user:', err)
            res.json(err)
        })
})



app.listen(8000,() => {
    console.log('started server on port 8000')
   
})
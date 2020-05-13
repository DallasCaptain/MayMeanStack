const {User,Pants} = require('../models/users')
const bcrypt = require('bcrypt')

module.exports = {
    index: function(req,res){
        User.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    },

    login: (req,res)=>{
        res.render('login.ejs')
    },

    processLogin: (req,res)=>{
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
    },
    new: (req,res)=>{
        res.render('new.ejs')
    },
    show: (req,res)=>{
        User.findOne({_id:req.params.id})
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    },
    edit: (req,res)=>{
        User.findOne({_id:req.params.id})
        .then(data => {
            res.render('edit.ejs',data)
        })
        .catch(err => {
            res.json(err)
        })
    },
    update: (req,res)=>{
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
    },
    create: (req,res)=>{
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
    },
    
    destroy: (req,res)=>{
        User.remove({_id:req.params.id})
        .then(()=>{
            res.redirect('/')
        })
        .catch(err => {
            console.log('Error saving user:', err)
        })
    },
    index2: (req,res)=>{
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
    },
    
    
}
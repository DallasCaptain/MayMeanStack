const {User,Pants} = require('../models/users')
const bcrypt = require('bcrypt')

module.exports = {
    apiindex: (req,res)=>{
        User.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    },

    apicreate: (req,res)=>{
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
    },
}
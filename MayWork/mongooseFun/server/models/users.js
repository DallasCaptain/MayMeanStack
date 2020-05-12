const mongoose = require('mongoose')

const PantSchema = new mongoose.Schema({
    color: String,
    material: String
})

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    password: String,
    pants: [PantSchema]
})

module.exports = {
        User : mongoose.model('User', UserSchema),
        Pants : mongoose.model('Pants', PantSchema)
}


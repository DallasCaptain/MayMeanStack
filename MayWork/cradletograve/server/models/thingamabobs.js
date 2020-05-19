const mongoose = require('mongoose')

const ThingamabobSchema = new mongoose.Schema({
    name: String,
    color: String,
    material: String
})



module.exports = {
        Thingamabob : mongoose.model('Thingamabob', ThingamabobSchema),
}

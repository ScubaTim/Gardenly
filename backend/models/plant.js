const mongoose = require('mongoose')

const plantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 200
    },
    author: {
        type: String,
        minlength: 3,
        maxlength: 30
    },
    uid: {
        type: String
    },
    isInGarden: {
        type: Boolean
    },
    date: {
        type: Date,
        default: new Date()
    },
    growingZone: {
        type: String
    },
    seedDepth: {
        type: String
    },
    soilType: {
        type: String
    },
    sunlight: {
        type: String
    },
    harvestIn: {
        type: String
    },
    watering: {
        type: String
    },
    fromSeed: {
        type: String
    },
    heirloom: {
        type: String
    }

})

const Plant = mongoose.model('Plant', plantSchema)

exports.Plant = Plant
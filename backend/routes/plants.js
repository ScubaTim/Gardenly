const { Plant } = require("../models/plant")
//const auth = require("../middleware/auth")
const express = require("express")
const Joi = require("joi")

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const plants = await Plant.find()
        res.send(plants)

    } catch (error) {
        res.status(500).send(error.message)
        console.log("Error getting plants from database:", error)
    }
})

router.post('/', async (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(200).required(),
        author: Joi.string().min(3).max(30),
        uid: Joi.string(),
        isInGarden: Joi.boolean(),
        date: Joi.date(),
        growingZone: Joi.string(),
        seedDepth: Joi.string(),
        soilType: Joi.string(),
        sunlight: Joi.string(),
        harvestIn: Joi.string(),
        watering: Joi.string(),
        fromSeed: Joi.string(),
        heirloom: Joi.string()
    })
    const { error } = schema.validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    //Need to check if plant already exists here -Not Done

    const { name, author, isInGarden, uid, date, growingZone, seedDepth, soilType, sunlight, harvestIn, watering, fromSeed, heirloom } = req.body

    let plant = new Plant({
        name,
        author,
        isInGarden,
        uid,
        date,
        growingZone,
        seedDepth,
        soilType,
        sunlight,
        harvestIn,
        watering,
        fromSeed,
        heirloom
    })

    try {
        plant = await plant.save()
        res.send(plant)

    } catch (error) {
        res.status(500).send(error.message)
        console.log("Error posting plant", error)
    }
})

router.put('/:id', async (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(200).required(),
        author: Joi.string().min(3).max(30),
        uid: Joi.string(),
        isInGarden: Joi.boolean(),
        date: Joi.date(),
        growingZone: Joi.string(),
        seedDepth: Joi.string(),
        soilType: Joi.string(),
        sunlight: Joi.string(),
        harvestIn: Joi.string(),
        watering: Joi.string(),
        fromSeed: Joi.string(),
        heirloom: Joi.string()
    })
    const { error } = schema.validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const plant = await Plant.findById(req.params.id)

        if (!plant) return res.status(404).send("Plant does not exist in the database.")

        const { name, author, isInGarden, uid, date } = req.body
        const updatedPlant = await Plant.findByIdAndUpdate(req.params.id, {
            name,
            author,
            isInGarden,
            uid,
            date,
            growingZone,
            seedDepth,
            soilType,
            sunlight,
            harvestIn,
            watering,
            fromSeed,
            heirloom
        }, { new: true })
        res.send(updatedPlant)

    } catch (error) {
        res.status(500).send(error.message)
        console.log("Error updating plant with PUT request", error)
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const plant = await Plant.findById(req.params.id)

        if (!plant) return res.status(404).send("Plant does not exist in the database.")

        const updatedPlant = await Plant.findByIdAndUpdate(req.params.id, {
            isInGarden: !plant.isInGarden
        })
        res.send(updatedPlant)

    } catch (error) {
        res.status(500).send(error.message)
        console.log("Error updating plants garden status with PATCH", error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deletedPlant = await Plant.findByIdAndDelete(req.params.id)
        res.send(deletedPlant)

    } catch (error) {
        res.status(500).send(error.message)
        console.log("Error deleting plant", error)
    }
})

module.exports = router
const { Plant } = require("../models/plant")
const auth = require("../middleware/auth")
const express = require("express")
const Joi = require("joi")

const router = express.Router()

router.get('/', auth, async (req, res, next) => {
    try {
        const plants = await Plant.find()
        const filteredPlants = plants.filter((plant) => plant.uid === req.user._id)
        res.send(filteredPlants)

    } catch (error) {
        res.status(500).send('Backend route error getting plants', error.message)
        console.log("Error getting plants from database:", error)
    }
})

router.post('/', auth, async (req, res) => {
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
        heirloom: Joi.string(),
        image: Joi.string()
    })
    const { error } = schema.validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    console.log('req.body in plants POST route:', req.body)

    const { name, author, isInGarden, uid, date, growingZone, seedDepth, soilType, sunlight, harvestIn, watering, fromSeed, heirloom, image } = req.body

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
        heirloom,
        image
    })

    try {
        plant = await plant.save()
        res.send(plant)

    } catch (error) {
        res.status(500).send(error.message)
        console.log("Error posting plant", error)
    }
})

router.put('/:id', auth, async (req, res) => {
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
        heirloom: Joi.string(),
        image: Joi.string()
    })
    const { error } = schema.validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const plant = await Plant.findById(req.params.id)

        if (!plant) return res.status(404).send("Plant does not exist in the database.")

        if (plant.uid !== req.user._id) return res.status(401).send("Plant update failed. Not authorized.")

        const {
            name,
            author,
            isInGarden,
            uid,
            growingZone,
            seedDepth,
            soilType,
            sunlight,
            harvestIn,
            watering,
            fromSeed,
            heirloom,
            image } = req.body

        const updatedPlant = await Plant.findByIdAndUpdate(req.params.id, {
            name,
            author,
            isInGarden,
            uid,
            growingZone,
            seedDepth,
            soilType,
            sunlight,
            harvestIn,
            watering,
            fromSeed,
            heirloom,
            image
        }, { new: true })
        res.send(updatedPlant)

    } catch (error) {
        res.status(500).send(error.message)
        console.log("Error updating plant with PUT request", error)
    }
})

router.patch('/:id', auth, async (req, res) => {
    try {
        const plant = await Plant.findById(req.params.id)

        if (!plant) return res.status(404).send("Plant does not exist in the database.")

        if (plant.uid !== req.user._id) return res.status(401).send("Plant status change failed. Not authorized.")

        const updatedPlant = await Plant.findByIdAndUpdate(req.params.id, {
            isInGarden: !plant.isInGarden,
        })
        res.send(updatedPlant)

    } catch (error) {
        res.status(500).send(error.message)
        console.log("Error updating plants garden status with PATCH", error)
    }
})

router.delete('/:id', auth, async (req, res) => {
    try {
        const plant = await Plant.findById(req.params.id)

        if (!plant) return res.status(404).send("Plant not found.")

        if (plant.uid !== req.user._id) return res.status(401).send("Plant deletion failed. Not authorized.")

        const deletedPlant = await Plant.findByIdAndDelete(req.params.id)

        res.send(deletedPlant)

    } catch (error) {
        res.status(500).send(error.message)
        console.log("Error deleting plant", error)
    }
})

module.exports = router
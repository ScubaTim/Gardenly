const { User } = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const express = require("express")
const Joi = require("joi")

const router = express.Router()

router.post('/', async (req, res) => {
    const schema = Joi.object({
        email: Joi.string().min(6).max(200).email().required(),
        password: Joi.string().min(6).max(1024).required()
    })
    const { error } = schema.validate(req.body)
    if (error) return res.status(400).send('error in sign in joi validation', error.details[0].message)

    console.log('req.body in signIn backend route', req.body)

    try {
        let user = await User.findOne({ email: req.body.email })
        if (!user) return res.status(400).send("Invalid email or password, or user does not exist.")

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if (!validPassword) return res.status(400).send("Invalid email or password, or user does not exist.")

        const secretKey = process.env.SECRET_KEY

        const token = jwt.sign({
            _id: user._id,
            name: user.name,
            email: user.email
        }, secretKey)

        res.send(token)

    } catch (error) {
        res.status(500).send(error.message)
        console.log("Error signing up a user", error)
    }
})

module.exports = router
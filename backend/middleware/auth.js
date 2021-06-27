const jwt = require('jsonwebtoken')
require('dotenv').config()

function auth(req, res, next) {
    const token = req.header("x-auth-token")
    if (!token) return res.status(401).send("Not authorized, error is from auth backend middleware")

    try {
        const secretKey = process.env.SECRET_KEY
        const decoded = jwt.verify(token, secretKey)
        req.user = decoded
        next()
    } catch (error) {
        res.status(400).send("Invalid token, error is from auth backend middleware")
    }
}

module.exports = auth
const plants = require('./routes/plants')

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

require("dotenv").config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/myGarden", plants)

app.get('/', (req, res) => {
    res.send("Welcome to Gardenly api!")
})


const PORT = process.env.PORT || 5000
const URI = process.env.MONGODB_URI

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log("Connection to MongoDB Database successful"))
    .catch((error) => {
        console.error("MongoDB connection failed", error)
    })
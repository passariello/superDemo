/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
var RatingSchema = require('./rating_model.js')

// Variable to be sent to Frontend with Database status
let databaseConnection = "Waiting for Database response..."
console.log('check: ', databaseConnection)

router.post("/", function (req, res, next) {

  // FUNCTION TO VALIDATE X-USER HEADER
  const isValidHeaderEmail = (test) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(test).toLowerCase())
  }

  // VALIDATE EMAIL
  if (isValidHeaderEmail(res.getHeaders()['x-user'])) {

    // CHECK DATA
    RatingSchema.exists({ id: req.body.id, email: req.body.email }, (err, data) => {
      if (err) throw err

      // INSERT
      if (data === null) {

        var insertModel = require('./rating_insert')
        var inputData = req.body

        insertModel.createData(inputData, (data) => {
          res.json({ record: "inserted" })
        })

        // DATA EXIST
      } else {

        console.log("record exist")
        res.json({ record: "exist" })

      }

    })

  } else {

    // NOT VALID EMAIL
    console.log("valid: ", false)
    res.json({ email: "not valid" })
    throw new Error('NOT VALID X-USER')

  }

})

// Connecting to MongoDB
mongoose.connect(
  "mongodb://mongodb:27017/beers",
  {
    useNewUrlParser: true
  }
)

// If there is a connection error send an error message
mongoose.connection.on("error", error => {
  console.log("Database connection error:", error)
  databaseConnection = "Error connecting to Database"
})

// If connected to MongoDB send a success message
mongoose.connection.once("open", () => {
  console.log("Open Database!")
  databaseConnection = "Open Database"
})

// If connected to MongoDB send a  message
mongoose.connection.once("connected", () => {
  console.log("Connected to Database!")
  databaseConnection = "Connected to Database"
})

// If disconnected to MongoDB send a message
mongoose.connection.once("disconnected", () => {
  console.log("Disconnected to Database!")
  databaseConnection = "Disconnected to Database"
})

module.exports = router

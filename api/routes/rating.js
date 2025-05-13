/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

const
  express = require("express"),
  router = express.Router(),
  mongoose = require("mongoose"),
  RatingSchema = require('./rating_model.js')

  // Variable to be sent to Frontend with Database status
  let databaseConnection = "Waiting for Database response..."

console.log('check: ', databaseConnection)

router.post(
  /(.*)/,
  function (req, res, next) {

    // FUNCTION TO VALIDATE X-USER HEADER
    const isValidHeaderEmail = (test) => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(test).toLowerCase())
    }

    // VALIDATE EMAIL
    if (isValidHeaderEmail(res.getHeaders()['x-user'])) {

      // CHECK DATA
      RatingSchema.exists({ id: req.body.id, email: req.body.email }, (err, data) => {
        if (err) console.error(error) //throw err

        // INSERT
        if (data === null) {

          const
            insertModel = require('./rating_insert'),
            inputData = req.body

          insertModel.createData(
            inputData,
            (data) => {
              res.json({ record: "inserted" })
            }
          )

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
      console.error('NOT VALID X-USER')
      // throw new Error('NOT VALID X-USER')

    }

  }

)

// Connecting to MongoDB
mongoose.connect("mongodb://mongodb:27017/beers")

// If there is a connection error send an error message
mongoose
  .connection
  .on(
    "error",
    error => {
      console.log("Database connection error:", error)
      databaseConnection = "Error connecting to Database"
    }
  )
  .on(
    "disconnected",
    () => {
      console.log("Disconnected to Database!")
      databaseConnection = "Disconnected to Database"
    }
  )
  .once(
    "open",
    () => {
      console.log("Open Database!")
      databaseConnection = "Open Database"
    }
  )
  .once(
    "connected",
    () => {
      console.log("Connected to Database!")
      databaseConnection = "Connected to Database"
    }
  )

module.exports = router

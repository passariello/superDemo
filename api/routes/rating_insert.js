var mongoose = require('mongoose')
var RatingSchema = require('./rating_model.js')

module.exports = {
  createData: function (inputData, callback) {
    ratingData = new RatingSchema(inputData)
    ratingData.save(function (err, data) {
      if (err) throw err
      return callback(data)
    })
  }
}

const
  RatingSchema = require('./rating_model.js')

module.exports = {
  createData: function (inputData, callback) {
    ratingData = new RatingSchema(inputData)
    ratingData.save(
      function (err, data) {
      if (err) console.error(error)
        return callback(data)
      }
    )
  }
}

const
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,

ratingSchema = new
  Schema(
    {
      id: String,
      email: String,
      comment: String,
      rating: Number,
    }
  )

module.exports = mongoose.model('ratings', ratingSchema)

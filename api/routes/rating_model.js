var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ratingSchema = new
  Schema({
    id: String,
    email: String,
    comment: String,
    rating: Number,
  })

module.exports = mongoose.model('ratings', ratingSchema)

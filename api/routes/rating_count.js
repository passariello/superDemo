/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: CC BY-NC-ND 4.0
*/

var mongoose = require('mongoose');
var RatingSchema = require('./rating_model.js');

module.exports = {
  countTotal: function( inputData, callback){
    //console.log( RatingSchema.find({ id: inputData }).count() );
    return RatingSchema.count({ id: inputData });
  }
};

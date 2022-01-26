/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: CC BY-NC-ND 4.0
*/

let express = require('express');
let request = require('request');
let router = express.Router();
const mongoose = require("mongoose");
var RatingSchema = require('./rating_model.js');

let config = require('../data/config.json');

router.get('/', function(req, res, next) {

  //var countModel = require('./rating_count');
  //var countData = req.body;
  var parse = new URLSearchParams( req._parsedOriginalUrl?.query );

  RatingSchema.countDocuments({ 'id': parse.get('id') }, function(err, c) {
    //console.log('Count is ' + c );
    // res.json({
    //   rating: c,
    //   valuations: c
    // });
  });

  RatingSchema.aggregate([
      { $match: { "id" : parse.get('id') }},
      {
        $group: {
          _id: { id : "$id" },
          rating: { $sum: "$rating" },
          count: { $sum: 1 },
        }
      }
    ], function(err,c) {
    console.log('Count is ' + c );
    res.json( c );
  });

});

module.exports = router;


/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

const
  express = require('express'),
  router = express.Router(),

  RatingSchema = require('./rating_model.js'),
  config = require('../data/config.json')

router.get(
  /(.*)/,
  function (req, res, next){

    //const countModel = require('./rating_count');
    //const countData = req.body;
    const parse = new URLSearchParams(req.originalUrl?.query)

    RatingSchema.countDocuments(
      {
        'id': parse.get('id')
      },
      function (err, c) {
      //console.log('Count is ' + c );
      // res.json({
      //   rating: c,
      //   valuations: c
      // });
      }
    )

    RatingSchema.aggregate(
      [
        {
          $match: {
            "id": parse.get('id')
          }
        },
        {
          $group: {
            _id: { id: "$id" },
            rating: { $sum: "$rating" },
            count: { $sum: 1 },
          }
        }
      ],
      function (err, c) {
        console.log('Count is ' + c)
        res.json(c)
      }
    )

  }
)

module.exports = router;

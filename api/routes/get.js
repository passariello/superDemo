/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: CC BY-NC-ND 4.0
*/

let express = require('express')
let request = require('request')
let router = express.Router()

let config = require('../data/config.json')

router.get('/', function (req, res, next) {

  var parse = new URLSearchParams(req._parsedOriginalUrl?.query)

  // grab in case of ID
  const id = parse.get('id') ? '/' + parse.get('id') : ""

  // grab in case of more query
  const other = parse ? "?" + parse : ""

  // request
  var url = config.apiData + id + other

  request({
    method: 'GET',
    uri: url,
    //headers: {'Authorization': 'Bearer ' + 'TOKEN HERE'}
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body))
    }
  })


})

module.exports = router;


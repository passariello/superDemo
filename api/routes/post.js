/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

const
  express = require('express'),
  router = express.Router(),

  config = require('../data/config.json')

router.post('/', function (req, res, next) {

  res.json({})

  // const parse = new URLSearchParams( req.originalUrl?.query );

  // // grab in case of ID
  // const id = parse.get('id') ? '/' + parse.get('id') : "";

  // // grab in case of more query
  // const other = parse ? "?" + parse : "";

  // // request
  // vconstar url = config.apiData + id + other ;

  // request({
  //   method: 'GET',
  //   uri: url,
  //   //headers: {'Authorization': 'Bearer ' + 'TOKEN HERE'}
  // }, function (error, response, body){
  //   if(!error && response.statusCode == 200){
  //     res.json( JSON.parse( body ) );
  //   }
  // });


})

module.exports = router;

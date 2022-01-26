/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: CC BY-NC-ND 4.0
*/

const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const app = express();
const base = 'api';

// view engine setup
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "jade" );

// setup for express
app.use( cors() );
app.use( logger("dev") );
app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );
app.use( cookieParser() );

// add public to accessible pages!
app.use( express.static( path.join( __dirname, "public" ) ) );

// add x-user as request!
app.use('*', ( req,res,next ) => {
  res.set( "x-user", "valid@email.com" );
  res.header( "x-user", "valid@email.com" );
  next();
});

// static pages about root
app.use( "/",                           require("./routes/index") );
app.use( "/" + base,                    require("./routes/index") );

// grab array permitted urls
//const pages = require("../data/pages.json");

let pages = require('./data/pages.json');

app.use( "/" + base + "/" + pages[0],   require("./routes/" + pages[0] ) ); // get
app.use( "/" + base + "/" + pages[1],   require("./routes/" + pages[1] ) ); // post
app.use( "/" + base + "/" + pages[2],   require("./routes/" + pages[2] ) ); // rating
app.use( "/" + base + "/" + pages[3],   require("./routes/" + pages[3] ) ); // count

// TODO, make dynamic
// pages.map( ( page, i ) => {
//   console.log( page, i );
//   app.use( "/" + base + "/" + page[i],   require("./routes/" + page[i]) );
// });

// catch 404 and forward to error handler
app.use( function( req, res, next ) {
  next( createError( 404 ) );
});

// error handler
app.use( function( err, req, res, next ) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get( "env" ) === "development" ? err : {};

  // render the error page
  res.status( err.status || 500 );
  res.render( "error" );
});

module.exports = app;

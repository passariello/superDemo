/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

// Ensure the global variable is properly initialized
if (!global.superDemo) {
  global.superDemo = {
    alias: "api"
  }
}

const
  dotenv = require('dotenv').config(),
  packs = require("../package.json"),

  port = packs.app.port,
  bodyParser = require('body-parser'),
  express = require('express'),
  fs = require('fs'),
  path = require('path')

/**
 * Express application instance
 */

export const app = express()
// Server instance export for testing

let server

/////////////////////////////////////////////////////////////////////////////////////////////

// AVOID ERRORS FROM LISTENERS
process.setMaxListeners(0)

// Register global error handler - moved outside middleware for testing safety
if (process.env.NODE_ENV !== 'test') {
  process.on(
    'uncaughtException',
    (err, origin) => {
      console.error(
        process.stderr.fd,
        `Caught exception: ${err}\n` +
        `Exception origin: ${origin}`
      )
    }
  )
}

/////////////////////////////////////////////////////////////////////////////////////////////

// URL ENCODE
app.use(bodyParser.urlencoded({ extended: true }))

// SET PAGES FOLDER
app.set("views", path.join(__dirname, "views"))

// setup for express
app.use(express.json())

// extendes
app.use(express.urlencoded({ extended: false }))

// add public to accessible pages!
app.use(express.static(path.join(__dirname, "public")))

/////////////////////////////////////////////////////////////////////////////////////////////

// HEADERS
app.use(
  (req, res, next) => {
    let err: Error | null = null

    try {
      decodeURIComponent(req.path)
    } catch (e) {
      if (e instanceof Error) err = e
    }

    if (err) {
      console.log(err, req.url)
      return res.status(400).send("Bad Request: Malformed URI").end()
    }
    next()
  }
)

/////////////////////////////////////////////////////////////////////////////////////////////

// static pages about root
app.get("/" + superDemo.alias, require("../routes/get"))

app.post("/" + superDemo.alias, require("../routes/post"))

// ALL OTHERS PAGES
app.use(
  /(.*)/,
  (req, res, next) => {
    return res.status(403).end()
  }
)

///////////////////////////////////////////////////////////////////////////////////////////

function onError(error) {
  if (error.syscall !== "listen") {
    console.error("NO CONNECTION TO DB")
    console.error(error)
    return
    // throw error
  }
  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges")
      process.exit(1)
    case "EADDRINUSE":
      console.error(bind + " is already in use")
      process.exit(1)
    default:
      console.error(error)
    // throw error
  }
}

///////////////////////////////////////////////////////////////////////////////////////////

function onListening() {
  const
    addr = server.address(),
    bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port
  console.log("Listening on " + bind)
}

///////////////////////////////////////////////////////////////////////////////////////////

server = app.listen(
  port,
  () => {
    console.debug(
      "Run: %s",
      JSON.stringify(
        {
          port: Number(port),
          environment: app.get('env')
        }, null, 4)
    )
  }
)

server.on("listening", onListening)
server.on("error", onError)

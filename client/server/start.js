/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

const
  pjson = require('./package.json'),
  express = require('express'),
  path = require('path'),
  app = express(),
  port = pjson.port,
  { createProxyMiddleware } = require('http-proxy-middleware'),

  // grab dyna uri
  url = __dirname.replace('server', '')

  app.use(
    '/api',
    createProxyMiddleware(
      {
        target: 'http://host.docker.internal:9000/api',
        changeOrigin: false,
        pathRewrite: {
          "^/api": "/api",
        }
      }
    )
  )

  app.use(express.static(url + '/dist/'))

  app.get(
    /(.*)/,
    (req, res) => {
      console.log("test")
      res.sendFile(path.resolve(url, 'dist', 'index.html'))
    }
  )

  // start the microscopic server!
  console.info(`
    This server is used by Docker!,
    Please use "client" folder and run dev or build.
    If you want to use this server... you need to build the client first!.

    If you want to use the build in NginX or Apache you donn't need this server!
    If you need assistance constact Dario!
  `)

  console.info(`  SuperDemo Web Server Started on port: `, port)

  app.listen(port);

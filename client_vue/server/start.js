/*!
* <https://github.com/passariello/>
*
* Copyright (c) 2022, Dario Passariello.
* Licensed under the Apache-2.0 License.
*/

const pjson = require('../package.json');
const express = require('express');
const path = require('path');
const app = express();
const port = pjson.appPort;

// grab dyna uri
const url = __dirname.replace('server', '');

// now load all pages dynamically!
app.use(express.static(url + '/dist/'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(url, 'dist', 'index.html'));
});

// start the microscopic server!
console.log('dpSuperDemo Web Server Started: ', port);
app.listen(port);

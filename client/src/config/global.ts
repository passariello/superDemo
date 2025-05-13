/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

// EVENT SETUP
/******************************************************************************/

// Global Arsenal
Object.defineProperty(
  global,
  "superDemo",
  {
    value: {},
    writable: false,
    configurable: false,
    enumerable: false
  }
)

let e
if (!e) e = window.event

/******************************************************************************/

import './styles'
import './scripts'

/******************************************************************************/

const pjson = require('../../package.json')

superDemo.aside = require("../data/aside.json")
superDemo.nav = require("../data/nav.json")
superDemo.conf = pjson
superDemo.music = '' //autoplay'

superDemo.api = (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") ? superDemo.conf.app.proxy.api.dev + '/'
  : '//' + window.location.hostname + superDemo.conf.app.proxy.api.pro

if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
  console.debug("This message it's only from localhost: type superDemo into console to see all options", superDemo)
}


/******************************************************************************/

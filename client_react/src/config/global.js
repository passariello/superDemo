/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

// EVENT SETUP
/******************************************************************************/

let e
if (!e) e = window.event

/******************************************************************************/

import './styles.js'
import './scripts.js'

/******************************************************************************/

window.name = "SuperDemo"

const pjson = require('../../package.json')

const superDemo = window.superDemo = {}

superDemo.aside = require("../data/aside.json")
superDemo.nav = require("../data/nav.json")
superDemo.conf = pjson
superDemo.music = '' //autoplay'

superDemo.api = (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") ? superDemo.conf.apiDev + '/'
  : '//' + window.location.hostname + superDemo.conf.apiProd

if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
  console.debug("This message it's only from localhost: type superDemo into console to see all options", superDemo)
}


/******************************************************************************/

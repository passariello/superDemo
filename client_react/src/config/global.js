/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: CC BY-NC-ND 4.0
*/

// EVENT SETUP
/******************************************************************************/

let e;
if (!e) e = window.event;

/******************************************************************************/

import './styles.js';
import './scripts.js';

/******************************************************************************/

window.name = "SuperDemo";

const pjson = require('../../package.json');

const _SuperDemo = window._SuperDemo = {};

_SuperDemo.aside = require("../data/aside.json");
_SuperDemo.nav = require("../data/nav.json");
_SuperDemo.conf = pjson;
_SuperDemo.music = ''; //autoplay'

if ( location.hostname === "localhost" || location.hostname === "127.0.0.1" ){
  console.debug( "This message it's only from localhost: type _SuperDemo into console to see all options",  _SuperDemo );
}


/******************************************************************************/

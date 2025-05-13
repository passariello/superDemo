/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router"

// DPHELPER
import 'dphelper'

// GLOBALS
import '/src/config/global'

import App from './app'
// import registerServiceWorker from './scripts/registerServiceWorker'

const container = document.querySelector('#root')

if (container) {

  createRoot(container).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )

  // registerServiceWorker()

}

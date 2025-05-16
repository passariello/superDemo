/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

// DPHELPER
import 'dphelper'

import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router"

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

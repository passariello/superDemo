/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: CC BY-NC-ND 4.0
*/

import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

// DPHELPER
import 'stmodal';
import 'dphelper';

// REDUX
import { configureStore } from "Root/redux/store"
import { Provider } from "react-redux"

// GLOBALS
import 'Root/config/global.js'

import App from './app'
import reportWebVitals from './scripts/ReportWebVitals'
import registerServiceWorker from './scripts/registerServiceWorker'

if( document.querySelector('#root') ){

  const store = configureStore()

  ReactDOM.render(

    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </Provider>,
    document.querySelector('#root')
  )

  registerServiceWorker()
  reportWebVitals()

}


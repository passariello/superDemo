/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: CC BY-NC-ND 4.0
*/

import thunk from "redux-thunk"
import rootReducer from "Root/redux/reducers/combine";
//import httpMiddleware from "./middleware/http"

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import { createBrowserHistory } from "history"
import { routerMiddleware } from "connected-react-router"

export const history = createBrowserHistory()
export const configureStore = () => {

  const store = createStore(
    rootReducer( history ),
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware( history ),
        thunk,
        //httpMiddleware
      )
    )
  )

  return store
}

export default configureStore

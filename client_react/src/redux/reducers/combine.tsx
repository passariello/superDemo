/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: CC BY-NC-ND 4.0
*/

// GENERAL
import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import { History } from "history"

// CUSTOM REDUCERS
import { testReducer } from "Root/redux/reducers/shared/test/container"
import { authReducer } from "Root/redux/reducers/shared/auth/container"

const rootReducer = (history: History) =>

  combineReducers({
    router: connectRouter(history),
    user: () => "user",
    test: testReducer,
    auth: authReducer,
  })

export default rootReducer

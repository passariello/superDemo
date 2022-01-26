/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: CC BY-NC-ND 4.0
*/

const initialState = {}

export const authReducer = (state = initialState, action: any) => {

  switch( action.type ){
    case "AUTH": return {
      ...state,
      result: action.payload
    }
    default:
      return state
  }

}

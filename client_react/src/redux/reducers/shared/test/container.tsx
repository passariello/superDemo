/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: CC BY-NC-ND 4.0
*/

const initialState = {}

export const testReducer = ( state = initialState, action: any) => {

  switch( action.type ){
    case "TEST": return {
      ...state,
      result: action.payload
    }
    default:
      return state
  }

}

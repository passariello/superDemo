/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: CC BY-NC-ND 4.0
*/

export const testAction = ( value:any = null ) => {

  return {
    type: "TEST",
    payload: value
  }

}

export default testAction

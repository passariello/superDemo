/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: CC BY-NC-ND 4.0
*/

export const authAction = ( value:any = null ) => {

  return {
    type: "AUTH",
    payload: value
  }

}

export default authAction

/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: CC BY-NC-ND 4.0
*/

import React from 'react'

import styles from './styles.less'

// declare allow option for react
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    allow?: string;
  }
}


const Music = ( channel: string ) => {

  return (
    <div className={ styles.music }>
      <audio
        id="volume-control"
        src={ channel ? channel : "https://streamssl.chilltrax.com" }
        // show and auto activate by opt in config file
        controls autoPlay = { _SuperDemo.music ? true : false }
        allow = {_SuperDemo.music}
      />
    </div>
  )

}

export default Music



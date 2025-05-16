/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

import './styles.scss'

// FIX error in AUDIO tag where allow is not recognized
// Dario Passariello
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    allow?: string
  }
}

const Music = (channel: string) => {

  return (
    <div className="music">
      <audio
        id="volume-control"
        src={channel ? channel : "https://streamssl.chilltrax.com"}
        // show and auto activate by opt in config file
        controls autoPlay={superDemo.music ? true : false}
        allow={superDemo.music}
      />
    </div>
  )

}

export default Music

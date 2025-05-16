/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

import Uiselector from '/src/components/general/uiSelector/component'

import "./styles.scss"

const Header = () => {

  return (

    <header>

      <div>
        <img id="logo" src="https://raw.githubusercontent.com/passariello/container/refs/heads/main/superdemo/images/logo.png" alt="logo" />
        <b>SuperDemo Beer Fest! </b><span> Now open, vote your beer!</span>
        <span className="year"> {new Date().getFullYear()} </span>
      </div>
      <img id="beers" src="https://raw.githubusercontent.com/passariello/container/refs/heads/main/superdemo/images/beers.png" alt="beers" />


      <Uiselector
        style={{
          position: 'absolute',
          top: '60px',
          right: '30px',
          zIndex: 100,
          transform: 'scale(80%)'
        }}
      />
      {/* <Options /> */}

    </header>

  )

}

export default Header

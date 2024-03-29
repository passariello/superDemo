/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: CC BY-NC-ND 4.0
*/

import React from 'react';

import Uiselector from 'Components/general/uiSelector/component'

import "./styles.scss"

const Header = () => {

  return (

    <header>

      <div>
        <img id="logo" src="/assets/logos/logo.png" alt="logo" />
        <b>SuperDemo Beer Fest! </b><span> Now open, vote your beer!</span>
        <span className="year"> 2022 </span>
      </div>
      <img id="beers" src="/assets/images/beers.png" alt="beers" />


      <Uiselector
        style={{
          position:'absolute',
          top: '60px',
          right: '30px',
          zIndex: 100,
          transform:'scale(80%)'
         }}
      />
      {/* <Options /> */}

    </header>

  );

}

export default Header

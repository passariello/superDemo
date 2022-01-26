/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: CC BY-NC-ND 4.0
*/

import React, { useEffect, useState } from 'react'

import Header from "Layout/header/start"
import Nav from "Layout/nav/start"
import Main from "Layout/main/start"
import Footer from "Layout/footer/start"
import Aside from 'Layout/aside/start'

import CircularProgress from 'Components/general/loaders/circular/progress/component'
import { useLocation } from 'react-router-dom'

function App() {

  const location = useLocation()
  const [ initialValue, setInitialValue ] = useState( null || [] )

  useEffect(() => {
    const inter = setInterval(() => {
      setInitialValue( _SuperDemo?.data?.info )
    }, 1000);
    if( initialValue ) clearInterval( inter )
  }, [initialValue] );

  const open = location.hash;

  switch ( open ) {
    case '':
      return (
        <>
          {
          !initialValue ?
          <CircularProgress
            options={{
              size: 100,
              thickness: 8,
              speed: '500ms',
              counter: true,
              value: 'wait'
            }}
          />
          :
          <>
            <Header/>
            <Nav/>
            <Aside/>
            <Main/>
            <Footer/>
          </>
          }
        </>
      )

  }

}

export default App;

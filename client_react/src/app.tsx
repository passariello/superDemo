/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

import React, { useEffect, useState } from 'react'

import Header from "/src/layout/header/start"
import Nav from "/src/layout/nav/start"
import Main from "/src/layout/main/start"
import Footer from "/src/layout/footer/start"
import Aside from '/src/layout/aside/start'

import CircularProgress from '/src/components/general/loaders/circular/progress/component'
import { useLocation } from 'react-router-dom'

function App() {

  const location = useLocation()
  const [initialValue, setInitialValue] = useState([])

  useEffect(() => {
    const inter = setInterval(() => {
      setInitialValue(superDemo?.data?.info)
    }, 1000)
    if (initialValue) clearInterval(inter)
  }, [initialValue])

  const open = location.hash

  switch (open) {
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
                <Header />
                <Nav />
                <Aside />
                <Main />
                <Footer />
              </>
          }
        </>
      )

  }

}

export default App

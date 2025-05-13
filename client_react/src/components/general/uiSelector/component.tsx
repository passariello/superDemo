/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

import React, { useEffect, useState } from "react"

import './style.scss'

export const Uiselector = (props) => {

  const [defTheme, setDefTheme] = useState('')

  const toggleSwitch: any = document.querySelector('#slider')
  const currentTheme = localStorage.getItem('theme')
  const style = document.querySelectorAll('.changeTheme')

  useEffect(() => {

    // CHECK LOCAL STORAGE


    if (currentTheme) {
      document.head.insertAdjacentHTML('beforeend', `<link class="changeTheme" rel="stylesheet" href="/themes/${currentTheme}.css" />`)
      localStorage.setItem('theme', currentTheme)
      setDefTheme(currentTheme)
    } else {
      document.head.insertAdjacentHTML('beforeend', `<link class="changeTheme" rel="stylesheet" href="/themes/dark.css" media="(prefers-color-scheme: dark)" />`)
    }

  }, [])

  const switchTheme = (e: any, value) => {

    for (let link of style) link?.remove()
    localStorage.setItem('theme', '')

    if (e || value) {

      style[0]?.remove()

      switch (e.target.id || value) {

        case "1":
          document.head.insertAdjacentHTML('beforeend', `<link class="changeTheme" rel="stylesheet" href="/themes/light.css" />`)
          localStorage.setItem('theme', 'light')
          setDefTheme('light')
          break

        case "2":
          document.head.insertAdjacentHTML('beforeend', `<link class="changeTheme" rel="stylesheet" href="/themes/dark.css" media="(prefers-color-scheme: dark)" />`)
          localStorage.setItem('theme', '')
          setDefTheme('')
          break

        case "3":
          document.head.insertAdjacentHTML('beforeend', `<link class="changeTheme" rel="stylesheet" href="/themes/dark.css" />`)
          localStorage.setItem('theme', 'dark')
          setDefTheme('dark')
          break

      }

    } else {

      for (let link of style) link?.remove()
      localStorage.setItem('theme', '')
      toggleSwitch.checked = false

    }

  }

  return (

    <div id="switchUI" style={props.style}>

      <div id="wrapper">

        <div id="slider">

          <input type="radio" name="color" id="1" title="Light" checked={defTheme === 'light'} onChange={(e) => switchTheme(e, null)} />
          <label htmlFor="1" title="Light" />

          <input type="radio" name="color" id="2" title="Default" checked={defTheme === ''} onChange={(e) => switchTheme(e, null)} />
          <label htmlFor="2" title="By System" />

          <input type="radio" name="color" id="3" title="Dark" checked={defTheme === 'dark'} onChange={(e) => switchTheme(e, null)} />
          <label htmlFor="3" title="Dark" />

          <div id="dot" />

        </div>

      </div>

      <div id="test" />

    </div>

  )

}

export default Uiselector

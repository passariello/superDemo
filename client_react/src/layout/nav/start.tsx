/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

import React, { useEffect, useState } from 'react'
import { createBrowserHistory } from 'history'
import { Link, useLocation } from 'react-router-dom'

import "./styles.scss"

const history = createBrowserHistory()
const superDemo = window.superDemo

const NavMenu = (item) => {
  console.log(item)
  history.push('/' + item + '/')
  return true
}

const Nav = () => {

  const [selected, setSelected] = useState(null)
  const location = useLocation()

  useEffect(() => {
    setSelected(dphelper.path.rail[0])
  }, [location])

  return (

    <nav>
      <ul>
        {superDemo.nav.map((item: any, index: any) => {
          return (

            <li key={index}>

              <Link
                id={item.link.replace(/\//g, '') + '_lnk'}
                to={{ pathname: item.link }}
                title={''}
                className={selected === item.link.replace(/\//g, '') && 'selected' || null}
              >
                {item.language.en}
              </Link>

            </li>

          )
          {/* return <li key={index} onClick={ () => NavMenu( item.language.en )}> {item.language.en} </li> */ }
        })}
      </ul>

      <div id="siteName"></div>

    </nav>

  )

}

export default Nav

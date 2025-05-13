/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'

import "./styles.scss"

const superDemo = window.superDemo

const Nav = () => {

  const
    [selected, setSelected] = useState(null),
    location = useLocation()

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
        })}
      </ul>

      <div id="siteName"></div>

    </nav>

  )

}

export default Nav

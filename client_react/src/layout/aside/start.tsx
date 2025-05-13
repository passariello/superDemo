/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

import HorizontalProgress from '/src/components/general/loaders/horizontal/progress/component'
import Music from '/src/components/general/music/component'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import "./styles.scss"

const Aside = (props) => {

  return (
    <>
      <aside id="pageAside">

        <ul>
          <li>

            <Link
              to={'/vote/'}
              title={'Cast your vote!'}
            >
              Vote your Beer!
            </Link>

          </li>
          <li><a className="disabled">Galleries</a></li>
          <li><a className="disabled">Streaming</a></li>
        </ul>

        {/* <Music/> */}

      </aside>

    </>
  )

}

export default Aside





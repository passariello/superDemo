/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: CC BY-NC-ND 4.0
*/

import HorizontalProgress from 'Components/general/loaders/horizontal/progress/component'
import Music from 'Components/general/music/component';
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import "./styles.scss";

const Aside = ( props ) => {

  return (
    <>
      <aside id="pageAside">

        <ul>
          <li>

            <Link
                to={'/vote/'}
                title={ 'Cast your vote!' }
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





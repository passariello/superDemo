/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

import React from "react"
import './styles.scss'

export const HorizontalSave = (props: any) => {

  return (

    <React.Fragment>

      <div
        id={props?.id}
        className="progressRaised"
      >
        <div className="progress">
          <div className="color"></div>
        </div>
      </div>

    </React.Fragment>

  )

}

export default HorizontalSave


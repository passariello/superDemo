/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: CC BY-NC-ND 4.0
*/

import React from "react"
import styles from './style.less'

export const HorizontalSave = ( props: any ) => {

  return (

    <React.Fragment>

    <div
      id={ props?.id }
      className={ styles.progressRaised }
    >
      <div className={ styles.progress }>
        <div className={ styles.color }></div>
      </div>
    </div>

    </React.Fragment>

  )

}

export default HorizontalSave


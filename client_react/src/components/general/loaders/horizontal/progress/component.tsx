/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: CC BY-NC-ND 4.0
*/

import React, { useEffect, useState } from "react"
import styles from './style.less'

const HorizontalProgress = ( props:any ) => {

  const [ error, setError ] = useState( false )
  const time = props.wait * 1000 || 0

  useEffect(() => {
    props.error && (
      setTimeout( () => {
        setError( true )
      }, time )
    )
  },[])


  return (
    <React.Fragment>

      {
        !error ?

        <div className={ styles.progress }>
          <div className={ styles.color }></div>
        </div>

       :

        <div className={ styles.progressError }> { props.message } </div>
      }

    </React.Fragment>
  )

}

export default HorizontalProgress


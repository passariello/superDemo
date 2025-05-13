/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

import React, { useEffect, useState } from "react"
import './styles.scss'

const HorizontalProgress = (props: any) => {

  const [error, setError] = useState(false)
  const time = props.wait * 1000 || 0

  useEffect(() => {
    props.error && (
      setTimeout(() => {
        setError(true)
      }, time)
    )
  }, [])


  return (
    <React.Fragment>

      {
        !error ?

          <div className="progress">
            <div className="color"></div>
          </div>

          :

          <div className="progressError"> {props.message} </div>
      }

    </React.Fragment>
  )

}

export default HorizontalProgress


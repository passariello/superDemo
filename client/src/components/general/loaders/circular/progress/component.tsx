/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

import './styles.scss'

const CircularProgress = (props: any) => {

  //return null

  return (
    <div
      className="backGroundFullScreen"
      style={{ position: props?.options?.position }}
    >
      <div
        className="loading_container"
        style={{ position: props?.options?.position }}
      >

        <div
          className="rotor"
          style={{
            borderWidth: props?.options?.thickness,
            animationDuration: props?.options?.speed,
            width: props?.options?.size,
            height: props?.options?.size
          }}
        />

        {props?.options?.counter &&
          <div className="loading_container">
            <span>
              {/* { `${Math.round( props?.options?.value )}` } */}
              {props?.options?.value}
            </span>
          </div>
        }

      </div>
    </div>
  )
}

export default CircularProgress

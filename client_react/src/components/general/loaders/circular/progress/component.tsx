/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: CC BY-NC-ND 4.0
*/

import React, { useEffect, useState } from "react"
import styles from "./style.less"

const CircularProgress = ( props: any ) => {

  //return null

  return (
    <div
      className={styles.backGroundFullScreen}
      style={{ position: props?.options?.position }}
    >
      <div
        className={styles.loading_container}
        style={{ position: props?.options?.position }}
      >

        <div
          className={ styles.rotor }
          style={{
            borderWidth: props?.options?.thickness,
            animationDuration: props?.options?.speed,
            width: props?.options?.size,
            height: props?.options?.size
          }}
        />

        { props?.options?.counter &&
          <div className={styles.loading_container}>
            <span>
              {/* { `${Math.round( props?.options?.value )}` } */}
              { props?.options?.value }
            </span>
          </div>
        }

      </div>
    </div>
  );
}

export default CircularProgress

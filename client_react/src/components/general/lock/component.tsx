/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: CC BY-NC-ND 4.0
*/

import React, { useEffect, useState } from 'react'

import CircularProgress from 'Components/general/loaders/circular/progress/component'

import styles from './styles.less'

const Lock = () => {

  return (
    <>
    <div id="siteLock" className={ styles.lock }>
      <CircularProgress
        options={{
          size: 100,
          thickness: 8,
          speed: '500ms',
          counter: true,
          value: 'wait'
        }}
      />
    </div>

    </>
  )

}

export default Lock

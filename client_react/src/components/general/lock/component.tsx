/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

import React, { useEffect, useState } from 'react'

import CircularProgress from '/src/components/general/loaders/circular/progress/component'

import './styles.scss'

const Lock = () => {

  return (
    <>
      <div id="siteLock" className="lock">
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

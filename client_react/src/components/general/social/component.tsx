/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

import React, { Fragment } from 'react'
import { SocialInterface } from './interface'

import './styles.scss'

const Social = (props: SocialInterface) => {

  const data = require("/src/data/social.json")

  return (

    <div className={props.className || "button"} style={props.style}>

      <a
        target={props.target || '_blank'}
        title={props.description || data[props.channel].description}
        href={props.url}
      >
        {
          (data[props.channel].icon || props.icon) &&
          <img src={data[props.channel].icon || props.icon} alt={props.description || data[props.channel].description} />
        }

        {
          props.type === 'large' &&
          <span> {props.text || data[props.channel].text} </span>
        }

      </a>

    </div>

  )

}

export default Social

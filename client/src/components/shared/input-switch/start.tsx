import React, { useEffect, useState } from 'react'

import './styles.scss'

const InputSwitch = (props: any) => {

  const [checked, setChecked] = useState(props.checked || false)

  const onSwitch = () => {
    setChecked(!checked)
    if (props.onChange) props.onChange()
  }

  useEffect(() => {
    if (props?.defaultOff === true) setChecked(false)
  })

  return (
    <React.Fragment>

      <div
        className="inputSwitch"
        style={props.style}
      >

        <span
          className="container"
          data-type={props?.disabled === true && 'disabled' || ''}
          onClick={onSwitch}
        >

          <input
            type="radio"
            id={props.name + "-0"}
            name={props.name}
            checked={checked}
            onChange={onSwitch}
          />
          <label htmlFor={props.name + "-0"} title={props?.title || "On"} />

          <input
            type="radio"
            id={props.name + "-1"}
            name={props.name}
            checked={checked}
            onChange={onSwitch}
          />

          <label htmlFor={props.name + "-1"} title={props?.title || "Off"} />

          <span className="dot" style={{ float: checked !== true ? 'left' : 'right' }} />

        </span>

      </div>

    </React.Fragment>
  )

}

export default InputSwitch

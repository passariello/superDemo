import React, { useEffect, useState } from 'react'
import classNames from "classnames"

import { InputSearchInterface } from './interface'

import styles from './styles.less'

  export const InputSearch = ( props: InputSearchInterface ) => {

    // ONCHANGE
    const [ value , setValue] = useState( "" )

    const onChange = ( e: any ) => {
      setValue( e.target.value )
    }

    useEffect(() => {
      if ( props?.value ) {
        setValue( props?.value )
      }
    },[]);

    return (
      <div
        className={ classNames( styles.container, props.className ) }
        style={ props?.style }
      >

        <label
          htmlFor={ props.id }
          className={styles.label}
        >

          <input
            type="search"
            id={ props?.id }
            name={ props?.name }
            className={ styles.input }
            defaultValue={ props?.defaultValue }
            value={ props?.value }
            title={ props?.title }
            style={ ({ borderColor: props.error && "red" }) }
            placeholder={ props?.placeholder || 'Search...' }
            disabled= {props?.disabled }
            required={ props?.required }
            onChange={ props?.onChange }
            onClick={ props?.onClick }
            onFocus={ (e) => e.target.placeholder = '' }
            onBlur={ (e) => e.target.placeholder = props?.placeholder || props?.onBlur || '' }
          />
        </label>

      </div>

    )

  }



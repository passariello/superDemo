import classNames from "classnames"

import { InputSearchInterface } from './interface'

import './styles.scss'

export const InputSearch = (props: InputSearchInterface) => {

  return (
    <div
      className={classNames("container", props.className)}
      style={props?.style}
    >

      <label
        htmlFor={props.id}
        className="label"
      >

        <input
          type="search"
          id={props?.id}
          name={props?.name}
          className="input"
          defaultValue={props?.defaultValue}
          value={props?.value}
          title={props?.title}
          style={({ borderColor: props.error && "red" })}
          placeholder={props?.placeholder || 'Search...'}
          disabled={props?.disabled}
          required={props?.required}
          onChange={props?.onChange}
          onClick={props?.onClick}
          onFocus={(e) => e.target.placeholder = ''}
          onBlur={(e) => e.target.placeholder = props?.placeholder || props?.onBlur || ''}
        />
      </label>

    </div>

  )

}

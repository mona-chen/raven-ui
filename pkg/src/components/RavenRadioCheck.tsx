import React from 'react'

interface Props {
  color?: any
  className?: string
  name?: string
  style?: any
  id?: any
  value?: any
  checked?: boolean
  onChange?: any
}

const RavenRadioCheck: React.FC<Props> = ({ color, className, name, style, id, value, checked, onChange }) => {
  return (
    <div className={`radio-box-wrap ${className}`}>
      <input
        type='radio'
        id={`input-radio-${id}`}
        className='input-radio input-radio'
        style={style}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label className={`label-radio label-radio__${color}`} htmlFor={`input-radio-${id}`}>
        <span className='check'></span>
      </label>
    </div>
  )
}

export default RavenRadioCheck

import React from 'react'

interface Props {
  onChange: (e: any) => void
  color: any
  style: any
  id: number
  value: any
  checked: boolean
}

const RavenCheckBox = ({ onChange, color, style, id, value, checked }: Props) => {
  return (
    <div className='check-box-wrap'>
      <input
        type='checkbox'
        id={`input-check-${id}`}
        className='input-check input-check'
        onChange={(e) => onChange && onChange(e)}
        value={value}
        checked={checked}
      />
      <label className={`label-check label-check__${color}`} htmlFor={`input-check-${id}`} style={style}>
        <svg className='icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <path d='M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z' />
        </svg>
      </label>
    </div>
  )
}

export default RavenCheckBox

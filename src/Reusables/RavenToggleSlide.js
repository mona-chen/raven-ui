import React from 'react'

const RavenToggleSlide = ({style, id, color, onChange, value, checked}) => {
  return (
    <div className="toggle-wrap">
    <input
      type="checkbox"
      name=""
      id={`toggle-slide-${id}`}
      className="toggle-input"
      style={style}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    <label
      htmlFor={`toggle-slide-${id}`}
      className={`toggle-label toggle-label__${color}`}
    >
      <span className="child-one"></span>
      <span className="child-two"></span>
    </label>
  </div>
  )
}

export default RavenToggleSlide
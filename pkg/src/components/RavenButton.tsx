import React from 'react'
import arrowRightImg from '../img/test-arrow-icon.svg'
import plusIcon from '../img/test-icon-plus.svg'
import timesIcon from '../img/test-times-icon.svg'
// interface Props {
//   msg: string
//   actionText: string
//   onCancel: any
//   onAction: any
//   visible: boolean
//   type: string
//   btnText: string
//   onClick: () => void
//   style: any
//   icon: any
//   iconText: string
//   className: string
// }

type Props = any
const RavenButton = ({ className, btnText, onClick, style, icon, addBtn, arrowBtn, cancelBtn }: Props) => {
  if (arrowBtn) {
    return (
      <button style={style} onClick={onClick} className={`raven-btn btn-icon ${className}`}>
        <figure>
          <img src={arrowRightImg} alt='' />
        </figure>
      </button>
    )
  }
  if (addBtn) {
    return (
      <button
        style={style}
        onClick={() => {
          onClick && onClick()
        }}
        className={`raven-btn btn-icon ${className}`}
      >
        <figure>
          <img src={plusIcon} alt='' />
        </figure>
      </button>
    )
  }
  if (cancelBtn) {
    return (
      <button
        style={style}
        onClick={() => {
          onClick && onClick()
        }}
        className={`raven-btn btn-icon ${className}`}
      >
        <figure>
          <img src={timesIcon} alt='' />
        </figure>
      </button>
    )
  }

  if (icon) {
    return (
      <button style={style} onClick={onClick} className={`raven-btn btn-icon ${className}`}>
        <figure>
          <img src={icon} alt='' />
        </figure>
        {btnText}
      </button>
    )
  }
  return (
    <button style={style} onClick={onClick} className={`raven-btn ${className}`}>
      {btnText}
    </button>
  )
}

export default RavenButton
import React, { useState } from 'react'

interface Prop {
  list: any
  onClick: any
  color: any
  textColor: any
  fadedGreen: any
  fadedBlack: any
}

const RavenTabLink = ({ list, onClick, color, textColor, fadedGreen, fadedBlack }: Prop) => {
  const [activeLink, setActiveLink] = useState(0)

  if (fadedGreen) {
    return (
      <div className='tab-link-parent mb-20'>
        {list &&
          list?.map((chi: any, idx: any) => {
            const { label, value } = chi
            return (
              <p
                onClick={() => {
                  onClick && onClick(idx, chi, value)
                  setActiveLink(idx)
                }}
                key={idx}
                className={`tab-link ${activeLink === idx && `tab-link__${color} tab-link_faded`} text-${textColor}`}
              >
                <span>{label || chi}</span>
              </p>
            )
          })}
      </div>
    )
  }
  if (fadedBlack) {
    return (
      <div className='tab-link-parent mb-20'>
        {list &&
          list?.map((chi: any, idx: any) => {
            const { label } = chi
            return (
              <p
                onClick={() => {
                  onClick && onClick(idx, chi)
                  setActiveLink(idx)
                }}
                key={idx}
                className={`tab-link ${
                  activeLink === idx && `tab-link__${color} tab-link_faded_black`
                } text-${textColor}`}
              >
                <span>{label || chi}</span>
              </p>
            )
          })}
      </div>
    )
  }
  return (
    <div className='tab-link-parent mb-20 '>
      {list &&
        list?.map((chi: any, idx: any) => {
          const { label } = chi
          return (
            <p
              onClick={() => {
                onClick && onClick(idx, chi)
                setActiveLink(idx)
              }}
              key={idx}
              className={`tab-link ${activeLink === idx && `tab-link__${color}`} text-${textColor}`}
            >
              <span>{label || chi}</span>
            </p>
          )
        })}
    </div>
  )
}

export default RavenTabLink

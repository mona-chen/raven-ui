import React from 'react'
import mascotImg from '../img/tool-tip-mascot.svg'

const RavenToolTip = ({ color, text, position, big, className, title, downText, img, textColor, hoverClassName }) => {
  if (big) {
    return (
      <div className={`tooltip-hover-wrap ${hoverClassName}`}>
        <div
          className={`tool-tip-wrap tool-tip_mascot tool-tip-wrap_big tool-tip-wrap__${color} tool-tip-wrap_${position} ${className}`}
        >
          {img && (
            <figure className='img-box'>
              <img src={mascotImg} alt='' className='img' />
            </figure>
          )}
          {title && (
            <p
              //   style={{ color: !textColor && "#ffffff" }}
              className={`title text-${textColor}`}
            >
              {title}
            </p>
          )}
          {text && (
            <p
              //   style={{ color: !textColor && "#ffffff" }}
              className={`text text-${textColor}`}
            >
              {text}
            </p>
          )}
          {downText && (
            <p
              //   style={{ color: !textColor && "#ffffff" }}
              className={`got text-${textColor}`}
            >
              {downText}
            </p>
          )}
        </div>
      </div>
    )
  }
  return (
    <div className={`tooltip-hover-wrap ${hoverClassName}`}>
      <div className={`tool-tip-wrap tool-tip-wrap__${color} tool-tip-wrap_${position}`}>
        {text && (
          <p
            // style={{ color: "#ffffff" }}
            className={`text text-${textColor}`}
          >
            {text}
          </p>
        )}
      </div>
    </div>
  )
}

export default RavenToolTip

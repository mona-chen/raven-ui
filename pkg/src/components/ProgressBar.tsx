import React from 'react'

type Position = any
type TextAlign = any

const ProgressBar = ({ bgcolor, completed }: any) => {
  const containerStyles = {
    height: 4,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: 'rgba(204, 204, 204, .5)',
    borderRadius: 50,
    position: 'relative' as Position,
    margin: '0rem 0rem 0rem 0rem',
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed > 100 ? 100 : completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right' as TextAlign,
    transition: '1s ease 0.3s',
  }

  const labelStyles = {
    padding: 7,
    color: 'white',
    fontWeight: 'bold',
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}></span>
      </div>
    </div>
  )
}

export default ProgressBar

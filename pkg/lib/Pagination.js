import React from 'react'
import arrowRightImg from '../img/test-arrow-icon.svg'

const Pagination = () => {
  return (
    <div className='pagination-wrap pagination-wrap__green-light'>
      <p className='child'>
        <svg className='icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
          <path d='M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z' />
        </svg>{' '}
        prev
      </p>
      <p className='child current'>1</p>
      <p className='child active'>2</p>
      <p className='child '>3</p>
      <p className='child active'>
        next{' '}
        <svg className='icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
          <path d='M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z' />
        </svg>
      </p>
    </div>
  )
}

export default Pagination

import React from 'react'

const TabsAndTabLinks = () => {
  return (
    <>
      {/* <!-- tab start  --> */}
      <div className='tab-link-parent mb-20'>
        <p className='tab-link tab-link__black-light text-white-light'>All</p>
        <p className='tab-link'>Today</p>
        <p className='tab-link'>Last 7days</p>
        <p className='tab-link'>Last 14days</p>
        <p className='tab-link'>Last 30days</p>
        <p className='tab-link'>Custom</p>
      </div>
      {/* <!-- tab end  --> */}
      {/* <!-- tab start  --> */}
      <div className='tab-link-parent mb-20'>
        <p className='tab-link'>All</p>
        <p className='tab-link'>Today</p>
        <p className='tab-link'>Last 7days</p>
        <p className='tab-link'>Last 14days</p>
        <p className='tab-link'>Last 30days</p>
        <p className='tab-link tab-link__purple-light'>Custom</p>
      </div>
      {/* <!-- tab end  --> */}
      {/* <!-- tab start  --> */}
      <div className='tab-link-parent mb-20'>
        <p className='tab-link'>All</p>
        <p className='tab-link'>Today</p>
        <p className='tab-link'>Last 7days</p>
        <p className='tab-link'>Last 14days</p>
        <p className='tab-link tab-link__green-light'>Last 30days</p>
        <p className='tab-link'>Custom</p>
      </div>
      {/* <!-- tab end  --> */}
      {/* <!-- ----- --> */}
      {/* <!-- tab start  --> */}
      <div className='tab-link-parent mb-20'>
        <p className='tab-link'>All</p>
        <p className='tab-link'>Today</p>
        <p className='tab-link tab-link_faded'>Last 7days</p>
        <p className='tab-link'>Last 14days</p>
        <p className='tab-link'>Last 30days</p>
        <p className='tab-link'>Custom</p>
      </div>
      {/* <!-- tab end  --> */}
      {/* <!-- tab start  --> */}
      <div className='tab-link-parent mb-20'>
        <p className='tab-link'>All</p>
        <p className='tab-link'>Today</p>
        <p className='tab-link'>Last 7days</p>
        <p className='tab-link tab-link_faded'>Last 14days</p>
        <p className='tab-link'>Last 30days</p>
        <p className='tab-link'>Custom</p>
      </div>
      {/* <!-- tab end  --> */}
    </>
  )
}

export default TabsAndTabLinks

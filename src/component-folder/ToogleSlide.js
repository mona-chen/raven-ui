import React from 'react'
import RavenToggleSlide from '../Reusables/RavenToggleSlide'

const ToogleSlide = () => {
  return (
   <>
     <div style={{ display: "flex", gap: "2rem" }} className="">
        
          <RavenToggleSlide color={`orange-light`} id={'ksj'} />
          <RavenToggleSlide color={`green-light`} id={'ksois'} />
          <RavenToggleSlide color={`deep-green-light`} id={'ksjsjs'} />
          <RavenToggleSlide color={`black-light`} id={'ksjsj0'} />
          <RavenToggleSlide color={`purple-light`} id={'ksjpq'} />
          <RavenToggleSlide color={`blue-light`}  id={'ksj1s'}/>
        </div>
   </>
  )
}

export default ToogleSlide
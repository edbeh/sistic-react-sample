import React from 'react'

import Carousel from './Carousel'
import EventSummary from './EventSummary'

const Hero = () => {
  return (
    <div className='hero-container'>
      <Carousel />
      <EventSummary />
    </div>
  )
}

export default Hero

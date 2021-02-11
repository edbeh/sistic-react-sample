import React from 'react'

import Carousel from './Carousel'
import EventSummary from './EventSummary'

const Hero = ({ event }) => {
  return (
    <div className='hero-container'>
      <Carousel photos={event.photos} />
      <EventSummary event={event} />
    </div>
  )
}

export default Hero

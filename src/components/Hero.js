import React from 'react'
import PropTypes from 'prop-types'

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

Hero.propTypes = {
  event: PropTypes.object.isRequired,
}

export default Hero

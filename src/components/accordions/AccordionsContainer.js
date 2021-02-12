import React from 'react'
import PropTypes from 'prop-types'

import Synopsis from './Synopsis'
import Details from './Details'
import AdmissionRules from './AdmissionRules'
import PriceDetails from './PriceDetails'
import Others from './Others'

import { toTitleCase } from '../../utils/toTitleCase'

const AccordionsContainer = ({ event }) => {
  return (
    <div className='accordions-container'>
      <div className='left-accordions'>
        {event.synopsis && <Synopsis content={event.synopsis} />}
        {event.details && <Details details={event.details} />}
        {event.admission_rules && (
          <AdmissionRules admissionRules={event.admission_rules} />
        )}
        {event.others &&
          event.others.map((item, i) => {
            return Object.entries(item).map(([title, content]) => {
              return (
                <Others
                  key={i}
                  title={toTitleCase(title.replaceAll('_', ' '))}
                  content={content}
                />
              )
            })
          })}
      </div>
      <div className='right-accordions'>
        {event.price && event.price.standard && (
          <PriceDetails priceDetails={event.price} />
        )}
      </div>
    </div>
  )
}

AccordionsContainer.propTypes = {
  event: PropTypes.object.isRequired,
}

export default AccordionsContainer

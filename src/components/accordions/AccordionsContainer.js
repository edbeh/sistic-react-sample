import React from 'react'
import { useSelector } from 'react-redux'

import Synopsis from './Synopsis'
import Details from './Details'
import AdmissionRules from './AdmissionRules'
import PriceDetails from './PriceDetails'
import Others from './Others'

import { toTitleCase } from '../../utils/toTitleCase'

const AccordionsContainer = () => {
  const event = useSelector((state) => state.eventReducer.event)

  return (
    <div className='accordions-container'>
      <div className='left-accordions'>
        {event.synopsis && <Synopsis />}
        {event.details && <Details />}
        {event.admission_rules && <AdmissionRules />}
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
        {event.price && event.price.standard && <PriceDetails />}
      </div>
    </div>
  )
}

export default AccordionsContainer

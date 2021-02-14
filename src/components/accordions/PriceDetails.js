import React from 'react'
import { useSelector } from 'react-redux'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import { useStyles } from './accordionStyles'
import HoverPopover from '../HoverPopover'

const PriceDetails = () => {
  const classes = useStyles()
  const priceDetails = useSelector((state) => state.eventReducer.event.price)

  return (
    <div className='accordions'>
      <Accordion square variant='outlined'>
        <AccordionSummary
          className={classes.accordionSummary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <div>
            <Typography className={classes.heading}>Price Details</Typography>
            <Typography variant='subtitle2' style={{ display: 'flex' }}>
              (Excludes Booking Fee) <HoverPopover />
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.content}>
            Standard: S${priceDetails.standard}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default PriceDetails

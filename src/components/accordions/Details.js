import React from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import { useStyles } from './accordionStyles'
import { formatISODate } from '../../utils/parseDate'

const Details = ({ details }) => {
  const classes = useStyles()

  return (
    <div className='accordions'>
      <Accordion square variant='outlined'>
        <AccordionSummary
          className={classes.accordionSummary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography className={classes.heading}>Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.content} component='div'>
            {/* <div> */}
            <p>
              <strong>Start Sales Date:</strong>
            </p>
            {details.sales_start_date.internet && (
              <p>
                <span>Internet: </span>
                <br />
                <span>{formatISODate(details.sales_start_date.internet)}</span>
              </p>
            )}
            {details.sales_start_date.hotline && (
              <p>
                <span>Hotline: </span>
                <br />
                <span>{formatISODate(details.sales_start_date.hotline)}</span>
              </p>
            )}
            {details.duration && (
              <>
                <hr />
                <p>
                  <strong>Duration:</strong>
                  <br />
                  <span>Approximately {details.duration} minutes</span>
                </p>
              </>
            )}
            {details.language && (
              <>
                <hr />
                <p>
                  <strong>Language:</strong>
                  <br />
                  <span>{details.language}</span>
                </p>
              </>
            )}
            {details.streaming_details && (
              <>
                <hr />
                <p>
                  <strong>Streaming Details:</strong>
                  <br />
                  <span>{details.streaming_details}</span>
                </p>
              </>
            )}
            {/* </div> */}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Details

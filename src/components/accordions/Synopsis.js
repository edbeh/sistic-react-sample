import React from 'react'
import { useSelector } from 'react-redux'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import DOMPurify from 'dompurify'

import { useStyles } from './accordionStyles'

const Synopsis = () => {
  const classes = useStyles()

  const content = useSelector((state) => state.eventReducer.event.synopsis)

  // sanitize html to prevent xss attacks
  const sanitizedHTML = DOMPurify.sanitize(content.replaceAll('\n', '<br />'), {
    USE_PROFILES: { html: true },
  })

  return (
    <div className='accordions'>
      <Accordion square variant='outlined' expanded>
        <AccordionSummary
          className={classes.accordionSummary}
          // expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography className={classes.heading}>Synopsis</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            className={classes.content}
            dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
          ></Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Synopsis

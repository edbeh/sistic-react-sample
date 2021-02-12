import React from 'react'
import PropTypes from 'prop-types'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import DOMPurify from 'dompurify'

import { useStyles } from './accordionStyles'

const Others = ({ title, content }) => {
  const classes = useStyles()

  // sanitize html to prevent xss attacks
  const sanitizedHTML = DOMPurify.sanitize(content, {
    USE_PROFILES: { html: true },
  })

  return (
    <div className='accordions'>
      <Accordion square variant='outlined'>
        <AccordionSummary
          className={classes.accordionSummary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography className={classes.heading}>{title}</Typography>
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

Others.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default Others

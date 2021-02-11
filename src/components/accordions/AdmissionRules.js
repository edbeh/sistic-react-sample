import React from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import { useStyles } from './accordionStyles'

const AdmissionRules = ({ admissionRules }) => {
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
          <Typography className={classes.heading}>Admission Rules</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.content} component='div'>
            <div>
              {admissionRules.map((rule, i) => {
                return Object.entries(rule).map(([title, content]) => {
                  const contentDetails = content.split('\n')
                  return (
                    <div key={i}>
                      <p>
                        <strong>{title}</strong>
                      </p>
                      <ul>
                        {contentDetails.map((item, i) => {
                          return <li key={i}>{item}</li>
                        })}
                      </ul>
                      <br />
                    </div>
                  )
                })
              })}
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default AdmissionRules

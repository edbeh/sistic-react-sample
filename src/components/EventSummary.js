import React from 'react'
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined'
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined'
import EventSeatOutlinedIcon from '@material-ui/icons/EventSeatOutlined'
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

import { formatISODate } from '../utils/parseDate'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0px 20px',
    color: '#fff',
    background: '#138BE7',
    borderRadius: '0',
    width: '90%',
  },
  label: {
    fontFamily: 'Rubik',
  },
}))

const EventSummary = ({ event }) => {
  const classes = useStyles()
  return (
    <div className='event-information'>
      <div className='event-summary'>
        {event.tags &&
          event.tags.map((tag, i) => (
            <span key={i} className='event-tag'>
              {tag}
            </span>
          ))}
        <p className='event-title'>{event.title}</p>
        <span className='event-organizer'>by {event.organizer}</span>
        <div className='summary-items'>
          {event.date && (
            <div className='summary-item'>
              <EventNoteOutlinedIcon /> <div className='spacer' />{' '}
              <span>{formatISODate(event.date, true)}</span>
            </div>
          )}
          {event.location && (
            <div className='summary-item'>
              <RoomOutlinedIcon /> <div className='spacer' />{' '}
              <span>{event.location}</span>
            </div>
          )}
          {event.seatmap && (
            <div className='summary-item'>
              <EventSeatOutlinedIcon /> <div className='spacer' />{' '}
              <a href='/'>{event.seatmap}</a>
            </div>
          )}
          {event.price && event.price.standard && (
            <div className='summary-item'>
              <MonetizationOnOutlinedIcon /> <div className='spacer' />{' '}
              <span className='summary-price'>S${event.price.standard}</span>
            </div>
          )}
        </div>
      </div>
      <div className='buy-tickets'>
        <Button size='large' variant='contained' className={classes.root}>
          Buy Tickets
        </Button>
      </div>
    </div>
  )
}

export default EventSummary

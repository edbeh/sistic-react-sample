import React from 'react'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
}))

const HoverPopover = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <div>
      <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup='true'
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <InfoOutlinedIcon
          fontSize='small'
          style={{ color: '#1887E0', marginLeft: '5px' }}
        />
      </Typography>
      <Popover
        id='mouse-over-popover'
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography variant='subtitle2'>
          Please add to above price <br />
          S$4 Booking Fee per ticket for tickets above S$40;
          <br />
          S$3 Booking Fee per ticket for tickets between S$20.01 - S$40 and
          <br />
          S$1 Booking Fee per ticket for tickets S$20 and below.
          <br /> Charges include GST where applicable.
        </Typography>
      </Popover>
    </div>
  )
}

export default HoverPopover

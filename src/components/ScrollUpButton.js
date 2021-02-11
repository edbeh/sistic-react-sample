import React from 'react'
import ScrollToTop from 'react-scroll-up'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

const ScrollUpButton = () => {
  return (
    <ScrollToTop
      showUnder={160}
      style={{
        borderRadius: '50%',
        background: '#0098ff',
        width: '50px',
        height: '50px',
        color: '#fff',
        zIndex: '1',
      }}
    >
      <ExpandLessIcon style={{ height: '50px', width: '50px' }} />
    </ScrollToTop>
  )
}

export default ScrollUpButton

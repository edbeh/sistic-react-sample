import React from 'react'
import ScrollToTop from 'react-scroll-up'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

const ScrollUpButton = () => {
  return (
    <ScrollToTop
      className='scroll-up-button'
      showUnder={160}
      style={{
        borderRadius: '50%',
        background: '#0098ff',
        width: '40px',
        height: '40px',
        color: '#fff',
        zIndex: '1',
      }}
    >
      <ExpandLessIcon style={{ height: '40px', width: '40px' }} />
    </ScrollToTop>
  )
}

export default ScrollUpButton

import React from 'react'
import PropTypes from 'prop-types'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import KeyboardArrowLeftOutlinedIcon from '@material-ui/icons/KeyboardArrowLeftOutlined'
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined'

import SearchBar from './SearchBar'
import logo from '../assets/images/sistic-logo.png'

const Nav = ({ prev, next, handleNavigate }) => {
  return (
    <div className='navbar'>
      <div className='top-header'>
        <div className='top-header-left'>
          <img src={logo} alt='logo' />
          <SearchBar />
        </div>
        <div className='top-header-right'>
          <ButtonGroup disableElevation variant='contained' color='primary'>
            <Button
              startIcon={<KeyboardArrowLeftOutlinedIcon />}
              color='primary'
              disabled={!prev}
              onClick={() => handleNavigate(prev)}
            >
              Prev
            </Button>
            <Button
              endIcon={<KeyboardArrowRightOutlinedIcon />}
              color='secondary'
              disabled={!next}
              onClick={() => handleNavigate(next)}
            >
              Next
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <div className='bottom-header'>
        <div className='bottom-header-left'>
          <ul>
            <li>
              <a href='/'>Events</a>
            </li>
            <li>
              <a href='/'>Attractions</a>
            </li>
            <li>
              <a href='/'>Promotions</a>
            </li>
            <li>
              <a href='/'>Explore</a>
            </li>
          </ul>
        </div>
        <div className='bottom-header-right'>
          {/* <span>This is right</span> */}
        </div>
      </div>
    </div>
  )
}

Nav.propTypes = {
  prev: PropTypes.string,
  next: PropTypes.string,
  handleNavigate: PropTypes.func.isRequired,
}

export default Nav

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import KeyboardArrowLeftOutlinedIcon from '@material-ui/icons/KeyboardArrowLeftOutlined'
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined'

import SearchBar from './SearchBar'
import logo from '../assets/images/sistic-logo.png'
import { fetchEvent } from '../eventActions'

const Nav = () => {
  const prev = useSelector((state) => state.eventReducer.event.prev)
  const next = useSelector((state) => state.eventReducer.event.next)
  const dispatch = useDispatch()

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
              onClick={() => dispatch(fetchEvent(prev))}
            >
              Prev
            </Button>
            <Button
              endIcon={<KeyboardArrowRightOutlinedIcon />}
              color='secondary'
              disabled={!next}
              onClick={() => dispatch(fetchEvent(next))}
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
              <a href='/sistic-react-sample/'>Events</a>
            </li>
            <li>
              <a href='/sistic-react-sample/'>Attractions</a>
            </li>
            <li>
              <a href='/sistic-react-sample/'>Promotions</a>
            </li>
            <li>
              <a href='/sistic-react-sample/'>Explore</a>
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

export default Nav

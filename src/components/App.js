import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from 'react-fullscreen-loading'

import ScrollUpButton from './ScrollUpButton'
import Nav from './Nav'
import Hero from './Hero'
import AccordionsContainer from './accordions/AccordionsContainer'
import Footer from './Footer'

import { fetchEvent } from '../eventActions'

import '../assets/css/App.css'

const App = () => {
  const event = useSelector((state) => state.eventReducer.event)
  const error = useSelector((state) => state.eventReducer.error)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchEvent())
    // eslint-disable-next-line
  }, [])

  if (error) return <div>An error has occured: {error}</div>

  if (!event)
    return <Loading loading={true} background='#fff' loaderColor='#3498db' />

  return (
    <div>
      <ScrollUpButton />
      <Nav />
      <Hero />
      <AccordionsContainer />
      <Footer />
    </div>
  )
}

export default App

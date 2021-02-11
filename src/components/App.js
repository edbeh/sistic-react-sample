import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from 'react-fullscreen-loading'
import '../assets/css/App.css'

import ScrollUpButton from './ScrollUpButton'
import Nav from './Nav'
import Hero from './Hero'
import AccordionsContainer from './accordions/AccordionsContainer'
import Footer from './Footer'

const App = () => {
  const [event, setEvent] = useState(null)

  useEffect(() => {
    fetchUrl()
  }, [])

  const fetchUrl = (url) => {
    const apiUrl =
      url ||
      'https://sistic-react-sample.s3-ap-southeast-1.amazonaws.com/apis/page1.json'
    axios
      .get(apiUrl)
      .then((resp) => setEvent(resp.data))
      .catch((err) => console.error(err))
  }

  const handleNavigate = (url) => {
    setEvent(null)
    fetchUrl(url)
  }

  if (!event)
    return <Loading loading={true} background='#fff' loaderColor='#3498db' />

  return (
    <div>
      <ScrollUpButton />
      <Nav
        prev={event.prev}
        next={event.next}
        handleNavigate={handleNavigate}
      />
      <Hero event={event} />
      <AccordionsContainer event={event} />
      <Footer />
    </div>
  )
}

export default App

import React from 'react'
import { useSelector } from 'react-redux'
import ImageGallery from 'react-image-gallery'

const Carousel = () => {
  const photos = useSelector((state) => state.eventReducer.event.photos)

  const images = photos.map((url) => {
    return { original: url, thumbnail: url }
  })

  return (
    <ImageGallery
      className='image-gallery-slide'
      showNav={false}
      showPlayButton={false}
      showFullscreenButton={false}
      autoPlay
      items={images}
    />
  )
}

export default Carousel

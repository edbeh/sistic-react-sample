import React from 'react'

import logo from '../assets/images/footer-logo.png'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div>
        <img src={logo} alt='logo' />
      </div>
      <div>
        <p>Copyright 1998 - 2021. © SISTIC.com Pte Ltd</p>
      </div>
      <div>
        <a href='/'>Privacy Policy</a> | <a href='/'>Terms & Conditions</a>
      </div>
      <div>
        <p>SISTIC Hotline: +65 63485555</p>
      </div>
    </div>
  )
}

export default Footer

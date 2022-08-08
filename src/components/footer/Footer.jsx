import React from 'react';
import up from '../../assets/images/Vector1.png'

import './Footer.scss'

const Footer = () => {
  return (
    <>
    <div className='footer-wrapper'>
        <div className='footer-wrapper-logo-area'>
            <h3>LOGO</h3>
            <p>Outsource Your Development at Affordable Prices to Senior Engineers in Armenia</p>
        </div>
        <div className='footer-wrapper-functional-area'>
            <p>Services</p>
            <p>Expertise</p>
            <p>Portfolio</p>
        </div>
        <div className='footer-wrapper-button-area'>
            <p>Scroll to up</p>
            <img src={up} alt="up"/>
        </div>
    </div>
    <p className='last'>© 2022 Company Name . All rights reserved</p>
    </>
  )
}

export default Footer
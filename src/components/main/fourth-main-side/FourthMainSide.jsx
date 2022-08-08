import React from 'react'
import './FourthMainSide.scss'
import  Frame from '../../../assets/images/Frame.png'

const FourthMainSide = () => {
  return (
    <div className='wrapper'>
      <div className='wrapper-container'>
      <img  className='container-space-img' src={Frame} alt='frame'/>
      <div className='wrapper-container-info-area'>
        <h1>Contact Us</h1>
        <p>Get in touch with us for a free estimation and a consultation at no cost. No sales agent, you'll get to talk to the developers in charge.</p>
        <div className='wrapper-container-info-area-first-inputs-line'>
          <input type="text" placeholder='First Name'/>
          <input type="number" placeholder='Phone Number' className='wrapper-container-info-area-first-inputs-line-phone-input'/>
        </div>
        <input type="text"placeholder='Login' className='wrapper-container-info-area-login'/>
        <input className='wrapper-container-info-area-placeholder' type='text' placeholder='FirstName'/>
        <button type='button'>Free Estimation</button>
      </div>
      </div>
    </div>
  )
}

export default FourthMainSide
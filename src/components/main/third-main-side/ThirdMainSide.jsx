import React from 'react'
import './ThirdMainSide.scss'
import {thirdData} from '../../../data/third-data'

const ThirdMainSide = () => {
    return (
      <div className="third-main-side-wrapper">
          <div className='third-main-side-wrapper-textes'>
              <h1>Our Portfolio</h1>
              <p>By partnering with Datalite you will receive professional services in the following technologies.</p>
              </div>
              <div className='third-main-side-wrapper-cards'>
                  {
                      thirdData.map((image)=>{
                          return (
                                  <img src={image.src} alt={image.id} />
                              )
                      })
                  }
              </div>  
          </div>
     
    
  )
}

export default ThirdMainSide
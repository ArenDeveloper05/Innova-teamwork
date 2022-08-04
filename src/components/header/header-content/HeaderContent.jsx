import React from 'react'
import '../../header/header-content/HeaderContent.scss'
import "@fontsource/archivo-black";
const HeaderContent = () => {
  return (
      <div className="header-content">
        <div className="header-content-color"></div>
          <div className='header-content-desc'>
            <h1>Outsource Your Development</h1>
            <p>Outsource Your Development at Affordable Prices to Senior Engineers in Armenia</p>
              <section  className='header-content-desc-section'>
                <div className="header-content-desc-section-buttons">
                  <button >Free Estimation</button>
                </div>
                <div className="header-content-desc-section-play">
                  <a href="#play"><div className="header-content-desc-section-play-icon"></div></a>
                  <span>Play Video</span>
                </div>
              </section>
          </div>
      </div>
  )
}

export default HeaderContent
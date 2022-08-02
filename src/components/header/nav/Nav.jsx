import React from 'react'
import './Nav.scss'

const Nav = () => {
  return (
    <nav>
        <div className="nav-logo">
            <span>LOGO</span>
        </div>
        <ul className='nav-list'>
            <li><a href="#services">Services</a></li>
            <li><a href="#expertise">Expertise</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
        </ul>
        <button className='nav-button'>
            Free Estimation
        </button>
    </nav>
  )
}

export default Nav
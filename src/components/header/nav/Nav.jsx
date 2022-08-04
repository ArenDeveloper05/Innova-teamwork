import React, { useRef } from 'react'
import './Nav.scss'

const Nav = () => {

  const navRef = useRef(null);

  window.addEventListener('scroll',()=>{
    if(window.scrollY>670) {
      navRef.current.style.opacity = "0";
    }
    else{
      navRef.current.style.opacity = "1";
    }
  })
  return (
    <nav ref={navRef}>
        <div className="nav-logo pointer">
            <span>LOGO</span>
        </div>
        <ul className='nav-list'>
            <li><a href="#services">Services</a></li>
            <li><a href="#expertise">Expertise</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
        </ul>
        <button className='nav-button pointer'>
            Free Estimation
        </button>
    </nav>
  )
}

export default Nav
import React from 'react'
import HeaderContent from './header-content/HeaderContent'
import './Header.scss'
import Nav from './nav/Nav'

const Header = () => {
  return (
    <header>
      <Nav />
      <HeaderContent />
    </header>
  )
}

export default Header

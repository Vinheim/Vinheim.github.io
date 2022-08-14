import React from 'react'
import './header.css'
import ActionCall from './ActionCall'
import Me from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>John Hessefort</h1>
        <h5 className="text-light">Security+ Certified with Secret Clearance</h5>
        <h5 className="text-light">Frontend Developer & Software Engineer</h5>
        <ActionCall />
        <HeaderSocial />

        <div className="me">
          <img src={Me} alt="Front-facing portfolio"/>
        </div>
      </div>
    </header>
  )
}

export default Header
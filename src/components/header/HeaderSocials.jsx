import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaUniversity} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/johnhessefort/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Vinheim" target="_blank"><FaGithub/></a>
        <a href="https://www.odu.edu/sci/academics/advising/fellows" target="_blank"><FaUniversity/></a>
    </div>
    
  )
}

export default HeaderSocials
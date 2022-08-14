import React from 'react'
import resume from '../../assets/resume.pdf'
import cert from '../../assets/security-plus.pdf'

const ActionCall = () => {
  return (
    <div className="cta">
        <a href={resume} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
        <a href={cert} download className='btn'>Download Certification</a>
    </div>
  )
}

export default ActionCall
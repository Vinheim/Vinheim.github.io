import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {BsPeople} from 'react-icons/bs'
import {BsFolder2} from 'react-icons/bs'
// import GradF from '../../assets/Grad Frontal.jpg'
// import SideV from '../../assets/Graduation John.jpg'
import StatGrad from '../../assets/Statue Grad.jpg'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={StatGrad} alt="About"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>6+ Years Programming</small>
            </article>

            <article className="about__card">
              <BsFolder2 className='about__icon'/>
              <h5>Projects</h5>
              <small>60+ Completed</small>
            </article>

            <article className="about__card">
              <BsPeople className='about__icon'/>
              <h5>Students</h5>
              <small>1000+ Tutored</small>
            </article>
          </div>

          <p className="summary">
            Hi! I'm John, and I worked at ODU with the computer science department and greater College
            of Sciences to establish a STEM tutoring initiative for students in computer science, discrete mathematics, and linear algebra courses.
            Additionally, I served as a computer science student ambassador and representative on the College of Sciences student advisory board. 
            <br></br><br></br>
            It's through these programs that I developed my aptitude for collaboration with others in learning, planning, and cooperating to solve problems.
            I have skills in and experience working with programming concepts in educational and industrial environments both, and 
            these include responsive web design, web development technologies, object-oriented programming with languages like C++ and Python,
            and AI/ML theory with practical applications in machine learning for data analysis and pattern recognition.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
        </div>
      </div>
    </section>
  )
}

export default About
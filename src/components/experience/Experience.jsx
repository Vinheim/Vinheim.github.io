import React from 'react'
import './experience.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Web Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <h4>HTML</h4>
              <small className="text-light">Advanced</small>
            </article>  
            <article className="experience__details">  
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <h4>React</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill className="experience__details-icon" />
              <h4>Node</h4>
              <small className="text-light">Familiar</small>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <h4>ExtJS</h4>
              <small className="text-light">Familiar</small>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className='experience__oop'>
          <h3>Object-oriented Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <h4>C++</h4>
              <small className="text-light">Advanced</small>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <h4>C#</h4>
              <small className="text-light">Advanced</small>
            </article>
            <article className="experience__details">  
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <h4>Python</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <h4>Tensorflow</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <h4>AI/ML</h4>
              <small className="text-light">Knowledgeable</small>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill className='experience__details-icon'/>
              <h4>Java</h4>
              <small className="text-light">Knowledgeable</small>
            </article>
          </div>        
        </div>
      </div>
    </section>
  )
}

export default Experience
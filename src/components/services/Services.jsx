import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
<BiCheck size={32} />

const Services = () => {
  return (
    <section id="services">
      <h5>Skills I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Possess extensive foundational IT security knowledge for managing web applications and respective data</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Understand relational database concepts with development in MySQL</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Design page appearances by modern standards and conventions</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Implement responsive designs of UI/UX with streamlined ReactJS framework methodologies</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Work with baseline web development technologies like HTML, CSS, and JavaScript</p>
            </li>
            <li>
              <BiCheck  className="service__list-icon"/>
              <p>Developed user account authentication in Android Studio with JavaScript and Firebase framework</p>
            </li>
          </ul>
        </article>
        {/* END OF WEBDEV */}
        <article className="service">
          <div className="service__head">
            <h3>Object-Oriented Programming</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Understand composition and inheritance in class and object contexts</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Work extensively in C++ with polymorphism and encapsulation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Experienced in secure data abstraction for prevention of data misuse with proper hiding</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Worked with complex industrial systems making use of the OOP model in C++</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Implemented programs to manage personal schedules and information regarding contacts with OOP</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Possess understanding of complex algorithms and data structures with respective time/space complexities</p>
            </li>
          </ul>
        </article>
        {/* END OF WEBDEV  */}
        <article className="service">
          <div className="service__head">
            <h3>AI/ML Expertise</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Designed machine learning algorithms in Python with Numpy, Pandas, and Scikit Learn libraries for data analysis</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Implemented neural networks with perceptrons and logic gates for display recognition in C++</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Worked with convolutional neural networks for bioinformatics research in protein secondary structure classification</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Experienced with data structures and algorithms pertaining to heuristic functions</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Participated in DeapSECURE crash course training sessions to learn more about and practice with Linux, HPC, Big Data, Machine Learning, and Deep Learning</p>
            </li>
          </ul>
        </article>
        {/* END OF AI/ML  */}
      </div>
    </section>
  )
}

export default Services
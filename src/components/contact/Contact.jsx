import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineMessage} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xegze03', 'template_2n1u07f', form.current, '4b8Ijx3qWvY3KZ189');
    e.target.reset();  
  };

  return (
    <section id="contact">
      <h5>Get in Touch!</h5>
      <h2>Contact Me</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option" target="_blank">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>John@allaboutjohn.net</h5>
            <a href="mailto:john@allaboutjohn.net">Email Me!</a>
          </article>
          <article className="contact__option">
            <AiOutlineMessage className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>John Hessefort</h5>
            <a href="https://m.me/john.hessefort/" target="_blank">Message Me!</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <input type="text" name='subject' placeholder='Subject' required />
          <textarea name="message" rows="7" placeholder='Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
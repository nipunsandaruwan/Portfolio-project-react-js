import './ContactMe.css'

import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

//add emailjs npm package (npm add emaijs)
//after that add @emailjs/browser npm package (npm add @emailjs/browser)
const ContactMe = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_prrzypl', 'template_388ogod', form.current, 'VM83xugEhNe2Tgt5M')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className='contact-me' id='ContactMe'>
        <div className="contact-left">
            <span>Get in Touch</span>
            <span>Contact Me</span>
        </div>

        <div className="contact-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="email" name='user_email' className='user' placeholder='Email' />
                <textarea name="message"  cols="30" rows="10" className='user' placeholder='Message'></textarea>
                <input type='submit' className='button' value="Send" />
            </form>
        </div>      
    </div>
  )
}

export default ContactMe

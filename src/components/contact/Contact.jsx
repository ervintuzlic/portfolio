import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import {FaLinkedinIn} from 'react-icons/fa';
import {FiGithub} from 'react-icons/fi';
import {BiWorld} from 'react-icons/bi';
import {AiFillMail} from 'react-icons/ai';
import {HiLocationMarker} from 'react-icons/hi';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_88zmeuc', 'template_g507759', form.current, 'x2NdWI8CioalFCQv1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };


  return (
    <section id='contact'>
      <div id="contactContainer">
        <h3>Contact me!</h3>
        <div id="contactSection">
          <div id="messageContainer">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name='name' placeholder="Your Name: " required />
              <input name='emailAddress' placeholder="Your Email Address: " required />
              <textarea name='message' placeholder="Your Message:  " required />
              <button class="sendMessageButton" type="submit">Send Message</button>              
            </form>
          </div>
          <div id="details">
            <div id="contactDetails">
              <h1>Contact Details</h1>
              <p><BiWorld style={{color:"white"}}/> www.ervin-portfolio.netlify.app</p>
              <p><AiFillMail style={{color:"white"}}/> ervin.tuzlic16@gmail.com</p>
              <p><HiLocationMarker style={{color:"white"}}/> Sarajevo, Bosnia and Herzegovina</p>
            </div>
            <div id="socialMediaDetails">
              <h1>Social Media Details</h1>
              <p><FaLinkedinIn style={{color:"white"}}/> www.linkedin.com/ervin-tuzlic/</p>
              <p><FiGithub style={{color:"white"}}/> www.github.com/ervin-tuzlic/</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
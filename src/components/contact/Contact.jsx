import React from 'react';
import './Contact.css';
import {FaLinkedinIn} from 'react-icons/fa';
import {FiGithub} from 'react-icons/fi';
import {BiWorld} from 'react-icons/bi';
import {AiFillMail} from 'react-icons/ai';
import {HiLocationMarker} from 'react-icons/hi';

const Contact = () => {
  return (
    <section id='contact'>
      <div id="contactContainer">
        <h3>Contact me!</h3>
        <div id="contactSection">
          <div id="messageContainer">
            <input type="text" placeholder="Your Name: " />
            <input placeholder="Your Email Address: " />
            <textarea style={{height:"300px"}} placeholder="Your Message:  " />
            <button>Send Message</button>
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
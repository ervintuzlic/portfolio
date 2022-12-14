import React from 'react';
import './Socials.css';
import {FaLinkedinIn} from 'react-icons/fa';
import {FiGithub} from 'react-icons/fi';

const Socials = () => {
  return (
    <div id="socialsContainer">
        <div class="leftSocials">
            <a href="https://www.linkedin.com/in/ervin-tuzlic/" target="_blank" rel="noreferrer"><FaLinkedinIn style={{width:"24px", height:"24px", cursor:"pointer"}}/></a>
            <a href="https://www.github.com/ervintuzlic" target="_blank" rel="noreferrer"><FiGithub style={{width:"24px", height:"24px", cursor:"pointer"}}/></a>
        </div>
        <div class="rightSocials">
            <p class="emailSocial"><a href="mailto:ervin.tuzlic16@gmail.com">ervin.tuzlic16@gmail.com</a></p>
        </div>
    </div>
  )
}

export default Socials
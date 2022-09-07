import React from 'react';
import './About.css';
import Avatar from '../../assets/avatar.jpg';

const About = () => {
  return (
    <section id='about'>
      <div id="aboutContainer">
        <div class="aboutHeadline">About Me</div>
        <img src={Avatar} alt="avatar" class="avatar" />
        <div class="aboutSection">
          <h3>Ervin Tuzlic</h3>
          <p>Software engineer eager to devote his full attention to the world of programming.
            As someone who studies software engineering, I have experience in ASP.NET MVC, HTML, CSS,
            JavaScript, and jQuery, and I am quite familiar with the syntax and logic of C++ and C#.</p>
          <br></br>
          <p>I have a strong passion for programming, but I have also spent a significant part of my life in the
            design industry, gaining three years of expertise in using tools like Photoshop, Adobe Illustrator,
            Figma, and others to create magic.</p>
          <br></br>
          <p>As someone who always likes to learn something new and get to know every corner of IT, I look
            forward to new collaborations and programming problems that are waiting for me to solve!</p>
        </div>
        <div class="ContactMe2">
          <a href="#contact"><button type="button" className="SendMessage" style={{cursor:"pointer" }}>Download CV</button></a>
        </div>
      </div>
    </section>
  )
}

export default About
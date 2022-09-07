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
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident eligendi, voluptas quidem a tempore pariatur omnis aliquid? Nisi doloribus laudantium provident fugiat cumque consectetur accusamus sit dicta error, ratione quam.</p>
          <br></br>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident eligendi, voluptas quidem a tempore pariatur omnis aliquid? Nisi doloribus laudantium provident fugiat cumque consectetur accusamus sit dicta error, ratione quam.</p>
          <br></br>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident eligendi, voluptas quidem a tempore pariatur omnis aliquid? Nisi doloribus laudantium provident fugiat cumque consectetur accusamus sit dicta error, ratione quam.</p>
        </div>
        <div class="ContactMe2">
          <a href="#contact"><button type="button" className="SendMessage" style={{cursor:"pointer" }}>Contact me!</button></a>
        </div>
      </div>
    </section>
  )
}

export default About
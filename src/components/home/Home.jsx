import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id='home'>
        <div id="container">
            <div class="information-box">
                <h3>Hi, my name is</h3>
                <h1>Ervin Tuzlic.</h1>
                <p>I'm a software engineer developing stuff.</p>
                <a href="#projects" ><button className="checkProjects" type="button" style={{cursor:"pointer" }}>Check out my projects!</button></a>              
            </div>
            <div class="rotatingCube">
                <div id="cubecontainer">
                    <div id="cube">
                        <div class="front"></div>
                        <div class="back"></div>
                        <div class="right"></div>
                        <div class="left"></div>
                        <div class="top"></div>
                        <div class="bottom"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home
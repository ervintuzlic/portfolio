import React from 'react';
import Nav from './components/navigation/Nav';
import Socials from './components/socials/Socials';
import Home from './components/home/Home';
import About from './components/about/About';
import Project from './components/projects/Project';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <>
        <Nav />
        <Socials />
        <Home />
        <About />
        <Project />
        <Contact />
    </>
  )
}

export default App
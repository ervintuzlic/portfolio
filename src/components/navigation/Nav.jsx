import React from 'react';
import './Nav.css';
import logo from '../../assets/logoet.svg';

import {AiFillHome} from 'react-icons/ai';
import {BsFillPersonFill} from 'react-icons/bs';
import {MdLibraryBooks} from 'react-icons/md';

const Nav = () => {
  return (
    <div id="nav-container">
        <div class="logo">
            <img class="etlogo" src={logo}/>
        </div>
        <div class="navigation-bar">
            <nav>
                <ul>
                    <li>
                        <a href="#home"><AiFillHome style={{width:"24px", height:"24px", cursor:"pointer"}}/></a>
                    </li>
                    <li>
                        <a href="#about"><BsFillPersonFill style={{width:"24px", height:"24px", cursor:"pointer"}}/></a>
                    </li>
                    <li>
                        <a href="#projects"><MdLibraryBooks style={{width:"24px", height:"24px", cursor:"pointer"}}/></a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="contactme">
            <a href="#contact" ><button className="contactmebtn" type="button" style={{cursor:"pointer" }}>Contact me!</button></a>
        </div>
    </div>
  )
}

export default Nav
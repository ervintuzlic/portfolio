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
                        <AiFillHome style={{width:"24px", height:"24px"}}/>
                    </li>
                    <li>
                        <BsFillPersonFill style={{width:"24px", height:"24px"}}/>
                    </li>
                    <li>
                        <MdLibraryBooks style={{width:"24px", height:"24px"}}/>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="contactme">
            <button>Contact me!</button>
        </div>
    </div>
  )
}

export default Nav
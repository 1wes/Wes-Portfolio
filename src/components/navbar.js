import './navbar.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { goToSection } from '../utils/section';

let LogoImage=()=>{

    return(
        <React.Fragment>
            <div className='image'>
                <img src={require('../wes.png')} alt='logo-image' />
            </div>
        </React.Fragment>
    )
}

let Navbar=()=>{

    const goToPortfolio=()=>{
        goToSection('my-portfolio');
    }

    const goToContacts=()=>{
        goToSection('contact-me')
    }

    return(

        <React.Fragment>
            <nav className='main-navbar'>
                <div className='logo'>
                    <LogoImage/>
                    <p><span>O</span><span>W</span><span>.</span> </p>
                </div>
                <div className='nav-menu-content'>
                    <ul>
                        <li>About</li>
                        <li>
                            Experience
                        </li>
                        <li onClick={goToPortfolio}>Projects</li>

                        <li onClick={goToContacts}>Contact</li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}
export{
    LogoImage
}
export default Navbar;
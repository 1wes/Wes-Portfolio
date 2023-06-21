import './navbar.css';
import React from 'react';
import { goToSection } from '../utils/section';

let LogoImage=()=>{

    return(
        <React.Fragment>
            <div className='image'>
                <img src={require('../wesCartoon.png')} alt='logo' />
            </div>
        </React.Fragment>
    )
}

let Navbar=()=>{

    const gotToAbout=()=>{
        goToSection('about-me')
    }

    const goToExperience=()=>{
        goToSection('my-work')
    }

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
                        <li onClick={gotToAbout}>About</li>
                        <li onClick={goToExperience}>Experience</li>
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
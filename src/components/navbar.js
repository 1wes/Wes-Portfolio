import './navbar.css';
import React from 'react';
import { goToSection } from '../utils/section';
import {FaBars} from 'react-icons/fa';
import { MdClose } from 'react-icons/md'
import { useState } from 'react';
import { Link } from 'react-router-dom';

let MobileNav=()=>{

    const [showHamburgerMenu, setShowHamburgerMenu]=useState(false);


    const showDropDownMenu=()=>{

        let hamburgerMenu=document.getElementById('hamburger-menu');

        setShowHamburgerMenu(!showHamburgerMenu);

        hamburgerMenu.classList.toggle('show-menu');
    }

    const goToAbout=()=>{

        goToSection('about-me');

        let hamburgerMenu=document.getElementById('hamburger-menu');

        setShowHamburgerMenu(!showHamburgerMenu);
        
        hamburgerMenu.classList.remove('show-menu');
    }

    const goToExperience=()=>{
 
        goToSection('my-work');

        let hamburgerMenu=document.getElementById('hamburger-menu');

        setShowHamburgerMenu(!showHamburgerMenu);
        
        hamburgerMenu.classList.remove('show-menu');
    }

    const goToPortfolio=()=>{

        goToSection('my-portfolio');

        let hamburgerMenu=document.getElementById('hamburger-menu');

        setShowHamburgerMenu(!showHamburgerMenu);
        
        hamburgerMenu.classList.remove('show-menu');
    }

    const goToContacts=()=>{

        goToSection('contact-me');

        let hamburgerMenu=document.getElementById('hamburger-menu');

        setShowHamburgerMenu(!showHamburgerMenu);
        
        hamburgerMenu.classList.remove('show-menu');
    }

    return(
        <React.Fragment>
            <nav className='mobile-nav'>
                <Link to={`/`} className='mobile-logo'>
                    <LogoImage/> <p><span>O</span><span>W</span><span>.</span> </p>
                </Link>
                <div className='mobile-nav-menu-content'>
                    <div className='mobile-hamburger'>
                        <i onClick={showDropDownMenu}>
                            {
                                showHamburgerMenu?<MdClose/>:<FaBars/>
                            }
                        </i>
                    </div>
                </div>

                <div className='dropdown-menu' id='hamburger-menu'>
                    <div className='dropdown-content'>
                        <ul>
                            <li onClick={goToAbout}>About</li>
                            <li onClick={goToExperience}>Experience</li>
                            <li onClick={goToPortfolio}>Projects</li>
                            <li onClick={goToContacts}>Contact</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

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
                    <Link className='logo' to={`/`}>
                        <LogoImage/><p><span>O</span><span>W</span><span>.</span> </p>
                    </Link>
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
    LogoImage,
    MobileNav
}
export default Navbar;
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
                        <li>Home</li>
                        <li onClick={goToPortfolio}>Portfolios</li>
                        <li>Blog
                            <i>
                                <FontAwesomeIcon icon={faArrowDownLong} />
                            </i>
                        </li>
                        <li onClick={goToContacts}>Contact</li>
                        <li></li>
                        <li>
                            <Link to={`https://github.com/1wes`} target='blank'>
                                <i>
                                    <FaGithub/>
                                </i>
                            </Link>
                        </li>
                        <li>
                            <Link to={`https://www.linkedin.com/in/okemwa-wes/`} target='blank'>
                                <i>
                                    <FaLinkedin/>
                                </i>
                            </Link>
                        </li>
                        <li>
                            <Link to={`https://twitter.com/okemwa_wes`} target='blank'>
                                <i>
                                    <FaTwitter/>
                                </i>
                            </Link>
                        </li>
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
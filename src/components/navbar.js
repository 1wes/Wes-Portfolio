import './navbar.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'

let Navbar=()=>{

    return(

        <React.Fragment>
            <nav className='main-navbar'>
                <div className='logo'>
                    <p><span>O</span><span>W</span><span>.</span> </p>
                </div>
                <div className='nav-menu-content'>
                    <ul>
                        <li>Home</li>
                        <li>Portfolios</li>
                        <li>Blog
                            <i>
                                <FontAwesomeIcon icon={faArrowDownLong} />
                            </i>
                        </li>
                        <li>Contact</li>
                        <li></li>
                        <li>
                            <i>
                                <FaGithub/>
                            </i>
                        </li>
                        <li>
                            <i>
                                <FaTwitter/>
                            </i>
                        </li>
                        <li>
                            <i>
                                <FaLinkedin/>
                            </i>
                        </li>

                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}
export default Navbar;
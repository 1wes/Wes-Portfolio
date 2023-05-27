import './navbar.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
export default Navbar;
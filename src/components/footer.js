import React from "react";
import './footer.css';
import { FaRegCopyright } from "react-icons/fa";
import { LogoImage } from "./navbar";
import { Link } from "react-router-dom";
import {FaGithub, FaLinkedin, FaTwitter, FaInstagramSquare} from 'react-icons/fa';

let Footer=()=>{

    return(

        <React.Fragment>
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-image">
                        <div className="footer-logo">
                            <LogoImage/>
                        </div>
                        <div className="footer-socials">
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
                            <li>
                                <Link to={`https://z-p15.www.instagram.com/w_es.le_y/`}>
                                    <i>
                                        <FaInstagramSquare/>
                                    </i>
                                </Link>
                            </li>
                        </div>
                    </div>
                    <div className="copyright">
                        <i><FaRegCopyright/></i>
                        <span> Wes</span>
                        <span>{new Date().getFullYear()}</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Footer;
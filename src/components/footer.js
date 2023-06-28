import React , {useState, useEffect} from "react";
import './footer.css';
import { FaRegCopyright } from "react-icons/fa";
import { LogoImage } from "./navbar";
import { Link } from "react-router-dom";
import {FaGithub, FaLinkedin, FaTwitter, FaInstagramSquare} from 'react-icons/fa';

let Footer=()=>{

    const [isIntersecting, setIsIntersecting]=useState(false)

    useEffect(()=>{

        const observer=new IntersectionObserver(([entry])=>{
            setIsIntersecting(entry.isIntersecting)
        }, {rootMargin:"-120px"});

        observer.observe(document.getElementById('app-footer'));
        console.log(isIntersecting)

        return()=>{
            observer.disconnect();
        }

    },[isIntersecting]);

    useEffect(()=>{
        if(isIntersecting){
            let navbar=document.getElementById('app-footer');

            navbar.querySelectorAll('div').forEach(list=>{
                list.classList.add('slide-up')
            })
        }
    },[isIntersecting])

    return(

        <React.Fragment>
            <div className="footer" id="app-footer">
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
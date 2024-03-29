import React, { useState, useEffect } from "react";
import './intro.css';
import { Link } from "react-router-dom";
import { goToSection } from "../utils/section";
import { FaGithub, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";

let Socials=()=>{

    return(

        <React.Fragment>
            <div className="socials">
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
                            <BsTwitterX/>
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
        </React.Fragment>
    )
}

let Intro=({onClick})=>{

    return(
        <React.Fragment>
            <div className="intro">
                <p className="greeting">Hi 👋, I am </p>

                <p className="name">Okemwa Wesley<span>.</span></p>

                <p className="punchline">
                   I build awesome <span>web-based</span> applications.
                </p>

                <p className="tagline">
                    I am a Full-Stack software engineer who enjoys building web applications that 
                    contribute to excellent digital experiences for users. 
                </p>

                <div className="cta-btn">
                    <button onClick={onClick}>
                        View My Work
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

let IntroContentSection=({children})=>{

    return(

        <React.Fragment>
            <div className="intro-content-section">
                {children}
            </div>
        </React.Fragment>
    )
}

let Version=()=>{

    return(
        <React.Fragment>
            <div className="version">
                <strong>v. 1.0.0</strong> 
            </div>
        </React.Fragment>
    )
}

let IntroSection=()=>{

    const [isIntersecting, setisIntersecting]=useState(false);

    useEffect(()=>{

        const observer=new IntersectionObserver(([entry])=>{
            setisIntersecting(entry.isIntersecting);
        }, {rootMargin:'0px'});

        observer.observe(document.getElementById('intro'));

        return()=>{
            observer.disconnect();
        }

    }, [isIntersecting]);

    useEffect(()=>{

        if(isIntersecting){
            let introSection=document.getElementById('intro');

            introSection.querySelectorAll('p').forEach(paragraph=>{
                paragraph.classList.add("slide-sideways");
            })

            introSection.querySelectorAll('div').forEach(element=>{
                element.classList.add("slide-up");
            })

            introSection.querySelectorAll('button').forEach(button=>{
                button.classList.add("slide-sideways");
            })
        }
    }, [isIntersecting])

    const goToPortfolio=()=>{
        goToSection('my-portfolio')
    }

    return(

        <React.Fragment>
            <div className="intro-section" id='intro'>
                <Socials/>
                <IntroContentSection>
                    <Intro onClick={goToPortfolio}/>
                </IntroContentSection>
                <Version/>
            </div>
        </React.Fragment>
    )
}
export default IntroSection;
import React from "react";
import './intro.css';
import { faArrowDown, faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { goToSection } from "../utils/util";

let StickyLeftSection=()=>{

    return(
        <div className="left-sticky-panel">  
        </div>
    )
}

let StickyRightSection=()=>{

    return(
        <div className="right-sticky-panel">
        </div>
    )
}

let Socials=()=>{

    return(

        <React.Fragment>
            <div className="socials">
                <li><Link to={`https://medium.com/@okemwawes`} className="social" target="blank">Medium</Link></li>
                <li><Link to={`https://z-p15.www.instagram.com/w_es.le_y/`} className="social" target="blank">Instagram</Link></li>
                <li><Link to={`https://web.facebook.com/wes.wesley.794`} className="social" target="blank">Facebook</Link></li>
            </div>
        </React.Fragment>
    )
}

let MyName=({onClick})=>{

    return(

        <React.Fragment>
            <div className="dev-name">
                <div>Hi <span>👋</span>, I am </div>
                <p>
                    <span className="last-name"><span>O</span>kemwa</span> <span className="first-name"><span>W</span>esley<span>.</span></span>
                </p>

                <div className="divider">
                </div>

                <Socials/>

                <div className="cta-btn">
                    <button type="button" className="contact-btn" onClick={onClick}>CONTACT ME</button>
                </div>
            </div>
        </React.Fragment>
    )
}

let MyDescription=({onClick})=>{

    return(

        <React.Fragment>
            <div className="description">
                <p className="intro-header">
                    INTRODUCTION
                </p>
                <p>
                    UI/UX Designer, <br/>
                    Full-Stack Web Developer
                </p>

                <p>
                    Lorem ipsum dolor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupida non proident, sunt in culpa qui officia
                </p>

                <div className="learn-more" onClick={onClick}>
                        <span><p className="learn-more-text">Learn more  <span className="learn-more-icon"><FontAwesomeIcon icon={faArrowDown}/></span></p> </span>   
                </div>

                <div className="carousel-counter">
                    <i>
                        <FontAwesomeIcon icon={faArrowLeftLong} />
                    </i>
                    <span>1</span>
                    <i>
                        <FontAwesomeIcon icon={faArrowRightLong} />
                    </i>
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

let IntroSection=()=>{

    const goTocontacts=()=>{
        goToSection('contact-me');
    }

    const goToServices=()=>{
        goToSection('my-services');
    }

    return(

        <React.Fragment>
            <div className="intro-section">
                <StickyLeftSection/>
                <IntroContentSection>
                    <MyName onClick={goTocontacts}  />
                    <MyDescription onClick={goToServices} />
                </IntroContentSection>
                <StickyRightSection/>
            </div>
        </React.Fragment>
    )
}
export default IntroSection;
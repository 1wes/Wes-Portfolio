import React from "react";
import './intro.css';
import { faArrowDown, faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { goToSection } from "../utils/section";
import {FaGithub, FaLinkedin, FaTwitter, FaInstagramSquare} from 'react-icons/fa';

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
        </React.Fragment>
    )
}

let Intro=()=>{

    return(
        <React.Fragment>
            <div className="intro">
                <p className="greeting">Hello 👋, I am </p>

                <p className="name">Okemwa Wesley<span>.</span></p>

                <p className="punchline">
                   I build awesome <span>web-based</span> applications.
                </p>

                <p className="tagline">
                    I am a Full-Stack software engineer who enjoys building web applications that 
                    contribute to excellent digital experiences for users. 
                </p>

                <div className="cta-btn">
                    <button>
                        View My Work
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

// let MyName=({onClick})=>{

//     return(

//         <React.Fragment>
//             <div className="dev-name">
//                 <div>Hi <span>👋</span>, I am </div>
//                 <p>
//                     <span className="last-name"><span>O</span>kemwa</span> <span className="first-name"><span>W</span>esley<span>.</span></span>
//                 </p>

//                 <div className="divider">
//                 </div>

//                 <Socials/>

//                 <div className="cta-btn">
//                     <button type="button" className="contact-btn" onClick={onClick}>CONTACT ME</button>
//                 </div>
//             </div>
//         </React.Fragment>
//     )
// }

// let MyDescription=({onClick})=>{

//     return(

//         <React.Fragment>
//             <div className="description">
//                 <p className="intro-header">
//                     GET TO KNOW ME
//                 </p>
//                 <p>
//                     UI/UX Designer, <br/>
//                     Full-Stack Web Developer
//                 </p>

//                 <p>
//                     I passionately code beautiful, yet simple software to create lasting digital experiences. At the core of this passion, is a keen adherence to 
//                     industry-accepted user experience guidelines.
//                 </p>

//                 <div className="learn-more" onClick={onClick}>
//                         <span><p className="learn-more-text">Learn more  <span className="learn-more-icon"><FontAwesomeIcon icon={faArrowDown}/></span></p> </span>   
//                 </div>

//                 <div className="carousel-counter">
//                     <i>
//                         <FontAwesomeIcon icon={faArrowLeftLong} />
//                     </i>
//                     <span>1</span>
//                     <i>
//                         <FontAwesomeIcon icon={faArrowRightLong} />
//                     </i>
//                 </div>
//             </div>
//         </React.Fragment>
//     )
// }

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

    // const goTocontacts=()=>{
    //     goToSection('contact-me');
    // }

    // const goToServices=()=>{
    //     goToSection('my-services');
    // }

    return(

        <React.Fragment>
            <div className="intro-section">
                <Socials/>
                <IntroContentSection>
                    <Intro/>
                </IntroContentSection>
            </div>
        </React.Fragment>
    )
}
export default IntroSection;
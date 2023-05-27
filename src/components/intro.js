import React from "react";
import './intro.css';

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
                <li>Medium</li>
                <li>Instagram</li>
                <li>Facebook</li>
            </div>
        </React.Fragment>
    )
}

let MyName=()=>{

    return(

        <React.Fragment>
            <div className="dev-name">
                <p>
                    <span className="last-name"><span>O</span>kemwa</span> <span className="first-name"><span>W</span>esley<span>.</span></span>
                </p>

                <div className="divider">
                </div>

                <Socials/>

                <div className="cta-btn">
                    <button type="button" className="contact-btn">CONTACT ME</button>
                </div>
            </div>
        </React.Fragment>
    )
}

let MyDescription=()=>{

    return(

        <React.Fragment>
            <div className="description">
                Description
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

    return(

        <React.Fragment>
            <div className="intro-section">
                <StickyLeftSection/>
                <IntroContentSection>
                    <MyName/>
                    <MyDescription/>
                </IntroContentSection>
                <StickyRightSection/>
            </div>
        </React.Fragment>
    )
}
export default IntroSection;
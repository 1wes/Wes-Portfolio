import React from "react";
import './contact.css';
import { CardSection } from "./services";
import { CardRow } from "./portfolio";
import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsTelephoneFill } from "react-icons/bs";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { GoChevronUp } from "react-icons/go";

let ContactDescription=()=>{

    return(
        <>
        <div className="contact-description">
            <p className="contact-header">CONTACT ME</p>
        </div>
        <div className="contact-punchline">
            Get In Touch With Me
        </div>
        <div className="contact-detail">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
        fugiat nulla pariatur. Excepteur sint occaecat cupida non proident, sunt in culpa qui officia
        </div>
        </>
    )
}

let ContactCard=({contactIcon, contact, address})=>{

    return(
        <>
        <div className="contact-card">
            <i>
                {contactIcon}
            </i>

            <div className="contact-info">
                <Link to={contact} className="address" target="blank">
                    {address}
                </Link>
            </div>

        </div>
        </>
    )
}

let GoUp=({onClick})=>{

    return(

        <>
        <div className="go-up-btn">
            <button type="button" onClick={onClick}>
                <i><GoChevronUp/></i>
            </button>
        </div>
        </>
    )
}

let Contact=()=>{

    const scrollToTop=()=>{
        window.scrollTo({top:0, left:0, behavior:"smooth"});
    }

    return(
        <React.Fragment>
            <div className="contact-section" id="contact-me">
                <div className="contact-content">
                    <ContactDescription/>
                    <CardSection id={`contact-card-section`}>
                        <CardRow>
                            <ContactCard contactIcon={<MdMail/>} contact={`mailto:okemwawes@gmail.com`} address={`okemwawes@gmail.com`} />
                            <ContactCard contactIcon={<BsTelephoneFill/>} contact={`tel:+254 7 03 239124`} address={`+254 7 03 239124`} />
                            <ContactCard contactIcon={<FaTwitter/>} contact={`https://twitter.com/okemwa_wes`} address={`@okemwa_wes`} />
                        </CardRow>
                        <CardRow>
                            <ContactCard contactIcon={<FaLinkedinIn/>} contact={`https://www.linkedin.com/in/okemwa-wes/`} address={`okemwa-wesley`} />
                            <ContactCard contactIcon={<FaInstagramSquare/>} contact={`https://z-p15.www.instagram.com/w_es.le_y/`} address={`@w_es.le_y`} />
                            <ContactCard contactIcon={<FaFacebookSquare/>} contact={`https://web.facebook.com/wes.wesley.794`} address={`okemwa wes`}/>
                        </CardRow>
                    </CardSection>
                </div>
                <GoUp onClick={scrollToTop} />
            </div>
        </React.Fragment>
    )
}
export default Contact;
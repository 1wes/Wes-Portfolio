import React from "react";
import './contact.css';
import { CardSection } from "./services";
import { CardRow } from "./portfolio";
import { Link } from "react-router-dom";
import { BsTelephoneFill } from "react-icons/bs";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { GoChevronUp } from "react-icons/go";
import { SectionHeader } from "./services";
import { FormLabel, TextField } from "@mui/material";

let ContactDescription=()=>{

    const header=`CONTACT ME`;
    const tagline=`Feel free to reach out to me by filling and submitting the form below and I will get back to you as soon as possible`;

    return(
        <>
        <SectionHeader header={header} tagline={tagline} />
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

let ContactForm=()=>{

    return(
        <React.Fragment>
            <div className="contact-form-section">
                <form className="contact-form">
                    <label className="form-label">
                        Name
                    </label>
                    <div className="input-field">
                        <input type="text" placeholder="Enter your name"/>
                    </div>
                    
                    <label className="form-label">
                        Email
                    </label>
                    <div className="input-field">
                        <input type="email" placeholder="Enter your email" />
                    </div>

                    <label className="form-label">
                       Message
                    </label>
                    <div className="input-field">
                        <textarea autoComplete="off" placeholder="Enter your message"/>
                    </div>
                    <div className="cta-btn" id="contact-form-cta">
                        <button type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </React.Fragment>
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
                    <ContactForm/>
                    <CardSection id={`contact-card-section`}>
                        <CardRow>
                            <ContactCard contactIcon={<BsTelephoneFill/>} contact={`tel:+254 7 03 239124`} address={`+254 7 03 239124`} />
                            <ContactCard contactIcon={<FaTwitter/>} contact={`https://twitter.com/okemwa_wes`} address={`@okemwa_wes`} />
                            <ContactCard contactIcon={<FaLinkedinIn/>} contact={`https://www.linkedin.com/in/okemwa-wes/`} address={`okemwa-wesley`} />
                        </CardRow>
                        <CardRow>
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
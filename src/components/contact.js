import React from "react";
import './contact.css';
import { CardSection } from "./services";
import { CardRow } from "./portfolio";
import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom";

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
            <Link to={contact} className="contact-info" target="blank">
                {address}
            </Link>
        </div>
        </>
    )
}

let Contact=()=>{

    return(
        <React.Fragment>
            <div className="contact-section">
                <div className="contact-content">
                    <ContactDescription/>
                    <CardSection id={`contact-card-section`}>
                        <CardRow>
                            <ContactCard contactIcon={<MdMail/>} contact={`mailto:okemwawes@gmail.com`} address={`okemwawes@gmail.com`} />
                            {/* <ContactCard/> */}
                            {/* <ContactCard/> */}
                        </CardRow>
                        <CardRow>
                            {/* <ContactCard/> */}
                            {/* <ContactCard/> */}
                            {/* <ContactCard/> */}
                        </CardRow>
                    </CardSection>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Contact;
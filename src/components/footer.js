import React from "react";
import './footer.css';
import { FaRegCopyright } from "react-icons/fa";
import { LogoImage } from "./navbar";

let Footer=()=>{

    return(

        <React.Fragment>
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-image">
                        <LogoImage/>
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
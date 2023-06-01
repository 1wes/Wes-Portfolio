import React from "react";
import './footer.css';
import { FaRegCopyright } from "react-icons/fa";

let Footer=()=>{

    return(

        <React.Fragment>
            <div className="footer">
                <div className="footer-content">
                <i><FaRegCopyright/></i>
                <span> Wes</span>
                <span>{new Date().getFullYear()}</span>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Footer;
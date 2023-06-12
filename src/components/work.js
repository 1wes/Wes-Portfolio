import React, { useEffect, useState} from "react";
import './work.css';
import { SectionHeader } from "./services";

let ExperienceLayout=({showHealthIT, showSavannah})=>{

    return(
        <>
        <div className="exp-layout">
            <CompanyList showHealthIT={showHealthIT} showSavannah={showSavannah}/>
            <Responsibility/>
        </div>
        </>
    )
}

let CompanyList=({showHealthIT, showSavannah})=>{

    return(

        <React.Fragment>
            <div className="company-list">
                <ul>
                    <li className="company-name" id="healthIT" onClick={showHealthIT} >UNES HealthIT</li>
                    <li className="company-name" id="savannah" onClick={showSavannah}>Savannah Informatics</li>
                </ul>
            </div>
        </React.Fragment>
    )
}

let Responsibility=()=>{

    return(

        <React.Fragment>
            <div className="duties">
                Am the duties
            </div>
        </React.Fragment>
    )
}

let Experience=()=>{

    useEffect(()=>{
        let healthIT=document.getElementById('healthIT');
        setHealthIt(healthIT);
        let savannah=document.getElementById('savannah');
        setSavannah(savannah);
    })

    const [healthIT, setHealthIt]=useState(null);
    const [savannah, setSavannah]=useState(null);

    const showHealthIT=()=>{
        savannah.classList.remove('clicked-company-name');
        healthIT.classList.add('clicked-company-name');
    }

    const showSavannah=()=>{
        healthIT.classList.remove('clicked-company-name');
        savannah.classList.add('clicked-company-name');
    }

    return(
        <React.Fragment>
            <div className="work-section">
                <div className="work-content">
                    <SectionHeader header={`WORK EXPERIENCE`} />
                    <ExperienceLayout showHealthIT={showHealthIT} showSavannah={showSavannah} />
                </div>
            </div>
        </React.Fragment>
    )
}
export default Experience;
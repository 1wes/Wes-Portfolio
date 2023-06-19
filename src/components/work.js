import React, { useEffect, useState} from "react";
import './work.css';
import { SectionHeader } from "./services";
import { TbArrowBigRightLines } from 'react-icons/tb'

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

let Company=({children, position, organization, started, ended})=>{

    return(
        <React.Fragment>
            <div className="company-wrapper">
                <div className="basic-details">
                    <div className="position">
                        <div className="title">{position}</div>
                        <div className="organization"> @{organization}</div>
                    </div>

                    <div className="duration">
                        <span><i>{started}</i></span> - <span><i>{ended}</i></span>
                    </div>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </React.Fragment>
    )
}

let Accomplishment=({children})=>{

    return(
        <React.Fragment>
            <li className="accomplishment-list">
                <i><TbArrowBigRightLines/></i><div className="achievements-text"><p>{children}</p></div>
            </li>
        </React.Fragment>
    )
}

let Responsibility=({children, position, organization, started, ended})=>{

    return(

        <React.Fragment>
            <div className="duties">
                <Company children={children} position={position} organization={organization} started={started} ended={ended} />
            </div>
        </React.Fragment>
    )
}

let ExperienceLayout=({showHealthIT, showSavannah, children, position, organization, started, ended})=>{

    return(
        <>
        <div className="exp-layout">
            <CompanyList showHealthIT={showHealthIT} showSavannah={showSavannah}/>
            <Responsibility children={children} position={position} organization={organization} started={started} ended={ended} />
        </div>
        </>
    )
}


let Experience=()=>{

    const [healthIT, setHealthIt]=useState(null);
    const [savannah, setSavannah]=useState(null);
    const [showHealthIt, setShowHealthIT]=useState(true);

    useEffect(()=>{
        let healthIT=document.getElementById('healthIT');
        setHealthIt(healthIT);
        let savannah=document.getElementById('savannah');
        setSavannah(savannah);

        healthIT.classList.add('initial-active')
    },[]);

    const showHealthIT=()=>{
        setShowHealthIT(true);

        savannah.classList.remove('clicked-company-name');
        healthIT.classList.add('clicked-company-name');
    }

    const showSavannah=()=>{
        setShowHealthIT(false);

        healthIT.classList.remove('initial-active')
        healthIT.classList.remove('clicked-company-name');
        savannah.classList.add('clicked-company-name');
    }

    return(
        <React.Fragment>
            <div className="work-section" id="my-work">
                <div className="work-content">
                    <SectionHeader header={`WORK EXPERIENCE`} />
                    {
                        showHealthIt?<ExperienceLayout showHealthIT={showHealthIT} showSavannah={showSavannah} position={`Intern`} organization={`UNES HealthIT`}
                        started={`May 2022`} ended={`April 2023`}>
                        <Accomplishment>
                            Deployed the KenyaEMR+ system across thirteen facilities spanning five counties which increased automation of health 
                            services significantly.
                        </Accomplishment>
                        <Accomplishment>
                            Contributed to the development of a bill-waiving module for the KenyaEMR+ system over a weekend-long hackathon, which massively improved patient
                            turn-around time.
                        </Accomplishment>
                        <Accomplishment>
                            Facilitated and took part in a health data science hackathon which led to development of production-level models. 
                        </Accomplishment>
                    </ExperienceLayout>:<ExperienceLayout showHealthIT={showHealthIT} showSavannah={showSavannah} position={`Software developer`} organization={`Savannah Informatics`}
                        started={`Feb 2021`} ended={`July 2021`} >
                        <Accomplishment>
                            Built reusable front-end components to be used in developing the company products website using React and Next.js for CMS integration.
                        </Accomplishment>
                    </ExperienceLayout>
                    }

                </div>
            </div>
        </React.Fragment>
    )
}
export default Experience;
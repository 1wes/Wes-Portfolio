import React, { useEffect, useState } from "react";
import axios from '../baseurl';
import Navbar from './navbar';
import Footer from "./footer";
import { useLocation } from "react-router-dom";
import './project.css';
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { MobileNav } from "./navbar";
import useSWR from "swr";

let ProjectDetails=({children, title, src, overview, codebase, site, header})=>{

    return(
        <React.Fragment>
            <div className="page-header">
               Case Study : {header} 
            </div>
            <div className="case-study-wrapper">
                <div className='cs-image'>
                    <img src={src} alt="case-study"/>
                </div>
                <div className="cs-summary">
                    <div className="overview">
                        <h3>{title}</h3>
                        <p className="case-study">
                            {overview}
                        </p>
                    </div>
                    <div className="tech">
                        {children}
                    </div>
                    <div className="links">
                        <Link to={codebase} target="blank">
                            <i>
                                <FaGithub/>
                            </i>
                        </Link>
                        <Link to={site} target="blank">
                            <i>
                                <FiExternalLink/>
                            </i>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

let Project=()=>{

    const pathname=useLocation().pathname;

    const urlParam=pathname.split("/");

    const id=urlParam[2];

    const [isIntersecting, setIsIntersecting]=useState(false);

    const fetcher=url=>axios.get(url).then(res=>res.data);

    const{error, isLoading, data}=useSWR(`https://mail-projectsapi.onrender.com/project/${id}`, fetcher);

    const project=data;

    useEffect(()=>{

        const observer=new IntersectionObserver(([entry])=>{
            setIsIntersecting(entry.isIntersecting)
        }, {rootMargin:"-120px"});

        observer.observe(document.getElementById('case-study'));

        return()=>{
            observer.disconnect();
        }

    },[isIntersecting]);

    useEffect(()=>{
        if(isIntersecting){
            let caseStudy=document.getElementById('case-study');

            caseStudy.querySelectorAll('div').forEach(element=>{
                element.classList.add('slide-sideways')
            })
        }
    },[isIntersecting])

    return(
        <React.Fragment>
            <Navbar/>
            <MobileNav/>

            <div className="project-section" id='case-study'>
                <div className="project-content">
                    {

                        project && <ProjectDetails header={project.name} title={project.name} overview={project.caseStudy} codebase={project.codebase}
                         site={project.livelink} src={`../../src/assets/${project.casestudyImg}.png`}>
                        {                            
                            project.techstack.map(language=>{

                                return (
                                    <div key={language.id}>
                                        {language.name}
                                    </div>
                                )
                            })
                        }
                    </ProjectDetails>
                    }
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}
export default Project;
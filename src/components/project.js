import React, { useEffect, useState } from "react";
import axios from '../baseurl';
import Navbar from './navbar';
import Footer from "./footer";
import { useLocation } from "react-router-dom";
import './project.css';
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";


let ProjectDetails=({children, title, src, overview, codebase, site, header})=>{

    return(
        <React.Fragment>
            <div className="page-header">
               {header} Case Study
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
                        <code>{children}</code>
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

    const[project, setProject]=useState(null);

    useEffect(()=>{

        axios.get(`/project/${id}`).then(res=>{

            const newProject=res.data;

                setProject(newProject);

            }).catch(err=>{
                console.log(err);
        })

    },[id]);

    return(
        <React.Fragment>
            <Navbar/>
            <div className="project-section">
                <div className="project-content">
                    {

                        project!==null?<ProjectDetails header={project.name} title={project.name} overview={project.description} codebase={project.codebase} site={project.livelink} src={require(`../${project.casestudyImg}`)}>
                        {                            
                            project.techstack.map(language=>{

                                return (
                                    <span>
                                        {language}
                                    </span>
                                )
                            })
                        }
                    </ProjectDetails>:console.log("No project found")
                    }
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}
export default Project
import React, { useEffect, useState } from "react";
import axios from '../baseurl';
import Navbar from './navbar';
import Footer from "./footer";
import { useLocation } from "react-router-dom";
import './project.css';
import { TechStackCard } from "./about";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { Tooltip } from "@mui/material";
import { CardRow } from "./portfolio";

let ProjectDetails=({children, title, src, overview, codebase, site})=>{

    return(
        <React.Fragment>
            <div className="project-details-wrapper">
                <div className="project-intro">
                    <h1>{title}</h1>
                </div>
                <div className="project-snippet">
                    <img src={src} alt="project snippet" />
                </div>
                <div className="centered-container">
                    
                    <h1>Summary</h1>

                    <p className="summary-text">
                        {overview}
                    </p>
                    <div className="tech-used">
                        <h2>Technologies used</h2>
                        {children}
                    </div>

                    <div className="link-header">
                        <h2>Demo</h2>
                    </div>
                    <div className="links">
                        <Tooltip title={`Go to codebase`} placement="bottom" arrow>
                            <span>
                                <Link to={codebase}>
                                    <i>
                                        <FaGithub/>
                                    </i>
                                </Link>
                            </span>
                        </Tooltip>
                        <Tooltip title={`Go to site`} placement="bottom" arrow>
                            <span>
                                <Link to={site}>
                                    <i>
                                    <   FiExternalLink/>
                                    </i>
                                </Link>
                        </span>
                        </Tooltip>
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
                        project!==null?<ProjectDetails title={project.name} overview={project.description} codebase={project.codebase} src={require(`../${project.snippet}`)}>
                        {                            
                            project.techstack && project.techstack.map(language=>{

                                return (
                                    <CardRow key={project.id}>
                                        <TechStackCard techname={language}/>
                                    </CardRow>
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
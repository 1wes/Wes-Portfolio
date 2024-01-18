import React, { useState,useEffect } from "react";
import './portfolio.css';
import { CardSection } from "./services";
import { Link } from "react-router-dom";
import axios from "../baseurl";
import { SectionHeader } from "./services";
import useSWR from "swr";

const fetcher=url=>axios.get(url).then(res=>res.data);

let PortfolioDescription=()=>{

    const header=`MY PORTFOLIO`;
    const tagline=`Check out some of the projects that I have worked on over the years.`;

    return(
        <>
        <SectionHeader header={header} tagline={tagline} />
        </>
    )
}

let CardRow=({children, id})=>{

    return(
        <>
        <div className="card-row" id={id}>
            {children}
        </div>
        </>
    )
}

let PortfolioCards=({title, src, description, caseStudyLink})=>{

    return(
        <>
        <div className="portfolio-card">
            <div className="project-image">
                <img src={src} alt="project" />
            </div>
            <div className="project-details">
                <div className="details-wrapper">
                    <div className="project-name">
                        {title}
                    </div>
                    <div className="project-description">
                        {description}
                    </div>
                    <div className="cta-btn">
                        <Link to={caseStudyLink}>
                        <button type='button' >
                            Case Study
                        </button>
                        </Link>
 
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

let Portfolio=()=>{

    const [isIntersecting, setIsIntersecting]=useState(false);

    const {data, error, isLoading}=useSWR(`https://mail-projectsapi.onrender.com/projects`, fetcher, {refreshInterval:10000});

    const projects=data;
    
    useEffect(()=>{

        const observer=new IntersectionObserver(([entry])=>{
            setIsIntersecting(entry.isIntersecting)
        }, {rootMargin:"0px"});

        observer.observe(document.getElementById('my-portfolio'));

        return()=>{
            observer.disconnect();
        }

    },[isIntersecting]);

    useEffect(()=>{
        if(isIntersecting){
            let navbar=document.getElementById('my-portfolio');

            navbar.querySelectorAll('div').forEach(list=>{
                list.classList.add('slide-sideways')
            })
        }
    },[isIntersecting]);

    return(
        <React.Fragment>
            <div className="portfolio-section" id='my-portfolio'>
                <div className="portfolio-content">
                    <PortfolioDescription/>
                    <CardSection id={`portfolio-card-section`}>
                        {
                            isLoading?<CardRow>Loading...</CardRow>:projects.map((project)=>{
                                return(
                                    <CardRow id='projects-section-card' key={project.id}>
                                        <PortfolioCards title={project.name} description={project.description}
                                         src={require(`../${project.casestudyImg}`)} caseStudyLink={`/project/${project.id}`} />
                                    </CardRow>
                                )
                            })
                        }
                    </CardSection>
                </div>
            </div>
        </React.Fragment>
    )
}

export{
    CardRow
}

export default Portfolio;
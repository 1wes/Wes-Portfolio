import React from "react";
import './portfolio.css';
import { CardSection } from "./services";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { BiCodeAlt } from "react-icons/bi";
import { Tooltip } from '@mui/material';
import { SectionHeader } from "./services";

let PortfolioDescription=()=>{

    const header=`MY PORTFOLIO`;
    const tagline=`Check out some of the projects that I have worked on over the years.`;

    return(
        <>
        <SectionHeader header={header} tagline={tagline} />
        </>
    )
}

let CardRow=({children})=>{

    return(
        <>
        <div className="card-row">
            {children}
        </div>
        </>
    )
}

let PortfolioCards=({title, src, description, projectLink})=>{

    return(
        <>
        <div className="portfolio-card">
            <div className="project-image">
                <img src={src} />
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
                        <Link to={projectLink}>
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

    return(

        <React.Fragment>
            <div className="portfolio-section" id='my-portfolio'>
                <div className="portfolio-content">
                    <PortfolioDescription/>
                    <CardSection id={`portfolio-card-section`}>
                        <CardRow>
                            <PortfolioCards />
                            {/* <PortfolioCards src={require('../accuweights.png')} title={`Accuweights`} livelink={`https://www.accuweights.com/`} codebaselink={``}/>
                            <PortfolioCards src={require('../tictactoe.png')} title={`Tic-Tac-Toe`} livelink={`https://1wes.github.io/`} codebaselink={`https://github.com/1wes/1wes.github.io`} />
                            <PortfolioCards src={require('../KABU.png')} title={`Shadow KABU student portal`} livelink={``} codebaselink={`https://github.com/1wes/KABU-shadow-student-portal`}/> */}
                        </CardRow>
                        <CardRow>
                        {/* <PortfolioCards /> */}

                            {/* <PortfolioCards title={`Portfolio`} codebaselink={`https://github.com/1wes/Wes-Portfolio`}/>
                            <PortfolioCards title={`Ziada Lite`} /> */}
                        </CardRow>
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
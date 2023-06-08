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

    const accuweightDescription=`Accuweights is a renowned technical services provider that caters for various industrial requisites such as 
    repair and calibration of measuring equipment. I revamped their website to give it a more modern look and feel.`;

    const KabuDescription=`I fully replicated the Kabarak University student portal. The front-end is entirely similar to the actual portal, while I used 
    the student flow within the system to try and build the backend.`;

    const tictactoeDescription=`I built this popular game to learn and master several advanced React principles. The game has a minimalist look, with plans
    underway to enable online multi-players.`

    return(
        <React.Fragment>
            <div className="portfolio-section" id='my-portfolio'>
                <div className="portfolio-content">
                    <PortfolioDescription/>
                    <CardSection id={`portfolio-card-section`}>
                        <CardRow>
                            <PortfolioCards title={`Accuweights`} src={require('../accuweights.png')} projectLink={``} description={accuweightDescription} />
                        </CardRow>
                        <CardRow>
                            <PortfolioCards title={`Replica KABU Student Portal`} src={require('../kabu.png')} projectLink={``} description={KabuDescription} />
                        </CardRow>
                        <CardRow>
                            <PortfolioCards title={`Tic-Tac-Toe`} src={require('../tictactoe.png')} projectLink={``} description={tictactoeDescription} />
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
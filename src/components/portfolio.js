import React from "react";
import './portfolio.css';
import { CardSection } from "./services";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { BiCodeAlt } from "react-icons/bi";
import { Tooltip } from '@mui/material';

let PortfolioDescription=()=>{

    return(
        <>
        <div className="portfolio-description">
            <p className="portfolio-header">MY PORTFOLIO</p>

            <div className="portfolio-punchline">
                These Are My Works, So Far . . .
            </div>

            <div className="portfolio-details">
                Check out some of the projects that I have worked on over the years. 
            </div>
        </div>
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

let PortfolioCards=({title, src, livelink, codebaselink})=>{

    return(
        <>
        <div className="portfolio-cards">
            <div className="project-title">
                {title}
            </div>
            <div className="portfolio-image">
                <img src={src}/>
            </div>
            <div className="project-details">
                <div className="name">
                    <Link to={livelink} target="blank">
                        <Tooltip title={`Go to the site`} arrow placement="top">
                            <i>
                                <FiExternalLink/>
                            </i>
                        </Tooltip>
                    </Link>
                </div>
                <div className="code">
                    <Link to={codebaselink} target="blank">
                        <Tooltip title={`Go to the codebase`} arrow placement="top">
                            <i>
                                <BiCodeAlt/>
                            </i>
                        </Tooltip>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

let Portfolios=()=>{

    return(

        <React.Fragment>
            <div className="portfolio-section" id='my-portfolio'>
                <div className="portfolio-content">
                    <PortfolioDescription/>
                    <CardSection id={`portfolio-card-section`}>
                        <CardRow>
                            <PortfolioCards src={require('../accuweights.png')} title={`Accuweights`} livelink={`https://www.accuweights.com/`} codebaselink={``}/>
                            <PortfolioCards src={require('../tictactoe.png')} title={`Tic-Tac-Toe`} livelink={`https://1wes.github.io/`} codebaselink={`https://github.com/1wes/1wes.github.io`} />
                            <PortfolioCards src={require('../KABU.png')} title={`Shadow KABU student portal`} livelink={``} codebaselink={`https://github.com/1wes/KABU-shadow-student-portal`}/>
                        </CardRow>
                        <CardRow>
                            <PortfolioCards title={`Portfolio`} codebaselink={`https://github.com/1wes/Wes-Portfolio`}/>
                            <PortfolioCards title={`Ziada Lite`} />
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

export default Portfolios;
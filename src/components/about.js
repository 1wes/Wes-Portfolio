import React from "react";
import { SectionHeader } from "./services";
import './about.css';

let AboutDescription=()=>{

    const header=`ABOUT ME`;

    return(

        <React.Fragment>
            <SectionHeader header={header}/>
        </React.Fragment>
    )
}

let Biography=()=>{

    return(
        <React.Fragment>
            <div className="biography">
                <p>
                    Hello, my name is Okemwa Wesley and I love building for the <strong>web</strong>. Currently, I do more of <strong>front-end web development</strong>, though am 
                    also <strong>comfortable</strong> building <strong>full-stack</strong> web applications. <br/> <br/> I have been actively developing software since <strong>2019</strong>
                    , racking up over <strong>3 years of experience</strong>. You can check out some of the projects I have worked on in the <strong>Portfolio Section </strong>
                    and more on my <strong>GitHub</strong> profile. Since I coded my first lines, I have had the privilege of working at <span>UNES HealthIT</span> and <span> Savannah Informatics</span>
                    . <br/> <br/> I am currently <strong>open to job opportunities</strong> where I look to make meaningful contributions and grow. Check out my <strong>Resume</strong> for more
                    details. Additionally, if interested to work with me, dont hesitate to <strong>contact me</strong>.

                </p>
            </div>
        </React.Fragment>
    )
}

let Techstack=()=>{

    return(
        <React.Fragment>
            <div>

            </div>
        </React.Fragment>
    )
}

let AboutLayout=({Biography, Techstack})=>{

    return(
        <>
        <div className="about-layout">
            <div className="text">
                {Biography}
            </div>
            <div className="my-tech">
                {Techstack}
            </div>
        </div>
        </>
    )
}

let AboutMe=()=>{

    return(
        <React.Fragment>
            <div className="about-section">
                <div className="about-content">
                    <AboutDescription/>
                    <AboutLayout Biography={<Biography/>} Techstack={<Techstack/>}  />
                </div>
            </div>
        </React.Fragment>
    )
}
export default AboutMe;
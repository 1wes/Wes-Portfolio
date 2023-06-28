import React , { useState, useEffect } from "react";
import { SectionHeader } from "./services";
import './about.css';
import { CardRow } from "./portfolio";
import { CardSection } from "./services";

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
            <div className="tech-stack">
                <p>
                    Here are some of the technologies I commonly use to accomplish my work:
                </p>
                <CardSection id={`abt-card-section`}>
                    <CardRow id='abt-row1'>
                        <TechStackCard techname={`React.js`} />
                        <TechStackCard techname={`Node.js`} />
                        <TechStackCard techname={`Express.js`} />
                        <TechStackCard techname={`MySQL`} />
                    </CardRow>
                    <CardRow id='abt-row2'>
                        <TechStackCard techname={`MongoDB`} />
                        <TechStackCard techname={`GitHub`} />
                        <TechStackCard techname={`HTML/CSS`} />
                        <TechStackCard techname={`Material UI`} />
                    </CardRow>
                </CardSection>
            </div>
        </React.Fragment>
    )
}

let TechStackCard=({techname})=>{

    return(
        <React.Fragment>
            <div className="tech-card">
                <div className="tech-name">
                    <strong>{techname}</strong>
                </div>
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

    const [isIntersecting, setIsIntersecting]=useState(false)

    useEffect(()=>{

        const observer=new IntersectionObserver(([entry])=>{
            setIsIntersecting(entry.isIntersecting)
        }, {rootMargin:"0px"});

        observer.observe(document.getElementById('about-me'));
        console.log(isIntersecting)

        return()=>{
            observer.disconnect();
        }

    },[isIntersecting]);

    useEffect(()=>{
        if(isIntersecting){
            let aboutMe=document.getElementById('about-me');

            aboutMe.querySelectorAll('div').forEach(element=>{
                element.classList.add('slide-sideways')
            })
        }
    },[isIntersecting])

    return(
        <React.Fragment>
            <div className="about-section" id="about-me">
                <div className="about-content">
                    <AboutDescription/>
                    <AboutLayout Biography={<Biography/>} Techstack={<Techstack/>}  />
                </div>
            </div>
        </React.Fragment>
    )
}
export{
    TechStackCard
}
export default AboutMe;
import React from 'react';
import './services.css';
import { FiPenTool } from 'react-icons/fi';
import { GoCode } from 'react-icons/go';
import { FaDesktop } from 'react-icons/fa';
import { BsGraphUpArrow } from 'react-icons/bs';

let ServicesDescription=()=>{

    return(
        <React.Fragment>
            <div className='services-description'>
                <p className='services-header'>SERVICES</p>

                <div className='services-punchline'>
                    What I Am Great At
                </div>

                <div className='services-detail'>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupida non proident, sunt in culpa qui officia
                </div>
            </div> 
        </React.Fragment>
    )
}

let GenericCard=({icon, title, number})=>{

    return(

        <React.Fragment>
            <div className='card'>
                <i>
                    {icon}
                </i>
                <div className='card-title'>
                    {title}
                </div>
                <div>
                    {number} projects
                </div>
            </div>
        </React.Fragment>
    )
}

let Numbers=({number, description})=>{

    return(
        <React.Fragment>
            <div className='numbers'>
                <div className='figure'>
                    {number}
                </div>
                <div className='figure-description'>
                    {description}
                </div>
            </div>
        </React.Fragment>
    )
}

let Analytics=({children})=>{

    return(

        <React.Fragment>
            <div className='analytics-section'>
                {children}
            </div>
        </React.Fragment>
    )
}

let CardSection=({children})=>{

    return(

        <React.Fragment>
            <div className='card-section'>
                {children}
            </div>
        </React.Fragment>
    )
}


let ServicesSection=()=>{

    return(

        <React.Fragment>
            <div className='services-section'>
                <div className='services-content'>
                    <ServicesDescription/>
                    <CardSection>
                        <GenericCard icon={<FiPenTool/>} title={`UI/UX Design`} number={3}/>
                        <GenericCard icon={<GoCode/>} title={`Web Applications`} number={6} />
                        <GenericCard icon={<FaDesktop/>} title={`Desktop Applications`} number={2} />
                        <GenericCard icon={<BsGraphUpArrow/>} title={`S.E.O`} number={4} />
                    </CardSection>
                    <Analytics>
                        <Numbers number={`4 +`} description={`Years of Experience`} />
                        <Numbers number={`10 +`} description={`Satisfied Customers`} />
                        <Numbers number={`8 +`} description={`Projects Completed`} />
                        <Numbers number={`10 +`} description={`Clients Served`} />
                    </Analytics>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ServicesSection;
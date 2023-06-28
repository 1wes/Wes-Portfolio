import  React, { useEffect, useRef, useState } from 'react';
import './services.css';
import { FiPenTool } from 'react-icons/fi';
import { GoCode } from 'react-icons/go';
import { FaDesktop } from 'react-icons/fa';
import { BsGraphUpArrow } from 'react-icons/bs';

let SectionHeader=({header, tagline})=>{

    return(
        <React.Fragment>
            <div className='services-description'>
                <p className='services-header'> {header}</p>

                <div className='header-divider'>
                </div>

                <div className='services-detail'>
                    {tagline}
                </div>
            </div> 
        </React.Fragment>
    )
}

let ServicesDescription=()=>{

    const header=`SERVICES`;

    return(

        <React.Fragment>
            <SectionHeader header={header}/>
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
                    {number} project (s)
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
                    <span className='analytics-figure'>{number}</span> +
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

let CardSection=({children, id})=>{

    return(

        <React.Fragment>
            <div className='card-section' id={id}>
                {children}
            </div>
        </React.Fragment>
    )
}

let ServicesSection=()=>{

    let [years, setYears]=useState(0);
    let [customers, setCustomers]=useState(0);
    let [projects, setProjects]=useState(0);
    let [clients, setClients]=useState(0);
    let [status, setStatus]=useState(false);
    let intervalId=useRef();
    const [isIntersecting, setIsIntersecting]=useState(false)

    useEffect(()=>{

        const observer=new IntersectionObserver(([entry])=>{
            setIsIntersecting(entry.isIntersecting)
        }, {rootMargin:"0px"});

        observer.observe(document.getElementById('my-services'));

        return()=>{
            observer.disconnect();
        }

    },[isIntersecting]);

    useEffect(()=>{
        if(isIntersecting){
            let navbar=document.getElementById('my-services');

            navbar.querySelectorAll('div').forEach(list=>{
                list.classList.add('slide-up')
            })
        }
    },[isIntersecting])

    useEffect(()=>{

        if(status){

            for(years; years<3; years++){
                intervalId.current=setInterval(() => {
                    setYears(years=>(years+1));
                }, 50);

                return ()=>{
                    clearInterval(intervalId.current)
                }
            }

            for(customers; customers<100; customers++){
                intervalId.current=setInterval(() => {
                    setCustomers(customers=>(customers+1));
                }, 10);

                return ()=>{
                    clearInterval(intervalId.current)
                }
            }

            for(projects; projects<10; projects++){
                intervalId.current=setInterval(() => {
                    setProjects(projects=>(projects+1));
                }, 50);

                return ()=>{
                    clearInterval(intervalId.current)
                }
            }

            for(clients; clients<5; clients++){
                intervalId.current=setInterval(() => {
                    setClients(clients=>(clients+1));
                }, 50);

                return ()=>{
                    clearInterval(intervalId.current)
                }
            }
        }

    },[status, years, customers, projects, clients]);
    
    const changeStatus=()=>{

        setStatus(true);
    }

    const stopCounter=()=>{

        setStatus(false);

        clearInterval(intervalId.current);

        setYears(0);
        setProjects(0);
        setCustomers(0);
        setClients(0);
    }

    return(

        <React.Fragment>
            <div className='services-section' onMouseEnter={changeStatus} onMouseLeave={stopCounter} id='my-services'>
                <div className='services-content'>
                    <ServicesDescription/>
                    <CardSection>
                        <GenericCard icon={<FiPenTool/>} title={`UI/UX Design`} number={2}/>
                        <GenericCard icon={<GoCode/>} title={`Web Applications`} number={6} />
                        <GenericCard icon={<FaDesktop/>} title={`Desktop Applications`} number={2} />
                        <GenericCard icon={<BsGraphUpArrow/>} title={`S.E.O`} number={1} />
                    </CardSection>
                    <Analytics changeStatus={changeStatus} stopCounter={stopCounter}>
                        <Numbers number={years} description={`Years of Experience`} />
                        <Numbers number={customers} description={`Satisfied Customers`} />
                        <Numbers number={projects} description={`Projects Completed`} />
                        <Numbers number={clients} description={`Clients Served`} />
                    </Analytics>
                </div>
            </div>
        </React.Fragment>
    )
}

export{
    CardSection,
    SectionHeader
}

export default ServicesSection;


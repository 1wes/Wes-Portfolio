import React, { useEffect } from "react";
import axios from '../baseurl'

let Project=()=>{

    useEffect(()=>{
        axios.get('/projects/').then(res=>{
            // alert(JSON.stringify(res.data))
        }).catch(err=>{
            console.log(err)
        })
    },[]);

    return(
        <React.Fragment>
            Am the Projects Page
        </React.Fragment>
    )
}
export default Project
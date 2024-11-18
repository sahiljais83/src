import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function Error() {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/")
        },3000)
    },[])

    return(
        // Error message on screen
        <div style={{textAlign:"center"}}>
            <h1>Error, Something went wrong !!!</h1>
            <br/>
            <p>Redirecting back to homepage... </p>
        </div>

    )
}

export default Error;

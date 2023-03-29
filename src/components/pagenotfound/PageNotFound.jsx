import React from 'react';
import './pagenotfound.css'
import { Link } from "react-router-dom";
  
const PageNotFound= () =>{
    return(
        <header>
                <h1>404 Error</h1>
                <h3>Page Not Found</h3>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <h4>It's okay. Every explorer gets lost at times...</h4>
                <br></br>
                <Link to='/'>Take Me Home</Link>
        </header>
     
    )
}
  
export default PageNotFound;
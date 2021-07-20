import React from "react";
import {   useAuth0  } from "@auth0/auth0-react";
import "./loginButton.css"

const LoginButton =() =>{
    const {loginWithRedirect} = useAuth0();

    return(
        <div  className="login">
             <p className="text">Please Click to Login</p>
            <div    className="loginWrapper">   
               
             <button  className="loginButton" onClick = {() => loginWithRedirect()}>
            Log in
        </button>
        </div>

        </div>
        
    )
}

export default LoginButton
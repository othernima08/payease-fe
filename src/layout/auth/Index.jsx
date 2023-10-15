import React from 'react'
import "./auth.css";
import { Navigate } from 'react-router';
const LayoutAuth = ({ children }) => {
    const isLoggedIn = localStorage.length !== 0 
    && localStorage.getItem("id") !== undefined 
    && localStorage.getItem("token") !== undefined
    && localStorage.getItem("verified") !== "null" 
    && localStorage.getItem("verified") !== "false"
    && localStorage.getItem("verified") !== undefined
    return (
        <React.Fragment>
            {!isLoggedIn ?
                <div className="contain">
                    {children}
                </div> : <Navigate to="/home" />
            }
        </React.Fragment>
    )
}

export default LayoutAuth
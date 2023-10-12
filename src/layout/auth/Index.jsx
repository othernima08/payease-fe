import React from 'react'
import "./auth.css";
import { Navigate } from 'react-router';
const LayoutAuth = ({ children }) => {
    const isLoggedIn = localStorage.getItem("id") !== undefined && localStorage.getItem("token") !== undefined

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
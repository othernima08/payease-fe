import React from 'react'
import "./right.css";

const RightLayoutAuth = ({ children }) => {
    return (
        <div className="right d-flex ">
            <div className="right-outer">
                <div className="form-container d-flex flex-column align-items-center justify-content-center">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default RightLayoutAuth
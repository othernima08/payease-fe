import React from 'react'
import "./right.css";

const RightLayoutAuth = ({ children }) => {
    return (
        <div className="right d-flex justify-content-center">
            <div className="right-outer">
                <div className="form-container">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default RightLayoutAuth
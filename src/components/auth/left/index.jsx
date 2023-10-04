import React from 'react'
import "./left.css";
const LeftLayoutAuth = () => {
    return (
        <div className="left ">
            <div className="d-flex flex-column  w-75">
                <h3 className='white-text'>PayEase</h3>
            </div>
            <div className="image">
                <img src="/src/assets/login-image/phone.png" alt="" />
            </div>
            <div className="d-flex flex-column  w-75">
                <h5 className='white-text'>Apps that covering banking needs</h5>
                <p className='white-text'>PayEase is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in PayEase everyday with worldwide users coverage.</p>
            </div>
        </div>
    )
}

export default LeftLayoutAuth
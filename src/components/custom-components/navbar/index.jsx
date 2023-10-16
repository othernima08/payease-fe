import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from "prop-types";

import { Navbar, Container, Button } from 'react-bootstrap';

import { BsBell } from "react-icons/bs";

import './navbar.css'
import blankPict from '../../../assets/images/blank.jpg';
import NotificationModal from '../../../modal/popupNotification/Index';
// import NotificationModal from '../../../modal/popupNotification/Index'; -- ini di after login layout aja na

import { useEffect } from 'react';

function CustomNavbar(props) {
    const navigate = useNavigate();
    const [showNotif, setShowNotif] = useState(false);

    const handleCloseNotif = () => setShowNotif(false);
    const handleShowNotif = () => setShowNotif(true);

    const { user } = props;

return (
    <Navbar className="navbar-container">
        <Container>
            <Navbar.Brand onClick={() => navigate("/home")} id="logo">PayEase</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end" onClick={() => navigate("/profile")}>
                <figure className='profile-container' style={{ margin: 0}}>
                    <img src={user?.sharedUrl === null ? blankPict : user.sharedUrl} alt="profile-pict" className='profile-picture' />
                </figure>
                <section className="profile-text">
                    <p className="fullName">
                        {`${user.firstName} ${user.lastName}` }
                    </p>
                    { 
                        user.phoneNumber !== null && 
                        <p className="phoneNumber">
                            {user.phoneNumber}
                        </p>
                    }
                </section>
                <p className="icon" onClick={handleShowNotif}><BsBell /></p>
            </Navbar.Collapse>
        </Container>
        {showNotif && <NotificationModal showNotif={showNotif} handleCloseNotif={handleCloseNotif} />}
    </Navbar>
);
}

CustomNavbar.propTypes = {
    user: PropTypes.object
}

export default CustomNavbar;
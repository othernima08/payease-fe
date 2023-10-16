import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from "prop-types";
import { useMediaQuery } from 'react-responsive';

import { Navbar, Container } from 'react-bootstrap';

import { BsBell } from "react-icons/bs";

import './navbar.css'
import blankPict from '../../../assets/images/blank.jpg';
import NotificationModal from '../../../modal/popupNotification/Index';

function CustomNavbar(props) {
    const navigate = useNavigate();

    const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

    const [showNotif, setShowNotif] = useState(false);

    const handleShowNotif = () => {
        if (isDesktop) {
            setShowNotif(true); // Show the notification on desktop
        } else {
            navigate("/home/notification") // Navigate to "/notification" on mobile
        }
    };

    const handleCloseNotif = () => setShowNotif(false);

    const { user } = props;

    return (
        <Navbar className="navbar-container">
            <Container>
                <Navbar.Brand onClick={() => navigate("/home")} id="logo">PayEase</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <figure className='profile-container' style={{ margin: 0 ,
                  
                    }}>
                        <img src={user?.sharedUrl === null ? blankPict : user.sharedUrl}
                     
                        className='image-profile-test' />
                    </figure>
                    <section className="profile-text">
                        <p className="fullName">
                            {`${user.firstName} ${user.lastName}`}
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